import React from 'react';
import ProductCard from '../components/ProductCard';
import { type Product } from '../types/Product';
import '../styles/Products.css';

interface KitchenProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const Kitchen: React.FC<KitchenProps> = ({ products, addToCart }) => {
  const kitchenProducts = products.filter((product) => product.category === 'Kitchen');

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