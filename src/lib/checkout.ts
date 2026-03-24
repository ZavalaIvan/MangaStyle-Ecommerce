import crypto from "node:crypto";

import { createPrintfulDraftOrder } from "./printful";

type CheckoutItem = {
  name?: string;
  price?: string;
  quantity?: number;
  syncVariantId?: number | null;
};

type CheckoutBody = {
  cartItems?: CheckoutItem[];
  customer?: {
    fullName?: string;
    email?: string;
    phone?: string;
    document?: string;
  };
  shipping?: {
    address1?: string;
    address2?: string;
    city?: string;
    stateCode?: string;
    zip?: string;
    countryCode?: string;
  };
  payment?: {
    country?: string;
    currency?: string;
    paymentMethodId?: string;
    deviceId?: string;
  };
};

function required(value: string | undefined, label: string) {
  if (!value?.trim()) {
    throw new Error(`Falta ${label}`);
  }

  return value.trim();
}

export function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

export function getRequestIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "";
  }

  return request.headers.get("x-real-ip") || "";
}

export async function prepareCheckoutOrder(body: CheckoutBody) {
  const cartItems = (body?.cartItems || []) as CheckoutItem[];

  if (!cartItems.length) {
    throw new Error("El carrito esta vacio");
  }

  const invalidItem = cartItems.find((item) => !item.syncVariantId);

  if (invalidItem) {
    throw new Error(
      "Uno de los productos no tiene sync_variant_id para crear la orden"
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

  return {
    body,
    cartItems,
    subtotal,
    externalId,
    customer: {
      email,
      fullName,
      phone: body?.customer?.phone || "",
      document: String(body?.customer?.document || "").trim(),
    },
    shipping: {
      address1,
      address2: body?.shipping?.address2 || "",
      city,
      stateCode,
      zip,
      countryCode,
    },
  };
}
