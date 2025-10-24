import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard.jsx";

const Home = ({ selectedCategory }) => {
  // state variables to manage component data
  const [allProducts, setAllProducts] = useState([]); // store all fetched products
  const [loading, setLoading] = useState(true); // track loading state during data fetch
  const [error, setError] = useState(null); // store error messages from fetch
  const [search, setSearch] = useState(""); // store current search query

  useEffect(() => {
    fetch('/db.json') // fetch data from db.json
      .then(response => {
        if (!response.ok) {
          throw new Error('failed to fetch products'); // throw error if not
        }
        return response.json(); // parse the json response
      })
      .then(data => {
        // Flatten products from category groups into a single array
        const flattenedProducts = Object.values(data.products || {}).flat();
        setAllProducts(flattenedProducts); // set products data or empty array
        setLoading(false); // set loading to false after successful fetch
      })
      .catch(err => {
        console.error('Error fetching products:', err); // log error to console
        setError(err.message); // set error state with message
        setLoading(false); // set loading to false on error
      });
  }, []);

  // filter products based on selected category and search query
  const filteredProducts = allProducts.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || !selectedCategory
        ? true
        : item.category === selectedCategory;
    // Check if item name includes the search query
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  // conditional render for error state
  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  // main JSX
  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} // update search state on input change
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.length > 0 ? ( // check if there are filtered products
          filteredProducts.map((item) => <ProductCard key={item.id} item={item} />) // render ProductCard for each item
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
