//check out jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "card", // Default to card
  });

  // Calculate total price
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Note: In a real app, validate form and process payment here
    clearCart(); // Clear the cart after successful checkout
    navigate("/success"); // Navigate to success page
  };

  // If cart is empty, redirect or show message
  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto py-16 text-center">
        <p className="text-gray-500">Your cart is empty. Add items to proceed to checkout.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>

      {/* Cart Summary */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <ul className="space-y-2">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between">
              <span>{item.name} × {item.quantity}</span>
              <span>KSh {item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="border-t mt-4 pt-4 flex justify-between font-bold">
          <span>Total:</span>
          <span>KSh {total}</span>
        </div>
      </div>

      {/* Checkout Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Delivery & Payment Details</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Delivery Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            rows="3"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="card">Credit/Debit Card</option>
            <option value="cash">Cash on Delivery</option>
            <option value="mpesa">M-Pesa</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
