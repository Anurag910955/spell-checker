import React from 'react';
import './Business.css';

const Business = () => {
  return (
    <div className="business-container">
      <div className="business-header">
        <h1>Empower Your Business with AI</h1>
        <p>Transform the way your team communicates with real-time grammar and spelling enhancement tools.</p>
      </div>

      <div className="business-grid">
        <div className="business-card">
          <h2>Team Collaboration</h2>
          <p>Enable seamless editing and reviewing across departments with shared access and intelligent tracking.</p>
        </div>
        <div className="business-card">
          <h2>Custom AI Models</h2>
          <p>Train models on your organization’s style and vocabulary to get tailored writing recommendations.</p>
        </div>
        <div className="business-card">
          <h2>Data Security</h2>
          <p>All your business data is encrypted and securely stored, meeting enterprise-grade compliance standards.</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
