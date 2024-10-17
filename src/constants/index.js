import project1 from "../assets/yo.png";
import project2 from "../assets/yo.png";
import project3 from "../assets/yo.png";
import project4 from "../assets/yo.png";

export const HERO_CONTENT = `Soy un nerd de la tecnología y me adapto facilmente a nuevos
 proyectos. En mi carrera, desarrolle habilidades en análisis funcional y testeo de aplicaciones,
  lo que me ha permitido colaborar con equipos de trabajo y ágiles. Mi experiencia abarca
  desde soporte técnico y desarrollar webs, ademas comprendo como implementar soluciones
  en el sectores, con un enfoque en Java, APIs , microservicios, con Mariadb, postman y javascript`;

export const ABOUT_TEXT = `Me gusta trabajar en equipo , soy un estusiasta en la
tecnologia que continuamente se actualiza , me
motiva seguir aprendiendo y tengo facilidad en el
cambio de proyectos , ademas cuento con facilidad
en el análisis funcional y testeo de aplicaciones
como objetivo de carrera profesional y comprender las herramientas de
React, Node.js, SQL. java, springboot, javascript.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Programador Web Freelance",
    company: "Akirento",
    description: `Desarrollo y ajuste de funcionalidades en sitios web WordPress
WooCommerce, Parametrización de áreas de cobertura, tarifas,
y transporte utilizando códigos postales.Optimización de SEO: análisis de palabras clave, estructura del
sitio, velocidad, y compatibilidad móvil, Desarrollo e integración
de chatbots (WhatsApp) y APIs `,
    technologies: ["Wordpress", "CSS", "Plantillas", "SEO"],
  },
  {
    year: "2023 - 2024",
    role: "Software Enginner |",
    company: "Eldar",
    description: `Desarrollo e Implementación en java con spring boot
, uso de Api-Rest realizando operaciones de
microservicios , en partes se realizan gestiones
monolítica.
A su vez en la financiera estoy en proyectos con java
y angular para la empresa cabal desarrollando un
testeo de aplicacion y su funcionamiento.
`,
    technologies: ["Java", "Springboot", "Mariadb", "Angular"],
  },
  {
    year: "2020 - 2023",
    role: "Tech Enginner",
    company: "Telecom",
    description: `Analizar, generar la documentación en JIRA y dejar
en el confluence el progreso de las mismas, usamos
tableros agile para el backlog . Probar casos de uso
sobre funcionalidades nuevas o existentes sobre el
ecosistema de Flow. Ejecutar planes de prueba para
validar el funcionamiento utilizando Postman en los
servicios y funcionalidades que están siendo
desplegadas.`,
    technologies: ["Grafana", "Postman", "clusters", "Servidores"],
  },
  {
    year: "2022 - 2022",
    role: "Tutor Desarrollo web",
    company: "Coder House",
    description: `Corregir códigos de maquetación web como html,
css , sass , uso del SEO y para diseños responsive
usamos bootstrap que ya viene precargado los
diseños. En detalle dejo los temas vistos, Box
modeling, Flex box, Grids, animaciones, GitHub, guía
para hacer las buenas prácticas en programación,
seguimiento de alumnos.
`,
    technologies: [
      "Javascript",
      "HTML",
      "CSS",
      "SASS",
      "Responsive web",
      "Git",
    ],
  },
  {
    year: "2017 - 2020",
    role: "Tecnico Instalador",
    company: "Cablevision",
    description: `Medición y manejo de fibra óptica, capacidad para
realizar tareas en altura. Diagnóstico de problemas
de conexión y perdida de señal. Instalación de cable,
internet y telefonía domiciliarias. Conocimientos y
experiencia solida en instalación de fibra óptica
`,
    technologies: [
      "Configuracion de Redes",
      "TCP/IP",
      "ROUTERS",
      "DECODIFICAODRES",
      "SIGMA",
    ],
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
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
