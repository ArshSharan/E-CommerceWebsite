import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api/fakestore';
import '../styles/SearchBar.css';

function SearchBar({ onProductSelect }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(data => setProducts(data));
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 1) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5)); // Top 5 suggestions
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (product) => {
    onProductSelect(product);
    setQuery(''); // Clear input
    setSuggestions([]); // Hide suggestions
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleChange}
      />
      {suggestions.length > 0 && (
        <ul className="search-suggestions">
          {suggestions.map(product => (
            <li key={product.id} onClick={() => handleSelect(product)}>
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
