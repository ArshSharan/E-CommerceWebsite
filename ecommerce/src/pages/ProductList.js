import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/fakestore';
import ProductCard from '../components/ProductCard';
import FilterSortBar from '../components/FilterSortBar';
import '../styles/ProductList.css';

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || []; // ✅ Load from localStorage
  });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  // ✅ Toggle Wishlist function
  const toggleWishlist = (productId) => {
    setWishlist((prevWishlist) => {
      let updatedWishlist;
      if (prevWishlist.includes(productId)) {
        updatedWishlist = prevWishlist.filter(id => id !== productId);
      } else {
        updatedWishlist = [...prevWishlist, productId];
      }
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // ✅ Save to localStorage
      return updatedWishlist;
    });
  };

  const categories = [...new Set(products.map(p => p.category))];

  const filteredAndSorted = products
    .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
    .sort((a, b) => {
      if (sortOption === 'price-asc') return a.price - b.price;
      if (sortOption === 'price-desc') return b.price - a.price;
      if (sortOption === 'name-asc') return a.title.localeCompare(b.title);
      if (sortOption === 'name-desc') return b.title.localeCompare(a.title);
      return 0;
    });

  return (
    <div className="product-list">
      <h1>Products</h1>

      {/* 🔥 Filter and Sort Bar */}
      <FilterSortBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />

      <div className="product-grid">
        {filteredAndSorted.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart} 
            wishlist={wishlist} // ✅ Pass wishlist state
            toggleWishlist={toggleWishlist} // ✅ Pass function
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
