"use client";
import "./ShoppingCart.css";
import { useState, useEffect } from "react";
import Link from "next/link";

import {
  useCartStore,
  useCartCount,
  useCartSubtotal,
} from "../../store/cartStore";

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cartCount = useCartCount();
  const subtotal = useCartSubtotal();

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="shopping-cart-container">
      <button className="cart-button" onClick={toggleCart}>
        <span className="cart-icon">CART</span>
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </button>

      <div
        className={`cart-sidebar ${isOpen ? "open" : ""}`}
        onWheel={(e) => {
          const target = e.currentTarget;
          const cartItemsContainer = target.querySelector(".cart-items");
          if (cartItemsContainer) {
            const { scrollTop, scrollHeight, clientHeight } = cartItemsContainer;
            const isAtTop = scrollTop === 0;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

            if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
              e.stopPropagation();
            }
          }
        }}
      >
        <div className="cart-sidebar-content">
          <div className="cart-header">
            <h2>Carrito</h2>
            <button className="cart-close" onClick={toggleCart}>
              Cerrar
            </button>
          </div>
          <div
            className="cart-items"
            onWheel={(e) => {
              e.stopPropagation();
            }}
            onTouchMove={(e) => {
              e.stopPropagation();
            }}
          >
            {cartItems.length === 0 ? (
              <div className="cart-empty">
                <p>Tu carrito esta vacio</p>
              </div>
            ) : (
              cartItems.map((item, index) => {
                const quantity = Number(item.quantity) || 1;

                return (
                  <div key={`${item.cartKey}-${index}`} className="cart-item">
                    <div className="cart-item-image">
                      <img
                        src={item.image || "/products/product_1.png"}
                        alt={item.name}
                      />
                    </div>
                    <div className="cart-item-details">
                      <div className="cart-item-name-row">
                        <p className="cart-item-name">{item.name}</p>
                        {quantity > 1 && (
                          <span className="cart-item-quantity">{quantity}</span>
                        )}
                      </div>
                      {item.color || item.size ? (
                        <p className="cart-item-variant">
                          {[item.color, item.size].filter(Boolean).join(" / ")}
                        </p>
                      ) : null}
                      <p className="cart-item-price">${item.price}</p>
                      {item.href ? (
                        <Link href={item.href} className="cart-item-remove">
                          Ver producto
                        </Link>
                      ) : null}
                      <button
                        className="cart-item-remove"
                        onClick={() => removeFromCart(item.cartKey)}
                      >
                        Quitar
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="cart-footer">
              <div className="cart-summary-row">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <Link href="/checkout" className="cart-checkout">
                Finalizar compra
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
