import crypto from "node:crypto";

const DLOCAL_GO_ENVIRONMENT = String(
  process.env.DLOCAL_GO_ENVIRONMENT || process.env.DLOCAL_GO_ENV || "sandbox"
).toLowerCase();
const DLOCAL_GO_API_URL =
  process.env.DLOCAL_GO_API_URL ||
  (DLOCAL_GO_ENVIRONMENT === "production"
    ? "https://api.dlocalgo.com"
    : "https://api-sbx.dlocalgo.com");
const DLOCAL_GO_API_KEY =
  process.env.DLOCAL_GO_API_KEY || process.env.DLOCAL_GO_X_LOGIN;
const DLOCAL_GO_SECRET_KEY = process.env.DLOCAL_GO_SECRET_KEY;

const DLOCAL_USER_AGENT = "MangaStyle / 1.0";

function getDlocalRequiredEnv() {
  if (!DLOCAL_GO_API_KEY || !DLOCAL_GO_SECRET_KEY) {
    throw new Error(
      "Faltan DLOCAL_GO_API_KEY y/o DLOCAL_GO_SECRET_KEY para dLocal Go"
    );
  }

  return {
    apiKey: DLOCAL_GO_API_KEY,
    secretKey: DLOCAL_GO_SECRET_KEY,
  };
}

function buildAuthorizationHeader() {
  const { apiKey, secretKey } = getDlocalRequiredEnv();
  return `Bearer ${apiKey}:${secretKey}`;
}

function signNotificationPayload(apiKey: string, payload: string) {
  return crypto
    .createHmac("sha256", getDlocalRequiredEnv().secretKey)
    .update(`${apiKey}${payload}`)
    .digest("hex");
}

function extractSignature(headerValue: string | null) {
  if (!headerValue) {
    return "";
  }

  const match = headerValue.match(/Signature:\s*([A-Fa-f0-9]+)/);
  return match?.[1]?.toLowerCase() || headerValue.toLowerCase();
}

async function parseDlocalResponse(response: Response) {
  const rawText = await response.text();
  const contentType = response.headers.get("content-type") || "";
  const looksJson =
    contentType.includes("application/json") ||
    rawText.trim().startsWith("{") ||
    rawText.trim().startsWith("[");

  if (!looksJson) {
    const preview = rawText.replace(/\s+/g, " ").trim().slice(0, 160);
    throw new Error(
      `dLocal Go devolvio una respuesta no JSON (${response.status}). ${preview || "Sin contenido"}`
    );
  }

  try {
    return rawText ? JSON.parse(rawText) : {};
  } catch {
    const preview = rawText.replace(/\s+/g, " ").trim().slice(0, 160);
    throw new Error(
      `dLocal Go devolvio JSON invalido (${response.status}). ${preview || "Sin contenido"}`
    );
  }
}

export async function dlocalFetch<T = any>(
  endpoint: string,
  payload: Record<string, unknown>
): Promise<T> {
  const body = JSON.stringify(payload);

  const response = await fetch(`${DLOCAL_GO_API_URL}/v1${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": DLOCAL_USER_AGENT,
      Authorization: buildAuthorizationHeader(),
    },
    body,
    cache: "no-store",
  });

  const data = await parseDlocalResponse(response);

  if (!response.ok) {
    throw new Error(
      data?.message ||
        data?.detail ||
        data?.status_detail ||
        data?.error ||
        `Error dLocal: ${response.status}`
    );
  }

  return data as T;
}

export async function dlocalGetPaymentStatus(paymentId: string) {
  const response = await fetch(`${DLOCAL_GO_API_URL}/v1/payments/${paymentId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": DLOCAL_USER_AGENT,
      Authorization: buildAuthorizationHeader(),
    },
    cache: "no-store",
  });

  const data = await parseDlocalResponse(response);

  if (!response.ok) {
    throw new Error(
      data?.message ||
        data?.detail ||
        data?.status_detail ||
        data?.error ||
        `Error dLocal: ${response.status}`
    );
  }

  return data;
}

export function validateDlocalNotificationSignature(headers: Headers, body: string) {
  const apiKey = DLOCAL_GO_API_KEY || "";
  const providedSignature = extractSignature(
    headers.get("authorization") || headers.get("Authorization")
  );

  if (!apiKey || !providedSignature) {
    return false;
  }

  const expected = signNotificationPayload(apiKey, body);
  return expected === providedSignature;
}

export function validateDlocalCallbackSignature(params: {
  date: string;
  paymentId: string;
  status: string;
  signature: string;
}) {
  const apiKey = DLOCAL_GO_API_KEY || "";

  if (!apiKey || !params.paymentId || !params.signature) {
    return false;
  }

  const payload = JSON.stringify({
    payment_id: params.paymentId,
    status: params.status,
  });
  const expected = signNotificationPayload(apiKey, payload);

  return expected === params.signature.toLowerCase();
}
