import React from 'react';
import './Return.css';

function Return() {
  return (
    <div className="return-policy-container">
      <h1 className="page-title">Return & Refund Policy</h1>

      <h2>1. Replacement for Defective or Wrong Items</h2>
      <p>
        If your product is defective or incorrect, let us know within 48 hours of delivery.
        We will arrange a replacement within 7 days, provided the item is unused, in original
        packaging, and includes the invoice and all accessories. Return pickup must be done
        within 15 days of delivery. A ₹100 fee may apply if pickup is missed.
      </p>

      <h2>2. Order Cancellation / Change of Mind</h2>
      <p>
        You can cancel your order before it is delivered. If already shipped, you can refuse the
        package or return it following the same conditions as above. The item must be unused and
        in its original packaging with all accessories.
      </p>

      <h2>3. Items Not Eligible for Return</h2>
      <ul>
        <li>Innerwear and socks</li>
        <li>Beauty and personal care products</li>
        <li>Food items</li>
        <li>Jewelry</li>
        <li>Free gifts or sale items</li>
      </ul>
    </div>
  );
}

export default Return;
