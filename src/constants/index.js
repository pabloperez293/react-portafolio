import project1 from "../assets/yo.png";
import project2 from "../assets/yo.png";
import project3 from "../assets/yo.png";
import project4 from "../assets/yo.png";

export const PROFILE = {
  name: "Pablo Perez",
  role: "Analista Funcional | IT Business Analyst Jr. & Java Developer",
  email: "pablodevperez@gmail.com",
  phone: "+54 9 11 7236-1058",
  location: "Buenos Aires, Argentina",
  linkedin: "https://linkedin.com/in/devpabloperez",
  github: "https://github.com/pabloperezdev",
};

export const HERO_PROFILES = {
  funcional: {
    key: "funcional",
    label: "Analista Funcional",
    title: "Analista Funcional",
    subtitle: "Transformo requerimientos de negocio en soluciones estructuradas.",
    description:
      "Analista Funcional y Desarrollador de Software con experiencia en análisis de incidencias, documentación, integración de APIs REST y resolución de problemas. Especializado en conectar objetivos de negocio con soluciones técnicas claras.",
    cv: "/assets/cv-analista-funcional.pdf",
  },
  java: {
    key: "java",
    label: "Java Developer",
    title: "Java Developer",
    subtitle: "Construyo backend escalable en Java y Spring Boot.",
    description:
      "Analista Funcional y Desarrollador de Software con experiencia en construir backend escalable con Java y Spring Boot, integrando APIs REST eficientes y mantenibles para aplicaciones críticas.",
    cv: "/assets/cv-java.pdf",
  },
};

export const ABOUT_TEXT =
  "Analista Funcional y Desarrollador de Software con experiencia en análisis de incidencias, documentación técnica, integración de APIs REST y resolución de problemas. Mi enfoque está en transformar requerimientos de negocio en soluciones estructuradas y backend escalable con Java, Spring Boot y React.";

export const EXPERIENCES = [
  {
    range: "Dic. 2024 – Actualidad",
    role: "Desarrollador Web Freelance",
    company: "Freelance",
    description:
      "Relevamiento de requerimientos junto al cliente, documentación funcional y priorización de tareas. Diseño e implementación de APIs REST y operaciones CRUD con Spring Data JPA, Hibernate y MySQL.",
    stack: ["ReactJS", "Spring Boot", "MySQL", "REST API", "Git"],
    tags: ["funcional", "java"],
  },
  {
    range: "Ago. 2024 – Dic. 2024",
    role: "Analista Tech Engineer",
    company: "Eldar",
    description:
      "Gestión y seguimiento de incidencias con Jira, colaborando con Desarrollo, QA y DevOps. Validación de requerimientos con usuarios internos y elaboración de escenarios de prueba.",
    stack: ["Jira", "Confluence", "SQL", "Testing Funcional", "Agile"],
    tags: ["funcional"],
  },
  {
    range: "Oct. 2023 – Sep. 2024",
    role: "Analista Técnico – Java",
    company: "Akirento",
    description:
      "Relevamiento, análisis y documentación de incidencias, validación de desarrollos en ambientes de prueba y acompañamiento al equipo técnico durante el ciclo de entrega.",
    stack: ["Java", "Spring Boot", "Hibernate", "REST API", "Scrum"],
    tags: ["java"],
  },
  {
    range: "May. 2021 – Sep. 2023",
    role: "Soporte Técnico",
    company: "Tiziana Distribuidora",
    description:
      "Diagnóstico, resolución de incidencias de software/hardware y soporte técnico integral a usuarios. Mantenimiento preventivo/correctivo de sistemas e infraestructura operativa. Documentación técnica de fallas frecuentes y coordinación de soluciones operativas.",
    stack: [
      "Soporte Técnico",
      "Windows/Linux",
      "Redes",
      "Hardware",
      "Mantenimiento IT",
      "Muestreo de Incidencias",
    ],
    tags: ["funcional"],
  },
  {
    range: "Oct. 2020 – Oct. 2023",
    role: "Analista Funcional / Desarrollador Jr.",
    company: "Telecom Argentina (Flow)",
    description:
      "Análisis de aplicaciones de alto tráfico, documentación de incidencias y validación de nuevas funcionalidades e integraciones antes de producción.",
    stack: ["Jira", "Postman", "Flujo de usuarios", "Testing", "Seguimiento de defectos"],
    tags: ["funcional"],
  },
  {
    range: "Abr. 2022 – Sep. 2022",
    role: "Tutor de Desarrollo Web",
    company: "Coderhouse",
    description:
      "Seguimiento, feedback y corrección de proyectos frontend en HTML, CSS y JavaScript, con foco en diseño responsive y buenas prácticas de código.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design", "Git"],
    tags: ["funcional"],
  },
];

export const EDUCATION = [
  {
    institution: "Universidad Nacional de Hurlingham",
    title: "Tecnicatura Universitaria en Programación",
    date: "2024 – Actualidad",
    status: "En curso",
  },
  {
    institution: "Instituto Galileo Galilei",
    title: "Analista de Sistemas",
    date: "2016",
    status: "Incompleto",
  },
  {
    institution: "Instituto Galileo Galilei",
    title: "Técnico en Informática",
    date: "2014",
    status: "Finalizado",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Talent Tech 2026",
    detail: "Backend Java, Python",
    date: "2026",
  },
  {
    title: "Talent Tech 2025",
    detail: "Web / React.js",
    date: "2025",
  },
  {
    title: "Red Hat System Administration I",
    detail: "Linux & DevOps básico",
    date: "2024",
  },
  {
    title: "Inglés Técnico B1",
    detail: "Comunicación técnica en entornos IT",
    date: "2024",
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Buenos Aires, Argentina",
  phoneNo: "+54 9 11 7236-1058",
  email: "pablodevperez@gmail.com",
};
