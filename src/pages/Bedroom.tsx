import React from 'react';
import ProductCard from '../components/ProductCard';
import { type Product } from '../types/Product';
import { mockProducts } from '../data/mockProducts';
import '../styles/Products.css';

interface BedroomProps {
  addToCart: (product: Product) => void;
}

const Bedroom: React.FC<BedroomProps> = ({ addToCart }) => {
  const bedroomProducts = mockProducts.filter(p => p.category === 'Bedroom');

  return (
    <div className="products">
      <h1>Bedroom Products</h1>
      <div className="product-list">
        {bedroomProducts.map((product) => (
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

export default Bedroom;
