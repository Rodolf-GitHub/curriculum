import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import NavigationHeader from '../components/NavigationHeader';
import { useLocalStorage } from '../hooks/useLocalStorage';
import {
  personalInfo as initialPersonalInfo,
  aboutSummary as initialAboutSummary,
  experiences as initialExperiences,
  education as initialEducation,
  skillCategories as initialSkillCategories,
  projects as initialProjects
} from '../data/curriculumData';

const Curriculum: React.FC = () => {
  const curriculumRef = useRef<HTMLDivElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  
  // Estado local para los datos del curriculum con persistencia en localStorage
  const [personalInfo, setPersonalInfo] = useLocalStorage('curriculum-personalInfo', initialPersonalInfo);
  const [aboutSummary, setAboutSummary] = useLocalStorage('curriculum-aboutSummary', initialAboutSummary);
  const [experiences, setExperiences] = useLocalStorage('curriculum-experiences', initialExperiences);
  const [education, setEducation] = useLocalStorage('curriculum-education', initialEducation);
  const [skillCategories, setSkillCategories] = useLocalStorage('curriculum-skillCategories', initialSkillCategories);
  const [projects, setProjects] = useLocalStorage('curriculum-projects', initialProjects);

  // Estado para controlar qué secciones mostrar
  const [showAbout, setShowAbout] = useLocalStorage('curriculum-showAbout', true);
  const [showExperience, setShowExperience] = useLocalStorage('curriculum-showExperience', true);
  const [showEducation, setShowEducation] = useLocalStorage('curriculum-showEducation', true);
  const [showSkills, setShowSkills] = useLocalStorage('curriculum-showSkills', true);
  const [showProjects, setShowProjects] = useLocalStorage('curriculum-showProjects', true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('has-visited');
    if (!hasVisited) {
      setShowWelcome(true);
      localStorage.setItem('has-visited', 'true');
    }
  }, []);

  const handleSave = (data: {
    personalInfo: typeof personalInfo;
    aboutSummary: string;
    experiences: typeof experiences;
    education: typeof education;
    skillCategories: typeof skillCategories;
    projects: typeof projects;
  }) => {
    setPersonalInfo(data.personalInfo);
    setAboutSummary(data.aboutSummary);
    setExperiences(data.experiences);
    setEducation(data.education);
    setSkillCategories(data.skillCategories);
    setProjects(data.projects);
    setIsEditing(false);
  };

  const handleClearCurriculum = () => {
    if (window.confirm('¿Estás seguro de que quieres vaciar todo el curriculum? Esta acción no se puede deshacer.')) {
      setPersonalInfo(initialPersonalInfo);
      setAboutSummary(initialAboutSummary);
      setExperiences([]);
      setEducation([]);
      setSkillCategories([]);
      setProjects([]);
      setShowAbout(true);
      setShowExperience(true);
      setShowEducation(true);
      setShowSkills(true);
      setShowProjects(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header de navegación */}
      <NavigationHeader
        onEditClick={() => setIsEditing(true)}
        targetRef={curriculumRef}
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
      
      {/* Contenido principal */}
      <div className="w-full" ref={curriculumRef}>
        {/* Header */}
        <Header personalInfo={personalInfo} />
        
        {/* Contenido del CV */}
        <div className="w-full px-4 py-6">
          <div className="space-y-6">
            {/* Sobre mí */}
            {showAbout && <About summary={aboutSummary} />}
            
            {/* Experiencia */}
            {showExperience && <Experience experiences={experiences} />}
            
            {/* Educación */}
            {showEducation && <Education education={education} />}
            
            {/* Habilidades */}
            {showSkills && <Skills skillCategories={skillCategories} />}
            
            {/* Proyectos */}
            {showProjects && <Projects projects={projects} />}
          </div>
        </div>
      </div>

      {/* Modal de bienvenida */}
      {showWelcome && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4 text-gray-800">¡Bienvenido a tu CV!</h2>
            <p className="text-gray-600 mb-4">
              Esta es tu página de curriculum vitae personalizable. Puedes editar toda la información
              haciendo clic en el botón "Editar" en la parte superior.
            </p>
            <button
              onClick={() => setShowWelcome(false)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      )}

      {/* Modal de edición a pantalla completa */}
      {isEditing && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="min-h-screen">
            {/* Header del modal */}
            <div className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
              <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between h-auto sm:h-16 py-4 sm:py-0 gap-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Editor de Curriculum</h2>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4">
                    <button
                      onClick={handleClearCurriculum}
                      className="px-3 sm:px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                    >
                      Vaciar Curriculum
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-3 sm:px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contenido del modal */}
            <div className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
              <EditForm 
                data={{
                  personalInfo,
                  aboutSummary,
                  experiences,
                  education,
                  skillCategories,
                  projects
                }}
                onSave={handleSave} 
                onCancel={() => setIsEditing(false)}
                showAbout={showAbout}
                setShowAbout={setShowAbout}
                showExperience={showExperience}
                setShowExperience={setShowExperience}
                showEducation={showEducation}
                setShowEducation={setShowEducation}
                showSkills={showSkills}
                setShowSkills={setShowSkills}
                showProjects={showProjects}
                setShowProjects={setShowProjects}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Componente de formulario de edición mejorado
const EditForm: React.FC<{
  data: {
    personalInfo: typeof initialPersonalInfo;
    aboutSummary: string;
    experiences: typeof initialExperiences;
    education: typeof initialEducation;
    skillCategories: typeof initialSkillCategories;
    projects: typeof initialProjects;
  };
  onSave: (data: {
    personalInfo: typeof initialPersonalInfo;
    aboutSummary: string;
    experiences: typeof initialExperiences;
    education: typeof initialEducation;
    skillCategories: typeof initialSkillCategories;
    projects: typeof initialProjects;
  }) => void;
  onCancel: () => void;
  showAbout: boolean;
  setShowAbout: (show: boolean) => void;
  showExperience: boolean;
  setShowExperience: (show: boolean) => void;
  showEducation: boolean;
  setShowEducation: (show: boolean) => void;
  showSkills: boolean;
  setShowSkills: (show: boolean) => void;
  showProjects: boolean;
  setShowProjects: (show: boolean) => void;
}> = ({ 
  data, 
  onSave, 
  onCancel,
  showAbout,
  setShowAbout,
  showExperience,
  setShowExperience,
  showEducation,
  setShowEducation,
  showSkills,
  setShowSkills,
  showProjects,
  setShowProjects
}) => {
  const [formData, setFormData] = useState(data);
  const [activeTab, setActiveTab] = useState('personal');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const tabs = [
    { id: 'personal', name: 'Información Personal', icon: '👤' },
    { id: 'about', name: 'Sobre Mí', icon: '📝' },
    { id: 'experience', name: 'Experiencia', icon: '💼' },
    { id: 'education', name: 'Educación', icon: '🎓' },
    { id: 'skills', name: 'Habilidades', icon: '🛠️' },
    { id: 'projects', name: 'Proyectos', icon: '🚀' },
    { id: 'sections', name: 'Secciones', icon: '⚙️' }
  ];

  return (
    <div className="space-y-6">
      {/* Pestañas de navegación */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-2 sm:space-x-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-2 px-2 sm:px-1 border-b-2 font-medium text-xs sm:text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span className="mr-1 sm:mr-2">{tab.icon}</span>
              <span className="hidden sm:inline">{tab.name}</span>
              <span className="sm:hidden">{tab.name.split(' ')[0]}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Contenido de las pestañas */}
      <div className="min-h-[400px] sm:min-h-[500px]">
        {/* Pestaña: Información Personal */}
        {activeTab === 'personal' && (
          <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800">Información Personal</h3>
            
            {/* Imagen de perfil */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Imagen de perfil</label>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          const result = event.target?.result as string;
                          setFormData({
                            ...formData,
                            personalInfo: { ...formData.personalInfo, profileImage: result }
                          });
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                  />
                  <p className="text-xs text-gray-500 mt-1">Selecciona una imagen de tu dispositivo (JPG, PNG, etc.)</p>
                </div>
                {formData.personalInfo.profileImage && (
                  <div className="flex-shrink-0">
                    <img 
                      src={formData.personalInfo.profileImage} 
                      alt="Vista previa" 
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                    />
                  </div>
                )}
              </div>
              {formData.personalInfo.profileImage && (
                <button
                  type="button"
                  onClick={() => setFormData({
                    ...formData,
                    personalInfo: { ...formData.personalInfo, profileImage: '' }
                  })}
                  className="mt-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
                >
                  Eliminar imagen
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                <input
                  type="text"
                  value={formData.personalInfo.name}
                  onChange={(e) => setFormData({
                    ...formData,
                    personalInfo: { ...formData.personalInfo, name: e.target.value }
                  })}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Título profesional</label>
                <input
                  type="text"
                  value={formData.personalInfo.title}
                  onChange={(e) => setFormData({
                    ...formData,
                    personalInfo: { ...formData.personalInfo, title: e.target.value }
                  })}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.personalInfo.email}
                  onChange={(e) => setFormData({
                    ...formData,
                    personalInfo: { ...formData.personalInfo, email: e.target.value }
                  })}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                <input
                  type="text"
                  value={formData.personalInfo.phone}
                  onChange={(e) => setFormData({
                    ...formData,
                    personalInfo: { ...formData.personalInfo, phone: e.target.value }
                  })}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ubicación</label>
                <input
                  type="text"
                  value={formData.personalInfo.location}
                  onChange={(e) => setFormData({
                    ...formData,
                    personalInfo: { ...formData.personalInfo, location: e.target.value }
                  })}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn (opcional)</label>
                <input
                  type="url"
                  value={formData.personalInfo.linkedin || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    personalInfo: { ...formData.personalInfo, linkedin: e.target.value }
                  })}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                />
              </div>
            </div>
          </div>
        )}

        {/* Pestaña: Sobre Mí */}
        {activeTab === 'about' && (
          <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800">Sobre Mí</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Descripción profesional</label>
              <textarea
                value={formData.aboutSummary}
                onChange={(e) => setFormData({ ...formData, aboutSummary: e.target.value })}
                rows={6}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                placeholder="Describe tu perfil profesional, experiencia y objetivos..."
              />
            </div>
          </div>
        )}

        {/* Pestaña: Experiencia */}
        {activeTab === 'experience' && (
          <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Experiencia Laboral</h3>
              <button
                type="button"
                onClick={() => {
                  const newExperience = {
                    id: Date.now().toString(),
                    company: "",
                    position: "",
                    startDate: "",
                    endDate: "",
                    current: false,
                    description: "",
                    technologies: []
                  };
                  setFormData({
                    ...formData,
                    experiences: [...formData.experiences, newExperience]
                  });
                }}
                className="px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm w-full sm:w-auto"
              >
                + Agregar Experiencia
              </button>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {formData.experiences.map((experience, index) => (
                <div key={experience.id} className="border border-gray-200 rounded-lg p-3 sm:p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                    <h4 className="text-base sm:text-lg font-medium text-gray-800">Experiencia {index + 1}</h4>
                    <button
                      type="button"
                      onClick={() => {
                        const updatedExperiences = formData.experiences.filter((_, i) => i !== index);
                        setFormData({ ...formData, experiences: updatedExperiences });
                      }}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm w-full sm:w-auto"
                    >
                      Eliminar
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                      <input
                        type="text"
                        value={experience.company}
                        onChange={(e) => {
                          const updatedExperiences = [...formData.experiences];
                          updatedExperiences[index] = { ...updatedExperiences[index], company: e.target.value };
                          setFormData({ ...formData, experiences: updatedExperiences });
                        }}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Cargo</label>
                      <input
                        type="text"
                        value={experience.position}
                        onChange={(e) => {
                          const updatedExperiences = [...formData.experiences];
                          updatedExperiences[index] = { ...updatedExperiences[index], position: e.target.value };
                          setFormData({ ...formData, experiences: updatedExperiences });
                        }}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de inicio</label>
                      <input
                        type="text"
                        value={experience.startDate}
                        onChange={(e) => {
                          const updatedExperiences = [...formData.experiences];
                          updatedExperiences[index] = { ...updatedExperiences[index], startDate: e.target.value };
                          setFormData({ ...formData, experiences: updatedExperiences });
                        }}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Ej: Enero 2022"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de fin</label>
                      <input
                        type="text"
                        value={experience.endDate}
                        onChange={(e) => {
                          const updatedExperiences = [...formData.experiences];
                          updatedExperiences[index] = { ...updatedExperiences[index], endDate: e.target.value };
                          setFormData({ ...formData, experiences: updatedExperiences });
                        }}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Ej: Presente"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
                    <textarea
                      value={experience.description}
                      onChange={(e) => {
                        const updatedExperiences = [...formData.experiences];
                        updatedExperiences[index] = { ...updatedExperiences[index], description: e.target.value };
                        setFormData({ ...formData, experiences: updatedExperiences });
                      }}
                      rows={3}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="Describe tus responsabilidades y logros..."
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Habilidades/tecnologías (separadas por comas)</label>
                    <input
                      type="text"
                      value={experience.technologies.join(', ')}
                      onChange={(e) => {
                        const technologies = e.target.value.split(',').map(t => t.trim()).filter(t => t);
                        const updatedExperiences = [...formData.experiences];
                        updatedExperiences[index] = { ...updatedExperiences[index], technologies };
                        setFormData({ ...formData, experiences: updatedExperiences });
                      }}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="Ej: React, Node.js, TypeScript"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pestaña: Educación */}
        {activeTab === 'education' && (
          <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Educación</h3>
              <button
                type="button"
                onClick={() => {
                  const newEducation = {
                    id: Date.now().toString(),
                    institution: "",
                    degree: "",
                    field: "",
                    startDate: "",
                    endDate: "",
                    current: false,
                    description: ""
                  };
                  setFormData({
                    ...formData,
                    education: [...formData.education, newEducation]
                  });
                }}
                className="px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm w-full sm:w-auto"
              >
                + Agregar Educación
              </button>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {formData.education.map((item, index) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-3 sm:p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                    <h4 className="text-base sm:text-lg font-medium text-gray-800">Educación {index + 1}</h4>
                    <button
                      type="button"
                      onClick={() => {
                        const updatedEducation = formData.education.filter((_, i) => i !== index);
                        setFormData({ ...formData, education: updatedEducation });
                      }}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm w-full sm:w-auto"
                    >
                      Eliminar
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Institución</label>
                      <input
                        type="text"
                        value={item.institution}
                        onChange={(e) => {
                          const updatedEducation = [...formData.education];
                          updatedEducation[index] = { ...updatedEducation[index], institution: e.target.value };
                          setFormData({ ...formData, education: updatedEducation });
                        }}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Título</label>
                      <input
                        type="text"
                        value={item.degree}
                        onChange={(e) => {
                          const updatedEducation = [...formData.education];
                          updatedEducation[index] = { ...updatedEducation[index], degree: e.target.value };
                          setFormData({ ...formData, education: updatedEducation });
                        }}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Campo de estudio</label>
                      <input
                        type="text"
                        value={item.field}
                        onChange={(e) => {
                          const updatedEducation = [...formData.education];
                          updatedEducation[index] = { ...updatedEducation[index], field: e.target.value };
                          setFormData({ ...formData, education: updatedEducation });
                        }}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Año de inicio</label>
                      <input
                        type="text"
                        value={item.startDate}
                        onChange={(e) => {
                          const updatedEducation = [...formData.education];
                          updatedEducation[index] = { ...updatedEducation[index], startDate: e.target.value };
                          setFormData({ ...formData, education: updatedEducation });
                        }}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Ej: 2016"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Año de fin</label>
                      <input
                        type="text"
                        value={item.endDate}
                        onChange={(e) => {
                          const updatedEducation = [...formData.education];
                          updatedEducation[index] = { ...updatedEducation[index], endDate: e.target.value };
                          setFormData({ ...formData, education: updatedEducation });
                        }}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Ej: 2020"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Descripción (opcional)</label>
                    <textarea
                      value={item.description || ''}
                      onChange={(e) => {
                        const updatedEducation = [...formData.education];
                        updatedEducation[index] = { ...updatedEducation[index], description: e.target.value };
                        setFormData({ ...formData, education: updatedEducation });
                      }}
                      rows={2}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="Descripción adicional..."
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pestaña: Habilidades */}
        {activeTab === 'skills' && (
          <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Habilidades</h3>
              <button
                type="button"
                onClick={() => {
                  const newCategory = {
                    name: "",
                    skills: []
                  };
                  setFormData({
                    ...formData,
                    skillCategories: [...formData.skillCategories, newCategory]
                  });
                }}
                className="px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm w-full sm:w-auto"
              >
                + Agregar Categoría
              </button>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {formData.skillCategories.map((category, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-3 sm:p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                    <h4 className="text-base sm:text-lg font-medium text-gray-800">Categoría {index + 1}</h4>
                    <button
                      type="button"
                      onClick={() => {
                        const updatedCategories = formData.skillCategories.filter((_, i) => i !== index);
                        setFormData({ ...formData, skillCategories: updatedCategories });
                      }}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm w-full sm:w-auto"
                    >
                      Eliminar
                    </button>
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de la categoría</label>
                      <input
                        type="text"
                        value={category.name}
                        onChange={(e) => {
                          const updatedCategories = [...formData.skillCategories];
                          updatedCategories[index] = { ...updatedCategories[index], name: e.target.value };
                          setFormData({ ...formData, skillCategories: updatedCategories });
                        }}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Ej: Habilidades Técnicas"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Habilidades (separadas por comas)</label>
                      <input
                        type="text"
                        value={category.skills.join(', ')}
                        onChange={(e) => {
                          const skills = e.target.value.split(',').map(skill => skill.trim()).filter(skill => skill);
                          const updatedCategories = [...formData.skillCategories];
                          updatedCategories[index] = { ...updatedCategories[index], skills };
                          setFormData({ ...formData, skillCategories: updatedCategories });
                        }}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Ej: React, Node.js, TypeScript, HTML, CSS"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pestaña: Proyectos */}
        {activeTab === 'projects' && (
          <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Proyectos</h3>
              <button
                type="button"
                onClick={() => {
                  const newProject = {
                    id: Date.now().toString(),
                    name: "",
                    description: "",
                    technologies: [],
                    githubUrl: "",
                    liveUrl: ""
                  };
                  setFormData({
                    ...formData,
                    projects: [...formData.projects, newProject]
                  });
                }}
                className="px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm w-full sm:w-auto"
              >
                + Agregar Proyecto
              </button>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {formData.projects.map((project, index) => (
                <div key={project.id} className="border border-gray-200 rounded-lg p-3 sm:p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                    <h4 className="text-base sm:text-lg font-medium text-gray-800">Proyecto {index + 1}</h4>
                    <button
                      type="button"
                      onClick={() => {
                        const updatedProjects = formData.projects.filter((_, i) => i !== index);
                        setFormData({ ...formData, projects: updatedProjects });
                      }}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm w-full sm:w-auto"
                    >
                      Eliminar
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nombre del proyecto</label>
                      <input
                        type="text"
                        value={project.name}
                        onChange={(e) => {
                          const updatedProjects = [...formData.projects];
                          updatedProjects[index] = { ...updatedProjects[index], name: e.target.value };
                          setFormData({ ...formData, projects: updatedProjects });
                        }}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">URL de GitHub (opcional)</label>
                      <input
                        type="url"
                        value={project.githubUrl || ''}
                        onChange={(e) => {
                          const updatedProjects = [...formData.projects];
                          updatedProjects[index] = { ...updatedProjects[index], githubUrl: e.target.value };
                          setFormData({ ...formData, projects: updatedProjects });
                        }}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="https://github.com/usuario/proyecto"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">URL del proyecto (opcional)</label>
                      <input
                        type="url"
                        value={project.liveUrl || ''}
                        onChange={(e) => {
                          const updatedProjects = [...formData.projects];
                          updatedProjects[index] = { ...updatedProjects[index], liveUrl: e.target.value };
                          setFormData({ ...formData, projects: updatedProjects });
                        }}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="https://tu-proyecto.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tecnologías (separadas por comas)</label>
                      <input
                        type="text"
                        value={project.technologies.join(', ')}
                        onChange={(e) => {
                          const technologies = e.target.value.split(',').map(t => t.trim()).filter(t => t);
                          const updatedProjects = [...formData.projects];
                          updatedProjects[index] = { ...updatedProjects[index], technologies };
                          setFormData({ ...formData, projects: updatedProjects });
                        }}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Ej: React, Node.js, MongoDB"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
                    <textarea
                      value={project.description}
                      onChange={(e) => {
                        const updatedProjects = [...formData.projects];
                        updatedProjects[index] = { ...updatedProjects[index], description: e.target.value };
                        setFormData({ ...formData, projects: updatedProjects });
                      }}
                      rows={3}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="Describe el proyecto, objetivos alcanzados..."
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pestaña: Configurar Secciones */}
        {activeTab === 'sections' && (
          <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800">Configurar Secciones</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <label className="flex items-center space-x-3 p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={showAbout}
                  onChange={(e) => setShowAbout(e.target.checked)}
                  className="rounded h-4 w-4"
                />
                <div>
                  <span className="text-sm font-medium text-gray-700">Sobre Mí</span>
                  <p className="text-xs text-gray-500">Descripción profesional</p>
                </div>
              </label>
              <label className="flex items-center space-x-3 p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={showExperience}
                  onChange={(e) => setShowExperience(e.target.checked)}
                  className="rounded h-4 w-4"
                />
                <div>
                  <span className="text-sm font-medium text-gray-700">Experiencia</span>
                  <p className="text-xs text-gray-500">Historial laboral</p>
                </div>
              </label>
              <label className="flex items-center space-x-3 p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={showEducation}
                  onChange={(e) => setShowEducation(e.target.checked)}
                  className="rounded h-4 w-4"
                />
                <div>
                  <span className="text-sm font-medium text-gray-700">Educación</span>
                  <p className="text-xs text-gray-500">Formación académica</p>
                </div>
              </label>
              <label className="flex items-center space-x-3 p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={showSkills}
                  onChange={(e) => setShowSkills(e.target.checked)}
                  className="rounded h-4 w-4"
                />
                <div>
                  <span className="text-sm font-medium text-gray-700">Habilidades</span>
                  <p className="text-xs text-gray-500">Competencias y destrezas</p>
                </div>
              </label>
              <label className="flex items-center space-x-3 p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={showProjects}
                  onChange={(e) => setShowProjects(e.target.checked)}
                  className="rounded h-4 w-4"
                />
                <div>
                  <span className="text-sm font-medium text-gray-700">Proyectos</span>
                  <p className="text-xs text-gray-500">Trabajos destacados</p>
                </div>
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Botones de acción */}
      <div className="flex flex-col sm:flex-row sm:justify-end gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 sm:px-6 py-2 sm:py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base w-full sm:w-auto"
        >
          Cancelar
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base w-full sm:w-auto"
        >
          Guardar Cambios
        </button>
      </div>
    </div>
  );
};

export default Curriculum; 