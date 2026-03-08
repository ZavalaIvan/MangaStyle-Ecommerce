import { create } from "zustand";

function getCartItemKey(product) {
  if (product?.variantId) {
    return `variant-${product.variantId}`;
  }

  if (product?.productId) {
    return `product-${product.productId}`;
  }

  return `name-${product?.name || "item"}`;
}

export const useCartStore = create((set) => ({
  cartItems: [],

  addToCart: (product) => {
    const cartKey = getCartItemKey(product);

    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.cartKey === cartKey
      );

      if (existingItem) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.cartKey === cartKey
              ? { ...item, quantity: (Number(item.quantity) || 1) + 1 }
              : item
          ),
        };
      }

      return {
        cartItems: [
          ...state.cartItems,
          {
            ...product,
            cartKey,
            quantity: 1,
          },
        ],
      };
    });
  },

  removeFromCart: (cartKey) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.cartKey !== cartKey),
    }));
  },
}));

export const useCartCount = () =>
  useCartStore((state) =>
    state.cartItems.reduce((total, item) => total + (item.quantity || 1), 0)
  );

export const useCartSubtotal = () =>
  useCartStore((state) =>
    state.cartItems.reduce(
      (total, item) => total + parseFloat(item.price || "0") * (item.quantity || 1),
      0
    )
  );
