import React from 'react';
import { type Product } from '../types/Product'; // Updated to uppercase Product
import '../styles/Cart.css';

interface CartProps {
  cartItems: Product[]; // Updated to uppercase Product
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>; // Updated to uppercase Product
}

const Cart: React.FC<CartProps> = ({ cartItems, setCartItems }) => {
  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
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
                    Color: <span style={{ color: item.selectedColor.hex }}>
                      {item.selectedColor.name}
                      </span>
                      </p>
                 )}
                 <p>Price: ${item.price.toFixed(2)}</p>
                 <p>Category: {item.category}</p>
                 <button onClick={() => removeFromCart(item.id)}>Remove</button>
                 </div>
                 </div>
          ))}
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
