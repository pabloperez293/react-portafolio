import React from 'react';
import ProjectCard from '../cards/ProjectCard';
import SectionHeader from '../ui/SectionHeader';

const projects = [
  {
    title: 'API REST Banking / E-Commerce Backend',
    description:
      'Backend robusto para banca y e-commerce construido con Java 17, Spring Boot, Spring Data JPA, PostgreSQL y Docker. Incluye endpoints REST seguros y pruebas con Postman.',
    technologies: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'Docker', 'REST API', 'Postman'],
    repo: 'https://github.com/pabloperezdev/banking-ecommerce-backend',
  },
  {
    title: 'Portal de Gestión Fullstack',
    description:
      'Aplicación fullstack con frontend en React y Tailwind CSS, backend en Java + Spring Boot y persistencia MySQL. Diseñada para gestión de usuarios, inventario y workflows administrativos.',
    technologies: ['React.js', 'Tailwind CSS', 'Java', 'Spring Boot', 'REST API', 'MySQL'],
    repo: 'https://github.com/pabloperezdev/portal-gestion-fullstack',
  },
  {
    title: 'Documentación & Especificación Funcional',
    description:
      'Entrega de documentación técnica completa con Jira, Confluence, historias de usuario, casos de uso y UML. Incluye plan de testing funcional y criterios de aceptación.',
    technologies: ['Jira', 'Confluence', 'Historias de Usuario', 'Casos de Uso', 'UML', 'Testing Funcional'],
    repo: 'https://github.com/pabloperezdev/documentacion-funcional',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#FDFDFD] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Proyectos"
          subtitle="Proyectos alineados con mi perfil técnico y experiencia funcional."
        />

        <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
