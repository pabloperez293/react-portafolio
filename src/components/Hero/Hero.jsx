import { useState } from 'react';

import { motion } from 'framer-motion';
import {
  FiBriefcase,
  FiCode,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi';

import chatpab from '../../assets/chatpab.png';

const PROFILE_DATA = {
  funcional: {
    label: 'Analista Funcional',
    description:
      'Conecto necesidades de negocio con soluciones técnicas mediante análisis, documentación, testing y seguimiento de incidencias.',
    technologies: [
      'Jira',
      'Confluence',
      'SQL',
      'Postman',
      'Git',
      'Documentación',
    ],
  },

  java: {
    label: 'Java Developer',
    description:
      'Desarrollo soluciones backend con Java y Spring Boot, trabajando con APIs REST, bases de datos SQL y herramientas de desarrollo.',
    technologies: [
      'Java',
      'Spring Boot',
      'REST API',
      'JPA / Hibernate',
      'SQL',
      'Git',
    ],
  },
};

const Hero = () => {
  const [activeProfile, setActiveProfile] = useState('funcional');

  const profile = PROFILE_DATA[activeProfile];

  const scrollToAbout = () => {
    document.getElementById('sobre-mi')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-slate-950 text-white"
    >
      {/* Fondo visual */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Glow verde principal */}
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-emerald-500/[0.07] blur-[140px]" />

        {/* Glow verde secundario */}
        <div className="absolute right-[-120px] top-1/3 h-80 w-80 rounded-full bg-emerald-400/[0.04] blur-[120px]" />

        {/* Detalle rojo muy sutil */}
        <div className="absolute bottom-[-100px] left-1/2 h-72 w-72 rounded-full bg-red-500/[0.035] blur-[140px]" />

        {/* Línea central */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-slate-800/40 to-transparent lg:block" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-76px)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          {/* ================================================== */}
          {/* INFORMACIÓN */}
          {/* ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            {/* Identidad profesional */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              Analista Funcional / Técnico · Java Developer
            </div>

            {/* Nombre */}
            <h1 className="text-5xl font-extrabold leading-[0.95] tracking-[-0.035em] text-slate-100 sm:text-6xl lg:text-7xl">
              Pablo Perez
              <span className="text-emerald-500">.</span>
            </h1>

            {/* Propuesta */}
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Conecto necesidades de negocio con soluciones técnicas mediante{' '}
              <span className="font-semibold text-slate-100">
                análisis, desarrollo, testing y soporte.
              </span>
            </p>

            {/* Selector de perfil */}
            <div className="mt-9 inline-flex rounded-2xl border border-slate-800 bg-slate-900/90 p-1.5 shadow-lg shadow-black/10">
              <button
                type="button"
                aria-pressed={activeProfile === 'funcional'}
                onClick={() => setActiveProfile('funcional')}
                className={`inline-flex min-h-11 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                  activeProfile === 'funcional'
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'text-slate-400 hover:bg-slate-800/70 hover:text-slate-100'
                }`}
              >
                <FiBriefcase className="h-4 w-4" />
                Analista Funcional
              </button>

              <button
                type="button"
                aria-pressed={activeProfile === 'java'}
                onClick={() => setActiveProfile('java')}
                className={`inline-flex min-h-11 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                  activeProfile === 'java'
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'text-slate-400 hover:bg-slate-800/70 hover:text-slate-100'
                }`}
              >
                <FiCode className="h-4 w-4" />
                Java Developer
              </button>
            </div>

            {/* Perfil dinámico */}
            <motion.div
              key={activeProfile}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-7"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-emerald-500" />

                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
                  {profile.label}
                </h2>
              </div>

              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400">
                {profile.description}
              </p>

              {/* Tecnologías */}
              <div className="mt-5 flex flex-wrap gap-2">
                {profile.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-800 bg-slate-900 px-3.5 py-1.5 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-emerald-500/30 hover:text-emerald-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Separador */}
            <div className="my-8 h-px max-w-2xl bg-gradient-to-r from-slate-800 via-slate-800 to-transparent" />

            {/* CV */}
            <div className="flex flex-wrap gap-3">
              <a
                href="/cv-funcional.pdf"
                download
                className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <FiDownload className="h-4 w-4" />
                CV Analista
              </a>

              <a
                href="/cv-java.pdf"
                download
                className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-600 hover:bg-slate-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <FiDownload className="h-4 w-4" />
                CV Java Developer
              </a>
            </div>

            {/* Redes */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/pabloperez293"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Pablo Perez"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 hover:border-emerald-500/30 hover:text-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <FiGithub className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/devpabloperez"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Pablo Perez"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 hover:border-emerald-500/30 hover:text-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>

              <a
                href="mailto:pablodevperez@gmail.com"
                aria-label="Enviar email a Pablo Perez"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 hover:border-emerald-500/30 hover:text-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <FiMail className="h-5 w-5" />
              </a>
            </div>

            {/* Scroll */}
            <button
              type="button"
              onClick={scrollToAbout}
              className="mt-10 inline-flex min-h-11 items-center gap-3 text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-800">
                ↓
              </span>

              Conocé mi perfil
            </button>
          </motion.div>

          {/* ================================================== */}
          {/* FOTO */}
          {/* ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">

              {/* Halo */}
              <div className="absolute -inset-8 rounded-[3rem] bg-emerald-500/[0.035] blur-3xl" />

              {/* Marcos */}
              <div className="absolute -inset-3 rounded-[2.2rem] border border-emerald-500/10" />

              <div className="absolute -inset-6 rounded-[2.7rem] border border-slate-800/40" />

              {/* Card */}
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 shadow-2xl shadow-black/50">

                {/* Foto */}
                <div className="aspect-[4/5] overflow-hidden bg-slate-950">
                  <img
                    src={chatpab}
                    alt="Pablo Perez"
                    loading="eager"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                {/* Información */}
                <div className="border-t border-slate-800 px-5 py-5">
                  <div className="flex items-center justify-between gap-4">

                    <div>
                      <p className="text-sm font-bold text-slate-100">
                        Pablo Perez
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Analista Funcional / Técnico · Java Developer
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                      <FiCode className="h-5 w-5" />
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;