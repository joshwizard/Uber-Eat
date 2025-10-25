import React from "react";
import { useCart } from "../context/CartContext.jsx";

const ProductCard = ({ item }) => {
  const { addToCart } = useCart();

  // fallback 4image fails to load
  const handleImageError = (e) => {
    e.target.src =
      "https://via.placeholder.com/150?text=No+Image"; // placeholder image
  };

  return (
    <div className="bg-gray-100 rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition">
      <img
        src={item.image}
        alt={item.name}
        onError={handleImageError}
        className="w-40 h-40 object-cover rounded-lg"
      />
      <h3 className="text-lg font-semibold mt-3">{item.name}</h3>
      <p className="text-orange-600 font-bold mt-1">Kshs {item.price}</p>
      <button
        onClick={() => addToCart(item)}
        className="mt-3 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
