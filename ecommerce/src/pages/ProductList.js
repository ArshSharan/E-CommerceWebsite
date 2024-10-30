import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/fakestore';
import ProductCard from '../components/ProductCard';
import '../styles/ProductList.css';


function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="product-list">
      <h1>Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
