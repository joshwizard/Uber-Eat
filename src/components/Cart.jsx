//Cart.jsx
import React from "react";
import { useCart } from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

return (
    <div>
      {cart.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">Your cart is empty 🛒</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between border-b pb-2"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  KSh {item.price} × {item.quantity}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-rose-600 hover:text-rose-800 text-sm font-medium"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <>
          <div className="mt-6 text-right font-semibold text-orange-700">
            Total: KSh {total}
          </div>
          <button
            onClick={() => navigate('/checkout')}
            className="w-full mt-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
