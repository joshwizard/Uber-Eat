import React from "react";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 text-center">
      <h2 className="text-4xl font-bold text-green-600 mb-4">
        🎉 Order Confirmed!
      </h2>
      <p className="text-lg mb-8">Thank you for your purchase. Your food is on the way!</p>
      <Link
        to="/"
        className="bg-rose-600 text-white px-5 py-2 rounded-lg hover:bg-rose-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default OrderSummary;
