import React from 'react';
import ProductCard from '../components/ProductCard';
import {type Product} from '../types/Product';
import '../styles/Products.css';

interface LivingRoomProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const LivingRoom: React.FC<LivingRoomProps> = ({ products, addToCart }) => {
  const livingRoomProducts = products.filter((product) => product.category === 'Living Room');

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