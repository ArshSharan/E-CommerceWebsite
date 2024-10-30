import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <div style={{ display: 'flex'}}>
        <button onClick={() => addToCart(product)} style={{marginRight: '20px' }}>Add to Cart</button>
        <div className="viewDetails">
          <Link to={`/products/${product.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;