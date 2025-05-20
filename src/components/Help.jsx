import React from 'react';
import './Help.css';

const Help = () => {
  return (
    <div className="help-container">
      <div className="help-hero">
        <h1>Need Help?</h1>
        <p>We're here to answer your questions and guide you every step of the way.</p>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How does the grammar checker work?</h3>
          <p>Our tool uses AI models to analyze your text in real-time and suggest grammar, punctuation, and style corrections.</p>
        </div>

        <div className="faq-item">
          <h3>Is my data secure?</h3>
          <p>Yes, your text is processed securely and never stored or shared. We prioritize your privacy.</p>
        </div>

        <div className="faq-item">
          <h3>Do I need to create an account?</h3>
          <p>You can use basic features without an account, but signing up gives access to advanced tools and history tracking.</p>
        </div>

        <div className="faq-item">
          <h3>What languages are supported?</h3>
          <p>We currently support over 30 languages and are constantly adding more.</p>
        </div>
      </div>

      <div className="contact-support">
        <h2>Still Need Help?</h2>
        <p>Reach out to our support team at <a href="mailto:adityaakolkar28@gmail.com">adityaakolkar28@gmail.com</a> — we're happy to assist! FUCK YOU</p>
      </div>
    </div>
  );
};

export default Help;
