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
    discountPercent: 20,
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
    discountPercent: 20,
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
  {
    id: 6,
    name: 'Chest of drawers',
    price: 129.00,
    image: 'https://www.ikea.com/gb/en/images/products/malm-chest-of-6-drawers-white__0484891_pe621335_s5.jpg?f=xxs',
    description: 'Your clothes deserve better than the chair. Upgrade to a stylish chest of drawers and give your space the storage it deserves.',
    category: 'Bedroom',
    colors: [
      {
        name: 'White',
        hex: '#ffffffda',
        images: ['https://www.ikea.com/gb/en/images/products/malm-chest-of-6-drawers-white__0484891_pe621335_s5.jpg?f=xl','https://www.ikea.com/gb/en/images/products/malm-chest-of-6-drawers-white__1436508_pe984232_s5.jpg?f=xl'] 
      },
      {
        name: 'White stained oak veneer',
        hex: '#e8bd93ff',
        images: ['https://www.ikea.com/gb/en/images/products/malm-chest-of-6-drawers-white-stained-oak-veneer__1154558_pe886138_s5.jpg?f=xl','https://www.ikea.com/gb/en/images/products/malm-chest-of-6-drawers-white-stained-oak-veneer__1436515_pe984226_s5.jpg?f=xl']
      },
    ],
  },
  {
    id: 7,
    name: 'METOD kitchens combinations',
    price: 1233.00,
    image: 'https://www.ikea.com/gb/en/images/products/metod-kitchen-white-veddinge-white__1457725_pe992788_s5.jpg?f=xl',
    description: 'Planned with all the functions you need for storing, cooking, preparing food and washing up.',
    category: 'Kitchen',
    colors: [
      {
        name: 'White',
        hex: '#ffffff',
        images: ['https://www.ikea.com/gb/en/images/products/metod-kitchen-white-veddinge-white__1457725_pe992788_s5.jpg?f=xl','https://www.ikea.com/gb/en/images/products/metod-kitchen-white-veddinge-white__1473627_pe997835_s5.jpg?f=xl'] 
      },
    ],
  },
  {
    id: 8,
    name: 'French door fridge/freezer',
    price: 999.00,
    image: 'https://www.ikea.com/gb/en/images/products/ribbenas-french-door-fridge-freezer-ikea-700-freestanding-stainless-steel__1354036_pe952439_s5.jpg?f=xl',
    description: 'French door design with two side-by-side doors up top and pull-out freezer drawers below makes it easy to find and reach all your delicacies.',
    category: 'Kitchen',
    colors: [
      {
        name: 'Stainless steel',
        hex: '#dfe5eaff',
        images: ['https://www.ikea.com/gb/en/images/products/ribbenas-french-door-fridge-freezer-ikea-700-freestanding-stainless-steel__1354036_pe952439_s5.jpg?f=xl','https://www.ikea.com/gb/en/images/products/ribbenas-french-door-fridge-freezer-ikea-700-freestanding-stainless-steel__1354035_pe952441_s5.jpg?f=xl','https://www.ikea.com/gb/en/images/products/ribbenas-french-door-fridge-freezer-ikea-700-freestanding-stainless-steel__1341642_pe948862_s5.jpg?f=xl','https://www.ikea.com/gb/en/images/products/ribbenas-french-door-fridge-freezer-ikea-700-freestanding-stainless-steel__1337613_pe947940_s5.jpg?f=xl','https://www.ikea.com/gb/en/images/products/ribbenas-french-door-fridge-freezer-ikea-700-freestanding-stainless-steel__1337630_pe947967_s5.jpg?f=xl','https://www.ikea.com/gb/en/images/products/ribbenas-french-door-fridge-freezer-ikea-700-freestanding-stainless-steel__1337639_pe947975_s5.jpg?f=xl'] 
      },
      {
        name: 'Black stainless steel',
        hex: '#6e7275ff',
        images: ['https://www.ikea.com/gb/en/images/products/ribbenas-french-door-fridge-freezer-ikea-700-freestanding-black-stainless-steel__1354034_pe952440_s5.jpg?f=xl','https://www.ikea.com/gb/en/images/products/ribbenas-french-door-fridge-freezer-ikea-700-freestanding-black-stainless-steel__1354033_pe952442_s5.jpg?f=xl','https://www.ikea.com/gb/en/images/products/ribbenas-french-door-fridge-freezer-ikea-700-freestanding-black-stainless-steel__1341641_pe948861_s5.jpg?f=xl','https://www.ikea.com/gb/en/images/products/ribbenas-french-door-fridge-freezer-ikea-700-freestanding-black-stainless-steel__1337612_pe947946_s5.jpg?f=xl','https://www.ikea.com/gb/en/images/products/ribbenas-french-door-fridge-freezer-ikea-700-freestanding-black-stainless-steel__1337629_pe947966_s5.jpg?f=xl','https://www.ikea.com/gb/en/images/products/ribbenas-french-door-fridge-freezer-ikea-700-freestanding-black-stainless-steel__1337638_pe947974_s5.jpg?f=xl']
      },
    ],
  },
  {
    id: 9,
    name: 'Bathroom vanity with sink & faucet',
    price: 579.00,
    image: 'https://www.ikea.com/us/en/images/products/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-oak-effect__1217244_pe912641_s5.jpg?f=xl',
    description: 'Generous, full drawer storage capacity for all your essentials as piping is led through the back and not via a cut-out in the drawers. Drawers open all the way for a good overview.',
    category: 'Bathroom',
    colors: [
      {
        name: 'Oak effect',
        hex: '#D8B589',
        images: ['https://www.ikea.com/us/en/images/products/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-oak-effect__1217244_pe912641_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-oak-effect__1256583_pe925140_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-oak-effect__1242631_pe920327_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-oak-effect__1241502_pe919813_s5.jpg?f=xl'] 
      },
      {
        name: 'Brown oak effect',
        hex: '#A18D80',
        images: ['https://www.ikea.com/us/en/images/products/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-brown-oak-effect__1217241_pe912644_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-brown-oak-effect__1256580_pe925138_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-brown-oak-effect__1242635_pe920323_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-brown-oak-effect__1241502_pe919813_s5.jpg?f=xl']
      },
      {
        name: 'High gloss white',
        hex: '#FFFDFA',
        images: ['https://www.ikea.com/us/en/images/products/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-high-gloss-white__1217246_pe912642_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-high-gloss-white__1256585_pe925146_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-high-gloss-white__1242633_pe920325_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/aengsjoen-orrsjoen-bathroom-vanity-with-sink-faucet-high-gloss-white__1241502_pe919813_s5.jpg?f=xl']
      },
    ],
  },
  {
    id: 10,
    name: 'Room darkening curtains',
    price: 59.99,
    image: 'https://www.ikea.com/us/en/images/products/vilborg-room-darkening-curtains-1-pair-beige-with-heading-tape__0598849_pe677835_s5.jpg?f=xl',
    description: 'Densely woven curtains in a timeless color – great with most interiors and make your room feel cozy. Easy to hang and perfect to close when you want to protect against peering eyes, heat or cold draughts.',
    category: 'Living Room',
    colors: [
      {
        name: 'Beige',
        hex: '#F5F5DC',
        images: ['https://www.ikea.com/us/en/images/products/vilborg-room-darkening-curtains-1-pair-beige-with-heading-tape__0598849_pe677835_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/vilborg-room-darkening-curtains-1-pair-beige-with-heading-tape__0205042_pe360063_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/vilborg-room-darkening-curtains-1-pair-beige-with-heading-tape__0886411_pe606129_s5.jpg?f=xl'] 
      },
      {
        name: 'Grey',
        hex: '#808080',
        images: ['https://www.ikea.com/us/en/images/products/vilborg-room-darkening-curtains-1-pair-gray__0594844_pe675879_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/vilborg-room-darkening-curtains-1-pair-gray__1187779_pe899268_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/vilborg-room-darkening-curtains-1-pair-gray__1187778_pe899269_s5.jpg?f=xl']
      },
    ],
  },
  {
    id: 11,
    name: 'Ceiling Lights',
    price: 249.99,
    image: 'https://www.ikea.com/us/en/images/products/stockholm-2025-pendant-lamp-glass-brass-plated__1285162_pe933235_s5.jpg?f=xl',
    description: 'Whether you hang this chandelier over the dining table or in the living room, it will be an eye-catcher with its glass cylinders and brass-plated details.',
    category: 'Living Room',
    colors: [
      {
        name: 'Pendant lamp, glass/brass plated',
        hex: '#F6E7D3',
        images: ['https://www.ikea.com/us/en/images/products/stockholm-2025-pendant-lamp-glass-brass-plated__1285162_pe933235_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/stockholm-2025-pendant-lamp-glass-brass-plated__1426339_ph203276_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/stockholm-2025-pendant-lamp-glass-brass-plated__1426337_ph203249_s5.jpg?f=xl','https://www.ikea.com/us/en/images/products/stockholm-2025-pendant-lamp-glass-brass-plated__1426340_ph203126_s5.jpg?f=xl'] 
      },
    ],
  },
  /*{
    id: ,
    name: '',
    price: .00,
    image: '',
    description: '',
    category: '',
    colors: [
      {
        name: '',
        hex: '#',
        images: [''] 
      },
      {
        name: '',
        hex: '#',
        images: ['']
      },
    ],
  },*/
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
