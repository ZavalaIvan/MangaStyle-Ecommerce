"use client";
import "./Product.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useCartStore } from "../../store/cartStore";

function getProductHref(product) {
  if (product?.href) {
    return product.href;
  }

  if (product?.id) {
    return `/tienda/${product.id}`;
  }

  return "/unit";
}

function getProductImage(product, productIndex) {
  return (
    product?.image ||
    product?.thumbnail_url ||
    `/products/product_${productIndex}.png`
  );
}

function getProductPrice(product) {
  if (product?.price) {
    return product.price;
  }

  if (product?.retail_price) {
    return product.retail_price;
  }

  return "0";
}

const Product = ({
  product,
  productIndex,
  showAddToCart = true,
  className = "",
  innerRef,
  style,
}) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const pathname = usePathname();
  const href = getProductHref(product);
  const imageSrc = getProductImage(product, productIndex);
  const price = getProductPrice(product);

  const handleImageClick = () => {
    if (pathname === "/unit") {
      window.dispatchEvent(new CustomEvent("scrollToTop"));
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: product?.id ?? null,
      name: product?.name || "Producto",
      price,
      image: imageSrc,
      href,
      productId: product?.id ?? null,
      syncVariantId: product?.defaultSyncVariantId ?? null,
      variantId: product?.defaultVariantId ?? product?.variantId ?? null,
      color: product?.defaultColor ?? product?.color ?? null,
      size: product?.defaultSize ?? null,
      sku: product?.sku ?? null,
    });
  };

  return (
    <div className={`product ${className}`} ref={innerRef} style={style}>
      <Link href={href} className="product-img" onClick={handleImageClick}>
        <img src={imageSrc} alt={product?.name || "Producto"} />
      </Link>
      <div className="product-info">
        <div className="product-info-wrapper">
          <p>{product?.name}</p>
          <p>${price}</p>
        </div>
        {showAddToCart && (
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
