import React from 'react';
import './Pricing.css';

const pricingPlans = [
  {
    title: "Basic",
    price: "$9/mo",
    features: ["Grammar Check", "Spell Correction", "Limited Languages"],
    highlight: false
  },
  {
    title: "Pro",
    price: "$19/mo",
    features: ["All Basic Features", "Advanced Suggestions", "Multilingual Support", "Priority Support"],
    highlight: true
  },
  {
    title: "Enterprise",
    price: "Contact Us",
    features: ["Custom Integration", "Team Access", "Dedicated Support"],
    highlight: false
  }
];

const Pricing = () => {
  return (
    <div className="pricing-section">
      <h2 className="pricing-title">Choose Your Plan</h2>
      <p className="pricing-subtitle">Flexible pricing for individuals, teams, and enterprises.</p>
      <div className="pricing-cards">
        {pricingPlans.map((plan, idx) => (
          <div
            className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}
            key={idx}
          >
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feat, i) => (
                <li key={i}>✓ {feat}</li>
              ))}
            </ul>
            <button className="choose-button">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
