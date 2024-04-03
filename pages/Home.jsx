import React, { useState, useEffect } from 'react';
import resume from './resume.pdf';
import ashar_resume from './ashar_resume.pdf

const Home = () => {
  const [typedName, setTypedName] = useState('');
  const name = 'Ashar Ali'; // Your name

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= name.length) {
        setTypedName(name.substring(0, currentIndex));
        currentIndex++;
      } else {
        currentIndex = 0; // Reset the index to start over
      }
    }, 200); // Adjust typing speed (in milliseconds) as desired

    return () => {
      clearInterval(interval);
    };
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
    background: '#111827',
    color: 'white',
    textAlign: 'center',
    padding: '0 12px',
  };

  const headingStyle = {
    fontSize: '62px',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const subTitleStyle = {
    fontSize: '28px',
    marginBottom: '24px',
  };

  const buttonStyle = {
    backgroundColor: '#14b8a6',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '18px',
    transition: 'background-color 0.3s, transform 0.2s',
    cursor: 'pointer',
    display: 'inline-block',
    marginTop: '15px',
    border: 'none',
    outline: 'none',
  };

  const buttonHoverStyle = {
    backgroundColor: '#14b8a6',
    transform: 'scale(1.05)',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>
        Hello, I'm {typedName}{' '}
        <span role="img" aria-label="Wave">
          👋
        </span>
      </h1>
      <p style={subTitleStyle}>
        MERN Stack Developer{' '}
        <span role="img" aria-label="Laptop">
          💻
        </span>{' '}
        | Blockchain Enthusiast{' '}
        <span role="img" aria-label="Chain">
          🔗
        </span>
      </p>
      <a
        href={ashar_resume}
        style={{ ...buttonStyle, ...buttonHoverStyle }}
        download="resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Home;
