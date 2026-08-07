import { motion } from 'framer-motion';
import { ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import aboutImg from '/src/assets/yo.png';
import SectionHeader from '../ui/SectionHeader';
import { ABOUT_TEXT, PROFILE } from '/src/constants';

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
            className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100">
              <img src={aboutImg} alt="Pablo Perez" className="h-full w-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-base leading-8 text-slate-600">{ABOUT_TEXT}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Perfil</h3>
                <p className="mt-4 text-slate-700 font-semibold">{PROFILE.role}</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Contacto</h3>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-indigo-600" />
                    <a href={`mailto:${PROFILE.email}`} className="hover:text-indigo-700 text-slate-700">
                      {PROFILE.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-indigo-600" />
                    <span>{PROFILE.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-indigo-600" />
                    <span>{PROFILE.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Perfiles</h3>
              <div className="mt-4 grid gap-3">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:bg-slate-50 hover:text-indigo-700"
                >
                  <ExternalLink className="h-4 w-4 text-indigo-600" />
                  linkedin.com/in/devpabloperez
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:bg-slate-50 hover:text-indigo-700"
                >
                  <ExternalLink className="h-4 w-4 text-indigo-600" />
                  github.com/pabloperezdev
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
