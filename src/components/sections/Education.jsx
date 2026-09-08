// Componente Education: detalla la formación académica y certificaciones obtenidas.
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ExternalLink, Award, GraduationCap, Download } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { CERTIFICATIONS, EDUCATION } from "../../constants";

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
    <section id="education" className="scroll-mt-20 bg-slate-950 py-10 text-white sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Educación & Certificaciones"
          subtitle="Formación continua con foco en programación, análisis y tecnologías modernas."
        />

        <div className="mt-8 grid gap-6 sm:mt-10 lg:grid-cols-2 lg:gap-8">
          {/* Formación Académica */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={spring}
            className="flex flex-col space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-xl shadow-black/20 sm:rounded-3xl sm:p-6 lg:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 sm:rounded-2xl">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-100 sm:text-xl lg:text-2xl">
                Formación académica
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {EDUCATION.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4 transition-all duration-300 hover:border-slate-700 sm:rounded-2xl sm:p-5"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0 flex-1">
                      <p className="text-base font-bold text-slate-100 sm:text-lg leading-snug">{item.title}</p>
                      <p className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">{item.institution}</p>
                    </div>
                    <span
                      className={`inline-flex shrink-0 self-start rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider sm:text-xs ${getStatusBadgeClass(
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
            className="flex flex-col space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-xl shadow-black/20 sm:rounded-3xl sm:p-6 lg:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 sm:rounded-2xl">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-100 sm:text-xl lg:text-2xl">
                Certificaciones
              </h3>
            </div>

            <div className="grid gap-3 sm:gap-4">
              {CERTIFICATIONS.map((cert, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="group w-full rounded-xl border border-slate-800/80 bg-slate-950/60 p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-emerald-500/5 sm:rounded-2xl sm:p-5"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-base font-bold text-slate-100 transition-colors group-hover:text-emerald-400 sm:text-lg leading-snug">
                          {cert.title}
                        </p>
                        <ExternalLink className="h-3.5 w-3.5 shrink-0 text-slate-500 transition-colors group-hover:text-emerald-400" />
                      </div>
                      <p className="mt-0.5 text-xs font-medium text-slate-400 sm:text-sm">{cert.detail}</p>
                    </div>
                    <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:text-sm self-start sm:self-auto">
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-3 backdrop-blur-md sm:p-4 md:p-6"
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
              className="relative flex max-h-[90dvh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl sm:rounded-3xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3 gap-3 sm:px-6 sm:py-4">
                <div className="flex min-w-0 flex-1 items-center gap-2.5">
                  <Award className="h-5 w-5 shrink-0 text-emerald-400" />
                  <h4 className="truncate text-sm font-bold text-slate-100 sm:text-base">{selectedCert.title}</h4>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  {selectedCert.file && (
                    <a
                      href={selectedCert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 bg-slate-950 text-slate-400 transition hover:border-emerald-500/40 hover:text-emerald-400 sm:h-9 sm:w-9"
                      title="Abrir / Descargar"
                      aria-label="Abrir o descargar certificado"
                    >
                      <Download className="h-4 w-4" />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 bg-slate-950 text-slate-400 transition hover:border-slate-700 hover:text-slate-100 sm:h-9 sm:w-9"
                    aria-label="Cerrar modal"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex flex-1 items-center justify-center overflow-auto bg-slate-950/60 p-2 sm:p-4 lg:p-6">
                {isPdf ? (
                  <iframe
                    src={selectedCert.file}
                    title={selectedCert.title}
                    className="h-[55vh] w-full rounded-xl border border-slate-800 bg-white sm:h-[65vh] sm:rounded-2xl"
                  />
                ) : (
                  <img
                    src={selectedCert.file}
                    alt={selectedCert.title}
                    className="max-h-[55vh] w-auto max-w-full rounded-xl object-contain shadow-md sm:max-h-[65vh] sm:rounded-2xl"
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