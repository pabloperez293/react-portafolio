import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <article
      data-aos="fade-up"
      className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/20"
    >
      {project.image && (
        <div className="overflow-hidden rounded-t-3xl">
          <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
        <p className="mt-3 text-slate-600 text-sm leading-6">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies?.map((technology, index) => (
            <span
              key={index}
              className="bg-slate-50 border border-slate-200 text-slate-700 rounded-lg px-3 py-1 text-xs font-medium"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:bg-slate-50 hover:text-indigo-700 hover:shadow-md"
            >
              <FaExternalLinkAlt className="text-slate-500" />
              Demo
            </a>
          )}

          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:bg-slate-50 hover:text-indigo-700 hover:shadow-md"
            >
              <FaGithub className="text-slate-500" />
              Repo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
