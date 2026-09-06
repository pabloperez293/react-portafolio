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
      : EXPERIENCES.filter((experience) => experience.tags.includes(activeFilter));

  return (
    <section id="experience" className="scroll-mt-20 bg-[#FDFDFD] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Experiencia"
          subtitle="Trayectoria profesional orientada a análisis funcional, soporte técnico y desarrollo Java."
        />

        <div className="flex flex-wrap items-center gap-3 rounded-full border border-slate-200 bg-slate-50 p-2 shadow-sm">
          {filterOptions.map((option) => (
            <motion.button
              key={option.key}
              type="button"
              whileHover={{ scale: 1.03 }}
              transition={spring}
              onClick={() => setActiveFilter(option.key)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                activeFilter === option.key
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                  : 'text-slate-700 hover:bg-indigo-50 hover:text-indigo-700'
              }`}
            >
              {option.label}
            </motion.button>
          ))}
        </div>

        <div className="mt-10 space-y-6">
          {visibleExperiences.map((experience, index) => (
            <motion.article
              key={experience.company + index}
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.02 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: index * 0.05 }}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{experience.range}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                    {experience.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-indigo-600">{experience.company}</p>
                </div>
              </div>

              <p className="mt-4 text-slate-600 leading-7">{experience.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {experience.stack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
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
