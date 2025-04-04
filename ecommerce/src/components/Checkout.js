import React from "react";
import { jsPDF } from "jspdf"; // No autoTable needed
import "../styles/Checkout.css";

function Checkout({ cartItems, totalAmount }) {
  const generatePDF = () => {
    if (!cartItems || cartItems.length === 0) {
      alert("Your cart is empty! Add items before generating an invoice.");
      return;
    }

    const doc = new jsPDF();

    // Title and Header
    doc.setFontSize(20);
    doc.text("Invoice", 15, 20);
    doc.setFontSize(12);
    doc.text("Thank you for shopping with us!", 15, 30);

    // Column Headers
    let yPos = 40;
    doc.setFontSize(10);
    doc.text("Item", 15, yPos);
    doc.text("Quantity", 80, yPos);
    doc.text("Price ($)", 120, yPos);
    doc.text("Total ($)", 160, yPos);
    doc.line(15, yPos + 2, 190, yPos + 2); // Draw a horizontal line
    yPos += 10;

    // Adding Items to the Invoice
    cartItems.forEach((item) => {
      doc.text(item.title.substring(0, 20), 15, yPos);
      doc.text(String(item.quantity), 85, yPos);
      doc.text(`$${item.price.toFixed(2)}`, 120, yPos);
      doc.text(`$${(item.price * item.quantity).toFixed(2)}`, 160, yPos);
      yPos += 10;
    });

    // Total Amount
    doc.line(15, yPos + 2, 190, yPos + 2); // Draw a line before total
    doc.setFontSize(12);
    doc.text(`Total Amount: $${totalAmount.toFixed(2)}`, 15, yPos + 15);

    // Save PDF
    doc.save("Invoice.pdf");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="checkout-items">
          {cartItems.map((item) => (
            <div key={item.id} className="checkout-item">
              <img src={item.image} alt={item.title} className="checkout-item-image" />
              <div className="checkout-item-details">
                <h4>{item.title}</h4>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="checkout-total">
        <h3>Total: ${totalAmount ? totalAmount.toFixed(2) : "0.00"}</h3>
      </div>

      <button className="pay-now-btn" onClick={generatePDF} disabled={cartItems.length === 0}>
        Pay Now & Download Invoice
      </button>
    </div>
  );
}

export default Checkout;
