import React from 'react';
import { type Product } from '../types/Product';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { FaHeart } from 'react-icons/fa';
import '../styles/ProductCard.css';

interface ProductCardProps {
  product?: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  const navigate = useNavigate();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  if (!product) {
    console.warn('ProductCard received undefined product');
    return <div>Product data is missing</div>;
  }

  const goToDetails = () => {
    navigate(`/products/${product.id}`);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const hasMultipleColors = product.colors.length > 1;

  return (
    <div className="product-card" onClick={goToDetails} style={{ cursor: 'pointer' }}>
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
        
        {hasMultipleColors && (
          <div className="color-badge">
            View {product.colors.length} colors
          </div>
        )}

        {/* Favorite Heart */}
        <button
          className={`favorite-btn ${isFavorite(product.id) ? 'active' : ''}`}
          onClick={toggleFavorite}
          title={isFavorite(product.id) ? 'Remove from favorites' : 'Add to favorites'}
        >
          <FaHeart />
        </button>
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="product-price">
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
        <p>Category: {product.category}</p>

        <button
          className="add-to-cart-btn"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
