import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Arsh's Website</h1>
          <p>Discover the finest collection of premium products.</p>
          <a href="/products" className="shop-btn">Start Shopping</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
