import React from 'react';
import ProductCard from '../components/ProductCard';
import { type Product } from '../types/Product';
import { mockProducts } from '../data/mockProducts';
import '../styles/Products.css';

interface SalesProps {
  addToCart: (product: Product) => void;
}

const Sales: React.FC<SalesProps> = ({ addToCart }) => {
  const salesProducts = mockProducts.filter(p => p.discountPercent && p.discountPercent > 0);

  if (salesProducts.length === 0) {
    return (
      <div className="products">
        <h1>Sales Products</h1>
        <p>No products on sale at the moment.</p>
      </div>
    );
  }

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
