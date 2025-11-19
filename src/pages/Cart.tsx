import React, { useState } from 'react';
import { type Product } from '../types/Product';
import '../styles/Cart.css';
import VisaCard from '../assets/VisaCard.png';
import MasterCard from '../assets/MasterCard.png';
import PayPal from '../assets/PayPal.png';


interface CartProps {
  cartItems: Product[];
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Cart: React.FC<CartProps> = ({ cartItems, setCartItems }) => {
  const [voucherCode, setVoucherCode] = useState('');
  const [appliedVoucher, setAppliedVoucher] = useState(false);
  const [address, setAddress] = useState({
    fullName: '',
    street: '',
    city: '',
    zipCode: '',
    country: 'United States',
  });

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = appliedVoucher ? 0 : 9.99;
  const voucherDiscount = appliedVoucher ? 15.00 : 0;
  const total = subtotal + shipping - voucherDiscount;

  const applyVoucher = () => {
    if (voucherCode.trim().toLowerCase() === 'freeship') {
      setAppliedVoucher(true);
    }
  };

  return (
    <div className="cart">

      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
          Your cart is empty.
        </p>
      ) : (
        <div className="cart-layout">
          <div className="cart-items-section">
            <h2>Total Items</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.selectedColor?.image || item.image}
                  alt={item.name}
                />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  {item.selectedColor && (
                    <p className="selected-color">
                      Color:{' '}
                      <span style={{ color: item.selectedColor.hex }}>
                        {item.selectedColor.name}
                      </span>
                    </p>
                  )}
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-summary">
            <h2>Order Summary</h2>

            <div className="checkout-section">
              <h3>Shipping Address</h3>
              <input
                type="text"
                placeholder="Full Name"
                value={address.fullName}
                onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
              />
              <input
                type="text"
                placeholder="Street Address"
                value={address.street}
                onChange={(e) => setAddress({ ...address, street: e.target.value })}
              />
              <div className="form-row">
                <input
                  type="text"
                  placeholder="City"
                  value={address.city}
                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="ZIP Code"
                  value={address.zipCode}
                  onChange={(e) => setAddress({ ...address, zipCode: e.target.value })}
                />
              </div>
            </div>

            <div className="checkout-section">
              <h3>Shop Voucher</h3>
              <div className="voucher-input">
                <input
                  type="text"
                  placeholder="Enter code (try FREESHIP)"
                  value={voucherCode}
                  onChange={(e) => setVoucherCode(e.target.value)}
                  disabled={appliedVoucher}
                />
                <button onClick={applyVoucher} disabled={appliedVoucher || !voucherCode}>
                  {appliedVoucher ? 'Applied!' : 'Apply'}
                </button>
              </div>
              {appliedVoucher && (
                <p style={{ color: 'green', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                  FREESHIP applied — Free shipping + $15 off!
                </p>
              )}
            </div>

            <div className="checkout-section">
              <h3>Payment Method</h3>
              <label className="payment-option">
                <input type="radio" name="payment" defaultChecked />
                <img src={VisaCard} alt="Visa" className="logo" />
                <span className="label-text">Credit / Debit Card (Visa)</span>
              </label>

              <label className="payment-option">
                <input type="radio" name="payment" />
                <img src={MasterCard} alt="Mastercard" className="logo" />
                <span className="label-text">Mastercard</span>
              </label>

              <label className="payment-option">
                <input type="radio" name="payment" />
                <img src={PayPal} alt="PayPal" className="logo" />
                <span className="label-text">PayPal</span>
              </label>
            </div>

            <div className="price-breakdown">
              <div className="price-row">
                <span>Subtotal ({cartItems.length} items)</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="price-row">
                <span>Shipping</span>
                <span style={{ color: shipping === 0 ? 'green' : 'inherit' }}>
                  {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="price-row">
                <span>Voucher Discount</span>
                <span style={{ color: 'green' }}>-${voucherDiscount.toFixed(2)}</span>
              </div>
              <div className="price-total">
                <strong>Total Payment</strong>
                <strong>${total.toFixed(2)}</strong>
              </div>
            </div>

            <button className="checkout-btn">
              Complete Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;



