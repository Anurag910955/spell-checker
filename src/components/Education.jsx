import React from 'react';
import './Education.css';

const educationData = [
  {
    institution: "ABC  University",
    degree: "Bachelor of Technology",
    year: "2021 - 2025",
    description: "Focused on Learning Core skills",
  },
  {
    institution: "XYZ Higher Secondary School",
    degree: "12th Grade",
    year: "2019 - 2021",
    description: "Specialized in Physics, Chemistry, and Mathematics.",
  },
];

const Education = () => {
  return (
    <div className="education-section">
      <h2 className="education-title">Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <h3>{edu.institution}</h3>
            <p className="degree">{edu.degree}</p>
            <span className="year">{edu.year}</span>
            <p className="description">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
