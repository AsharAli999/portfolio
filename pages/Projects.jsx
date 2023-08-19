import React, { useState } from 'react';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const Projects = () => {
  const codeSnippet = `
import Projects as 'projects'
  
  Projects = () => {
    Google-keep-app: {
      url: 'https://googlekeepop.netlify.app'
    },
    Gradientoo: {
      url: 'https://gradientoo-app.vercel.app',
      github: 'https://github.com/AsharAli999/Gradientoo',
    },
    Image-converter: {
      url: 'https://image-converter-kappa.vercel.app',
    },
    Json-XML-converter: {
      url: 'https://json-xml-converter.vercel.app'
    },
    Video-streaming-app: {
      url: 'http://onlinemocks.com/'
    }
  }
  `;

  return (
    <div className="p-4 bg-white dark:bg-gray-900 shadow h-full overflow-y-auto max-h-[80vh]">
      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeSnippet}
      </SyntaxHighlighter>
    </div>
  );
}

export default Projects;
