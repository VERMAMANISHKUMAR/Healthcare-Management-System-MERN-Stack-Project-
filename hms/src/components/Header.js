import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Style/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <h1>Healthcare System</h1>
      
      {/* Menu Icon for Mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
      </div>

      <nav className={menuOpen ? "nav-active" : ""}>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <div className='search-btn'> 
          <button>Search</button>
        </div>
        <div className="sign-in-button">
          <Link to="/signin">
            <button>Sign In</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
