const PRINTFUL_API_BASE =
  process.env.PRINTFUL_API_BASE || "https://api.printful.com";

const PRINTFUL_API_KEY = process.env.PRINTFUL_API_KEY;

export type PrintfulVariant = {
  id: number | null;
  variant_id: number | null;
  name: string | null;
  sku: string | null;
  retail_price: string | null;
  currency: string | null;
  color: string | null;
  size: string | null;
  availability_status: string | null;
  image: string | null;
  files: Array<{
    id: number | null;
    type: string | null;
    preview_url: string | null;
    url: string | null;
    filename: string | null;
  }>;
};

export type PrintfulProduct = {
  id: number | null;
  external_id: string | null;
  name: string | null;
  thumbnail_url: string | null;
  is_ignored: boolean;
  variants_count: number;
  variants: PrintfulVariant[];
  price: string | null;
  currency: string | null;
  colors: string[];
  sizes: string[];
  availability_status: string | null;
  in_stock: boolean;
};

function getVariantImage(variant: any) {
  const files = Array.isArray(variant?.files) ? variant.files : [];

  const previewFile =
    files.find((file) => file?.type === "preview" && file?.preview_url) ||
    files.find((file) => file?.preview_url);

  return (
    previewFile?.preview_url ||
    variant?.sync_variant?.product?.image ||
    variant?.sync_variant?.image ||
    variant?.image ||
    null
  );
}

function getVariantColor(variant: any) {
  return (
    variant?.sync_variant?.color ||
    variant?.sync_variant?.color_name ||
    variant?.color ||
    null
  );
}

function getVariantSize(variant: any) {
  return variant?.sync_variant?.size || variant?.size || null;
}

function isInStockStatus(status: string | null) {
  if (!status) {
    return true;
  }

  const normalized = status.toLowerCase();

  if (
    normalized.includes("out") ||
    normalized.includes("discontinued") ||
    normalized.includes("unavailable")
  ) {
    return false;
  }

  return true;
}

function getLowestPrice(variants: PrintfulVariant[]) {
  const prices = variants
    .map((variant) => {
      const parsed = Number.parseFloat(variant.retail_price || "");
      return Number.isFinite(parsed) ? parsed : null;
    })
    .filter((price): price is number => price !== null);

  if (prices.length === 0) {
    return null;
  }

  return Math.min(...prices).toFixed(2);
}

function uniqueValues(values: Array<string | null>) {
  return [...new Set(values.filter(Boolean))] as string[];
}

export function normalizePrintfulVariant(variant: any): PrintfulVariant {
  const syncVariant = variant?.sync_variant ?? {};
  const files = Array.isArray(variant?.files) ? variant.files : [];

  return {
    id: variant?.id ?? null,
    variant_id: variant?.variant_id ?? syncVariant?.id ?? null,
    name: syncVariant?.name || variant?.name || null,
    sku: syncVariant?.sku || variant?.sku || null,
    retail_price: variant?.retail_price || syncVariant?.retail_price || null,
    currency: variant?.currency || syncVariant?.currency || "USD",
    color: getVariantColor(variant),
    size: getVariantSize(variant),
    availability_status: syncVariant?.availability_status || null,
    image: getVariantImage(variant),
    files: files.map((file) => ({
      id: file?.id ?? null,
      type: file?.type ?? null,
      preview_url: file?.preview_url ?? null,
      url: file?.url ?? null,
      filename: file?.filename ?? null,
    })),
  };
}

export function normalizePrintfulProduct(payload: any): PrintfulProduct {
  const raw = payload?.result ?? payload;
  const syncProduct = raw?.sync_product ?? raw ?? {};
  const rawVariants = Array.isArray(raw?.sync_variants)
    ? raw.sync_variants
    : Array.isArray(raw?.variants)
      ? raw.variants
      : [];

  const variants = rawVariants.map(normalizePrintfulVariant);
  const colors = uniqueValues(variants.map((variant) => variant.color));
  const sizes = uniqueValues(variants.map((variant) => variant.size));
  const price = getLowestPrice(variants);
  const firstVariantWithImage = variants.find((variant) => variant.image);
  const firstVariantWithStatus = variants.find(
    (variant) => variant.availability_status
  );

  return {
    id: syncProduct?.id ?? raw?.id ?? null,
    external_id: syncProduct?.external_id ?? raw?.external_id ?? null,
    name: syncProduct?.name ?? raw?.name ?? null,
    thumbnail_url:
      syncProduct?.thumbnail_url ||
      raw?.thumbnail_url ||
      firstVariantWithImage?.image ||
      null,
    is_ignored: Boolean(syncProduct?.is_ignored ?? raw?.is_ignored ?? false),
    variants_count: variants.length,
    variants,
    price,
    currency: variants[0]?.currency || "USD",
    colors,
    sizes,
    availability_status: firstVariantWithStatus?.availability_status || null,
    in_stock:
      variants.length === 0
        ? true
        : variants.some((variant) =>
            isInStockStatus(variant.availability_status)
          ),
  };
}

export async function printfulFetch<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  if (!PRINTFUL_API_KEY) {
    throw new Error("PRINTFUL_API_KEY no esta configurada");
  }

  const response = await fetch(`${PRINTFUL_API_BASE}${endpoint}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${PRINTFUL_API_KEY}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.error?.message ||
        data?.result ||
        data?.message ||
        `Error Printful: ${response.status}`
    );
  }

  return data as T;
}

export async function createPrintfulDraftOrder(order: {
  external_id: string;
  recipient: Record<string, unknown>;
  items: Array<Record<string, unknown>>;
}) {
  return printfulFetch("/orders", {
    method: "POST",
    body: JSON.stringify({
      external_id: order.external_id,
      recipient: order.recipient,
      items: order.items,
      confirm: false,
    }),
  });
}

export async function getPrintfulOrderByExternalId(externalId: string) {
  return printfulFetch(`/orders/@${encodeURIComponent(externalId)}`);
}

export async function confirmPrintfulOrder(externalId: string) {
  return printfulFetch(`/orders/@${encodeURIComponent(externalId)}?confirm=true`, {
    method: "POST",
    body: JSON.stringify({}),
  });
}
