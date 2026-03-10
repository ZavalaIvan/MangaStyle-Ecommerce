"use client";
import "./wardrobe.css";
import { useEffect, useMemo, useRef, useState } from "react";

import Product from "../../components/Product/Product";
import Copy from "../../components/Copy/Copy";
import { mapProductForCard } from "../../lib/productCard";

import { gsap } from "gsap";

const STOCK_FILTERS = ["Catalogo", "Disponibles", "Agotados"];

const SORT_OPTIONS = [
  { value: "featured", label: "Destacados" },
  { value: "price-asc", label: "Precio: menor a mayor" },
  { value: "price-desc", label: "Precio: mayor a menor" },
  { value: "name-asc", label: "Nombre: A-Z" },
];

function formatPrice(value, currency = "USD") {
  if (!Number.isFinite(value)) {
    return "--";
  }

  try {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(value);
  } catch {
    return `$${value.toFixed(0)}`;
  }
}

function sortProducts(products, sortBy) {
  const items = [...products];

  switch (sortBy) {
    case "price-asc":
      return items.sort((a, b) => a.priceValue - b.priceValue);
    case "price-desc":
      return items.sort((a, b) => b.priceValue - a.priceValue);
    case "name-asc":
      return items.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
    default:
      return items.sort((a, b) => {
        if (a.in_stock !== b.in_stock) {
          return a.in_stock ? -1 : 1;
        }

        return a.priceValue - b.priceValue;
      });
  }
}

export default function Wardrobe() {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [stockFilter, setStockFilter] = useState("Catalogo");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeColor, setActiveColor] = useState("all");
  const [activeSize, setActiveSize] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const productRefs = useRef([]);

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

  useEffect(() => {
    function handleScroll() {
      setShowBackToTop(window.scrollY > 480);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const storefrontProducts = useMemo(
    () => products.filter((product) => !product.is_ignored),
    [products]
  );

  const priceBounds = useMemo(() => {
    const source = storefrontProducts.length > 0 ? storefrontProducts : products;
    const values = source
      .map((product) => product.priceValue)
      .filter((value) => Number.isFinite(value) && value > 0);

    if (values.length === 0) {
      return { min: 0, max: 0 };
    }

    return {
      min: Math.min(...values),
      max: Math.max(...values),
    };
  }, [products, storefrontProducts]);

  const availableCategories = useMemo(() => {
    return [...new Set(storefrontProducts.map((product) => product.categoryLabel))].sort(
      (a, b) => a.localeCompare(b)
    );
  }, [storefrontProducts]);

  const availableColors = useMemo(() => {
    return [
      ...new Set(storefrontProducts.flatMap((product) => product.colors || [])),
    ].sort((a, b) => a.localeCompare(b));
  }, [storefrontProducts]);

  const availableSizes = useMemo(() => {
    const sizes = [
      ...new Set(storefrontProducts.flatMap((product) => product.sizes || [])),
    ];
    const order = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];

    return sizes.sort((a, b) => {
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
  }, [storefrontProducts]);

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    const parsedMin = Number.parseFloat(minPrice);
    const parsedMax = Number.parseFloat(maxPrice);

    const filtered = products.filter((product) => {
      if (stockFilter === "Catalogo" && product.is_ignored) {
        return false;
      }

      if (stockFilter === "Disponibles" && (!product.in_stock || product.is_ignored)) {
        return false;
      }

      if (stockFilter === "Agotados" && (product.in_stock || product.is_ignored)) {
        return false;
      }

      if (
        activeCategory !== "all" &&
        product.categoryLabel?.toLowerCase() !== activeCategory
      ) {
        return false;
      }

      if (activeColor !== "all" && !(product.colors || []).includes(activeColor)) {
        return false;
      }

      if (activeSize !== "all" && !(product.sizes || []).includes(activeSize)) {
        return false;
      }

      if (query && !product.searchText.includes(query)) {
        return false;
      }

      if (Number.isFinite(parsedMin) && product.priceValue < parsedMin) {
        return false;
      }

      if (Number.isFinite(parsedMax) && product.priceValue > parsedMax) {
        return false;
      }

      return true;
    });

    return sortProducts(filtered, sortBy);
  }, [
    activeCategory,
    activeColor,
    activeSize,
    maxPrice,
    minPrice,
    products,
    searchTerm,
    sortBy,
    stockFilter,
  ]);

  useEffect(() => {
    productRefs.current = productRefs.current.slice(0, filteredProducts.length);
    gsap.killTweensOf(productRefs.current);

    gsap.fromTo(
      productRefs.current,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        stagger: 0.05,
        ease: "power3.out",
      }
    );
  }, [filteredProducts]);

  function clearFilters() {
    setStockFilter("Catalogo");
    setActiveCategory("all");
    setActiveColor("all");
    setActiveSize("all");
    setSortBy("featured");
    setSearchTerm("");
    setMinPrice("");
    setMaxPrice("");
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const isFiltered =
    stockFilter !== "Catalogo" ||
    activeCategory !== "all" ||
    activeColor !== "all" ||
    activeSize !== "all" ||
    sortBy !== "featured" ||
    searchTerm !== "" ||
    minPrice !== "" ||
    maxPrice !== "";

  const startingPrice = priceBounds.min > 0 ? formatPrice(priceBounds.min) : "--";

  return (
    <main className="wardrobe-page">
      <section className="wardrobe-hero">
        <div className="container wardrobe-hero-grid">
          <div className="wardrobe-hero-copy">
            <Copy animateOnScroll={false} delay={0.55}>
              <p className="wardrobe-kicker">Catalogo completo</p>
            </Copy>
            <Copy animateOnScroll={false} delay={0.65}>
              <h1>Wardrobe MangaStyle</h1>
            </Copy>
            <Copy animateOnScroll={false} delay={0.75}>
              <p className="bodyCopy wardrobe-intro">
                Filtra por categoria, talla, color o precio y encuentra la pieza
                exacta del drop actual.
              </p>
            </Copy>
          </div>

          <div className="wardrobe-hero-panel">
            <div className="wardrobe-metric">
              <span>Productos</span>
              <strong>{storefrontProducts.length || products.length}</strong>
            </div>
            <div className="wardrobe-metric">
              <span>Categorias</span>
              <strong>{availableCategories.length}</strong>
            </div>
            <div className="wardrobe-metric">
              <span>Desde</span>
              <strong>{startingPrice}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="wardrobe-toolbar-section">
        <div className="container">
          <div className="wardrobe-toolbar">
            <div className="wardrobe-toolbar-top">
              <div>
                <p className="bodyCopy">
                  {isLoading
                    ? "Sincronizando catalogo desde Printful..."
                    : `${filteredProducts.length} productos listos para explorar`}
                </p>
              </div>

              <div className="wardrobe-toolbar-actions">
                <button
                  type="button"
                  className={`wardrobe-mobile-toggle ${
                    isMobileFiltersOpen ? "is-active" : ""
                  }`}
                  onClick={() => setIsMobileFiltersOpen((current) => !current)}
                  aria-expanded={isMobileFiltersOpen}
                  aria-controls="wardrobe-filters-panel"
                >
                  {isMobileFiltersOpen ? "Cerrar filtros" : "Abrir filtros"}
                </button>

                <label className="wardrobe-search">
                  <span>Buscar</span>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Nombre, color o tipo"
                  />
                </label>

                <label className="wardrobe-sort">
                  <span>Ordenar</span>
                  <select
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}
                  >
                    {SORT_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            <div
              id="wardrobe-filters-panel"
              className={`wardrobe-filters-panel ${
                isMobileFiltersOpen ? "is-open" : ""
              }`}
            >
              <div className="wardrobe-chip-row">
                {STOCK_FILTERS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className={stockFilter === tag ? "is-active" : ""}
                    onClick={() => setStockFilter(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <div className="wardrobe-filters-grid">
                <label>
                  <span>Categoria</span>
                  <select
                    value={activeCategory}
                    onChange={(event) => setActiveCategory(event.target.value)}
                  >
                    <option value="all">Todas</option>
                    {availableCategories.map((category) => (
                      <option key={category} value={category.toLowerCase()}>
                        {category}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  <span>Color</span>
                  <select
                    value={activeColor}
                    onChange={(event) => setActiveColor(event.target.value)}
                  >
                    <option value="all">Todos</option>
                    {availableColors.map((color) => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  <span>Talla</span>
                  <select
                    value={activeSize}
                    onChange={(event) => setActiveSize(event.target.value)}
                  >
                    <option value="all">Todas</option>
                    {availableSizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  <span>Precio minimo</span>
                  <input
                    type="number"
                    min={priceBounds.min || 0}
                    placeholder={priceBounds.min ? `${priceBounds.min}` : "0"}
                    value={minPrice}
                    onChange={(event) => setMinPrice(event.target.value)}
                  />
                </label>

                <label>
                  <span>Precio maximo</span>
                  <input
                    type="number"
                    min={priceBounds.min || 0}
                    placeholder={priceBounds.max ? `${priceBounds.max}` : "0"}
                    value={maxPrice}
                    onChange={(event) => setMaxPrice(event.target.value)}
                  />
                </label>

                <button
                  type="button"
                  className="wardrobe-clear-btn"
                  onClick={clearFilters}
                  disabled={!isFiltered}
                >
                  Limpiar filtros
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-list">
        <div className="container">
          {error ? (
            <div className="wardrobe-feedback">
              <Copy animateOnScroll={false}>
                <p className="bodyCopy">{error}</p>
              </Copy>
            </div>
          ) : null}

          {!error && !isLoading && filteredProducts.length === 0 ? (
            <div className="wardrobe-empty-state">
              <p>Sin coincidencias</p>
              <p className="bodyCopy">
                Ajusta filtros o limpia la busqueda para ver mas productos del
                catalogo.
              </p>
              <button type="button" onClick={clearFilters}>
                Ver todo el catalogo
              </button>
            </div>
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
              />
            ))}
        </div>
      </section>

      <button
        type="button"
        className={`wardrobe-back-to-top ${showBackToTop ? "is-visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Volver al inicio"
      >
        Top
      </button>
    </main>
  );
}
