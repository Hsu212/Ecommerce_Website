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
    image: 'https://www.ikea.com/us/en/images/products/uppland-sofa-blekinge-white__0818565_pe774487_s5.jpg?f=xl',
    description: 'A sleek, comfortable sofa for modern living rooms.',
    category: 'Living Room',
    colors: [
      {
        name: 'White',
        hex: '#ffffffff',
        images: ['https://www.ikea.com/us/en/images/products/uppland-sofa-blekinge-white__0818565_pe774487_s5.jpg?f=xl'] 
      },
      {
        name: 'Midnight Blue',
        hex: '#1e3a8a',
        images: ['https://www.ikea.com/us/en/images/products/uppland-sofa-kilanda-dark-blue__1194843_pe902111_s5.jpg?f=xl']
      },
      {
        name: 'Forest Green',
        hex: '#166534',
        images: ['https://www.ikea.com/us/en/images/products/uppland-sofa-hakebo-gray-green__1194851_pe902101_s5.jpg?f=xl']
      },
    ],
  },
  {
    id: 2,
    name: 'Wooden Dining Table',
    price: 299.99,
    image: 'https://www.ikea.com/us/en/images/products/tonstad-table-brown-stained-oak-veneer__1393503_pe966259_s5.jpg?f=xl',
    description: 'A sturdy dining table crafted from high-quality oak.',
    category: 'Kitchen',
    colors: [
      {
        name: 'Dark Walnut',
        hex: '#5d4037',
        images: ['https://www.ikea.com/us/en/images/products/tonstad-table-brown-stained-oak-veneer__1393503_pe966259_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/tonstad-table-brown-stained-oak-veneer__1444192_pe987438_s5.jpg?f=xl']
      },
      {
        name: 'Oak veneer',
        hex: '#e6ce95ff',
        images: ['https://www.ikea.com/us/en/images/products/tonstad-table-oak-veneer__1467538_pe995759_s5.jpg?f=xl', 'https://www.ikea.com/us/en/images/products/tonstad-table-oak-veneer__1444181_pe987430_s5.jpg?f=xl']
      },
      {
        name: 'White',
        hex: '#ffffffff',
        images: ['https://www.ikea.com/us/en/images/products/tonstad-table-off-white__1393508_pe966264_s5.jpg?f=xl', 'https://www.ikea.com/us/en/images/products/tonstad-table-off-white__1444196_pe987442_s5.jpg?f=xl']
      },
    ],
  },
  {
    id: 3,
    name: 'Cozy Armchair',
    price: 199.99,
    image: 'https://www.ikea.com/us/en/images/products/ekenaeset-armchair-kilanda-light-beige__1109687_pe870153_s5.jpg?f=xl',
    description: 'A plush armchair ideal for relaxing evenings.',
    category: 'Living Room',
    colors: [
      {
        name: 'Cream Beige',
        hex: '#f5f5dc',
        images: ['https://www.ikea.com/us/en/images/products/ekenaeset-armchair-kilanda-light-beige__1109687_pe870153_s5.jpg?f=xl', 'https://www.ikea.com/us/en/images/products/ekenaeset-armchair-kilanda-light-beige__1179060_pe895831_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/ekenaeset-armchair-kilanda-light-beige__1110707_pe870568_s5.jpg?f=xl']
      },
      {
        name: 'Gray Turquoise',
        hex: '#5E7D7E',
        images: ['https://www.ikea.com/us/en/images/products/ekenaeset-armchair-kelinge-gray-turquoise__1109684_pe870150_s5.jpg?f=xl', 'https://www.ikea.com/us/en/images/products/ekenaeset-armchair-kelinge-gray-turquoise__1179059_pe895832_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/ekenaeset-armchair-kelinge-gray-turquoise__1109682_pe870149_s5.jpg?f=xl']
      },
    ],
  },
  {
    id: 4,
    name: 'Bathroom mirrors',
    price: 339.00,
    image: 'https://www.ikea.com/us/en/images/products/faxaelven-mirror-cabinet-w-built-in-lighting-oak-effect__1198705_pe904180_s5.jpg?f=xl',
    description: 'Mirror cabinet w built-in lighting, effect.',
    category: 'Bathroom',
    colors: [
      {
        name: 'Oak effect',
        hex: '#D8B589',
        images: ['https://www.ikea.com/us/en/images/products/faxaelven-mirror-cabinet-w-built-in-lighting-oak-effect__1198705_pe904180_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/faxaelven-mirror-cabinet-w-built-in-lighting-oak-effect__1256646_pe925199_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/faxaelven-mirror-cabinet-w-built-in-lighting-oak-effect__1356222_pe953329_s5.jpg?f=xl'] 
      },
      {
        name: 'Brown Oak effect',
        hex: '#87633A',
        images: ['https://www.ikea.com/us/en/images/products/faxaelven-mirror-cabinet-w-built-in-lighting-brown-oak-effect__1198704_pe904179_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/faxaelven-mirror-cabinet-w-built-in-lighting-brown-oak-effect__1256640_pe925194_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/faxaelven-mirror-cabinet-w-built-in-lighting-brown-oak-effect__1356220_pe953331_s5.jpg?f=xl']
      },
      {
        name: 'White',
        hex: '#ffffffff',
        images: ['https://www.ikea.com/us/en/images/products/faxaelven-mirror-cabinet-w-built-in-lighting-white__1198706_pe904181_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/faxaelven-mirror-cabinet-w-built-in-lighting-white__1256558_pe925116_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/faxaelven-mirror-cabinet-w-built-in-lighting-white__1356215_pe953326_s5.jpg?f=xl']

      },
    ],
  },
  {
    id: 5,
    name: 'Upholstered Beds',
    price: 299.00,
    image: 'https://www.ikea.com/us/en/images/products/ramnefjaell-upholstered-bed-frame-kilanda-light-beige-luroey__1258172_pe927371_s5.jpg?f=xl',
    description: 'upholstered beds are available in colors and styles to suit every sleeper’s personal preference.',
    category: 'Bedroom',
    colors: [
      {
        name: 'Kilanda light beige',
        hex: '#90533174',
        images: ['https://www.ikea.com/us/en/images/products/ramnefjaell-upholstered-bed-frame-kilanda-light-beige-luroey__1258172_pe927371_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/ramnefjaell-upholstered-bed-frame-kilanda-light-beige-luroey__1258175_pe927363_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/ramnefjaell-upholstered-bed-frame-kilanda-light-beige-luroey__1258195_pe927382_s5.jpg?f=xl'] 
      },
      {
        name: 'Klovsta gray/white',
        hex: '#cac6c789',
        images: ['https://www.ikea.com/us/en/images/products/ramnefjaell-upholstered-bed-frame-klovsta-gray-white-luroey__1258176_pe927373_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/ramnefjaell-upholstered-bed-frame-klovsta-gray-white-luroey__1258179_pe927365_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/ramnefjaell-upholstered-bed-frame-klovsta-gray-white-luroey__1258198_pe927384_s5.jpg?f=xl']
      },
    ],
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
