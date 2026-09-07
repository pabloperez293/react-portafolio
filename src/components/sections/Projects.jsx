// Componente Projects: renderiza la lista de proyectos desde constants
import { motion } from 'framer-motion';
import ProjectCard from '../cards/ProjectCard';
import SectionHeader from '../ui/SectionHeader';
import { PROJECTS } from '/src/constants';

const spring = { type: 'spring', stiffness: 400, damping: 25 };

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-20 bg-slate-950 py-12 text-white sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Proyectos Destacados"
          subtitle="Proyectos alineados con mi perfil técnico, desarrollo backend y experiencia en análisis funcional."
        />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {PROJECTS?.map((project, index) => (
            <motion.div
              key={project.title + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ ...spring, delay: index * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;