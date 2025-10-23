import React from 'react'
import './App.css'
import Header from './components/Header'
import Home from "./pages/Home.jsx"
import { CartProvider } from './context/CartContext.jsx'
import Footer from "./components/Footer.jsx"

export default function App () {
  return (
    <CartProvider>
      <div className="min-h-screen bg-rose-50 text-slate-900 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Home />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
