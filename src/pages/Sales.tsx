import React from 'react';
import ProductCard from '../components/ProductCard';
import { type Product } from '../types/Product';
import '../styles/Products.css';

interface SalesProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const Sales: React.FC<SalesProps> = ({ products, addToCart }) => {
  // Filter products that have a discount
  const salesProducts = products.filter(p => p.discountPercent && p.discountPercent > 0);

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
