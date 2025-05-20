import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Feature from './components/Feature';
import Pricing from './components/Pricing';
import Business from './components/Business';
import Education from './components/Education';
import Help from './components/Help';
import Home from './components/Home';
import Registration from './components/registration';
import ForgotPassword from './components/ForgotPassword';
import Result from './components/Result';
import About from './components/About'; 

// ✅ Wrapper to protect routes
const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('token');
  return token ? element : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/education" element={<Education />} />
        <Route path="/business" element={<Business />} />
        <Route path="/help" element={<Help />} />

        {/* Protected Routes */}
        <Route path="/" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/result" element={<ProtectedRoute element={<Result />} />} />
      </Routes>
    </Router>
  );
};

export default App;
