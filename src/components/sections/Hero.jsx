import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiCode,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

import Button from "../ui/Button";

import { HERO_PROFILES } from "../../constants";

import perfil from "../../assets/yo.png";

const PROFILE_OPTIONS = [
  {
    key: "funcional",
    label: "Analista Funcional",
    icon: FiBriefcase,
  },
  {
    key: "java",
    label: "Java Developer",
    icon: FiCode,
  },
];

const TYPING_TEXT =
  "Conecto necesidades de negocio con soluciones técnicas mediante análisis, desarrollo, testing y soporte.";

const Hero = () => {
  const [activeProfile, setActiveProfile] = useState("funcional");
  const [displayText, setDisplayText] = useState("");

  const currentProfile = HERO_PROFILES[activeProfile];

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("profileChange", {
        detail: activeProfile,
      }),
    );
  }, [activeProfile]);

  useEffect(() => {
    setDisplayText("");

    let index = 0;

    const typingInterval = setInterval(() => {
      setDisplayText(TYPING_TEXT.slice(0, index + 1));
      index += 1;

      if (index === TYPING_TEXT.length) {
        clearInterval(typingInterval);
      }
    }, 28);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("sobre-mi")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-slate-950 text-white"
    >
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-emerald-500/[0.07] blur-[140px]" />

        <div className="absolute right-[-120px] top-1/3 h-80 w-80 rounded-full bg-emerald-400/[0.04] blur-[120px]" />

        <div className="absolute bottom-[-120px] left-1/3 h-72 w-72 rounded-full bg-red-500/[0.03] blur-[130px]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-76px)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Columna izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Identidad profesional */}

            {/* Nombre */}
            <h1 className="text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] text-slate-100 sm:text-6xl lg:text-7xl">
              Pablo Perez
              <span className="text-emerald-500">.</span>
            </h1>

            {/* Texto con efecto de escritura */}
            <p
              className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
              aria-label={TYPING_TEXT}
            >
              {displayText}

              <span
                className="ml-1 inline-block h-6 w-px translate-y-1 animate-pulse bg-emerald-400 sm:h-7"
                aria-hidden="true"
              />
            </p>

            {/* Selector de perfil */}
            <div className="mt-9 inline-flex rounded-2xl border border-slate-800 bg-slate-900/90 p-1.5 shadow-xl shadow-black/10">
              {PROFILE_OPTIONS.map((option) => {
                const Icon = option.icon;
                const isActive = activeProfile === option.key;

                return (
                  <button
                    key={option.key}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveProfile(option.key)}
                    className={`inline-flex min-h-11 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                      isActive
                        ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                        : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {option.label}
                  </button>
                );
              })}
            </div>

            {/* Perfil activo */}
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
                  {currentProfile.title || currentProfile.label}
                </h2>
              </div>

              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400">
                {currentProfile.description}
              </p>
            </motion.div>

            {/* Tecnologías */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Java",
                "Spring Boot",
                "SQL",
                "React",
                "Git",
                "Jira",
                "Postman",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-800 bg-slate-900 px-3.5 py-1.5 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-emerald-500/30 hover:text-emerald-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Separador */}
            <div className="my-8 h-px max-w-2xl bg-gradient-to-r from-slate-800 via-slate-800 to-transparent" />

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
              className="mt-9 inline-flex min-h-11 items-center gap-3 text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-800">
                ↓
              </span>
              Conocé mi perfil
            </button>
          </motion.div>

          {/* Columna derecha */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.1,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Glow */}
              <div className="absolute -inset-8 rounded-[3rem] bg-emerald-500/[0.035] blur-3xl" />

              {/* Marcos */}
              <div className="absolute -inset-3 rounded-[2.2rem] border border-emerald-500/10" />

              <div className="absolute -inset-6 rounded-[2.7rem] border border-slate-800/40" />

              {/* Tarjeta */}
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 shadow-2xl shadow-black/50">
                {/* Foto */}
                <div className="aspect-[4/5] overflow-hidden bg-slate-950">
                  <img
                    src={perfil}
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
