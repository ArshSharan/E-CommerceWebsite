import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import '../styles/NavBar.css';

function NavBar({ toggleCart, cartItemCount }) {
  const navigate = useNavigate();

  const goToProducts = () => navigate('/products');
  const goToHome = () => navigate('/');

  const handleProductSelect = (product) => {
    navigate(`/products/${product.id}`);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="navbar-logo" onClick={goToHome}>
          🛍️ DreamVogue
        </button>
      </div>

      <div className="navbar-center">
        <SearchBar onProductSelect={handleProductSelect} />
      </div>

      <div className="navbar-right">
        <button onClick={goToProducts} className="nav-button">Products</button>
        <button className="cart-button" onClick={toggleCart}>
          🛒 Cart ({cartItemCount})
        </button>
        {/* Placeholder for Dark Mode Toggle */}
        {/* <button className="dark-mode-toggle">🌙</button> */}
      </div>
    </nav>
  );
}

export default NavBar;
