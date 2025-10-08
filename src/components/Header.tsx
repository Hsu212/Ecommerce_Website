import React, { useState, useEffect } from 'react';
import TopNav from './TopNav';
import MainNav from './MainNav';
import SearchBar from './SearchBar';
import '../styles/Header.css';

interface HeaderProps {
  cartCount: number;
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

const Header: React.FC<HeaderProps> = ({ cartCount, toggleTheme, theme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <TopNav cartCount={cartCount} toggleTheme={toggleTheme} theme={theme} isScrolled={isScrolled} />
      <MainNav />
      <div className={`search-bar-container ${isScrolled ? 'hidden' : 'visible'}`}>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;