import React from "react";
// import { useCart } from "../context/CartContext";

const Header = () => {
    // const { cart } = useCart()
    // const itemCount = cart.reduce((sum, item) => sum + item.qty, 0)

    return (
    <header className="bg-rose-100 vorder-b border-rose-300">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
           <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-rose-400 flex items-center justify-center text-white font-bold text-2xl">
               🍔 
            </div>
            <div>
                <h1 className="text-xl font-bold">Good Food</h1>
                <p className="text-xs text-rose-700">Food Order & Delivery</p>
            </div>
            </div> 
        </div>
        <nav className="hidden md:flex items-center gap-3">
            {["Appetizers", "Drinks", "Snacks", "Main Dishes"].map((tab) => (
                <button 
                    key={tab}
                    className="px-4 py-1 rounded-full bg-white hover:bg-rose-50 border border-rose-200 text-sm">
                        {tab}
                </button>
            ))}
            
            <select className="ml-2 px-3 py-1 rounded-md border border-rose-200 bg-white text-sm">
                <option>Location</option>
                <option>Prestige</option>
                <option>Yaya centre</option>
                <option>Jamhuri</option>
            </select>
        </nav>
        <div className="relative">
            <button className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center text-white shadow-lg">
                <svg
                    xmlns="https://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3hl.4 2M7 13h10l4-8H5.4m7 13L5.4 5M7 13l-2 5m5-5v5m4-5v5" />
                </svg>
            </button>
            {/* {itemCount > 0 && (
                <span></span>
            )} */}
        </div>
    </header>
    )   
}



export default Header