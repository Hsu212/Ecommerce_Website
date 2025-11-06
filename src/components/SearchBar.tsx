import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { mockProducts } from '../data/mockProducts';
import '../styles/SearchBar.css';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Filter products by name or description
    const results = mockProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );

    // Navigate to products page with search results
    if (results.length > 0) {
      navigate('/products', { state: { searchResults: results, query } });
    } else {
      // No results – show all products
      navigate('/products', { state: { searchResults: mockProducts, query } });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={`search-bar ${isFocused ? 'focused' : ''}`}>
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </form>
  );
};

export default SearchBar;