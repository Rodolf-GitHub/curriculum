// Datos del Curriculum Vitae - Personaliza estos datos con tu información

export const personalInfo = {
  name: "Tu Nombre Completo",
  title: "Tu Título Profesional",
  email: "tu.email@ejemplo.com",
  phone: "+34 600 000 000",
  location: "Ciudad, País",
  linkedin: "https://linkedin.com/in/tu-perfil",
  github: "https://github.com/tu-usuario",
  website: "https://tu-website.com",
  profileImage: "" // URL de tu imagen de perfil
};

export const aboutSummary = `Profesional apasionado con experiencia en [tu campo]. 
Me caracterizo por [tus fortalezas principales] y me especializo en [áreas de expertise]. 
Siempre busco oportunidades para crecer profesionalmente y contribuir al éxito de los proyectos en los que participo.`;

export const experiences = [
  {
    id: "1",
    company: "Empresa Ejemplo S.L.",
    position: "Tu Cargo Actual",
    startDate: "Enero 2022",
    endDate: "Presente",
    current: true,
    description: "Descripción de tus responsabilidades y logros principales en este puesto.",
    technologies: ["Habilidad 1", "Habilidad 2", "Habilidad 3"]
  },
  {
    id: "2",
    company: "Empresa Anterior",
    position: "Cargo Anterior",
    startDate: "Marzo 2020",
    endDate: "Diciembre 2021",
    current: false,
    description: "Descripción de tus responsabilidades y logros en este puesto anterior.",
    technologies: ["Habilidad 1", "Habilidad 2"]
  }
];

export const education = [
  {
    id: "1",
    institution: "Universidad o Institución",
    degree: "Título Obtenido",
    field: "Campo de Estudio",
    startDate: "2016",
    endDate: "2020",
    current: false,
    description: "Descripción adicional de tu formación o especialización."
  },
  {
    id: "2",
    institution: "Institución de Formación",
    degree: "Certificación o Curso",
    field: "Área de Especialización",
    startDate: "2020",
    endDate: "2020",
    current: false
  }
];

export const skillCategories = [
  {
    name: "Habilidades Técnicas",
    skills: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4", "Habilidad 5"]
  },
  {
    name: "Herramientas",
    skills: ["Herramienta 1", "Herramienta 2", "Herramienta 3", "Herramienta 4"]
  },
  {
    name: "Idiomas",
    skills: ["Español (Nativo)", "Inglés (Avanzado)", "Otro idioma"]
  },
  {
    name: "Habilidades Blandas",
    skills: ["Trabajo en equipo", "Comunicación", "Resolución de problemas", "Liderazgo", "Gestión de proyectos"]
  }
];

export const projects = [
  {
    id: "1",
    name: "Proyecto Destacado 1",
    description: "Descripción del proyecto, objetivos alcanzados y tecnologías utilizadas.",
    technologies: ["Tecnología 1", "Tecnología 2", "Tecnología 3"],
    githubUrl: "https://github.com/tu-usuario/proyecto",
    liveUrl: "https://tu-proyecto.com"
  },
  {
    id: "2",
    name: "Proyecto Destacado 2",
    description: "Descripción del proyecto, resultados obtenidos y metodología aplicada.",
    technologies: ["Tecnología 1", "Tecnología 2"],
    githubUrl: "https://github.com/tu-usuario/proyecto2"
  }
]; 