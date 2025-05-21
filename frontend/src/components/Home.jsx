import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mammoth from 'mammoth';
import * as pdfjsLib from 'pdfjs-dist';
import Tesseract from 'tesseract.js';
import './Home.css';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

const Home = () => {
  const [fileName, setFileName] = useState('');
  const [text, setText] = useState('');
  const dragInputRef = useRef(null);
  const chooseInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      processFile(file);
    }
  };

  const handleBoxClick = () => dragInputRef.current.click();
  const handleChooseClick = () => chooseInputRef.current.click();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      processFile(file);
    }
  };

  const handleRefresh = () => {
    setFileName('');
    setText('');
  };

  const checkSpelling = async () => {
    if (text.trim() === '') {
      alert('Please enter or upload some text!');
      return;
    }

    try {
      const res = await fetch('https://api.languagetoolplus.com/v2/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          text: text,
          language: 'en-US',
        }),
      });

      const data = await res.json();
      navigate('/result', { state: { text, matches: data.matches } });
    } catch (err) {
      console.error('Spell check failed:', err);
      alert('Error checking spelling.');
    }
  };

  const processFile = (file) => {
    setFileName(file.name);
    const extension = file.name.split('.').pop().toLowerCase();
    const reader = new FileReader();

    switch (extension) {
      case 'txt':
        reader.onload = (e) => setText(e.target.result);
        reader.readAsText(file);
        break;

      case 'docx':
        reader.onload = async (e) => {
          const arrayBuffer = e.target.result;
          const result = await mammoth.extractRawText({ arrayBuffer });
          setText(result.value);
        };
        reader.readAsArrayBuffer(file);
        break;

      case 'pdf':
        reader.onload = async (e) => {
          const typedArray = new Uint8Array(e.target.result);
          const pdf = await pdfjsLib.getDocument(typedArray).promise;
          let extractedText = '';
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            const textItems = content.items.map((item) => item.str);
            extractedText += textItems.join(' ') + '\n';
          }
          setText(extractedText);
        };
        reader.readAsArrayBuffer(file);
        break;

      case 'png':
      case 'jpg':
      case 'jpeg':
        Tesseract.recognize(file, 'eng')
          .then(({ data: { text } }) => setText(text))
          .catch((err) => {
            console.error('OCR error:', err);
            alert('Failed to extract text from image.');
          });
        break;

      default:
        alert('Unsupported file format. Please upload a .txt, .docx, .pdf, or image file.');
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-heading">Upload your screenshot of the text 📸✨  </h1>

      <div className="upload-section">
        <div
          className="drag-drop-box"
          onClick={handleBoxClick}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <p>{fileName ? `File: ${fileName}` : 'Click or drag and drop your file here'}</p>
          <input
            type="file"
            ref={dragInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>

        <div className="button-row">
          <button className="common-btn" onClick={checkSpelling}>Submit</button>
          <button className="common-btn" onClick={handleChooseClick}>Choose File</button>
          <input
            type="file"
            ref={chooseInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>
      </div>

      <div className="text-input-section">
        <textarea
          className="text-area"
          placeholder="Enter your text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="button-group">
        <button className="common-btn" onClick={handleRefresh}>Refresh</button>
        <button className="common-btn" onClick={checkSpelling}>Submit</button>
      </div>
    </div>
  );
};

export default Home;
