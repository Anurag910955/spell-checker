import React, { useState } from 'react';
import './registration.css';
import { register } from '../api/auth'; // Adjust path based on actual file location


const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage('');

    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }

    try {
      const data = await register(email, password);  // Use your API register function
      setMessage('Registration successful! You can now log in.');
      console.log('Token:', data.token);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-box">
        <h2 className="registration-title">Register</h2>
        <form className="registration-form" onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email"
            className="registration-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
  type="password"
  placeholder="Password"
  className="registration-input"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  autoComplete="new-password"
  required
/>
          <input
  type="password"
  placeholder="Confirm Password"
  className="registration-input"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
  autoComplete="new-password"
  required
/>
          <button type="submit" className="registration-button">Register</button>
        </form>
        {message && <p className="registration-message">{message}</p>}
        <p className="registration-text">
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default Registration;
