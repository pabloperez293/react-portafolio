// Componente Footer: pie de página con copyright y acceso rápido al inicio.
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const contactSection = document.getElementById('contact');
      const contactVisible = contactSection
        ? contactSection.getBoundingClientRect().top < viewportHeight && contactSection.getBoundingClientRect().bottom >= 0
        : false;
      const thresholdPx = 600;
      setShowButton(scrollY > thresholdPx || contactVisible);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const home = document.getElementById('home');
    if (home) {
      home.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-slate-200/60 bg-[#FDFDFD] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-600 sm:flex-row">
        <p>© 2026 Pablo Perez • Analista Funcional & Java Developer</p>
        <AnimatePresence>
          {showButton && (
            <motion.button
              key="scroll-top-button"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              type="button"
              onClick={scrollToTop}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-600 px-4 py-2 text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:bg-indigo-700"
            >
              <ArrowUp className="h-4 w-4" />
              Volver arriba
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
};

export default Footer;
