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
      className="scroll-mt-20 bg-slate-950 py-12 text-white sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Sobre mí"
          subtitle="Un perfil híbrido entre análisis funcional, desarrollo y soporte técnico."
        />

        <div className="grid items-center gap-8 lg:gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Foto */}
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
            className="space-y-4 sm:space-y-6"
          >
            {/* Descripción */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5 shadow-xl shadow-black/20 sm:rounded-4xl sm:p-8">
              <p className="text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                {ABOUT_TEXT}
              </p>
            </div>

            {/* Propuesta + habilidades */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5 sm:rounded-4xl sm:p-6">
                <div className="mb-3 h-1 w-10 rounded-full bg-emerald-500 sm:mb-4" />

                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 sm:text-sm">
                  Propuesta de valor
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400 sm:mt-4 sm:leading-7">
                  Conecto todo lo que se me proponga para ir perfeccionandolo y optimizandolo, me encanta seguir aprendiendo de los errores y aciertos.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5 sm:rounded-4xl sm:p-6">
                <div className="mb-3 h-1 w-10 rounded-full bg-emerald-500 sm:mb-4" />

                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 sm:text-sm">
                  Habilidades principales
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400 sm:mt-4 sm:leading-7">
                  Como habilidad, me gusta ser constante, persistente y confiable a la hora que me den un proyecto.
                </p>
              </div>
            </div>

            {/* Flujo de trabajo */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5 sm:rounded-4xl sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Cómo trabajo
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-7 sm:gap-3">
                {[
                  'Relevamiento',
                  'Análisis',
                  'Desarrollo',
                  'Testing / Soporte',
                  'Documentación',
                  'Entrega',
                  'Mejora continua'
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex flex-col justify-center rounded-xl border border-slate-800 bg-slate-950 px-3 py-2.5 sm:px-4 sm:py-3"
                  >
                    <span className="text-xs font-semibold text-emerald-400">
                      0{index + 1}
                    </span>

                    <p className="mt-1 text-xs font-medium text-slate-300 sm:text-sm">
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