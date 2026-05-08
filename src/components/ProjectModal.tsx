import { AnimatePresence, motion } from 'framer-motion';

import type { Project } from '../data/projects';

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-2xl rounded-xl border border-[#E5E7EB] bg-[#2b2b2b] p-6 text-[#E5E7EB] shadow-xl"
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#E5E7EB]">
                  Projeto
                </p>
                <h4 className="mt-2 text-2xl font-semibold text-[#E5E7EB]">
                  {project.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-[#E5E7EB] px-3 py-1 text-xs text-[#E5E7EB] transition hover:text-[#E5E7EB]"
              >
                Fechar
              </button>
            </div>

            <div className="mt-4 overflow-hidden rounded-lg border border-[#E5E7EB]">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#E5E7EB]">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#E5E7EB] px-3 py-1 text-xs text-[#E5E7EB]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#E5E7EB] transition hover:text-[#E5E7EB]"
                >
                  Link do projeto
                </a>
              ) : null}
              {project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#E5E7EB] transition hover:text-[#E5E7EB]"
                >
                  Repositorio
                </a>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
