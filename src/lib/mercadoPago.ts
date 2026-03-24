import crypto from "node:crypto";

const MERCADO_PAGO_API_URL =
  process.env.MERCADO_PAGO_API_URL || "https://api.mercadopago.com";
const MERCADO_PAGO_ACCESS_TOKEN = process.env.MERCADO_PAGO_ACCESS_TOKEN;
const MERCADO_PAGO_WEBHOOK_SECRET = process.env.MERCADO_PAGO_WEBHOOK_SECRET;

function getMercadoPagoAccessToken() {
  if (!MERCADO_PAGO_ACCESS_TOKEN) {
    throw new Error("MERCADO_PAGO_ACCESS_TOKEN no esta configurado");
  }

  return MERCADO_PAGO_ACCESS_TOKEN;
}

export async function mercadoPagoFetch<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${MERCADO_PAGO_API_URL}${endpoint}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${getMercadoPagoAccessToken()}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    const causeDescription = Array.isArray(data?.cause)
      ? data.cause
          .map((cause: any) => cause?.description || cause?.code || "")
          .filter(Boolean)
          .join(", ")
      : "";

    throw new Error(
      data?.message ||
        data?.error ||
        causeDescription ||
        `Error Mercado Pago: ${response.status}`
    );
  }

  return data as T;
}

export async function createMercadoPagoPreference(
  payload: Record<string, unknown>,
  idempotencyKey: string
) {
  return mercadoPagoFetch<{
    id?: string;
    init_point?: string;
    sandbox_init_point?: string;
  }>("/checkout/preferences", {
    method: "POST",
    headers: {
      "X-Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify(payload),
  });
}

export async function getMercadoPagoPayment(paymentId: string) {
  return mercadoPagoFetch<{
    id?: number | string;
    status?: string;
    external_reference?: string;
    metadata?: Record<string, unknown>;
  }>(`/v1/payments/${paymentId}`, {
    method: "GET",
  });
}

function parseSignatureHeader(headerValue: string | null) {
  const parts = new Map<string, string>();

  if (!headerValue) {
    return parts;
  }

  for (const chunk of headerValue.split(",")) {
    const [key, value] = chunk.split("=");
    if (key && value) {
      parts.set(key.trim(), value.trim());
    }
  }

  return parts;
}

export function validateMercadoPagoWebhookSignature(params: {
  request: Request;
  dataId: string;
}) {
  if (!MERCADO_PAGO_WEBHOOK_SECRET) {
    throw new Error("MERCADO_PAGO_WEBHOOK_SECRET no esta configurado");
  }

  const signatureParts = parseSignatureHeader(
    params.request.headers.get("x-signature")
  );
  const ts = signatureParts.get("ts") || "";
  const v1 = signatureParts.get("v1") || "";
  const requestId = params.request.headers.get("x-request-id") || "";
  const dataId =
    params.request.url
      ? new URL(params.request.url).searchParams.get("data.id") || params.dataId
      : params.dataId;

  if (!ts || !v1 || !requestId || !dataId) {
    return false;
  }

  const manifest = `id:${String(dataId).toLowerCase()};request-id:${requestId};ts:${ts};`;
  const expected = crypto
    .createHmac("sha256", MERCADO_PAGO_WEBHOOK_SECRET)
    .update(manifest)
    .digest("hex");

  return expected === v1;
}
