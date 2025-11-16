import React from 'react';
import { FaShoppingCart, FaUser, FaHeart, FaGlobe, FaSun, FaMoon } from 'react-icons/fa';
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
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('Language selected:', event.target.value);
  };

  return (
    <div className="top-nav">
      <Link to="/" className="logo">
        SM Home
      </Link>
      <div className={`search-bar-container ${isScrolled ? 'visible' : 'hidden'}`}>
        {isScrolled && <SearchBar />}
      </div>
      <div className="nav-items">
        <div className="nav-icon language">
          <FaGlobe />
          <select onChange={handleLanguageChange} defaultValue="en">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>
        <Link to="/profile" className="nav-icon">
          <FaUser />
          
        </Link>
        <Link to="/favorites" className="nav-icon favorites">
          <FaHeart />
        </Link>
        <Link to="/cart" className="nav-icon cart">
          <FaShoppingCart />
          <span>{cartCount}</span>
        </Link>
        <div className="nav-icon theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </div>
      </div>
    </div>
  );
};

export default TopNav;

