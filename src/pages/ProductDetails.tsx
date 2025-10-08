import React from 'react';
import { useParams } from 'react-router-dom';
import { type Product } from '../types/Product'; // Updated to uppercase Product
import '../styles/ProductDetails.css';

interface ProductDetailsProps {
  products: Product[]; // Updated to uppercase Product
  addToCart: (product: Product) => void; // Updated to uppercase Product
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ products, addToCart }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Category: {product.category}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;