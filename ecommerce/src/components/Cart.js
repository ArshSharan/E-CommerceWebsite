import React from 'react';
import '../styles/Cart.css';

function Cart({ cartItems, addToCart, removeFromCart, closeCart }) {
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-overlay">
      <div className="cart">
        <button className="close-button" onClick={closeCart}>X</button>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="item-details">
                  <h4>{item.title}</h4>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="item-controls">
                    <button onClick={() => removeFromCart(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="cart-total">
          <h3>Total: ${totalAmount.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
}

export default Cart;
