import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import LivingRoom from './pages/LivingRoom';
import Bedroom from './pages/Bedroom';
import Kitchen from './pages/Kitchen';
import Bathroom from './pages/Bathroom';
import Sales from './pages/Sales';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/App.css';
import { type Product } from './types/Product';
import AuthWrapper from './components/auth/AuthWrapper';
import { mockProducts } from './data/mockProducts'; // ← NEW

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  
  
  return (
    <div className="app" data-theme={theme}>
      <ErrorBoundary>
        <Header cartCount={cartItems.length} toggleTheme={toggleTheme} theme={theme} />
        <main>
          <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<Products addToCart={addToCart} />} />
  <Route path="/products/:id" element={<ProductDetails products={mockProducts} addToCart={addToCart} />} />
  <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
  <Route path="/living-room" element={<LivingRoom addToCart={addToCart} />} />
  <Route path="/bedroom" element={<Bedroom addToCart={addToCart} />} />
  <Route path="/kitchen" element={<Kitchen addToCart={addToCart} />} />
  <Route path="/bathroom" element={<Bathroom addToCart={addToCart} />} />
  <Route path="/sales" element={<Sales addToCart={addToCart} />} />
  <Route path="/profile" element={<AuthWrapper />} />
</Routes>
        </main>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default App;
