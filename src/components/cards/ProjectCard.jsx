/* eslint-disable react/prop-types */
// Componente ProjectCard: renderiza la tarjeta individual de cada proyecto
import { ExternalLink, FolderGit2 } from 'lucide-react';

// Componente SVG para el icono de GitHub (evita errores de importación en lucide-react)
const GithubIcon = ({ className = 'h-4 w-4' }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const ProjectCard = ({ project }) => {
  if (!project) return null;

  const { title, description, technologies, repo, demo, image } = project;

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-emerald-500/5 sm:rounded-4xl sm:p-7 h-full">
      {/* Fondo condicional */}
      {image ? (
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-center opacity-20 transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-900/60" />
        </div>
      ) : (
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 opacity-60" />
      )}

      <div>
        {/* Cabecera y Enlaces */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
            <FolderGit2 className="h-5 w-5" />
          </div>
          <div className="flex items-center gap-2">
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-950/80 text-slate-400 transition hover:border-emerald-500/40 hover:text-emerald-400"
                title="Ver Repositorio en GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-950/80 text-slate-400 transition hover:border-emerald-500/40 hover:text-emerald-400"
                title="Ver Demo en Vivo"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Título y Descripción */}
        <h3 className="mt-5 text-xl font-extrabold text-slate-100 transition-colors group-hover:text-emerald-400 sm:text-2xl">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          {description}
        </p>
      </div>

      {/* Etiquetas de Tecnologías */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5 sm:gap-2">
        {technologies?.map((tech, idx) => (
          <span
            key={idx}
            className="rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1 text-xs font-medium text-slate-300 transition-colors group-hover:border-emerald-500/30 group-hover:text-emerald-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;