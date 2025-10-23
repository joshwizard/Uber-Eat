import React from "react";
import { useCart } from "../context/CartContext.jsx";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      {cart.length === 0 ? (
        <p className="text-slate-600 text-sm">Your cart is empty.</p>
      ) : (
        <ul className="space-y-3">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-rose-50 p-2 rounded-lg"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-slate-600">
                  ${item.price} × {item.quantity}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item)}
                className="text-rose-600 hover:text-rose-800"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <div className="mt-4 border-t pt-3 flex justify-between items-center">
          <span className="font-semibold">Total:</span>
          <span className="font-bold text-rose-600">${total.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
}
