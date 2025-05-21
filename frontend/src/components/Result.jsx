import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Result.css';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [highlightedText, setHighlightedText] = useState(null);
  const [corrections, setCorrections] = useState(null);

  const text = location.state?.text || '';
  const matches = location.state?.matches || [];

  useEffect(() => {
    if (!text) {
      navigate('/');
      return;
    }

    processMatches();
  }, [text, matches]);

  const processMatches = () => {
    let updatedText = text;
    const correctionsArr = [];

    matches
      .slice()
      .sort((a, b) => b.offset - a.offset)
      .forEach((match) => {
        const { offset, length, replacements } = match;
        const suggestion = replacements[0]?.value || '';
        const incorrect = updatedText.slice(offset, offset + length);

        const highlighted = `<span class="highlight" title="Suggestion: ${suggestion}">${incorrect}</span>`;
        updatedText =
          updatedText.slice(0, offset) +
          highlighted +
          updatedText.slice(offset + length);

        correctionsArr.push(`"${incorrect}" → "${suggestion}"`);
      });

    setHighlightedText(updatedText);
    setCorrections(correctionsArr);
  };

  return (
    <div className="result-container">
      <h2 className="result-title">Spell Check Results</h2>

      <div className="highlight-section">
        <h2>Highlighted Text</h2>
        {highlightedText !== null ? (
          <div
            className="highlighted-text"
            dangerouslySetInnerHTML={{ __html: highlightedText }}
          />
        ) : (
          <p className="error-text">Error: Unable to analyze text.</p>
        )}
      </div>

      <div className="corrections-section">
        <h2>Corrections</h2>
        <ul className="corrections-list">
          {corrections === null ? (
            <li className="error-text">No analysis available.</li>
          ) : corrections.length > 0 ? (
            corrections.map((c, idx) => <li key={idx}>{c}</li>)
          ) : (
            <li>No spelling or grammar mistakes found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Result;
