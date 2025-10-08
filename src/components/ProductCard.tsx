import React from 'react';
import {type Product} from '../types/Product';
import '../styles/ProductCard.css';

interface ProductCardProps {
  product?: Product; // Make product optional to handle undefined
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  if (!product) {
    console.warn('ProductCard received undefined product');
    return <div>Product data is missing</div>;
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Category: {product.category}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;