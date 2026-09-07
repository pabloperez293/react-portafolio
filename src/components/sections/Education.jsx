// Componente Education: detalla la formación académica y certificaciones obtenidas.
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ExternalLink, Award, GraduationCap, Download } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { CERTIFICATIONS, EDUCATION } from '/src/constants';

const spring = { type: 'spring', stiffness: 400, damping: 25 };

const getStatusBadgeClass = (status) => {
  const normalized = status?.toLowerCase() || '';
  if (normalized.includes('curso')) {
    return 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400';
  }
  if (normalized.includes('finalizado') || normalized.includes('complet')) {
    return 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400';
  }
  return 'border-slate-700 bg-slate-800/80 text-slate-400';
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

  const isPdf = selectedCert?.file?.toLowerCase().endsWith('.pdf');

  return (
    <section id="education" className="scroll-mt-20 bg-slate-950 py-12 text-white sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Educación & Certificaciones"
          subtitle="Formación continua con foco en programación, análisis y tecnologías modernas."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-2 sm:mt-10 lg:gap-8">
          {/* Formación Académica */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={spring}
            className="flex flex-col space-y-6 rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-black/20 sm:rounded-4xl sm:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-100 sm:text-2xl">
                Formación académica
              </h3>
            </div>

            <div className="space-y-3.5 sm:space-y-4">
              {EDUCATION.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 transition-all duration-300 hover:border-slate-700 sm:rounded-3xl sm:p-5"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-base font-bold text-slate-100 sm:text-lg">{item.title}</p>
                      <p className="mt-0.5 text-sm font-medium text-slate-400">{item.institution}</p>
                    </div>
                    <span
                      className={`inline-flex self-start rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider sm:text-xs ${getStatusBadgeClass(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:text-sm">
                    {item.date}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certificaciones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ ...spring, delay: 0.08 }}
            className="flex flex-col space-y-6 rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-black/20 sm:rounded-4xl sm:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-100 sm:text-2xl">
                Certificaciones
              </h3>
            </div>

            <div className="grid gap-3.5 sm:gap-4">
              {CERTIFICATIONS.map((cert, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="group w-full rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-emerald-500/5 sm:rounded-3xl sm:p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="truncate text-base font-bold text-slate-100 transition-colors group-hover:text-emerald-400 sm:text-lg">
                          {cert.title}
                        </p>
                        <ExternalLink className="h-3.5 w-3.5 shrink-0 text-slate-500 transition-colors group-hover:text-emerald-400" />
                      </div>
                      <p className="mt-0.5 text-sm font-medium text-slate-400">{cert.detail}</p>
                    </div>
                    <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:text-sm">
                      {cert.date}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal Previsualización Certificados */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="relative flex flex-col w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl sm:rounded-4xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4 sm:px-6">
                <div className="flex items-center gap-2.5">
                  <Award className="h-5 w-5 text-emerald-400" />
                  <h4 className="text-base font-bold text-slate-100 sm:text-lg">{selectedCert.title}</h4>
                </div>
                <div className="flex items-center gap-2">
                  {selectedCert.file && (
                    <a
                      href={selectedCert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-950 text-slate-400 transition hover:border-emerald-500/40 hover:text-emerald-400"
                      title="Abrir / Descargar"
                    >
                      <Download className="h-4 w-4" />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-950 text-slate-400 transition hover:border-slate-700 hover:text-slate-100"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center bg-slate-950/60 p-4 sm:p-6 overflow-auto">
                {isPdf ? (
                  <iframe
                    src={selectedCert.file}
                    title={selectedCert.title}
                    className="w-full h-[65vh] rounded-2xl border border-slate-800 bg-white"
                  />
                ) : (
                  <img
                    src={selectedCert.file || '/src/assets/certificates/placeholder.png'}
                    alt={selectedCert.title}
                    className="max-h-[65vh] w-auto max-w-full rounded-2xl object-contain shadow-md"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education;