import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 px-6 text-center">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-md">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold text-rose-700 mb-3">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your order. Your food is being prepared and will be delivered soon 
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
