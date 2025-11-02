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

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const mockProducts: Product[] = [
    {
      id: 1,
      name: 'Modern Sofa',
      price: 599.99,
      image: '#',
      description: 'A sleek, comfortable sofa for modern living rooms.',
      category: 'Living Room',
    },
    {
      id: 2,
      name: 'Wooden Dining Table',
      price: 299.99,
      image: '#',
      description: 'A sturdy dining table crafted from high-quality oak.',
      category: 'Kitchen',
    },
    {
      id: 3,
      name: 'Cozy Armchair',
      price: 199.99,
      image: '#',
      description: 'A plush armchair ideal for relaxing evenings.',
      category: 'Living Room',
    },
    {
      id: 4,
      name: 'Cozy Armchair',
      price: 199.99,
      image: '#',
      description: 'A plush armchair ideal for relaxing evenings.',
      category: 'Living Room',
    },
    {
      id: 5,
      name: 'Cozy Armchair',
      price: 199.99,
      image: '#',
      description: 'A plush armchair ideal for relaxing evenings.',
      category: 'Living Room',
    },
    {
      id: 6,
      name: 'Cozy Armchair',
      price: 199.99,
      image: '#',
      description: 'A plush armchair ideal for relaxing evenings.',
      category: 'Living Room',
    },
    {
      id: 7,
      name: 'Cozy Armchair',
      price: 199.99,
      image: '#',
      description: 'A plush armchair ideal for relaxing evenings.',
      category: 'Living Room',
    },
    {
      id: 8,
      name: 'Cozy Armchair',
      price: 199.99,
      image: '#',
      description: 'A plush armchair ideal for relaxing evenings.',
      category: 'Living Room',
    },
    {
      id: 9,
      name: 'Cozy Armchair',
      price: 199.99,
      image: '#',
      description: 'A plush armchair ideal for relaxing evenings.',
      category: 'Living Room',
    },
    {
      id: 10,
      name: 'Cozy Armchair',
      price: 199.99,
      image: '#',
      description: 'A plush armchair ideal for relaxing evenings.',
      category: 'Living Room',
    },
    {
      id: 11,
      name: 'Cozy Armchair',
      price: 199.99,
      image: '#',
      description: 'A plush armchair ideal for relaxing evenings.',
      category: 'Living Room',
    },
  ];

  return (
    <div className="app" data-theme={theme}>
      <ErrorBoundary>
        <Header cartCount={cartItems.length} toggleTheme={toggleTheme} theme={theme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products products={mockProducts} addToCart={addToCart} />} />
            <Route path="/products/:id" element={<ProductDetails products={mockProducts} addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/living-room" element={<LivingRoom products={mockProducts} addToCart={addToCart} />} />
            <Route path="/bedroom" element={<Bedroom products={mockProducts} addToCart={addToCart} />} />
            <Route path="/kitchen" element={<Kitchen products={mockProducts} addToCart={addToCart} />} />
            <Route path="/bathroom" element={<Bathroom products={mockProducts} addToCart={addToCart} />} />
            <Route path="/sales" element={<Sales products={mockProducts} addToCart={addToCart} />} />
            <Route path="/profile" element={<AuthWrapper />} />
          </Routes>
        </main>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default App;
