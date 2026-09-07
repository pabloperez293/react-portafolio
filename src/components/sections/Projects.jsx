/* eslint-disable react/prop-types */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, FolderGit2 } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { PROJECTS } from '/src/constants';

const GithubIcon = ({ className = 'h-4 w-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 800 : -800,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 800 : -800,
    opacity: 0,
  }),
};

const Projects = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const projectsCount = PROJECTS?.length || 0;
  const currentIndex = ((page % projectsCount) + projectsCount) % projectsCount;
  const currentProject = PROJECTS[currentIndex];

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section id="projects" className="scroll-mt-20 bg-slate-950 py-12 text-white sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Galería de Proyectos"
          subtitle="Desliza para explorar mis desarrollos backend, aplicaciones web y soluciones funcionales."
        />

        <div className="relative mt-10 mx-auto max-w-4xl px-2 sm:px-12">
          {/* Tarjeta Slider */}
          <div className="relative min-h-95 sm:min-h-85 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-emerald-500/5 sm:rounded-4xl sm:p-10">
            {/* Imagen de Fondo */}
            {currentProject?.image ? (
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="h-full w-full object-cover object-center opacity-40 transition-opacity duration-500"
                  onError={() => {
                    console.error('Error cargando la imagen:', currentProject.image);
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
              </div>
            ) : (
              <div className="absolute inset-0 z-0 bg-linear-to-br from-slate-900 via-slate-950 to-slate-900 opacity-90" />
            )}

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="relative z-10 flex flex-col justify-between h-full space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                        <FolderGit2 className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                        Proyecto {currentIndex + 1} de {projectsCount}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {currentProject?.repo && (
                        <a
                          href={currentProject.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-950/80 text-slate-400 transition hover:border-emerald-500/40 hover:text-emerald-400"
                          title="Ver Repositorio"
                        >
                          <GithubIcon className="h-5 w-5" />
                        </a>
                      )}
                      {currentProject?.demo && (
                        <a
                          href={currentProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-950/80 text-slate-400 transition hover:border-emerald-500/40 hover:text-emerald-400"
                          title="Ver Demo en Vivo"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="mt-6 text-2xl font-extrabold text-slate-100 sm:text-3xl">
                    {currentProject?.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-300">
                    {currentProject?.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                  {currentProject?.technologies?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-slate-800 bg-slate-950/90 px-3.5 py-1 text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Flechas de Control Lateral */}
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Proyecto anterior"
            className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-slate-900/90 text-slate-300 shadow-lg backdrop-blur transition hover:border-emerald-500/50 hover:bg-slate-800 hover:text-emerald-400 active:scale-95 z-20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Proyecto siguiente"
            className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-slate-900/90 text-slate-300 shadow-lg backdrop-blur transition hover:border-emerald-500/50 hover:bg-slate-800 hover:text-emerald-400 active:scale-95 z-20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Puntos Indicadores */}
          <div className="mt-6 flex justify-center items-center gap-2">
            {PROJECTS?.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setPage([idx, idx > currentIndex ? 1 : -1])}
                aria-label={`Ir al proyecto ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-8 bg-emerald-400'
                    : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;