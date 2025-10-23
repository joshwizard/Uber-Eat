import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import logo from "../images/logo_1.png"
import Cart from "./Cart";


const Header = () => {
    const { cart, clearCart } = useCart()
    const [isCartOpen, setIsCartopen] = useState(false)

    return (
        <>
            <header className="bg-orange-300 vorder-b border-rose-300">
                <div className="max-w-xl mx-auto px-4 py-4 flex items-center justify-center">
                    <div className="flex items-center gap-15">
                        <div className="w-22 h-22 rounded-full bg-rose-400 flex items-center justify-center text-white font-bold text-2xl">
                            <img src={logo} />
                        </div>
                        <div>
                            <h1 className="text-7xl font-bold ">Uber Eat</h1>
                            <p className="text-3xl text-rose-700">Food Order & Delivery</p>
                        </div>
                    </div> 
                </div>
                <nav className="hidden md:flex items-center gap-8 flex items-center justify-center">
                    {["Appetizers", "Drinks", "Snacks", "Main Dishes"].map((tab) => (
                        <button 
                            key={tab}
                            className="px-6 py-1 rounded-full bg-white hover:bg-orange-400 border mb-2 border-rose-200 text-l items-center justify-center">
                                {tab}
                        </button>
                    ))}
                    
                    <select className="mb-2 px-3 py-1 rounded-md border border-rose-200 bg-white text-l">
                        <option>Location</option>
                        <option>Prestige</option>
                        <option>Yaya centre</option>
                        <option>Jamhuri</option>
                    </select>
                </nav>
                <div>
                    <button 
                        onClick={() => setIsCartopen(true)} 
                        className="relative border bg-white text-orange-600 px-4 py-2 m-1 rounded-full font-medium hover:bg-orange-400 transition">
                    🛒
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded text-xs ww-5 h-5 flex items-center justify-center">
                            {cart.length}
                        </span>
                    )}
                    </button>
                </div>
            </header>
            {isCartOpen && (
                <div 
                    onClick={() => setIsCartopen(false)}
                    className="fixed inset-0 bg-black/40 z-10">

                </div>
            )}
            <div className="flex justify-between items-center border-b px-4 py-3">
                <h2 className="text-lg font-semibold text-orange-600">Your Cart</h2>
                <button
                    onClick={() => setIsCartopen(false)}
                    className="text-orange-600 font-bold text-xl hover:text-orange-800" >
                    x
                </button>
            </div>
            <div className="p-4 overflow-y-auto h-[calc(100%-60px)]">
                <Cart />
            </div>
        </>
    )   
}

export default Header