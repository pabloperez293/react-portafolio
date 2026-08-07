import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { CERTIFICATIONS, EDUCATION } from '/src/constants';

const spring = { type: 'spring', stiffness: 400, damping: 25 };

const Education = () => {
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
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, index) => (
                <div key={index} className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-slate-900">{cert.title}</p>
                      <p className="text-sm text-slate-500">{cert.detail}</p>
                    </div>
                    <span className="text-sm font-semibold text-slate-500">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
