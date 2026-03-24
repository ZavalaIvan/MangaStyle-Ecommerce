import { NextResponse } from "next/server";

import {
  dlocalGetPaymentStatus,
  validateDlocalNotificationSignature,
} from "../../../../lib/dlocal";
import {
  confirmPrintfulOrder,
  getPrintfulOrderByExternalId,
} from "../../../../lib/printful";

function getPaymentId(payload: any) {
  return payload?.id || payload?.payment_id || payload?.paymentId || null;
}

export async function POST(request: Request) {
  const rawBody = await request.text();

  try {
    if (!validateDlocalNotificationSignature(request.headers, rawBody)) {
      return NextResponse.json(
        { ok: false, error: "Firma invalida de dLocal" },
        { status: 401 }
      );
    }

    const payload = rawBody ? JSON.parse(rawBody) : {};
    const paymentId = getPaymentId(payload);
    const reportedStatus = String(payload?.status || "").toUpperCase();

    if (!paymentId) {
      return NextResponse.json(
        { ok: false, error: "Webhook sin paymentId" },
        { status: 400 }
      );
    }

    const paymentStatus = await dlocalGetPaymentStatus(String(paymentId));
    const orderId =
      paymentStatus?.order_id || paymentStatus?.orderId || payload?.order_id || null;
    const finalStatus = String(
      paymentStatus?.status || reportedStatus || ""
    ).toUpperCase();

    if (!orderId) {
      return NextResponse.json(
        { ok: false, error: "No se pudo resolver el orderId desde dLocal Go" },
        { status: 400 }
      );
    }

    if (finalStatus !== "PAID" && finalStatus !== "APPROVED") {
      return NextResponse.json({
        ok: true,
        ignored: true,
        status: finalStatus,
      });
    }

    const printfulOrder = await getPrintfulOrderByExternalId(String(orderId));
    const currentStatus = String(
      printfulOrder?.result?.status || printfulOrder?.status || ""
    ).toLowerCase();

    if (currentStatus === "draft") {
      await confirmPrintfulOrder(String(orderId));
    }

    return NextResponse.json({
      ok: true,
      confirmed: true,
      status: finalStatus,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "Error al procesar webhook de dLocal",
      },
      { status: 500 }
    );
  }
}
