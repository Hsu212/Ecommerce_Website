import React from 'react';
import ProductCard from '../components/ProductCard';
import { type Product } from '../types/Product';
import { mockProducts } from '../data/mockProducts';
import '../styles/Products.css';

interface LivingRoomProps {
  addToCart: (product: Product) => void;
}

const LivingRoom: React.FC<LivingRoomProps> = ({ addToCart }) => {
  const livingRoomProducts = mockProducts.filter(p => p.category === 'Living Room');

  return (
    <div className="products">
      <h1>Living Room Products</h1>
      <div className="product-list">
        {livingRoomProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default LivingRoom;
