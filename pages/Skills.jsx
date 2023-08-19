import React, { useState } from 'react';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const Skills = () => {
  const codeSnippet = `
const Skills = {
    "Markup": {
        "html": "Hyper Text Markup Language"
    },
    "Styling": {
        "css": "Cascading Style Sheets",
        "bootStrap": "Bootstrap",
        "tailwindCSS": "Tailwind CSS"
    },
    "JavaScript": {
        "react": "React JS",
        "next": "Next JS",
        "node": "Node JS",
        "express": "Express JS"
    },
    "Tools": {
        "github": "Github",
        "figma": "Figma",
        "code": "VS Code"
    }
}`;

  return (
    <div className="p-4 bg-white dark:bg-gray-900 shadow h-full overflow-y-auto max-h-[80vh]">
      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeSnippet}
      </SyntaxHighlighter>
    </div>
  );
}

export default Skills;
