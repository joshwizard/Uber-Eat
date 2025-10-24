import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard.jsx";

const Home = ({ selectedCategory }) => {
  //variables
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // fetch db.json 
    fetch("/db.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        // Flatten all categories into a single array
        const flattenedProducts = Object.values(data.products || {}).flat();
        setAllProducts(flattenedProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // filter products by category & search query
  const filteredProducts = allProducts.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || !selectedCategory
        ? true
        : item.category === selectedCategory;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  //loading state
  if (loading) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  //error state
  if (error) {
    return (
      <div className="text-center py-10 text-red-500">Error: {error}</div>
    );
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
          filteredProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))
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
