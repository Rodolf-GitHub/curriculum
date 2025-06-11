import React from 'react';

interface CurriculumExportProps {
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

const CurriculumExport: React.FC<CurriculumExportProps> = ({
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
  return (
    <>
      <style>{`
        * { border: none !important; box-shadow: none !important; outline: none !important; }
        img { border: none !important; box-shadow: none !important; }
        section, div, ul, li, h1, h2, h3, h4, h5, h6 { border: none !important; box-shadow: none !important; }
      `}</style>
      <div style={{ width: '900px', margin: '0 auto', background: '#fff', color: '#222', fontFamily: 'sans-serif', padding: '32px', boxShadow: '0 2px 16px rgba(0,0,0,0.07)' }}>
        {/* Cabecera */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
          {personalInfo.profileImage && (
            <img src={personalInfo.profileImage} alt="Foto" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
          )}
          <div>
            <h1 style={{ fontSize: 36, fontWeight: 700, margin: 0 }}>{personalInfo.name}</h1>
            <div style={{ fontSize: 20, color: '#2563eb', fontWeight: 500 }}>{personalInfo.title}</div>
            <div style={{ marginTop: 8, fontSize: 15 }}>
              <span>{personalInfo.email}</span> | <span>{personalInfo.phone}</span> | <span>{personalInfo.location}</span>
            </div>
            <div style={{ marginTop: 4, fontSize: 14, color: '#555' }}>
              {personalInfo.linkedin && <span>LinkedIn: {personalInfo.linkedin} </span>}
              {personalInfo.github && <span> | GitHub: {personalInfo.github}</span>}
              {personalInfo.website && <span> | Web: {personalInfo.website}</span>}
            </div>
          </div>
        </div>

        {/* Sobre mí */}
        {showAbout && (
          <section style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 22, color: '#2563eb', fontWeight: 600, marginBottom: 8, border: 'none', padding: 0 }}>Sobre Mí</h2>
            <div style={{ fontSize: 16, lineHeight: 1.6 }}>{aboutSummary}</div>
          </section>
        )}

        {/* Experiencia */}
        {showExperience && experiences.length > 0 && (
          <section style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 22, color: '#2563eb', fontWeight: 600, marginBottom: 8, border: 'none', padding: 0 }}>Experiencia Laboral</h2>
            {experiences.map((exp, i) => (
              <div key={i} style={{ marginBottom: 12 }}>
                <div style={{ fontWeight: 600, fontSize: 17 }}>{exp.position} - {exp.company}</div>
                <div style={{ fontSize: 15, color: '#555' }}>{exp.startDate} - {exp.endDate}</div>
                <div style={{ fontSize: 15 }}>{exp.description}</div>
                {exp.technologies && exp.technologies.length > 0 && (
                  <div style={{ fontSize: 14, color: '#2563eb', marginTop: 2 }}>Tecnologías: {exp.technologies.join(', ')}</div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Educación */}
        {showEducation && education.length > 0 && (
          <section style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 22, color: '#2563eb', fontWeight: 600, marginBottom: 8, border: 'none', padding: 0 }}>Educación</h2>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: 12 }}>
                <div style={{ fontWeight: 600, fontSize: 17 }}>{edu.degree} - {edu.institution}</div>
                <div style={{ fontSize: 15, color: '#555' }}>{edu.startDate} - {edu.endDate}</div>
                <div style={{ fontSize: 15 }}>{edu.field}</div>
                {edu.description && <div style={{ fontSize: 14 }}>{edu.description}</div>}
              </div>
            ))}
          </section>
        )}

        {/* Habilidades */}
        {showSkills && skillCategories.length > 0 && (
          <section style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 22, color: '#2563eb', fontWeight: 600, marginBottom: 8, border: 'none', padding: 0 }}>Habilidades</h2>
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 8, listStyle: 'none', padding: 0 }}>
              {skillCategories.map((cat, i) => (
                <li key={i} style={{ background: '#f1f5f9', color: '#3730a3', borderRadius: 6, padding: '4px 12px', fontSize: 15, marginBottom: 4, border: 'none' }}>
                  <b>{cat.name}:</b> {cat.skills.join(', ')}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Proyectos */}
        {showProjects && projects.length > 0 && (
          <section style={{ marginBottom: 0 }}>
            <h2 style={{ fontSize: 22, color: '#2563eb', fontWeight: 600, marginBottom: 8, border: 'none', padding: 0 }}>Proyectos</h2>
            {projects.map((proj, i) => (
              <div key={i} style={{ marginBottom: 12 }}>
                <div style={{ fontWeight: 600, fontSize: 17 }}>{proj.name}</div>
                <div style={{ fontSize: 15 }}>{proj.description}</div>
                {proj.technologies && proj.technologies.length > 0 && (
                  <div style={{ fontSize: 14, color: '#2563eb', marginTop: 2 }}>Tecnologías: {proj.technologies.join(', ')}</div>
                )}
                {proj.githubUrl && <div style={{ fontSize: 14 }}>GitHub: {proj.githubUrl}</div>}
                {proj.liveUrl && <div style={{ fontSize: 14 }}>Web: {proj.liveUrl}</div>}
              </div>
            ))}
          </section>
        )}
      </div>
    </>
  );
};

export default CurriculumExport; 