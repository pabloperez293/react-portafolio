import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, FileText, ChevronRight, ExternalLink } from 'lucide-react';
import Button from '../ui/Button';
import heroImg from '/src/assets/PabloPerez.png';
import { PROFILE, HERO_PROFILES } from '/src/constants';

const spring = { type: 'spring', stiffness: 400, damping: 25 };
const profileOptions = [
  { key: 'funcional', label: 'Analista Funcional' },
  { key: 'java', label: 'Java Developer' },
];

export default function Hero() {
  const [activeProfile, setActiveProfile] = useState('funcional');
  const currentProfile = HERO_PROFILES[activeProfile];

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('profileChange', { detail: activeProfile }));
  }, [activeProfile]);

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={spring}
      className="relative min-h-[88vh] overflow-hidden bg-[#FDFDFD] text-slate-900"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.08),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.06),transparent_22%)]" />
      <div className="pointer-events-none absolute top-16 left-1/2 -translate-x-1/2 w-150 h-87.5 rounded-full bg-gradient-to-r from-red-600/15 to-orange-500/10 blur-[120px] -z-10" />
      <div className="pointer-events-none absolute left-12 top-28 h-px w-24 bg-red-100 opacity-60" />
      <div className="pointer-events-none absolute left-24 top-20 h-2 w-2 rounded-full bg-orange-100 opacity-70" />
      <div className="pointer-events-none absolute right-16 bottom-20 h-px w-28 bg-orange-100 opacity-50" />
      <div className="pointer-events-none absolute right-24 bottom-32 h-2 w-2 rounded-full bg-red-100 opacity-70" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-red-100 bg-red-50/80 px-4 py-2 text-sm text-slate-700 shadow-sm">
              <Sparkles className="h-5 w-5 text-red-600" />
              <span className="font-semibold">Analista Funcional & Java Developer</span>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.32em] text-red-600">Perfil</p>
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-950">
                  Pablo Perez
                </h1>
                <p className="text-base sm:text-lg leading-8 text-slate-600 max-w-3xl">
                  {currentProfile.description}
                </p>
              </div>

              <div className="inline-flex flex-wrap gap-3 rounded-full border border-red-100 bg-slate-50 p-1.5 shadow-sm">
                {profileOptions.map((profile) => (
                  <motion.button
                    key={profile.key}
                    type="button"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    transition={spring}
                    onClick={() => setActiveProfile(profile.key)}
                    className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      activeProfile === profile.key
                        ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-md shadow-red-500/25'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {profile.label}
                  </motion.button>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-red-100 bg-white/90 p-6 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Contacto</p>
                  <div className="mt-4 space-y-3 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-900">Email:</span>
                      <a href={`mailto:${PROFILE.email}`} className="text-red-600 hover:text-red-700">
                        {PROFILE.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-900">Teléfono:</span>
                      <span>{PROFILE.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-900">Ubicación:</span>
                      <span>{PROFILE.location}</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-red-100 bg-white/90 p-6 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Perfil</p>
                  <div className="mt-4 space-y-3 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-red-600" />
                      <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-red-600 hover:text-red-700">
                        linkedin.com/in/devpabloperez
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-red-600" />
                      <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-red-600 hover:text-red-700">
                        github.com/pabloperezdev
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }} transition={spring}>
                  <Button
                    href={currentProfile.cv}
                    variant="primary"
                    className="px-6 py-3.5"
                  >
                    <FileText className="w-4 h-4" />
                    Descargar CV {currentProfile.label}
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }} transition={spring}>
                  <Button
                    href="#projects"
                    variant="secondary"
                    className="px-6 py-3.5"
                  >
                    Ver Portfolio
                  </Button>
                </motion.div>
              </div>

              <div className="pt-5 border-t border-slate-200/70">
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Spring Boot', 'React', 'JavaScript', 'PostgreSQL', 'Git', 'Docker', 'REST API'].map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={spring}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] border border-red-100 bg-white/90 p-2 shadow-xl">
              <div className="overflow-hidden rounded-[2.25rem] bg-slate-100">
                <motion.img
                  src={heroImg}
                  alt="Pablo Perez Dual Profile"
                  className="h-full w-full object-cover"
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.06, rotate: 2 }}
                  whileTap={{ scale: 0.96 }}
                />
                <div className="absolute inset-x-0 bottom-0 mx-auto mb-5 flex w-fit items-center gap-3 rounded-3xl bg-white/85 px-5 py-3 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white">🕸️</span>
                  <span>{activeProfile === 'funcional' ? 'Visión de negocio & procesos' : 'Código & arquitectura Java'}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
