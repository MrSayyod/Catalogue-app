import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="menu">
    <div className="container">
      <Link to="/">
        <h2 data-testid="header-text">Welcome to our store</h2>
      </Link>
    </div>
  </div>
);

export default Header;
