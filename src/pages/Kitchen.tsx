// src/pages/Kitchen.tsx
import React from 'react';
import ProductCard from '../components/ProductCard';
import { type Product } from '../types/Product';
import { mockProducts } from '../data/mockProducts';
import '../styles/Products.css';

interface KitchenProps {
  addToCart: (product: Product) => void;
}

const Kitchen: React.FC<KitchenProps> = ({ addToCart }) => {
  const kitchenProducts = mockProducts.filter(p => p.category === 'Kitchen');

  return (
    <div className="products">
      <h1>Kitchen Products</h1>
      <div className="product-list">
        {kitchenProducts.map((product) => (
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

export default Kitchen;