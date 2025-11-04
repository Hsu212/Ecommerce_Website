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

  // Default to first colour
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

        {/* ----- IMAGE GALLERY ----- */}
        <div className="product-gallery">
          <div className="main-image-wrapper">
            <img src={currentImage} alt={`${product.name} - ${selectedColor.name}`} className="main-image" />
          </div>

          {/* Thumbnails */}
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

        {/* ----- INFO & COLOR SELECTOR ----- */}
        <div className="product-info-wrapper">
          <h1>{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: ${product.price.toFixed(2)}</p>
          <p className="product-category">Category: {product.category}</p>

          {/* Color Selector */}
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
                    setSelectedImageIndex(0); // reset to first image of new colour
                  }}
                />
              ))}
            </div>
            <p className="selected-color-name">{selectedColor.name}</p>
          </div>

          <button
          className="add-to-cart-btn"
          onClick={() => {
            const productWithColor = {
              ...product,
              selectedColor: {
                name: selectedColor.name,
                hex: selectedColor.hex,
                image: currentImage, // use current image
             },
            };
            addToCart(productWithColor);
            }}
            >Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
