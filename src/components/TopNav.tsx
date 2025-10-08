import React from 'react';
import { FaShoppingCart, FaUser, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import '../styles/TopNav.css';

interface TopNavProps {
  cartCount: number;
  toggleTheme: () => void;
  theme: 'light' | 'dark';
  isScrolled: boolean;
}

const TopNav: React.FC<TopNavProps> = ({ cartCount, toggleTheme, theme, isScrolled }) => {
  return (
    <div className="top-nav">
      <div className="logo">Furniture Store</div>
      <div className={`search-bar-container ${isScrolled ? 'visible' : 'hidden'}`}>
        {isScrolled && <SearchBar />}
      </div>
      <div className="nav-items">
        <select className="language-select" defaultValue="en">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
        <Link to="/profile" className="nav-icon">
          <FaUser />
          <span>Profile</span>
        </Link>
        <div className="nav-icon favorites">
          <FaHeart />
          <span>0</span>
        </div>
        <Link to="/cart" className="nav-icon cart">
          <FaShoppingCart />
          <span>{cartCount}</span>
        </Link>
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </div>
  );
};

export default TopNav;