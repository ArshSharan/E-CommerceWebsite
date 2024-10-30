import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar({ toggleCart, cartItemCount }) {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">FakeStore</Link>
      <div className="navbar-links">
        <Link to="/products">Products</Link>
        <button className="cart-button" onClick={toggleCart}>
          Cart ({cartItemCount})
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
