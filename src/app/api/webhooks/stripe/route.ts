import { NextResponse } from "next/server";
import Stripe from "stripe";

import {
  confirmPrintfulOrder,
  getPrintfulOrderByExternalId,
} from "../../../../lib/printful";
import { getStripe } from "../../../../lib/stripe";

function getWebhookSecret() {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    throw new Error("STRIPE_WEBHOOK_SECRET no esta configurada");
  }

  return webhookSecret;
}

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
  const rawBody = await request.text();

  try {
    const stripe = getStripe();
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
      return NextResponse.json(
        { ok: false, error: "Falta stripe-signature" },
        { status: 400 }
      );
    }

    const event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      getWebhookSecret()
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const orderId = String(session.metadata?.orderId || "");

      if (!orderId) {
        return NextResponse.json(
          { ok: false, error: "checkout.session.completed sin orderId" },
          { status: 400 }
        );
      }

      await confirmOrderIfDraft(orderId);
    }

    if (event.type === "checkout.session.async_payment_succeeded") {
      const session = event.data.object as Stripe.Checkout.Session;
      const orderId = String(session.metadata?.orderId || "");

      if (orderId) {
        await confirmOrderIfDraft(orderId);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "Error al procesar webhook de Stripe",
      },
      { status: 400 }
    );
  }
}
