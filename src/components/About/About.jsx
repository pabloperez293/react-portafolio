import { motion } from 'framer-motion';

import SectionHeader from '../ui/SectionHeader';
import { ABOUT_TEXT } from '../../constants';
import chatpab from '../../assets/chatpab.png';

const spring = {
  type: 'spring',
  stiffness: 400,
  damping: 25,
};

const WORKFLOW_STEPS = [
  'Relevamiento',
  'Análisis',
  'Desarrollo',
  'Testing / Soporte',
  'Documentación',
  'Entrega',
  'Mejora continua',
];

const About = () => {
  return (
    <section
      id="sobre-mi"
      className="scroll-mt-20 bg-slate-950 py-12 text-white sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeader
          title="Sobre mí"
          subtitle="Un perfil híbrido entre análisis funcional, desarrollo y soporte técnico."
        />

        <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">

          {/* =========================
              FOTO
          ========================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={spring}
            className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-3 shadow-2xl shadow-black/20 sm:rounded-4xl sm:p-4"
          >
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 sm:rounded-4xl">
              <img
                src={chatpab}
                alt="Pablo Perez"
                loading="lazy"
                className="block h-auto w-full object-cover"
              />
            </div>
          </motion.div>

          {/* =========================
              CONTENIDO
          ========================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...spring, delay: 0.1 }}
            className="min-w-0 space-y-4 sm:space-y-6"
          >

            {/* =========================
                DESCRIPCIÓN
            ========================== */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5 shadow-xl shadow-black/20 sm:rounded-4xl sm:p-8">
              <p className="text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                {ABOUT_TEXT}
              </p>
            </div>

            {/* =========================
                PROPUESTA + HABILIDADES
            ========================== */}
            <div className="grid gap-4 sm:grid-cols-2">

              {/* Propuesta de valor */}
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5 sm:rounded-4xl sm:p-6">
                <div className="mb-3 h-1 w-10 rounded-full bg-emerald-500 sm:mb-4" />

                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 sm:text-sm">
                  Propuesta de valor
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400 sm:mt-4 sm:leading-7">
                  Conecto cada parte del proyecto para perfeccionarlo y
                  optimizarlo. Me gusta aprender de los errores, aprovechar
                  los aciertos y buscar siempre una mejor solución.
                </p>
              </div>

              {/* Habilidades principales */}
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5 sm:rounded-4xl sm:p-6">
                <div className="mb-3 h-1 w-10 rounded-full bg-emerald-500 sm:mb-4" />

                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 sm:text-sm">
                  Habilidades principales
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400 sm:mt-4 sm:leading-7">
                  Me caracterizo por ser constante, persistente y confiable
                  cuando me confían un proyecto, buscando siempre cumplir
                  objetivos y aportar soluciones.
                </p>
              </div>
            </div>

            {/* =========================
                FLUJO DE TRABAJO
            ========================== */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5 shadow-xl shadow-black/10 sm:rounded-4xl sm:p-6">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Cómo trabajo
              </p>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

                {WORKFLOW_STEPS.map((step, index) => (
                  <div
                    key={step}
                    className="flex min-h-[96px] flex-col justify-between rounded-xl border border-slate-800 bg-slate-950 p-4 transition-colors duration-300 hover:border-emerald-500/30"
                  >
                    <span className="text-xs font-semibold text-emerald-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <p className="mt-3 text-sm font-medium leading-5 text-slate-200">
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