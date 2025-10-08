import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/SearchBar.css';

const SearchBar: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`search-bar ${isFocused ? 'focused' : ''}`}>
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search products..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default SearchBar;