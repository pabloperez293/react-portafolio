// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, FileText, ChevronRight } from 'lucide-react';
import chatpab from '/src/assets/chatpab.png';

export default function Hero() {
  const [activeProfile, setActiveProfile] = useState('funcional'); // 'funcional' | 'java'

  return (
    <section className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-[#FDFDFD] overflow-hidden">
      {/* Glows de fondo difuminados (Efecto de Luz) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-7xl w-full mx-auto flex items-center justify-center">
        <div className="flex w-full max-w-3xl flex-col items-center justify-center text-center space-y-8">
          <div className="w-full rounded-[2rem] border border-indigo-100/80 bg-white/70 p-8 shadow-xl shadow-indigo-500/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-indigo-300 sm:p-10">
            <div className="group relative mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/10 via-transparent to-indigo-400/20 p-1 shadow-inner transition-all duration-500 ease-out hover:shadow-indigo-500/20">
              <img
                src={chatpab}
                alt="Pablo Pérez"
                className="h-full w-full rounded-full object-cover grayscale contrast-110 opacity-90 transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
            
            {/* Selector de Perfil estilo Cápsula Flotante */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex p-1.5 bg-slate-100/80 backdrop-blur-md rounded-full border border-slate-200/80 shadow-xs"
          >
            <button
              onClick={() => setActiveProfile('funcional')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeProfile === 'funcional'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-[1.02]'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <span>🧩</span> Analista Funcional
            </button>
            <button
              onClick={() => setActiveProfile('java')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeProfile === 'java'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-[1.02]'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <span>💻</span> Java Developer
            </button>
          </motion.div>

          {/* Encabezado Principal */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Pablo Perez
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-indigo-600 flex items-center gap-2">
              <Sparkles className="w-5 h-5"/>
              {activeProfile === 'funcional' 
                ? 'Analista Funcional' 
                : 'Analista Programador Java'}
            </p>
            <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
              {activeProfile === 'funcional'
                ? 'Transformo requerimientos de negocio en soluciones estructuradas, optimizando procesos y facilitando la comunicación entre stakeholders y el equipo técnico.'
                : 'Diseño y desarrollo arquitecturas sólidas en Java y Spring Boot, integrando frontend moderno en React para construir software escalable.'}
            </p>
          </div>

          {/* Botones de Acción (CTAs) */}
          <div className="flex flex-wrap justify-center gap-4 w-full sm:w-auto pt-2">
            <a
              href={activeProfile === 'funcional' ? '/cv-funcional.pdf' : '/cv-java.pdf'}
              download
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3.5 rounded-2xl shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 hover:shadow-indigo-500/40 hover:shadow-xl text-sm"
            >
              <FileText className="w-4 h-4"/>
              Descargar CV ({activeProfile === 'funcional' ? 'Funcional' : 'Java'})
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-medium px-6 py-3.5 rounded-2xl border border-slate-200 shadow-xs hover:border-indigo-200 hover:text-indigo-700 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 hover:shadow-indigo-500/40 hover:shadow-xl text-sm"
            >
              Ver Portfolio <ChevronRight className="w-4 h-4 text-slate-400"/>
            </a>
          </div>

          {/* Grid de Tecnologías (Micro-tarjetas) */}
          <div className="pt-4 border-t border-slate-200/60 w-full">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
              Tecnologías Clave
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              {['Java', 'Spring Boot', 'React', 'JavaScript', 'PostgreSQL', 'Git', 'Docker', 'REST API'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl text-xs font-medium hover:border-indigo-400 hover:text-indigo-600 hover:-translate-y-0.5 transition-all duration-300 hover:scale-[1.02]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
