import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../api/fakestore';
import '../styles/ProductDetail.css';

function ProductDetail( {addToCart}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id)
      .then(data => setProduct(data))
      .catch(error => console.error("Error fetching product details:", error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <button onClick={() => navigate(-1)} style={{ marginTop: '1rem'}}>
        {'Back'}
      </button>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button className="AddtoCartButton" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
