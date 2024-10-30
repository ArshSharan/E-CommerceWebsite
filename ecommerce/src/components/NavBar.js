import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar({ toggleCart, cartItemCount }) {
  const navigate = useNavigate();

  const goToProducts = () => navigate('/products');

  return (
    <nav className="navbar">
      <button className="navbar-logo" onClick={() => navigate('/')}>FakeStore</button>
      <div className="navbar-links">
        <button onClick={goToProducts} className="nav-button">Products</button>
        <button className="cart-button" onClick={toggleCart}>
          Cart ({cartItemCount})
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
