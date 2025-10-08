import React from 'react';
import ProductCard from '../components/ProductCard';
import { type Product } from '../types/Product';
import '../styles/Products.css';

interface SalesProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const Sales: React.FC<SalesProps> = ({ products, addToCart }) => {
  // Filter for sales products (assuming no isOnSale field yet)
  const salesProducts = products; // Update if isOnSale is added

  return (
    <div className="products">
      <h1>Sales Products</h1>
      <div className="product-list">
        {salesProducts.map((product) => (
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

export default Sales;