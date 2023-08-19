import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const About = () => {
  const codeSnippet = `
import Info from 'info'

const About = () => {
  return (
    <div>
      <h1>Introduction</h1>

      <p>Hi, I am Ashar Ali. I am a Full Stack Web Developer with a passion for building
         robust and engaging web applications. Proficient in React.js, Next.js, Node.js, 
         Express.js, MongoDB, and Mongoose.</p>

      <h1>Education</h1>
      <p>COMSATS Institute of Information and Technology
         Bachelor's degree, Computer Software Engineering
         Feb 2020 - Feb 2024</p>
    </div>
  )
}

export default About
  `;

  return (
    <div className="p-4 bg-white dark:bg-gray-900 shadow h-full">
      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeSnippet}
      </SyntaxHighlighter>
    </div>
  );
};

export default About;
