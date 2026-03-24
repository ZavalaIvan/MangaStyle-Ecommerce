import { NextResponse } from "next/server";

import {
  confirmPrintfulOrder,
  getPrintfulOrderByExternalId,
} from "../../../../lib/printful";
import {
  getMercadoPagoPayment,
  validateMercadoPagoWebhookSignature,
} from "../../../../lib/mercadoPago";

async function confirmOrderIfDraft(orderId: string) {
  const printfulOrder = await getPrintfulOrderByExternalId(orderId);
  const currentStatus = String(
    printfulOrder?.result?.status || printfulOrder?.status || ""
  ).toLowerCase();

  if (currentStatus === "draft") {
    await confirmPrintfulOrder(orderId);
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const dataId = String(
      payload?.data?.id ||
        payload?.resource?.id ||
        new URL(request.url).searchParams.get("data.id") ||
        ""
    );
    const type = String(payload?.type || payload?.topic || "").toLowerCase();

    if (!dataId) {
      return NextResponse.json(
        { ok: false, error: "Webhook sin data.id" },
        { status: 400 }
      );
    }

    if (!validateMercadoPagoWebhookSignature({ request, dataId })) {
      return NextResponse.json(
        { ok: false, error: "Firma invalida de Mercado Pago" },
        { status: 401 }
      );
    }

    if (type && type !== "payment") {
      return NextResponse.json({
        ok: true,
        ignored: true,
        type,
      });
    }

    const payment = await getMercadoPagoPayment(dataId);
    const status = String(payment?.status || "").toLowerCase();
    const orderId =
      String(payment?.external_reference || "") ||
      String(payment?.metadata?.orderId || "");

    if (!orderId) {
      return NextResponse.json(
        { ok: false, error: "Pago sin external_reference" },
        { status: 400 }
      );
    }

    if (status !== "approved") {
      return NextResponse.json({
        ok: true,
        ignored: true,
        status,
      });
    }

    await confirmOrderIfDraft(orderId);

    return NextResponse.json({
      ok: true,
      confirmed: true,
      status,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "Error al procesar webhook de Mercado Pago",
      },
      { status: 400 }
    );
  }
}
