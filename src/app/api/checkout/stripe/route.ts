import { NextResponse } from "next/server";
import Stripe from "stripe";

import { getBaseUrl, prepareCheckoutOrder } from "../../../../lib/checkout";
import { getStripe } from "../../../../lib/stripe";

function toMinorUnits(amount: number) {
  return Math.round(amount * 100);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      cartItems,
      subtotal,
      externalId,
      customer: { email, fullName, phone },
      shipping: { address1, address2, city, stateCode, zip, countryCode },
    } = await prepareCheckoutOrder(body);

    if (subtotal <= 0) {
      throw new Error("El total del carrito debe ser mayor a cero");
    }

    const currency = String(
      body?.payment?.currency || process.env.DLOCAL_GO_CURRENCY || "MXN"
    ).toLowerCase();
    const stripe = getStripe();
    const baseUrl = getBaseUrl();
    const successUrl = `${baseUrl}/checkout/resultado?provider=stripe&status=success&session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${baseUrl}/checkout/resultado?provider=stripe&status=cancelled&orderId=${encodeURIComponent(externalId)}`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email: email,
      payment_method_types: ["card"],
      metadata: {
        provider: "stripe",
        orderId: externalId,
      },
      line_items: cartItems.map((item) => ({
        quantity: item.quantity || 1,
        price_data: {
          currency,
          unit_amount: toMinorUnits(Number.parseFloat(item.price || "0")),
          product_data: {
            name: item.name || "Producto MangaStyle",
            metadata: {
              syncVariantId: String(item.syncVariantId || ""),
            },
          },
        },
      })),
      shipping_address_collection: {
        allowed_countries: [countryCode as Stripe.Checkout.SessionCreateParams.ShippingAddressCollection.AllowedCountry],
      },
      payment_intent_data: {
        metadata: {
          provider: "stripe",
          orderId: externalId,
        },
        receipt_email: email,
      },
      customer_creation: "always",
      phone_number_collection: {
        enabled: !phone,
      },
      custom_text: {
        submit: {
          message: `Pedido ${externalId}`,
        },
      },
    });

    await stripe.checkout.sessions.update(session.id, {
      metadata: {
        provider: "stripe",
        orderId: externalId,
        customerName: fullName,
        address1,
        address2,
        city,
        stateCode,
        zip,
        countryCode,
      },
    });

    if (!session.url) {
      throw new Error("Stripe no devolvio una URL de checkout");
    }

    return NextResponse.json({
      ok: true,
      checkoutUrl: session.url,
      orderId: externalId,
      sessionId: session.id,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "No se pudo iniciar el checkout con Stripe",
      },
      { status: 500 }
    );
  }
}
