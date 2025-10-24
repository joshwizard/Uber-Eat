import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import logo from "/images/logo_1.png";
import Cart from "./Cart";

const Header = ({ selectedCategory, setSelectedCategory }) => {
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = ["All", "Appetizers", "Drinks", "Snacks", "Main Dishes"];

   return (
    <>
      <header className="bg-orange-300 border-b border-rose-300 relative">
        <div className="max-w-xl mx-auto px-4 py-4 flex items-center justify-center">
          <div className="flex items-center gap-15">
            <div className="w-22 h-22 rounded-full bg-rose-400 flex items-center justify-center text-white font-bold text-2xl">
              <img src={logo} alt="logo" />
            </div>
            <div>
              <h1 className="text-7xl font-bold">Uber Eat</h1>
              <p className="text-3xl text-rose-700">Food Order & Delivery</p>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 justify-center">
            {["All", "Appetizers", "Drinks", "Snacks", "Main Dishes"].map((tab) => (
                <button
                key={tab}
                onClick={() => setSelectedCategory(tab)}
                className="px-6 py-1 rounded-full bg-white hover:bg-orange-400 border mb-2 border-rose-200 text-l items-center justify-center transition"
                >
                {tab}
                </button>
            ))}

            <select className="mb-2 px-3 py-1 rounded-md border border-rose-200 bg-white text-l">
                <option>Location</option>
                <option>Prestige</option>
                <option>Yaya Centre</option>
                <option>Jamhuri</option>
            </select>
        </nav>


        {/* Cart Button */}
        <div className="absolute top-4 right-6">
          <button
            onClick={() => setIsCartOpen(true)}
            className="fixed top-6 right-17 z-40 border bg-white text-orange-600 px-4 py-2 rounded-full font-medium hover:bg-orange-400 transition"
          >
            🛒
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Dark Overlay */}
      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 bg-black/40 z-20"
        />
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-30 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center border-b px-4 py-3">
          <h2 className="text-lg font-semibold text-rose-600">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-rose-600 font-bold text-xl hover:text-rose-800"
          >
            ✕
          </button>
        </div>

        {/* Cart items */}
        <div className="p-4 overflow-y-auto h-[calc(100%-120px)]">
          <Cart />
        </div>

        {/* Checkout button */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t bg-white">
          <button
            onClick={() => alert("Proceeding to checkout...")}
            className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;


