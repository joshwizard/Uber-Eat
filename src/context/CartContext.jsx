// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from "react";

// 1️⃣ Create the context
const CartContext = createContext();

// 2️⃣ Custom hook for easy access
export const useCart = () => useContext(CartContext);

// 3️⃣ Provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add to cart
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear entire cart
  const clearCart = () => setCart([]);

  // Compute total cost
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
