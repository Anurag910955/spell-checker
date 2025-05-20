import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">Spell Checker</div>
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/business">Business</Link>
        <Link to="/help">Help</Link>
      </nav>

      <div className="navbar-actions">
        {!token ? (
          <>
            <Link to="/registration" className="navbar-register-button">Register</Link>
            <Link to="/login">
              <button className="btn btn-login">Log In</button>
            </Link>
          </>
        ) : (
          <button className="btn btn-login" onClick={handleLogout}>Log Out</button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
