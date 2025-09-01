import React, { useState } from 'react';

const ComponentCard = ({ title, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-black/20 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-white/10">
      <div className="p-6">
        <div
          className="flex items-center justify-center min-h-[120px]"
          dangerouslySetInnerHTML={{ __html: code }}
        />
      </div>
      <div className="px-4 py-3 bg-black/20 backdrop-blur-sm flex justify-between items-center border-t border-white/10">
        <h3 className="font-semibold text-gray-200">{title}</h3>
        <button
          onClick={handleCopy}
          className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ${
            copied
              ? 'bg-emerald-500 text-white'
              : 'bg-white/10 hover:bg-white/20 text-gray-200'
          }`}
          aria-label={`Copy code for ${title}`}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default ComponentCard;