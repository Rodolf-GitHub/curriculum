import React from 'react';

interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description?: string;
}

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-3 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
          Educación
        </h2>
      </div>
      
      <div className="p-4 space-y-4">
        {education.map((item) => (
          <div key={item.id} className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-green-600 rounded-full"></div>
            <div className="pl-4">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {item.degree}
                  </h3>
                  <h4 className="text-base font-medium text-green-600 mb-1">
                    {item.institution}
                  </h4>
                  <p className="text-gray-600 mb-1 text-sm">
                    {item.field}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>
                    {item.startDate} - {item.current ? 'Presente' : item.endDate}
                  </span>
                  {item.current && (
                    <span className="bg-green-100 text-green-800 text-xs px-1 py-0.5 rounded-full font-medium">
                      En curso
                    </span>
                  )}
                </div>
              </div>
              
              {item.description && (
                <p className="text-gray-700 leading-relaxed text-sm">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education; 