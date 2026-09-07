import { useEffect, useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';
import imgLogo from './assets/yo.png';

import useActiveSection from '../../hooks/useActiveSection';

const NAV_LINKS = [
  { id: 'home', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'proyectos', label: 'Proyectos' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const activeSection = useActiveSection(
    NAV_LINKS.map((item) => item.id)
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    const offset = section.getBoundingClientRect().top + window.scrollY - 88;

    window.scrollTo({
      top: offset,
      behavior: 'smooth',
    });

    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? 'border-slate-800 bg-slate-950/95 shadow-lg shadow-black/20 backdrop-blur-xl'
          : 'border-slate-900 bg-slate-950/90 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          aria-label="Ir al inicio"
          className="group inline-flex min-h-11 items-center gap-2.5 rounded-xl px-1 text-left text-base font-bold tracking-tight text-slate-100 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-emerald-500/40 bg-slate-900 transition-colors duration-300 group-hover:border-emerald-500/70 sm:h-10 sm:w-10">
            <img
              src={imgLogo}
              alt="Logo de Pablo Perez"
              className="h-full w-full rounded-full object-cover"
            />
          </span>

          <span className="text-sm sm:text-base">
            Pablo Perez<span className="text-emerald-500">.</span>
          </span>
        </button>

        {/* Navegación desktop */}
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-1 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              aria-current={activeSection === link.id ? 'page' : undefined}
              className={`min-h-11 rounded-xl px-3.5 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 lg:px-4 ${
                activeSection === link.id
                  ? 'bg-slate-900 text-emerald-400'
                  : 'text-slate-400 hover:bg-slate-900/70 hover:text-slate-100'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href="/assets/CV PabloPerez.pdf"
          download
          className="hidden min-h-11 items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 text-sm font-semibold text-emerald-400 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 md:inline-flex"
        >
          <FiDownload className="h-4 w-4" />
          CV
        </a>

        {/* Botón mobile */}
        <button
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-200 transition-all duration-300 hover:border-slate-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 md:hidden"
        >
          <motion.span
            initial={false}
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {open ? (
              <FaXmark className="h-5 w-5" />
            ) : (
              <FaBars className="h-5 w-5" />
            )}
          </motion.span>
        </button>
      </div>

      {/* Menú mobile */}
      {open && (
        <div className="border-t border-slate-800 bg-slate-950/98 backdrop-blur-2xl md:hidden">
          <nav
            aria-label="Navegación móvil"
            className="mx-auto flex max-w-7xl flex-col gap-1.5 px-4 py-4 sm:px-6"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                aria-current={activeSection === link.id ? 'page' : undefined}
                className={`min-h-11 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                  activeSection === link.id
                    ? 'bg-slate-900 text-emerald-400 font-semibold'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}

            <a
              href="/assets/CV PabloPerez.pdf"
              download
              className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-400 transition-all duration-300 hover:bg-emerald-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <FiDownload className="h-4 w-4" />
              Descargar CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;