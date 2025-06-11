import React from 'react';
import domtoimage from 'dom-to-image-more';
import jsPDF from 'jspdf';
import CurriculumExport from './CurriculumExport';
import { createRoot } from 'react-dom/client';

interface NavigationHeaderProps {
  onEditClick: () => void;
  targetRef: React.RefObject<HTMLDivElement | null>;
  personalInfo: any;
  aboutSummary: string;
  experiences: any[];
  education: any[];
  skillCategories: any[];
  projects: any[];
  showAbout: boolean;
  showExperience: boolean;
  showEducation: boolean;
  showSkills: boolean;
  showProjects: boolean;
}

const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  onEditClick,
  personalInfo,
  aboutSummary,
  experiences,
  education,
  skillCategories,
  projects,
  showAbout,
  showExperience,
  showEducation,
  showSkills,
  showProjects
}) => {
  const exportToImage = async () => {
    const exportDiv = document.createElement('div');
    exportDiv.style.position = 'fixed';
    exportDiv.style.left = '-9999px';
    exportDiv.style.top = '0';
    exportDiv.style.background = '#fff';
    document.body.appendChild(exportDiv);

    const root = createRoot(exportDiv);
    root.render(
      <CurriculumExport
        personalInfo={personalInfo}
        aboutSummary={aboutSummary}
        experiences={experiences}
        education={education}
        skillCategories={skillCategories}
        projects={projects}
        showAbout={showAbout}
        showExperience={showExperience}
        showEducation={showEducation}
        showSkills={showSkills}
        showProjects={showProjects}
      />
    );
    setTimeout(async () => {
      try {
        const dataUrl = await domtoimage.toPng(exportDiv, {
          quality: 1.0,
          bgcolor: '#fff',
          width: 900,
          height: exportDiv.scrollHeight
        });
        document.body.removeChild(exportDiv);
        const link = document.createElement('a');
        link.download = 'curriculum-vitae.png';
        link.href = dataUrl;
        link.click();
      } catch {
        document.body.removeChild(exportDiv);
        alert('Error al exportar la imagen. Intenta de nuevo.');
      }
    }, 100);
  };

  const exportToPDF = async () => {
    const exportDiv = document.createElement('div');
    exportDiv.style.position = 'fixed';
    exportDiv.style.left = '-9999px';
    exportDiv.style.top = '0';
    exportDiv.style.background = '#fff';
    document.body.appendChild(exportDiv);

    const root = createRoot(exportDiv);
    root.render(
      <CurriculumExport
        personalInfo={personalInfo}
        aboutSummary={aboutSummary}
        experiences={experiences}
        education={education}
        skillCategories={skillCategories}
        projects={projects}
        showAbout={showAbout}
        showExperience={showExperience}
        showEducation={showEducation}
        showSkills={showSkills}
        showProjects={showProjects}
      />
    );
    setTimeout(async () => {
      try {
        const dataUrl = await domtoimage.toPng(exportDiv, {
          quality: 1.0,
          bgcolor: '#fff',
          width: 900,
          height: exportDiv.scrollHeight
        });
        document.body.removeChild(exportDiv);
        const img = new window.Image();
        img.src = dataUrl;
        img.onload = () => {
          const pdf = new jsPDF('p', 'mm', 'a4');
          pdf.addImage(dataUrl, 'PNG', 0, 0, 210, (img.height * 210) / img.width);
          pdf.save('curriculum-vitae.pdf');
        };
      } catch {
        document.body.removeChild(exportDiv);
        alert('Error al exportar el PDF. Intenta de nuevo.');
      }
    }, 100);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800">Curriculum Vitae</h1>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={onEditClick}
              className="flex items-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors"
              title="Editar Curriculum"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <span className="hidden sm:inline">Editar</span>
            </button>
            
            <button
              onClick={exportToImage}
              className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
              title="Exportar como imagen"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="hidden sm:inline">Imagen</span>
            </button>
            
            <button
              onClick={exportToPDF}
              className="flex items-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors"
              title="Exportar como PDF"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="hidden sm:inline">PDF</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationHeader; 