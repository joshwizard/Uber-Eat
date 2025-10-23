// src/context/CartContext.jsx
import React, { createContext, useContext, useReducer, useState } from "react";

// Create the context
const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART" : 
      const existing = state.find((item) => item.id === action.payload.id)
      if(existing) {
        return state.map((item) => 
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1}
        : item )

      } else {
        return [...state, { ...action.payload, quantity: 1}]
      }

      case "REMOVE_FROM_CART" :
        return state.filter((item) => item.id !== action.payload.id);

      case "CLEAR_CART" : 
        return [];
  }
}

// Provider Component
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [])

  const addToCart = (item) => dispatch({ type: "ADD_TO_CART", payload: item })
  const removeFromCart = (item) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: item}) 
  
  const clearCart = () => dispatch({ type: "CLEAR_CART "})

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext)