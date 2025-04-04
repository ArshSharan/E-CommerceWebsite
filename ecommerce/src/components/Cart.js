import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../styles/Cart.css';

function Cart({ cartItems, addToCart, removeFromCart, closeCart }) {
  const navigate = useNavigate();
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleAdd = (item) => {
    addToCart(item);
    toast.success(`Added one more: ${item.title}`, { icon: '🛒' });
  };

  const handleRemove = (id, title) => {
    removeFromCart(id);
    toast.info(`Removed one: ${title}`, { icon: '🗑️' });
  };

  return (
    <div className="cart-overlay">
      <div className="cart">
        <button className="close-button" onClick={closeCart}>X</button>
        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="item-details">
                  <h4>{item.title}</h4>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <div className="item-controls">
                    <button onClick={() => handleRemove(item.id, item.title)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleAdd(item)}>+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="cart-total">
          <h2>Total: ${totalAmount.toFixed(2)}</h2>
        </div>

        {cartItems.length > 0 && (
          <button 
            className="checkout"
            onClick={() => navigate('/checkout', { state: { cartItems } })}
          >
            Checkout
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
