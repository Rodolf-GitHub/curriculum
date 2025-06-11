import React from 'react';

interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  technologies: string[];
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
          </svg>
          Experiencia Laboral
        </h2>
      </div>
      
      <div className="p-4 space-y-4">
        {experiences.map((experience) => (
          <div key={experience.id} className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
            <div className="pl-4">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {experience.position}
                  </h3>
                  <h4 className="text-base font-medium text-blue-600 mb-1">
                    {experience.company}
                  </h4>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>
                    {experience.startDate} - {experience.current ? 'Presente' : experience.endDate}
                  </span>
                  {experience.current && (
                    <span className="bg-green-100 text-green-800 text-xs px-1 py-0.5 rounded-full font-medium">
                      Actual
                    </span>
                  )}
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                {experience.description}
              </p>
              
              {experience.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience; 