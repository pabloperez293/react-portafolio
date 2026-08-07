import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa6';
import useActiveSection from '../../hooks/useActiveSection';

const PROFILE_BUTTONS = [
  { key: 'functional', label: '🧩 Analista Funcional', target: 'experiencia' },
  { key: 'java', label: '💻 Java Developer', target: 'certificados' },
];

const NAV_LINKS = [
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'certificados', label: 'Certificados' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
];

const Navbar = () => {
  const [activeProfile, setActiveProfile] = useState('functional');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(NAV_LINKS.map((item) => item.id));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    const offset = section.getBoundingClientRect().top + window.pageYOffset - 92;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };

  const handleProfileClick = (profile) => {
    setActiveProfile(profile.key);
    window.dispatchEvent(new CustomEvent('profileChange', { detail: profile.key }));
    scrollToSection(profile.target);
    setOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'border-b border-slate-200/60 bg-white/90 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.06)]'
            : 'bg-white/70 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="text-base font-semibold uppercase tracking-[0.22em] text-slate-950">
            Pablo Perez
          </a>

          <div className="hidden md:flex items-center gap-3 rounded-full bg-slate-100/80 backdrop-blur-md border border-slate-200/60 p-1.5 shadow-sm">
            {PROFILE_BUTTONS.map((profile) => (
              <button
                key={profile.key}
                type="button"
                onClick={() => handleProfileClick(profile)}
                className={`rounded-full transition-all duration-300 ${
                  activeProfile === profile.key
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 px-5 py-2.5 font-medium scale-105'
                    : 'text-slate-500 hover:text-slate-900 px-5 py-2.5 transition-colors'
                }`}
              >
                {profile.label}
              </button>
            ))}
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className={`transition-colors duration-300 ${
                  activeSection === link.id ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-700'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-slate-300 md:hidden"
          >
            {open ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-slate-950/20 backdrop-blur-sm md:hidden">
          <div
            className="absolute right-4 top-24 left-4 rounded-[2rem] border border-slate-200/40 bg-white/95 p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex flex-col gap-3 rounded-full border border-slate-200/80 bg-slate-50 p-2">
              {PROFILE_BUTTONS.map((profile) => (
                <button
                  key={profile.key}
                  type="button"
                  onClick={() => handleProfileClick(profile)}
                  className={`w-full rounded-full px-4 py-3 text-left text-sm font-semibold transition-all duration-300 ${
                    activeProfile === profile.key
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {profile.label}
                </button>
              ))}
            </div>

            <nav className="space-y-4 text-lg font-semibold text-slate-900">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => {
                    scrollToSection(link.id);
                    setOpen(false);
                  }}
                  className="w-full rounded-3xl px-4 py-3 text-left transition-all duration-300 hover:bg-slate-100 hover:border hover:border-indigo-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
