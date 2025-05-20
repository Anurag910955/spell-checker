import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-logo">Spell Checker</div>

      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      <nav className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/about" onClick={handleLinkClick}>About</Link> {/* ✅ Added */}
        <Link to="/features" onClick={handleLinkClick}>Features</Link>
        <Link to="/pricing" onClick={handleLinkClick}>Pricing</Link>
        <Link to="/business" onClick={handleLinkClick}>Business</Link>
        <Link to="/help" onClick={handleLinkClick}>Help</Link>
      </nav>

      <div className="navbar-actions">
        {!token ? (
          <>
            <Link to="/registration" className="navbar-register-button" onClick={handleLinkClick}>Register</Link>
            <Link to="/login" onClick={handleLinkClick}>
              <button className="btn btn-login">Log In</button>
            </Link>
          </>
        ) : (
          <button className="btn btn-login" onClick={() => { handleLogout(); setMenuOpen(false); }}>
            Log Out
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
