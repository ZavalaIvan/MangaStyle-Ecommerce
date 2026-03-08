import crypto from "node:crypto";

import { NextResponse } from "next/server";

import { dlocalFetch } from "../../../../lib/dlocal";
import { createPrintfulDraftOrder } from "../../../../lib/printful";

type CheckoutItem = {
  name?: string;
  price?: string;
  quantity?: number;
  syncVariantId?: number | null;
};

function required(value: string | undefined, label: string) {
  if (!value?.trim()) {
    throw new Error(`Falta ${label}`);
  }

  return value.trim();
}

function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

function getNotificationUrl() {
  return process.env.DLOCAL_GO_NOTIFICATION_URL || `${getBaseUrl()}/api/webhooks/dlocal`;
}

function getCallbackUrl() {
  return process.env.DLOCAL_GO_CALLBACK_URL || `${getBaseUrl()}/api/checkout/dlocal/callback`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const cartItems = (body?.cartItems || []) as CheckoutItem[];

    if (!cartItems.length) {
      return NextResponse.json(
        { ok: false, error: "El carrito esta vacio" },
        { status: 400 }
      );
    }

    const invalidItem = cartItems.find((item) => !item.syncVariantId);

    if (invalidItem) {
      return NextResponse.json(
        {
          ok: false,
          error: "Uno de los productos no tiene sync_variant_id para crear la orden",
        },
        { status: 400 }
      );
    }

    const email = required(body?.customer?.email, "email");
    const fullName = required(body?.customer?.fullName, "nombre completo");
    const address1 = required(body?.shipping?.address1, "direccion");
    const city = required(body?.shipping?.city, "ciudad");
    const stateCode = required(body?.shipping?.stateCode, "estado");
    const zip = required(body?.shipping?.zip, "codigo postal");
    const countryCode = required(body?.shipping?.countryCode, "pais");

    const subtotal = cartItems.reduce((total, item) => {
      return total + Number.parseFloat(item.price || "0") * (item.quantity || 1);
    }, 0);

    const currency =
      body?.payment?.currency ||
      process.env.DLOCAL_GO_CURRENCY ||
      "MXN";
    const country =
      body?.payment?.country ||
      process.env.DLOCAL_GO_COUNTRY ||
      countryCode;

    const externalId = `ms-${Date.now()}-${crypto.randomUUID().slice(0, 8)}`;

    await createPrintfulDraftOrder({
      external_id: externalId,
      recipient: {
        name: fullName,
        email,
        phone: body?.customer?.phone || undefined,
        address1,
        address2: body?.shipping?.address2 || undefined,
        city,
        state_code: stateCode,
        country_code: countryCode,
        zip,
      },
      items: cartItems.map((item) => ({
        sync_variant_id: item.syncVariantId,
        quantity: item.quantity || 1,
      })),
    });

    const paymentPayload: Record<string, unknown> = {
      amount: Number(subtotal.toFixed(2)),
      currency,
      country,
      payment_method_flow: "REDIRECT",
      order_id: externalId,
      description: `MangaStyle order ${externalId}`,
      callback_url: getCallbackUrl(),
      notification_url: getNotificationUrl(),
      payer: {
        name: fullName,
        email,
        document: body?.customer?.document || undefined,
      },
    };

    if (process.env.DLOCAL_GO_PAYMENT_METHOD_ID) {
      paymentPayload.payment_method_id = process.env.DLOCAL_GO_PAYMENT_METHOD_ID;
    }

    if (body?.customer?.phone) {
      paymentPayload.payer = {
        ...(paymentPayload.payer as Record<string, unknown>),
        phone: body.customer.phone,
      };
    }

    if (body?.payment?.deviceId) {
      paymentPayload.device_id = body.payment.deviceId;
    }

    const dlocalResponse = await dlocalFetch<{
      id?: string;
      redirect_url?: string;
      payment_url?: string;
      status?: string;
    }>("/payments", paymentPayload);

    const checkoutUrl =
      dlocalResponse.redirect_url || dlocalResponse.payment_url || null;

    if (!checkoutUrl) {
      throw new Error("dLocal no devolvio una URL de checkout");
    }

    return NextResponse.json({
      ok: true,
      checkoutUrl,
      orderId: externalId,
      paymentId: dlocalResponse.id || null,
      status: dlocalResponse.status || null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "No se pudo iniciar el checkout",
      },
      { status: 500 }
    );
  }
}
