import { useState } from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Mail } from 'lucide-react';

const links = [
  { href: '#hero', label: 'Inicio' },
  { href: '#about', label: 'Sobre mi' },
  { href: '#tech', label: 'Tecnologías' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#contact', label: 'Contacto' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-4 z-40 mb-20">
      <div className="backdrop-blur-sm bg-neutral-900/60 border border-neutral-800 rounded-full px-6 py-3 mx-2">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a href="#hero" className="font-semibold text-xl">Pablo<span className="text-cyan-400">.</span></a>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {links.map((l) => (
                <li key={l.href}><a href={l.href} className="text-neutral-300 hover:text-cyan-300">{l.label}</a></li>
              ))}
            </ul>

            <div className="flex items-center gap-3 text-2xl text-neutral-300">
              <a aria-label="Linkedin" href="#"><FaLinkedin /></a>
              <a aria-label="Github" href="#"><FaGithub /></a>
              <a aria-label="Instagram" href="#"><FaInstagram /></a>
              <a aria-label="Email" href="#contact"><Mail className="text-cyan-400" /></a>
            </div>
          </div>

          <div className="lg:hidden">
            <button aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)} className="p-2 rounded-md bg-neutral-800/40">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-200">
                {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-3 lg:hidden">
            <ul className="flex flex-col gap-3 px-2 py-2">
              {links.map((l) => (
                <li key={l.href}><a onClick={() => setOpen(false)} href={l.href} className="block px-3 py-2 rounded hover:bg-neutral-800 text-neutral-200">{l.label}</a></li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
