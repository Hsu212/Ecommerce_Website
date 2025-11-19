import React from 'react';
import ProductCard from '../components/ProductCard';
import { useFavorites } from '../context/FavoritesContext';
import '../styles/Favorites.css';

const Favorites: React.FC = () => {
  const { favorites } = useFavorites();

  return (
    <div className="favorites">
      {favorites.length === 0 ? (
        <>
          <p className="empty-message">You haven't added any favorites yet.</p>
          <p className="empty-subtext">Tap the heart on any product to save it here!</p>
        </>
      ) : (
        <div className="favorites-list">
          {favorites.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={() => {}} 
            />
          ))}
        </div>
      )}
    </div>
  );
};


export default Favorites;
