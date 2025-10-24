import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import logo from "/images/logo_1.png";
import Cart from "./Cart";

const Header = ({ selectedCategory, setSelectedCategory }) => {
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  const categories = ["All", "Appetizers", "Drinks", "Snacks", "Main Dishes"];

   return (
    <>
      <header className="fixed top-0 left-0 w-full bg-orange-300 border-b border-rose-300 z-10">
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
        </nav>


        {!isCartOpen && (
          <div className="absolute top-4 right-6">
            <button
              onClick={() => setIsCartOpen(true)}
              className="bg-white text-orange-600 px-4 py-2 rounded-lg shadow-lg border border-orange-200 font-medium hover:bg-orange-50 hover:shadow-xl transition-all duration-200 flex items-center gap-2"
            >
              <span className="text-lg">🛒</span>
              {cart.length > 0 && (
                <span className="bg-orange-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        )}
      </header>

      
      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 bg-black/40 z-20"
        />
      )}

      
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

        
        <div className="p-4 overflow-y-auto h-[calc(100%-120px)]">
          <Cart />
        </div>
      </div>
    </>
  );
};

export default Header;


