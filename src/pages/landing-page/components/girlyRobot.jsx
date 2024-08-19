import React from 'react';

const GirlyRobot = () => {
  return (
    <div className="fixed top-4 left-4 flex items-center py-28">
      <div className="bg-pink-400 p-4 rounded-full shadow-lg">
        {/* Add robot SVG or image here */}
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h.01M15 12h.01M9 16h6m-6-4h6m3 1V8a2 2 0 00-2-2H7a2 2 0 00-2 2v7a2 2 0 002 2h8a2 2 0 002-2v-1m-5-7v6m0 0a2 2 0 012 2h-4a2 2 0 012-2z"
          />
        </svg>
      </div>
      <div className="ml-4 text-pink-600 font-bold text-lg">
        Hi Bestie! <br /> Welcome back
      </div>
    </div>
  );
};

export default GirlyRobot;
