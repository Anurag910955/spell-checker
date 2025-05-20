import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Tesseract from 'tesseract.js'; // Import Tesseract.js
import './Result.css';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [highlightedText, setHighlightedText] = useState(null); // default: null
  const [corrections, setCorrections] = useState(null); // default: null
  const [ocrText, setOcrText] = useState(''); // State to hold OCR extracted text

  const text = location.state?.text;
  const file = location.state?.file; // The uploaded file

  useEffect(() => {
    if (!text && !file) {
      navigate('/');
      return;
    }

    // If file is provided, extract text using OCR
    if (file) {
      extractTextFromFile(file);
    }

    // If text is provided, check grammar
    if (text) {
      checkGrammar(text);
    }
  }, [text, file, navigate]);

  const extractTextFromFile = (file) => {
    // Use Tesseract.js to extract text from the image
    Tesseract.recognize(
      file,
      'eng', // Specify language as English
      {
        logger: (m) => console.log(m), // Optional: Show progress
      }
    )
      .then(({ data: { text } }) => {
        setOcrText(text); // Set the extracted OCR text
        checkGrammar(text); // Send extracted text to LanguageTool API
      })
      .catch((error) => {
        console.error('OCR extraction failed:', error);
      });
  };

  const checkGrammar = async (text) => {
    try {
      const response = await axios.post(
        'https://api.languagetool.org/v2/check',
        new URLSearchParams({
          text,
          language: 'en-US',
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      const matches = response.data.matches;
      let updatedText = text;
      const correctionsArr = [];

      // Process matches and prepare text with corrections
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
      setCorrections(correctionsArr); // No need to reverse
    } catch (error) {
      console.error('LanguageTool API error:', error.message);
      setHighlightedText(null);
      setCorrections(null);
    }
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
          <p className="error-text">Error: Unable to analyze text. Please try again later.</p>
        )}
      </div>

      <div className="corrections-section">
        <h2>Corrections</h2>
        <ul className="corrections-list">
          {corrections === null ? (
            <li className="error-text">Analysis failed. Corrections unavailable.</li>
          ) : corrections.length > 0 ? (
            corrections.map((c, idx) => <li key={idx}>{c}</li>)
          ) : (
            <li>No spelling or grammar mistakes found.</li>
          )}
        </ul>
      </div>

      {/* Display OCR Text if extracted */}
      {ocrText && (
        <div className="ocr-section">
          <h2>Extracted OCR Text</h2>
          <div className="ocr-text">
            <pre>{ocrText}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
