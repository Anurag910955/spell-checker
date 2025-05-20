import React, { useState } from 'react';
import './ForgotPassword.css'; // Create styling as needed

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset link sent to:", email);
    alert("If this email is registered, a password reset link will be sent.");
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter your Login:</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
