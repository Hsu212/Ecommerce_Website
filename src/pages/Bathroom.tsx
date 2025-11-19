import React from 'react';
import ProductCard from '../components/ProductCard';
import { type Product } from '../types/Product';
import { mockProducts } from '../data/mockProducts';
import '../styles/Products.css';

interface BathroomProps {
  addToCart: (product: Product) => void;
}

const Bathroom: React.FC<BathroomProps> = ({ addToCart }) => {
  const bathroomProducts = mockProducts.filter(p => p.category === 'Bathroom');

  return (
    <div className="products">
      <div className="product-list">
        {bathroomProducts.map((product) => (
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

export default Bathroom;
