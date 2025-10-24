import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [isPaying, setIsPaying] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setIsPaying(true);

    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      navigate("/success");
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h2 className="text-4xl font-semibold text-rose-600 mb-4">Your cart is empty 🛒</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-lg"
        >
          Go Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-rose-700 mb-8">
        Checkout & Payment
      </h1>

      <div className="bg-white shadow-lg rounded-2xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-rose-600">Order Summary</h2>
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-3"
          >
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500">
                {item.quantity} × Ksh {item.price}
              </p>
            </div>
            <p className="font-semibold text-orange-600">
              Ksh {item.price * item.quantity}
            </p>
          </div>
        ))}
        <div className="flex justify-between text-xl font-semibold mt-4">
          <span>Total:</span>
          <span className="text-rose-600">Ksh {totalPrice}</span>
        </div>
      </div>

      <form onSubmit={handlePayment}className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-rose-600">
          Payment Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleInputChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none md:col-span-2"
            required
          />
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number (e.g. 4242 4242 4242 4242)"
            value={formData.cardNumber}
            onChange={handleInputChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            required
          />
          <input
            type="text"
            name="expiryDate"
            placeholder="Expiry Date (MM/YY)"
            value={formData.expiryDate}
            onChange={handleInputChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            required
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={formData.cvv}
            onChange={handleInputChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isPaying}
          className={`mt-6 w-full text-white py-3 rounded-lg text-lg font-medium transition ${
            isPaying ? "bg-gray-400 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600"
          }`}
        >
          {isPaying ? "Processing Payment..." : `Pay Ksh ${totalPrice}`}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
