import { NextResponse } from "next/server";

import { getBaseUrl, prepareCheckoutOrder } from "../../../../lib/checkout";
import { createMercadoPagoPreference } from "../../../../lib/mercadoPago";

function getNotificationUrl() {
  return (
    process.env.MERCADO_PAGO_NOTIFICATION_URL ||
    `${getBaseUrl()}/api/webhooks/mercadopago`
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      cartItems,
      subtotal,
      externalId,
      customer: { email, fullName },
      shipping: { countryCode },
    } = await prepareCheckoutOrder(body);

    if (subtotal <= 0) {
      throw new Error("El total del carrito debe ser mayor a cero");
    }

    const baseUrl = getBaseUrl();
    const currency = String(
      body?.payment?.currency || process.env.DLOCAL_GO_CURRENCY || "MXN"
    ).toUpperCase();

    const preference = await createMercadoPagoPreference(
      {
        items: cartItems.map((item) => ({
          id: String(item.syncVariantId || item.name || "item"),
          title: item.name || "Producto MangaStyle",
          quantity: item.quantity || 1,
          currency_id: currency,
          unit_price: Number(Number.parseFloat(item.price || "0").toFixed(2)),
        })),
        payer: {
          name: fullName,
          email,
        },
        external_reference: externalId,
        metadata: {
          provider: "mercadopago",
          orderId: externalId,
          customerName: fullName,
          countryCode,
        },
        back_urls: {
          success: `${baseUrl}/checkout/resultado?provider=mercadopago&status=success&orderId=${encodeURIComponent(externalId)}`,
          failure: `${baseUrl}/checkout/resultado?provider=mercadopago&status=cancelled&orderId=${encodeURIComponent(externalId)}`,
          pending: `${baseUrl}/checkout/resultado?provider=mercadopago&status=pending&orderId=${encodeURIComponent(externalId)}`,
        },
        auto_return: "approved",
        notification_url: getNotificationUrl(),
      },
      externalId
    );

    const checkoutUrl = preference.init_point || preference.sandbox_init_point || null;

    if (!checkoutUrl) {
      throw new Error("Mercado Pago no devolvio una URL de checkout");
    }

    return NextResponse.json({
      ok: true,
      checkoutUrl,
      orderId: externalId,
      preferenceId: preference.id || null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "No se pudo iniciar el checkout con Mercado Pago",
      },
      { status: 500 }
    );
  }
}
