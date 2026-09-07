// Componente Experience: presenta la trayectoria profesional y su foco en análisis funcional y Java.
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '/src/constants';
import SectionHeader from '../ui/SectionHeader';

const spring = { type: 'spring', stiffness: 400, damping: 25 };
const filterOptions = [
  { key: 'all', label: 'Todas' },
  { key: 'funcional', label: 'Analista Funcional' },
  { key: 'java', label: 'Java Developer' },
];

const Experience = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const handleProfileChange = (event) => {
      if (event.detail === 'java' || event.detail === 'funcional') {
        setActiveFilter(event.detail);
      }
    };

    window.addEventListener('profileChange', handleProfileChange);
    return () => window.removeEventListener('profileChange', handleProfileChange);
  }, []);

  const visibleExperiences =
    activeFilter === 'all'
      ? EXPERIENCES
      : EXPERIENCES.filter((experience) => experience.tags?.includes(activeFilter));

  const renderDescription = (description) => {
    // Si la descripción es un Array de ítems
    if (Array.isArray(description)) {
      return (
        <ul className="mt-4 space-y-2.5">
          {description.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
              <span>{item.replace(/^\*\s*/, '')}</span>
            </li>
          ))}
        </ul>
      );
    }

    // Si la descripción es un String con saltos de línea (\n) o viñetas (*)
    if (typeof description === 'string' && (description.includes('\n') || description.trim().startsWith('*'))) {
      const items = description
        .split('\n')
        .map((item) => item.trim())
        .filter(Boolean);

      return (
        <ul className="mt-4 space-y-2.5">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
              <span>{item.replace(/^\*\s*/, '')}</span>
            </li>
          ))}
        </ul>
      );
    }

    // Si es un String común de un solo párrafo
    return (
      <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
        {description}
      </p>
    );
  };

  return (
    <section id="experiencia" className="scroll-mt-20 bg-slate-950 py-12 text-white sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Experiencia de mi perfil"
          subtitle="Mi experiencia profesional orientada a análisis funcional, soporte técnico y desarrollo en varios sistemas."
        />

        {/* Filtros adaptables */}
        <div className="inline-flex w-full flex-wrap items-center gap-1.5 rounded-2xl border border-slate-800 bg-slate-900/90 p-1.5 shadow-xl shadow-black/10 sm:w-auto sm:gap-2 sm:rounded-full">
          {filterOptions.map((option) => (
            <motion.button
              key={option.key}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={spring}
              onClick={() => setActiveFilter(option.key)}
              className={`flex-1 min-h-11 rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-300 sm:flex-initial sm:rounded-full sm:text-sm ${
                activeFilter === option.key
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
              }`}
            >
              {option.label}
            </motion.button>
          ))}
        </div>

        {/* Tarjetas de experiencia */}
        <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
          {visibleExperiences.map((experience, index) => (
            <motion.article
              key={experience.company + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ ...spring, delay: index * 0.05 }}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-5 shadow-xl shadow-black/20 transition-all duration-300 hover:border-emerald-500/30 sm:rounded-4xl sm:p-7"
            >
              <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 sm:text-sm">
                    {experience.range}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold text-slate-100 sm:text-2xl">
                    {experience.role}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-slate-400">
                    {experience.company}
                  </p>
                </div>
              </div>

              {/* Renderizado dinámico de la descripción */}
              {renderDescription(experience.description)}

              {/* Tags de Tecnologías */}
              <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                {experience.stack?.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-full border border-slate-800 bg-slate-950 px-3 py-1 text-xs font-medium text-slate-300 transition-colors duration-300 hover:border-emerald-500/30 hover:text-emerald-400 sm:px-3.5 sm:py-1.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;