import crypto from "node:crypto";

const DLOCAL_GO_API_URL =
  process.env.DLOCAL_GO_API_URL || "https://sandbox.dlocal.com";
const DLOCAL_GO_X_LOGIN = process.env.DLOCAL_GO_X_LOGIN;
const DLOCAL_GO_X_TRANS_KEY = process.env.DLOCAL_GO_X_TRANS_KEY;
const DLOCAL_GO_SECRET_KEY = process.env.DLOCAL_GO_SECRET_KEY;

const DLOCAL_API_VERSION = "2.1";
const DLOCAL_USER_AGENT = "MangaStyle / 1.0";

function getDlocalRequiredEnv() {
  if (!DLOCAL_GO_X_LOGIN || !DLOCAL_GO_X_TRANS_KEY || !DLOCAL_GO_SECRET_KEY) {
    throw new Error(
      "Faltan DLOCAL_GO_X_LOGIN, DLOCAL_GO_X_TRANS_KEY o DLOCAL_GO_SECRET_KEY"
    );
  }

  return {
    login: DLOCAL_GO_X_LOGIN,
    transKey: DLOCAL_GO_X_TRANS_KEY,
    secretKey: DLOCAL_GO_SECRET_KEY,
  };
}

function signPayload(login: string, date: string, payload: string) {
  return crypto
    .createHmac("sha256", getDlocalRequiredEnv().secretKey)
    .update(`${login}${date}${payload}`)
    .digest("hex");
}

function extractSignature(headerValue: string | null) {
  if (!headerValue) {
    return "";
  }

  const match = headerValue.match(/Signature:\s*([A-Fa-f0-9]+)/);
  return match?.[1]?.toLowerCase() || headerValue.toLowerCase();
}

export async function dlocalFetch<T = any>(
  endpoint: string,
  payload: Record<string, unknown>
): Promise<T> {
  const { login, transKey } = getDlocalRequiredEnv();
  const date = new Date().toISOString();
  const body = JSON.stringify(payload);
  const signature = signPayload(login, date, body);

  const response = await fetch(`${DLOCAL_GO_API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Date": date,
      "X-Login": login,
      "X-Trans-Key": transKey,
      "X-Version": DLOCAL_API_VERSION,
      "User-Agent": DLOCAL_USER_AGENT,
      Authorization: `V2-HMAC-SHA256, Signature: ${signature}`,
    },
    body,
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.message ||
        data?.status_detail ||
        data?.error ||
        `Error dLocal: ${response.status}`
    );
  }

  return data as T;
}

export async function dlocalGetPaymentStatus(paymentId: string) {
  const { login, transKey } = getDlocalRequiredEnv();
  const date = new Date().toISOString();
  const signature = signPayload(login, date, "");

  const response = await fetch(`${DLOCAL_GO_API_URL}/payments/${paymentId}/status`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Date": date,
      "X-Login": login,
      "X-Trans-Key": transKey,
      "X-Version": DLOCAL_API_VERSION,
      "User-Agent": DLOCAL_USER_AGENT,
      Authorization: `V2-HMAC-SHA256, Signature: ${signature}`,
    },
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.message ||
        data?.status_detail ||
        data?.error ||
        `Error dLocal: ${response.status}`
    );
  }

  return data;
}

export function validateDlocalNotificationSignature(headers: Headers, body: string) {
  const login = DLOCAL_GO_X_LOGIN || "";
  const date = headers.get("x-date") || headers.get("X-Date") || "";
  const providedSignature = extractSignature(
    headers.get("authorization") || headers.get("Authorization")
  );

  if (!login || !date || !providedSignature) {
    return false;
  }

  const expected = signPayload(login, date, body);
  return expected === providedSignature;
}

export function validateDlocalCallbackSignature(params: {
  date: string;
  paymentId: string;
  status: string;
  signature: string;
}) {
  const login = DLOCAL_GO_X_LOGIN || "";

  if (!login || !params.date || !params.paymentId || !params.signature) {
    return false;
  }

  const payload = `{status:${params.status},paymentId:${params.paymentId}}`;
  const expected = signPayload(login, params.date, payload);

  return expected === params.signature.toLowerCase();
}
