import React from 'react';
import './Feature.css';

const  features= [
  {
    title: "Real-time Grammar Correction",
    description: "Instantly detect and fix grammar errors using AI-powered language models.",
    icon: "📝"
  },
  {
    title: "Contextual Spell Checker",
    description: "Our system understands the context of your sentence and provides smart corrections.",
    icon: "🔍"
  },
  {
    title: "Multilingual Support",
    description: "Supports over 30 languages with native-level accuracy.",
    icon: "🌐"
  },
  {
    title: "User-Friendly Dashboard",
    description: "Clean, intuitive interface for managing documents, edits, and user preferences.",
    icon: "📊"
  }
];

const Feature = () => {
  return (
    <div className="feature-container" id="feature">
      <h1 className="feature-title">Explore Our Features</h1>
      <p className="feature-subtitle">Powerful tools designed to elevate your writing experience</p>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-heading">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
