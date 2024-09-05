// src/components/ResponseDisplay.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ResponseDisplay = ({ response }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(response.data, null, 2));
  };

  return (
    <div className="p-4 mt-4 bg-white rounded-lg shadow">
      <h2 className="text-lg mb-4">Response</h2>
      <div className="relative">
      {/*<button
      className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded"
      onClick={copyToClipboard}
    >
      Copy
    </button>*/}
      </div>
      <SyntaxHighlighter language="json" style={solarizedlight}>
        {JSON.stringify(response.data, null, 2)}
      </SyntaxHighlighter>
    </div>
  );
};

export default ResponseDisplay;
