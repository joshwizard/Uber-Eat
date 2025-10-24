// src/pages/Home.jsx
import React, { useState } from "react";
import ProductCard from "../components/ProductCard.jsx";

export const allProducts = [
  // 🥗 Appetizers
  { id: 1, name: "Spring Rolls", price: 300, image: "/images/crispy-spring-rolls.jpg", category: "Appetizers" },
  { id: 2, name: "Garlic Bread", price: 250, image: "/images/vegan-garlic-bread-recipe.jpg", category: "Appetizers" },
  { id: 3, name: "Bruschetta", price: 350, image: "/images/bruschetta.png", category: "Appetizers" },
  { id: 4, name: "Mini Samosas", price: 300, image: "/images/crispy-mini-samosas.jpg", category: "Appetizers" },
  { id: 5, name: "Stuffed Mushrooms", price: 380, image: "/images/Stuffed-Mushrooms.jpg", category: "Appetizers" },
  { id: 6, name: "Caprese Salad", price: 400, image: "/images/caprese-salad.jpg", category: "Appetizers" },
  { id: 7, name: "Onion Rings", price: 280, image: "/images/onion-rings.jpg", category: "Appetizers" },
  { id: 8, name: "Cheese Balls", price: 330, image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90", category: "Appetizers" },

  // 🥤 Drinks
  { id: 9, name: "Cola Drink", price: 150, image: "/images/cola-drink.png", category: "Drinks" },
  { id: 10, name: "Fresh Orange Juice", price: 200, image: "/images/orange-juice.jpg", category: "Drinks" },
  { id: 11, name: "Iced Coffee", price: 250, image: "https://images.unsplash.com/photo-1511920170033-f8396924c348", category: "Drinks" },
  { id: 12, name: "Lemonade", price: 180, image: "/images/lemonade.jpg", category: "Drinks" },
  { id: 13, name: "Milkshake", price: 270, image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93", category: "Drinks" },
  { id: 14, name: "Smoothie Bowl", price: 300, image: "/images/smoothie-bowl.png", category: "Drinks" },
  { id: 15, name: "Green Tea", price: 150, image: "/images/green-tea.jpg", category: "Drinks" },
  { id: 16, name: "Iced Mocha", price: 280, image: "/images/iced-mocha.jpg", category: "Drinks" },

  // 🍟 Snacks
  { id: 17, name: "Potato Chips", price: 180, image: "/images/Potato-Chips.jpg", category: "Snacks" },
  { id: 18, name: "Chocolate Bar", price: 220, image: "/images/chocolate-bar.png", category: "Snacks" },
  { id: 19, name: "Popcorn", price: 160, image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03", category: "Snacks" },
  { id: 20, name: "Cookies", price: 200, image: "/images/cookies.jpg", category: "Snacks" },
  { id: 21, name: "Nachos", price: 250, image: "/images/nachos.jpg", category: "Snacks" },
  { id: 22, name: "Cupcake", price: 230, image: "/images/cup-cake.jpeg", category: "Snacks" },
  { id: 23, name: "Boiled Eggs", price: 210, image: "/images/boiled-eggs.jpg", category: "Snacks" },
  { id: 24, name: "Popcorn", price: 190, image: "/images/popcorn.jpg", category: "Snacks" },

  // 🍛 Main Dishes
  { id: 25, name: "Grilled Chicken", price: 700, image: "/images/chicken.jpeg", category: "Main Dishes" },
  { id: 26, name: "Beef Burger", price: 650, image: "https://images.unsplash.com/photo-1550547660-d9450f859349", category: "Main Dishes" },
  { id: 27, name: "Ugali Beef", price: 850, image: "/images/ugali-beef.jpeg", category: "Main Dishes" },
  { id: 28, name: "Steak & Fries", price: 950, image: "/images/steak-fries.jpg", category: "Main Dishes" },
  { id: 29, name: "Vegetable Curry", price: 600, image: "/images/vegetable-curry.jpg", category: "Main Dishes" },
  { id: 30, name: "Seafood Rice", price: 900, image: "/images/Seafood-Rice.jpg", category: "Main Dishes" },
  { id: 31, name: "Pizza Slice", price: 800, image: "/images/pizza-slice.jpeg", category: "Main Dishes" },
  { id: 32, name: "Roast Beef Sandwich", price: 750, image: "/images/Roasted-Beef-sandwich.jpg", category: "Main Dishes" },
];

const Home = ({ selectedCategory }) => {
  const [search, setSearch] = useState("");

  const filteredProducts = allProducts.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || !selectedCategory
        ? true
        : item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      {/* 🔍 Search Bar */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      {/* 🧁 Product Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No items found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;




