// Componente About: presenta la experiencia híbrida entre análisis funcional y desarrollo Java.

import { motion } from 'framer-motion';

import SectionHeader from '../ui/SectionHeader';

import { ABOUT_TEXT } from '../../constants';

import chatpab from '../../assets/chatpab.png';

const spring = {
  type: 'spring',
  stiffness: 400,
  damping: 25,
};

const About = () => {
  return (
    <section
      id="sobre-mi"
      className="scroll-mt-20 bg-slate-950 py-20 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeader
          title="Sobre mí"
          subtitle="Un perfil híbrido entre análisis funcional, desarrollo y soporte técnico."
        />

        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={spring}
            className="overflow-hidden rounded-4xl border border-slate-800 bg-slate-900 p-4 shadow-2xl shadow-black/20"
          >
            <div className="overflow-hidden rounded-4xl border border-slate-800 bg-slate-950">
              <img
                src={chatpab}
                alt="Pablo Perez"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...spring, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Descripción */}
            <div className="rounded-4xl border border-slate-800 bg-slate-900 p-8 shadow-xl shadow-black/20">
              <p className="text-base leading-8 text-slate-300">
                {ABOUT_TEXT}
              </p>
            </div>

            {/* Propuesta + habilidades */}
            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-4xl border border-slate-800 bg-slate-900 p-6">
                <div className="mb-4 h-1 w-10 rounded-full bg-emerald-500" />

                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
                  Propuesta de valor
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  Conecto el mundo funcional y técnico para entregar
                  soluciones claras, documentadas y alineadas con los
                  objetivos del negocio.
                </p>
              </div>

              <div className="rounded-4xl border border-slate-800 bg-slate-900 p-6">
                <div className="mb-4 h-1 w-10 rounded-full bg-emerald-500" />

                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
                  Habilidades principales
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  Análisis de requisitos, documentación funcional,
                  modelado de procesos, Java backend y APIs REST.
                </p>
              </div>

            </div>

            {/* Flujo de trabajo */}
            <div className="rounded-4xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Cómo trabajo
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-4">
                {[
                  'Relevamiento',
                  'Análisis',
                  'Desarrollo',
                  'Testing / Soporte',
                ].map((step, index) => (
                  <div
                    key={step}
                    className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3"
                  >
                    <span className="text-xs font-semibold text-emerald-400">
                      0{index + 1}
                    </span>

                    <p className="mt-1 text-sm font-medium text-slate-300">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;