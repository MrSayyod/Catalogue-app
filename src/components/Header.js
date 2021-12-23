import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => (
  <div className="menu">
    <div className="container">
      <Router>
        <Link to="/">
          <h2 data-testid="header-text">Welcome to our store</h2>
        </Link>
      </Router>
    </div>
  </div>
);

export default Header;
