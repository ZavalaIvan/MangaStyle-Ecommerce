import { NextResponse } from "next/server";

import { validateDlocalCallbackSignature } from "../../../../../lib/dlocal";

function redirectToResult(request: Request, params: URLSearchParams) {
  const url = new URL("/checkout/resultado", request.url);

  for (const [key, value] of params.entries()) {
    url.searchParams.set(key, value);
  }

  return NextResponse.redirect(url, { status: 303 });
}

export async function GET(request: Request) {
  const incoming = new URL(request.url);
  return redirectToResult(request, incoming.searchParams);
}

export async function POST(request: Request) {
  const form = await request.formData();
  const status = String(form.get("status") || "");
  const paymentId = String(form.get("paymentId") || form.get("payment_id") || "");
  const date = String(form.get("x_date") || form.get("date") || "");
  const signature = String(
    form.get("signature") || form.get("x_signature") || ""
  );

  const params = new URLSearchParams();
  params.set("status", status || "UNKNOWN");
  params.set("paymentId", paymentId);

  if (
    date &&
    paymentId &&
    signature &&
    validateDlocalCallbackSignature({
      date,
      paymentId,
      status,
      signature,
    })
  ) {
    params.set("verified", "true");
  } else {
    params.set("verified", "false");
  }

  return redirectToResult(request, params);
}
