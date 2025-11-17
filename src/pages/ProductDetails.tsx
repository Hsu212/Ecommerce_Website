import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { type Product } from '../types/Product';
import '../styles/ProductDetails.css';

interface ProductDetailsProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ products, addToCart }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product || !selectedColor) {
    return <div>Product not found</div>;
  }

  const currentImages = selectedColor.images;
  const currentImage = currentImages[selectedImageIndex] || product.image;

  return (
    <div className="product-details">
      <div className="product-details-grid">

        <div className="product-gallery">
          <div className="main-image-wrapper">
            <img src={currentImage} alt={`${product.name} - ${selectedColor.name}`} className="main-image" />
          </div>

          <div className="thumbnail-strip">
            {currentImages.map((img, idx) => (
              <button
                key={idx}
                className={`thumbnail ${selectedImageIndex === idx ? 'active' : ''}`}
                onClick={() => setSelectedImageIndex(idx)}
              >
                <img src={img} alt={`View ${idx + 1}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="product-info-wrapper">
          <h1>{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">
            Price:{' '}
            {product.discountPercent ? (
            <>
              <span className="original-price">
                ${product.price.toFixed(2)}
              </span>{' '}
              <span className="discounted-price">
                ${(product.price * (1 - product.discountPercent / 100)).toFixed(2)}
              </span>
              <span className="discount-badge">
                -{product.discountPercent}%
              </span>
            </>
            ) : (
            <>${product.price.toFixed(2)}</>
           )}
          </p>
          <p className="product-category">Category: {product.category}</p>
          <div className="color-selector">
            <p className="color-label">Color:</p>
            <div className="color-options">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  className={`color-swatch ${selectedColor.name === c.name ? 'selected' : ''}`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                  onClick={() => {
                    setSelectedColor(c);
                    setSelectedImageIndex(0);                   }}
                />
              ))}
            </div>
            <p className="selected-color-name">{selectedColor.name}</p>
          </div>

          <div className="product-details-buttons">
            <button
              className="add-to-cart-btn"
              onClick={() => {
                const productWithColor = {
                  ...product,
                  selectedColor: {
                    name: selectedColor.name,
                    hex: selectedColor.hex,
                    image: currentImage,
                  },
                };
                addToCart(productWithColor);
              }}
            >
              Add to Cart
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
