"use client";
import "./wardrobe.css";
import { useEffect, useMemo, useRef, useState } from "react";

import Product from "../../components/Product/Product";
import Copy from "../../components/Copy/Copy";

import { gsap } from "gsap";

const FILTER_TAGS = ["All", "Disponibles", "Ocultos"];

const COLOR_SWATCHES = {
  black: "#111111",
  white: "#f4f1ea",
  grey: "#7a7a7a",
  gray: "#7a7a7a",
  stone: "#b7ab98",
  ice: "#d6e4ef",
  navy: "#233a5a",
  red: "#9f2b2b",
  blue: "#2d5c9a",
  green: "#3e6b4d",
  yellow: "#d0a62a",
  pink: "#cf84ad",
  purple: "#725c93",
  orange: "#b96d2d",
};

function mapProductForCard(product) {
  const defaultVariant = product?.variants?.[0] || null;

  return {
    ...product,
    price: product?.price || "0",
    image: product?.thumbnail_url || defaultVariant?.image || null,
    href: product?.id ? `/tienda/${product.id}` : "/wardrobe",
    defaultSyncVariantId: defaultVariant?.id || null,
    defaultVariantId: defaultVariant?.variant_id || null,
    defaultColor: defaultVariant?.color || product?.colors?.[0] || null,
    defaultSize: defaultVariant?.size || product?.sizes?.[0] || null,
    sku: defaultVariant?.sku || null,
  };
}

function getColorSwatchStyle(color) {
  const normalized = color?.toLowerCase() || "";

  return {
    backgroundColor: COLOR_SWATCHES[normalized] || "#999999",
  };
}

export default function Wardrobe() {
  const [activeTag, setActiveTag] = useState("All");
  const [activeColor, setActiveColor] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const productRefs = useRef([]);
  const isInitialMount = useRef(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch("/api/printful/products", {
          cache: "no-store",
        });
        const data = await response.json();

        if (!response.ok || !data?.ok) {
          throw new Error(data?.error || "No se pudieron cargar los productos");
        }

        setProducts((data.products || []).map(mapProductForCard));
      } catch (loadError) {
        setError(
          loadError instanceof Error
            ? loadError.message
            : "No se pudieron cargar los productos"
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  const availableColors = useMemo(() => {
    const colors = products.flatMap((product) => product.colors || []);
    return [...new Set(colors)].sort((a, b) => a.localeCompare(b));
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (activeTag === "Disponibles" && !product.in_stock) {
        return false;
      }

      if (activeTag === "Ocultos" && !product.is_ignored) {
        return false;
      }

      if (activeColor && !(product.colors || []).includes(activeColor)) {
        return false;
      }

      return activeTag !== "Ocultos" || product.is_ignored;
    });
  }, [activeColor, activeTag, products]);

  const handleFilterChange = (newTag, newColor) => {
    if (isAnimating) {
      return;
    }

    if (newTag === activeTag && newColor === activeColor) {
      return;
    }

    setIsAnimating(true);
    setActiveTag(newTag);
    setActiveColor(newColor);

    gsap.killTweensOf(productRefs.current);

    gsap.to(productRefs.current, {
      opacity: 0,
      scale: 0.5,
      duration: 0.25,
      stagger: 0.05,
      ease: "power3.out",
    });
  };

  useEffect(() => {
    productRefs.current = productRefs.current.slice(0, filteredProducts.length);
    gsap.killTweensOf(productRefs.current);

    gsap.fromTo(
      productRefs.current,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: isInitialMount.current ? 0.5 : 0.25,
        stagger: 0.05,
        ease: "power3.out",
        onComplete: () => {
          setIsAnimating(false);
          isInitialMount.current = false;
        },
      }
    );
  }, [filteredProducts]);

  return (
    <>
      <section className="products-header">
        <div className="container">
          <Copy animateOnScroll={false} delay={0.65}>
            <h1>Catalogo de playeras anime</h1>
          </Copy>
          <div className="products-header-divider"></div>
          <div className="product-filter-bar">
            <div className="filter-bar-header">
              <p className="bodyCopy">
                {isLoading ? "Cargando productos..." : `${products.length} productos`}
              </p>
            </div>
            <div className="filter-bar-tags">
              {FILTER_TAGS.map((tag) => (
                <p
                  key={tag}
                  className={`bodyCopy ${activeTag === tag ? "active" : ""}`}
                  onClick={() => handleFilterChange(tag, activeColor)}
                >
                  {tag}
                </p>
              ))}
            </div>
            <div className="filter-bar-colors">
              {availableColors.map((color) => (
                <span
                  key={color}
                  title={color}
                  className={`color-selector ${color.toLowerCase()} ${
                    activeColor === color ? "active" : ""
                  }`}
                  onClick={() =>
                    handleFilterChange(
                      activeTag,
                      activeColor === color ? null : color
                    )
                  }
                  style={{
                    ...getColorSwatchStyle(color),
                    cursor: isAnimating ? "not-allowed" : "pointer",
                  }}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="product-list">
        <div className="container">
          {error ? (
            <Copy animateOnScroll={false}>
              <p className="bodyCopy">{error}</p>
            </Copy>
          ) : null}

          {!error && isLoading ? (
            <Copy animateOnScroll={false}>
              <p className="bodyCopy">Sincronizando catalogo desde Printful...</p>
            </Copy>
          ) : null}

          {!error &&
            !isLoading &&
            filteredProducts.map((product, index) => (
              <Product
                key={product.id || product.name}
                product={product}
                productIndex={index + 1}
                showAddToCart={true}
                innerRef={(element) => (productRefs.current[index] = element)}
                style={{ opacity: 0, transform: "scale(0.5)" }}
              />
            ))}
        </div>
      </section>
    </>
  );
}
