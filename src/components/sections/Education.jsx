// Componente Education: detalla la formación académica y las certificaciones obtenidas.
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { CERTIFICATIONS, EDUCATION } from '/src/constants';

const spring = { type: 'spring', stiffness: 400, damping: 25 };

const certificateImages = {
  'Talent Tech 2026': '/src/assets/certificates/talent-tech-2026.png',
  'Talent Tech 2025': '/src/assets/certificates/talent-tech-2025.png',
  'Red Hat System Administration I': '/src/assets/certificates/red-hat-system-administration-i.png',
  'Inglés Técnico B1': '/src/assets/certificates/ingles-tecnico-b1.png',
};

const Education = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    if (!selectedCert) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedCert(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedCert]);

  return (
    <section id="education" className="scroll-mt-20 bg-[#FDFDFD] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Educación & Certificaciones"
          subtitle="Formación continua con foco en programación, análisis y tecnologías modernas."
        />

        <div className="grid gap-8 lg:grid-cols-2 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={spring}
            className="space-y-4 rounded-4xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-950">Formación académica</h3>
            <div className="space-y-4">
              {EDUCATION.map((item, index) => (
                <div key={index} className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-slate-900">{item.title}</p>
                      <p className="text-sm text-slate-500">{item.institution}</p>
                    </div>
                    <span className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-700">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{item.date}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.08 }}
            className="space-y-4 rounded-4xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-950">Certificaciones</h3>
            <div className="grid gap-4">
              {CERTIFICATIONS.map((cert, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedCert(cert.title)}
                  className="w-full rounded-3xl border border-slate-100 bg-slate-50 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-red-200"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-slate-900">{cert.title}</p>
                      <p className="text-sm text-slate-500">{cert.detail}</p>
                    </div>
                    <span className="text-sm font-semibold text-slate-500">{cert.date}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="w-full max-w-3xl overflow-hidden rounded-4xl bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                <h4 className="text-lg font-semibold text-slate-950">{selectedCert}</h4>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="bg-slate-100 p-6">
                <img
                  src={certificateImages[selectedCert] || '/src/assets/certificates/placeholder.png'}
                  alt={selectedCert}
                  className="h-125 w-full rounded-3xl object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education;
