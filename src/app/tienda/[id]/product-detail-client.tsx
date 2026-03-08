"use client";

import { useMemo, useState } from "react";

import "./product-detail-client.css";
import type { PrintfulProduct, PrintfulVariant } from "../../../lib/printful";
import { useCartStore } from "../../../store/cartStore";

function uniqueValues(items: PrintfulVariant[], key: "color" | "size") {
  return [...new Set(items.map((item) => item[key]).filter(Boolean))] as string[];
}

function sortSizes(sizes: string[]) {
  const order = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];

  return [...sizes].sort((a, b) => {
    const indexA = order.indexOf(a);
    const indexB = order.indexOf(b);

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

export default function ProductDetailClient({
  product,
}: {
  product: PrintfulProduct;
}) {
  const variants = product?.variants || [];
  const addToCart = useCartStore((state) => state.addToCart);

  const colors = uniqueValues(variants, "color");
  const initialColor = colors[0] || variants[0]?.color || "";

  const initialSizes = sortSizes(
    uniqueValues(
      variants.filter((variant) =>
        initialColor ? variant.color === initialColor : true
      ),
      "size"
    )
  );

  const initialSize = initialSizes[0] || variants[0]?.size || "";

  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [selectedSize, setSelectedSize] = useState(initialSize);

  const availableSizes = useMemo(() => {
    return sortSizes(
      uniqueValues(
        variants.filter((variant) =>
          selectedColor ? variant.color === selectedColor : true
        ),
        "size"
      )
    );
  }, [selectedColor, variants]);

  const selectedVariant = useMemo(() => {
    return (
      variants.find(
        (variant) =>
          (selectedColor ? variant.color === selectedColor : true) &&
          (selectedSize ? variant.size === selectedSize : true)
      ) ||
      variants[0] ||
      null
    );
  }, [selectedColor, selectedSize, variants]);

  const displayedImage = selectedVariant?.image || product?.thumbnail_url || "";
  const displayedPrice = selectedVariant?.retail_price || product?.price || null;
  const displayedCurrency = selectedVariant?.currency || product?.currency || "USD";

  function handleColorChange(color: string) {
    setSelectedColor(color);

    const sizesForColor = sortSizes(
      uniqueValues(
        variants.filter((variant) => variant.color === color),
        "size"
      )
    );

    if (!sizesForColor.includes(selectedSize)) {
      setSelectedSize(sizesForColor[0] || "");
    }
  }

  function handleAddToCart() {
    if (!selectedVariant) {
      return;
    }

    addToCart({
      id: product.id,
      name: product.name || "Producto",
      price: displayedPrice || "0",
      image: displayedImage,
      href: product.id ? `/tienda/${product.id}` : "/wardrobe",
      productId: product.id,
      syncVariantId: selectedVariant.id,
      variantId: selectedVariant.variant_id,
      color: selectedVariant.color,
      size: selectedVariant.size,
      sku: selectedVariant.sku,
    });
  }

  return (
    <main className="product-detail-page">
      <section className="product-detail-shell">
        <div className="product-detail-media">
          {displayedImage ? (
            <img
              src={displayedImage}
              alt={product?.name || "Producto"}
              className="product-detail-image"
            />
          ) : (
            <div className="product-detail-image product-detail-image-empty" />
          )}
        </div>

        <div className="product-detail-copy">
          <p className="product-detail-kicker">MangaStyle x Printful</p>
          <h1>{product?.name || "Producto sin nombre"}</h1>

          <div className="product-detail-price">
            {displayedPrice
              ? `${displayedPrice} ${displayedCurrency}`
              : "Precio no disponible"}
          </div>

          <div className="product-detail-section">
            <p className="product-detail-label">Color</p>
            <div className="product-detail-options">
              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => handleColorChange(color)}
                  className={`product-detail-chip ${
                    selectedColor === color ? "is-active" : ""
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="product-detail-section">
            <p className="product-detail-label">Talla</p>
            <div className="product-detail-options">
              {availableSizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`product-detail-size ${
                    selectedSize === size ? "is-active" : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="product-detail-meta">
            <p>
              <strong>Variante seleccionada:</strong>{" "}
              {selectedVariant?.name || "No disponible"}
            </p>
            <p>
              <strong>Variant ID:</strong> {selectedVariant?.variant_id || "-"}
            </p>
            <p>
              <strong>SKU:</strong> {selectedVariant?.sku || "-"}
            </p>
            <p>
              <strong>Variantes:</strong> {product?.variants_count || 0}
            </p>
          </div>

          <div className="product-detail-actions">
            <button
              type="button"
              className="product-detail-button"
              disabled={!selectedVariant}
              onClick={handleAddToCart}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
