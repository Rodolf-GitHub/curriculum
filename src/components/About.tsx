import React from 'react';

interface AboutProps {
  summary: string;
}

const About: React.FC<AboutProps> = ({ summary }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Sobre Mí
        </h2>
      </div>
      <div className="p-4">
        <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
          {summary}
        </p>
      </div>
    </div>
  );
};

export default About; 