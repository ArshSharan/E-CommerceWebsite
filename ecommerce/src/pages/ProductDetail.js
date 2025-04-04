import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../api/fakestore';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import '../styles/ProductDetail.css';

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id)
      .then(data => setProduct(data))
      .catch(error => console.error("Error fetching product details:", error));
  }, [id]);

  if (!product) return <p className="loading">Loading...</p>;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`🛒 "${product.title}" added to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="product-detail-wrapper">
      <div className="product-detail-container">
        <div className="product-image-wrapper">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="description">{product.description}</p>
          <p className="price">${product.price}</p>
          <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
          <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
