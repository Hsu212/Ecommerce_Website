import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MainNav.css';

const MainNav: React.FC = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><Link to="/products">All Products</Link></li>
        <li><Link to="/sales">Sales</Link></li>
        <li><Link to="/living-room">Living Room</Link></li>
        <li><Link to="/bedroom">Bedroom</Link></li>
        <li><Link to="/kitchen">Kitchen</Link></li>
        <li><Link to="/bathroom">Bathroom</Link></li>
      </ul>
    </nav>
  );
};

export default MainNav;