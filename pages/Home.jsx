import React from 'react';

const Home = () => {
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
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '18px',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Hello, I'm Ashar Ali</h1>
      <p style={subTitleStyle}>
        MERN Stack Developer | Blockchain Enthusiast
      </p>
      <a
        href="/ashar_ali_resume.pdf"
        style={{ ...buttonStyle, ...buttonHoverStyle }}
        download="ashar_ali_resume.pdf"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Home;
