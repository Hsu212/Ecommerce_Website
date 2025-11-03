import React from 'react';
import ProductCard from '../components/ProductCard';
import { type Product } from '../types/Product';
import '../styles/Products.css';

interface ProductsProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ products, addToCart }) => {
  return (
    <div className="products">
      <h1>All Products</h1>
      <div className="product-list">
        {products.map((product) => (
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

export default Products;
