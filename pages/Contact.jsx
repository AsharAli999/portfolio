import React, { useState } from 'react';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const Contact = () => {
  const codeSnippet = `
   
  .mail {
      email: asherali1001@gmail.com;
    } 

    .social {
      linkedIn : @asharali999;
      github : @AsharAli999;
      fiverr : @asharali999;
    }

    #cell {
      number : 0322-9282899;
    }

    .productivity : {
      product-Hunt : @ashar_ali3;
      dev-io : @asharali999;
    }

  `;

  return (
    <div className="p-4 bg-white dark:bg-gray-900 shadow h-full">
      <SyntaxHighlighter language="css" style={dracula}>
        {codeSnippet}
      </SyntaxHighlighter>
    </div>
  );
};

export default Contact;
