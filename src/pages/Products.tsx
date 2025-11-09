// src/pages/Products.tsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { type Product } from '../types/Product';
import { mockProducts } from '../data/mockProducts';
import '../styles/Products.css';

interface ProductsProps {
  addToCart: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ addToCart }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const searchState = location.state as { searchResults?: Product[]; query?: string } | undefined;
  
  const allProducts = React.useMemo(() => 
    searchState ? [] : mockProducts, 
    [searchState]
  );

  const displayProducts = searchState?.searchResults || allProducts;
  const searchQuery = searchState?.query || '';

  const clearSearch = () => {
    navigate('/products', { replace: true, state: null });
  };

  return (
    <div className="products">
      <h1>{searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}</h1>
      
      {searchQuery && (
        <div className="search-header">
          <p>
            Found {displayProducts.length} result{displayProducts.length !== 1 ? 's' : ''} for "{searchQuery}"
          </p>
          <button onClick={clearSearch} className="clear-search-btn">
            Clear Search
          </button>
        </div>
      )}

      <div className="product-list">
        {displayProducts.length === 0 ? (
          <p>No products found. <button onClick={clearSearch} className="clear-search-btn">Show All</button></p>
        ) : (
          displayProducts.map((product: Product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
