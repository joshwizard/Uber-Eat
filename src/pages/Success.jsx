import React from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md mx-auto">
        <div className="text-6xl mb-6">Congrats</div>
        <h1 className="text-4xl font-bold text-rose-700 mb-4">
          Order Successful!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Thank you for shopping with us! Your order has been placed successfully and will be delivered soon.
        </p>
        <div className="space-y-4">
          <button
            onClick={() => navigate("/")}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;