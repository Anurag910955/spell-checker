// About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Spell Checker</h1>
        <p>
          Empowering users with smart writing tools to ensure your words are always correct,
          confident, and professional.
        </p>
      </section>

      {/* Personal Introduction */}
      <section className="about-intro">
        <img
          src="/anuragsen.jpg"
          alt="Anurag Sen"
          className="about-image"
        />
        <div>
          <h2>Hi, I'm Anurag Sen</h2>
          <p>
            As the creator of Spell Checker, I'm passionate about technology and communication. This
            platform was born out of a vision to make writing simpler and smarter for everyone.
          </p>
          <p>
            With experience in full-stack development and AI tools, I wanted to build a product that
            helps both professionals and students express themselves better.
          </p>
          <p>
            I'm also proud to serve as the PR Executive at MUGDSC and continue learning and building
            for social impact.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="about-features">
        <h2>What Makes Spell Checker Great?</h2>
        <div className="about-grid">
          {["Real-Time Correction", "Smart Context Detection", "Mobile Friendly", "Secure and Private", "Multilingual Support", "Lightweight & Fast"].map((title, index) => (
            <div key={index} className="about-card">
              <h3>{title}</h3>
              <p>
                {
                  {
                    0: "Instant suggestions for spelling and grammar while you type.",
                    1: "Understands context to avoid false corrections.",
                    2: "Use it anywhere, on any device, hassle-free.",
                    3: "We respect your privacy and never store your data.",
                    4: "Check texts in English, Hindi, and more (coming soon!).",
                    5: "No need to download anything – fast and responsive interface."
                  }[index]
                }
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To make writing easier, smarter, and more inclusive for every person who wants their
          ideas to be heard clearly and confidently.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="about-why">
        <h2>Why Choose Spell Checker?</h2>
        <div className="about-why-grid">
          <ul>
            <li>✔️ Built using modern tech stack (React + AI API)</li>
            <li>✔️ Focused on real use cases (students, professionals)</li>
            <li>✔️ Constantly updated with new features</li>
            <li>✔️ User-focused design and accessibility</li>
          </ul>
          <ul>
            <li>✔️ Minimalistic, distraction-free interface</li>
            <li>✔️ No ads or spam – clean experience</li>
            <li>✔️ Transparent and community-driven roadmap</li>
            <li>✔️ Built by a passionate developer (that's me!)</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <h2>Ready to write smarter?</h2>
        <p>
          Join our community and experience the magic of effortless writing with Spell Checker.
        </p>
        <a href="/registration">
          <button>Create Your Account</button>
        </a>
      </section>
    </div>
  );
};

export default About;