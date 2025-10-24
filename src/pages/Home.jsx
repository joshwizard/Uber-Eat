//Home.jsx
import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard.jsx";

// Note: Products are now fetched from db.json instead of hardcoded array.
// This allows for easier management and potential backend integration.
// If db.json is not available, fallback to empty array.

const Home = ({ selectedCategory }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  // Note: Fetch products from db.json on component mount.
  // In production, replace with actual API endpoint.
  useEffect(() => {
    fetch('/db.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then(data => {
        setAllProducts(data.products || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredProducts = allProducts.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || !selectedCategory
        ? true
        : item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
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
