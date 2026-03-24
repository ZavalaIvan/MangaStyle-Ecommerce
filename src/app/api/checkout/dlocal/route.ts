import { NextResponse } from "next/server";

import { getBaseUrl, getRequestIp, prepareCheckoutOrder } from "../../../../lib/checkout";
import { dlocalFetch } from "../../../../lib/dlocal";
import {
  getAllowedRedirectPaymentMethods,
  parseDlocalPaymentMethodEnv,
} from "../../../../lib/dlocalPaymentMethods";


function getNotificationUrl() {
  return process.env.DLOCAL_GO_NOTIFICATION_URL || `${getBaseUrl()}/api/webhooks/dlocal`;
}

function getSuccessUrl(externalId: string) {
  return (
    process.env.DLOCAL_GO_SUCCESS_URL ||
    process.env.DLOCAL_GO_CALLBACK_URL ||
    `${getBaseUrl()}/checkout/resultado?provider=dlocal&status=success&verified=false&orderId=${encodeURIComponent(externalId)}`
  );
}

function getBackUrl(externalId: string) {
  return (
    process.env.DLOCAL_GO_BACK_URL ||
    `${getBaseUrl()}/checkout/resultado?provider=dlocal&status=cancelled&verified=false&orderId=${encodeURIComponent(externalId)}`
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const checkoutOrder = await prepareCheckoutOrder(body);
    const {
      cartItems,
      subtotal,
      externalId,
      customer: { email, fullName, phone, document },
      shipping: { address1, address2, city, stateCode, zip, countryCode },
    } = checkoutOrder;

    const currency =
      body?.payment?.currency ||
      process.env.DLOCAL_GO_CURRENCY ||
      "MXN";
    const country =
      body?.payment?.country ||
      process.env.DLOCAL_GO_COUNTRY ||
      countryCode;
    const selectedPaymentMethodId = String(body?.payment?.paymentMethodId || "")
      .trim()
      .toUpperCase();
    const configuredPaymentMethodIds = parseDlocalPaymentMethodEnv(
      process.env.DLOCAL_GO_PAYMENT_METHOD_ID
    );
    const redirectPaymentMethods = getAllowedRedirectPaymentMethods(country);
    const availablePaymentMethodIds =
      configuredPaymentMethodIds.length > 0
        ? redirectPaymentMethods
            .filter((method) => configuredPaymentMethodIds.includes(method.id))
            .map((method) => method.id)
        : redirectPaymentMethods.map((method) => method.id);

    if (country === "MX" && !document) {
      throw new Error("Falta documento del pagador (CURP o RFC) para pagos en MX");
    }

    if (
      selectedPaymentMethodId &&
      availablePaymentMethodIds.length > 0 &&
      !availablePaymentMethodIds.includes(selectedPaymentMethodId)
    ) {
      throw new Error("El metodo de pago seleccionado no esta habilitado");
    }

    const paymentPayload: Record<string, unknown> = {
      amount: Number(subtotal.toFixed(2)),
      currency,
      country,
      payment_method_flow: "REDIRECT",
      order_id: externalId,
      description: `MangaStyle order ${externalId}`,
      success_url: getSuccessUrl(externalId),
      back_url: getBackUrl(externalId),
      notification_url: getNotificationUrl(),
      payer: {
        name: fullName,
        email,
        document: document || undefined,
        address: {
          country: countryCode,
          state: stateCode,
          city,
          zip_code: zip,
          street: address1,
        },
        ip: getRequestIp(request) || undefined,
        user_reference: email,
      },
    };

    if (selectedPaymentMethodId) {
      paymentPayload.payment_method_id = selectedPaymentMethodId;
    }

    if (phone) {
      paymentPayload.payer = {
        ...(paymentPayload.payer as Record<string, unknown>),
        phone,
      };
    }

    if (body?.payment?.deviceId) {
      paymentPayload.payer = {
        ...(paymentPayload.payer as Record<string, unknown>),
        device_id: body.payment.deviceId,
      };
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
