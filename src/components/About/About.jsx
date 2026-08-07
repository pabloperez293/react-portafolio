// Componente About: presenta la experiencia híbrida entre análisis funcional y desarrollo Java.
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { ABOUT_TEXT } from '/src/constants';

const spring = { type: 'spring', stiffness: 400, damping: 25 };

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 bg-[#FDFDFD] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Sobre Mí"
          subtitle="Analista Funcional y Desarrollador con foco en soluciones técnicas y negocio."
        />

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={spring}
            className="overflow-hidden rounded-4xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100">
              <img src="/src/assets/chatpab.png" alt="Pablo Perez" className="h-full w-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-base leading-8 text-slate-600">{ABOUT_TEXT}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-4xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Propuesta de valor</h3>
                <p className="mt-4 text-slate-700 leading-7">
                  Conecto el mundo funcional y técnico para entregar soluciones claras, bien documentadas y alineadas con los objetivos del negocio.
                </p>
              </div>
              <div className="rounded-4xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Habilidades principales</h3>
                <p className="mt-4 text-slate-700 leading-7">
                  Análisis de requisitos, documentación funcional, modelado de procesos, Java backend y diseño de APIs REST.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
