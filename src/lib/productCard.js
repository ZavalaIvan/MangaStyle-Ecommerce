const CATEGORY_RULES = [
  { key: "hoodies", label: "Sudaderas", keywords: ["hoodie", "sudadera"] },
  {
    key: "sweatshirts",
    label: "Crewnecks",
    keywords: ["sweatshirt", "crewneck"],
  },
  {
    key: "long-sleeves",
    label: "Manga larga",
    keywords: ["long sleeve", "longsleeve"],
  },
  { key: "crops", label: "Crop tops", keywords: ["crop"] },
  { key: "tanks", label: "Tanks", keywords: ["tank"] },
  { key: "totes", label: "Totes", keywords: ["tote", "bag"] },
  { key: "accessories", label: "Accesorios", keywords: ["mug", "poster", "sticker"] },
  {
    key: "tees",
    label: "Playeras",
    keywords: ["tee", "t-shirt", "shirt", "camiseta", "playera"],
  },
];

const SIZE_ORDER = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];

export function sortSizes(sizes) {
  return [...sizes].sort((a, b) => {
    const indexA = SIZE_ORDER.indexOf(a);
    const indexB = SIZE_ORDER.indexOf(b);

    if (indexA === -1 && indexB === -1) {
      return a.localeCompare(b);
    }

    if (indexA === -1) {
      return 1;
    }

    if (indexB === -1) {
      return -1;
    }

    return indexA - indexB;
  });
}

export function parsePrice(value) {
  const parsed = Number.parseFloat(value || "");
  return Number.isFinite(parsed) ? parsed : 0;
}

function detectCategory(product) {
  const searchSpace = [
    product?.name || "",
    ...(product?.variants || []).map((variant) => variant?.name || ""),
  ]
    .join(" ")
    .toLowerCase();

  return (
    CATEGORY_RULES.find((rule) =>
      rule.keywords.some((keyword) => searchSpace.includes(keyword))
    ) || CATEGORY_RULES[CATEGORY_RULES.length - 1]
  );
}

function getStockLabel(product) {
  if (product?.is_ignored) {
    return "Oculto";
  }

  return product?.in_stock ? "Disponible" : "Agotado";
}

export function mapProductForCard(product) {
  const defaultVariant = product?.variants?.[0] || null;
  const category = detectCategory(product);
  const sizes = sortSizes(product?.sizes || []);
  const colors = product?.colors || [];
  const priceValue = parsePrice(product?.price);

  return {
    ...product,
    price: product?.price || "0",
    priceValue,
    image: product?.thumbnail_url || defaultVariant?.image || null,
    href: product?.id ? `/tienda/${product.id}` : "/wardrobe",
    defaultSyncVariantId: defaultVariant?.id || null,
    defaultVariantId: defaultVariant?.variant_id || null,
    defaultColor: defaultVariant?.color || colors[0] || null,
    defaultSize: defaultVariant?.size || sizes[0] || null,
    sku: defaultVariant?.sku || null,
    category: category.key,
    categoryLabel: category.label,
    stockLabel: getStockLabel(product),
    sizeCount: sizes.length,
    colorCount: colors.length,
    sizeRangeLabel:
      sizes.length > 0 ? `${sizes[0]}-${sizes[sizes.length - 1]}` : "Sin talla",
    searchText: [
      product?.name,
      category.label,
      colors.join(" "),
      sizes.join(" "),
      ...(product?.variants || []).map((variant) => variant?.name),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase(),
  };
}
