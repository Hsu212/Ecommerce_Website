import React from 'react';
import ProductCard from '../components/ProductCard';
import { type Product } from '../types/Product';
import '../styles/Products.css';

interface BathroomProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const Bathroom: React.FC<BathroomProps> = ({ products, addToCart }) => {
  const bathroomProducts = products.filter((product) => product.category === 'Bathroom');

  return (
    <div className="products">
      <h1>Bathroom Products</h1>
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