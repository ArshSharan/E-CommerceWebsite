import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'; 
import { FaHeart } from 'react-icons/fa'; // Import heart icon
import 'react-toastify/dist/ReactToastify.css';
import '../styles/ProductCard.css';

function ProductCard({ product, addToCart, toggleWishlist, wishlist }) {
  const isWishlisted = wishlist.includes(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`🛒 Added "${product.title}" to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      
      <div className="Card-buttons" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={handleAddToCart} style={{ marginRight: '20px' }}>
          Add to Cart
        </button>

        {/* Wishlist Button */}
        <button 
          className={`wishlist-btn ${isWishlisted ? "wishlisted" : ""}`} 
          onClick={() => toggleWishlist(product.id)}
        >
          <FaHeart className="heart-icon" />
        </button>

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
