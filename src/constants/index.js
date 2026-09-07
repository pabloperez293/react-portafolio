
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
    subtitle:
      "Transformo requerimientos de negocio en soluciones estructuradas.",
    description:
      "Analista Funcional en el análisis de incidencias, documentación mediante Confluence, integración de APIs REST con postman y resolución de problemas. Especializado en conectar objetivos de negocio con soluciones técnicas claras documentadas.",
    cv: "/assets/cv-analista-funcional.pdf",
  },
  java: {
    key: "java",
    label: "Java Developer",
    title: "Java Developer",
    subtitle:
      "Construyo aplicaiones en el backend escalable en Java y Spring Boot.",
    description:
      "Soy un desarrollador de Software con experiencia en construir backend escalable con Java y Spring Boot, integrando APIs REST consumiendolas y mantenibles para aplicaciones críticas.",
    cv: "/assets/cv-java.pdf",
  },
};

export const ABOUT_TEXT =
  "Me gusta la tecnologia, como es su evolucion y su trayectoria en el tiempo. Veo que desde chico me intereso saber y responder cada parte del sistema, tocando , viendo errores, documentandolo y compartiendo con otros.";

export const EXPERIENCES = [
  {
    range: "Dic. 2024 – Actualidad",
    role: "Desarrollador Web Freelance",
    company: "Freelance",
    description: [
      "Desarrollo aplicaciones web Full Stack utilizando Java, Spring Boot, React, JavaScript y MySQL.",
      "Diseño e implemento APIs RESTful para la integración de servicios y consumo de datos.",
      "Gestiono la persistencia de datos mediante Spring Data JPA y Hibernate con consultas SQL optimizadas.",
      "Realizo versionado de código y colaboración continua utilizando Git y GitHub.",
      "Realizo validación de endpoints y contratos de API con Postman.",
    ],
    stack: ["ReactJS", "Spring Boot", "MySQL", "REST API", "Git"],
    tags: ["java"],
  },
  {
    range: "Ago. 2024 – Dic. 2024",
    role: "Analista Programador",
    company: "Eldar",
    description: [
      "Desarrollé y mantuve aplicaciones backend empresarial utilizando Java y Spring Boot. Diseñé e implementé APIs REST para la integración de sistemas y microservicios.",
      "Implementé operaciones CRUD y esquemas de persistencia con Spring Data JPA y Hibernate",
      "sobre MySQL",
      "Participé en la resolución de incidencias técnicas y refactorización de código siguiendo",
      "principios SOLID.",
      "Ejecuté pruebas funcionales y validaciones antes del despliegue en entornos de homologación",
    ],
    stack: ["Jira", "Confluence", "SQL", "Testing Funcional", "Agile"],
    tags: ["funcional"],
  },
  {
    range: "Oct. 2023 – Sep. 2024",
    role: "Desarrollador Web Freelance",
    company: "Akirento",
    description: [
      "Diseño, desarrollo y mantenimiento de la plataforma web orientada al catálogo y gestión de alquileres.",
      "Implementación de maquetación responsive y optimización UX/UI utilizando HTML5, CSS3, JavaScript y WordPress/Elementor.",
      "Integración de APIs RESTful para el consumo de datos en tiempo real, formularios interactivos y gestión de solicitudes.",
      "Optimización del rendimiento web (WPO), tiempos de carga y resolución de incidencias en entorno de producción.",
      "Trabajo bajo metodologías ágiles (Scrum) realizando control de versiones con Git y pruebas de integración.",
    ],
    stack: ["Wordpress", "CSS", "HTML", "ELEMENTOR", "Scrum"],
    tags: ["java"],
  },
  {
    range: "May. 2021 – Sep. 2023",
    role: "Soporte Técnico",
    company: "Tiziana Distribuidora",
    description: [
      "Diagnóstico, resolución de incidencias de software/hardware ",
      " Soporte técnico integral a usuarios. ", 
      "Mantenimiento preventivo/correctivo de sistemas e infraestructura operativa. ",
      "Documentación técnica de fallas frecuentes y coordinación de soluciones operativas.",
    ],
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
    role: "Analista Funcional / Tech Enginner",
    company: "Telecom Argentina (Flow)",
    description: [
      "Diagnóstico y reemplazo de hardware.",
      "Instalación y configuración de software y drivers.",
      "Atención y seguimiento de incidencias.",
      "Gestión de tickets mediante Jira.",
      "Documentación técnica utilizando Confluence.",
      "Trabajo con metodología ágil (Scrum) y colaboración con equipos de desarrollo.",
    ],
    stack: [
      "Jira",
      "Postman",
      "Flujo de usuarios",
      "Testing",
      "Seguimiento de defectos",
    ],
    tags: ["funcional"],
  },
  {
    range: "Abr. 2022 – Sep. 2022",
    role: "Tutor de Desarrollo Web",
    company: "Coderhouse",
    description: [
      "Brindé soporte técnico y mentoría a estudiantes en desarrollo web frontend (HTML, CSS,JavaScript) orientando en la resolución de bugs y la aplicación de buenas prácticas de código.",
      "Realicé revisiones de código (Code Reviews), fomentando buenas prácticas de programación y responsive design.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design", "Git"],
    tags: ["funcional", "java"],
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
    institution: "ITUOM",
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
    detail: "Backend Java Developer",
    date: "2026",
    file: "/src/assets/Back-End__Java_-_Certificacin.pdf",
  },
  {
    title: "Coder House 2025",
    detail: "Web / React.js",
    date: "2025",
    file: "/src/assets/DesarrolloWeb.jpeg",  },
  {
    title: "Red Hat System Administration I",
    detail: "Linux & DevOps básico",
    date: "2024",
    file: "/src/assets/RedHat.jpeg",
  },
  {
    title: "Inglés Técnico B1",
    detail: "Comunicación técnica en entornos IT",
    date: "2024",
  },
    {
    title: "Front-End Developer",
    detail: "Diseñador de paginas web y aplicaciones web",
    date: "2024",
    file: "/src/assets/Front_-_Certificacin.pdf",
  },
];

export const PROJECTS = [
  {
    title: 'Tiziana Online - E-Commerce',
    description:
      'Plataforma e-commerce completa con catálogo interactivo, gestión de productos y diseño responsive enfocado en la conversión y experiencia de usuario.',
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'REST API', 'Git'],
    repo: 'https://github.com/pabloperez293/Tiziana-Online',
    demo: 'https://tizionline2026.netlify.app/',
  },
  {
    title: 'Elam Barber Studio',
    description:
      'Landing page web moderna e interactiva para reserva de turnos y presentación de servicios de barbería con diseño Dark UI optimizado.',
    technologies: ['React.js', 'Tailwind CSS', 'UI/UX Design', 'Responsive'],
    demo: 'https://elambarberstudio.netlify.app/',
  },
  {
    title: 'To-Do y Notas ',
    description:
      'Aplicación web interactiva para la gestión eficiente de tareas y notas con almacenamiento persistente en el navegador y filtrado dinámico.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
    demo: 'https://todolistnotes001.netlify.app/',
  },
  {
    title: 'Script Hiringroom y Automatización',
    description:
      'Script y herramientas de automatización orientados al procesamiento de datos y optimización de flujos de reclutamiento.',
    technologies: ['JavaScript', 'Automation', 'API Integration'],
    repo: 'https://github.com/pabloperez293/Script-hirigroom',
  },
  {
    title: 'EndPoints Memory API',
    description:
      'Estructura de backend e integración de servicios REST con gestión en memoria para testeo y validación rápida de contratos de API.',
    technologies: ['Node.js', 'Express', 'REST API', 'JSON'],
    repo: 'https://github.com/pabloperez293/endPointsMem',
  },
  {
    title: 'Galería Interactiva ',
    description:
      'Prototipos frontend para la manipulación dinámica del DOM, filtrado de elementos y maquetación fluida en aplicaciones web.',
    technologies: ['JavaScript', 'HTML5', 'CSS Grid', 'Flexbox'],
    demo: 'https://galeriaext.netlify.app/',
  },
];