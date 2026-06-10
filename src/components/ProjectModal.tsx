import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Project } from '../data/projects';


type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
useEffect(() => {
  if (!project) return;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  document.addEventListener('keydown', handleKeyDown);

  document.body.style.overflow = 'hidden';

  return () => {
    document.removeEventListener('keydown', handleKeyDown);
    document.body.style.overflow = '';
  };
}, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-6"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 24,
              scale: 0.96,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              w-full
              max-w-2xl
              rounded-xl
              border
              border-white/10
              bg-[#2b2b2b]
              p-6
              text-[#E5E7EB]
              shadow-[0_0_40px_rgba(0,0,0,0.35)]
            "
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#E5E7EB]">
                  Projeto
                </p>

                <motion.h4
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-2 text-2xl font-semibold text-[#E5E7EB]"
                >
                  {project.title}
                </motion.h4>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="
                  cursor-pointer
                  rounded-md
                  border
                  border-[#E0CF9B]/20
                  bg-[#E0CF9B]/5
                  px-3
                  py-1
                  text-xs
                  text-[#E0CF9B]
                  transition-all
                  duration-300
                  hover:border-[#E0CF9B]/40
                  hover:bg-[#E0CF9B]/10
                "
              >
                Fechar
              </button>
            </div>

            <div className="mt-4 overflow-hidden rounded-lg border border-white/10">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-[1.02]
                "
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mt-4 text-sm leading-relaxed text-[#E5E7EB]"
            >
              {project.summary}
            </motion.p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-[#E0CF9B]/20
                    bg-[#E0CF9B]/5
                    px-3
                    py-1
                    text-xs
                    text-[#E0CF9B]
                  "
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
                  className="
                    inline-flex
                    items-center
                    rounded-md
                    border
                    border-[#E0CF9B]/20
                    bg-[#E0CF9B]/5
                    px-3
                    py-1
                    text-xs
                    text-[#E0CF9B]
                    transition-all
                    duration-300
                    hover:border-[#E0CF9B]/40
                    hover:bg-[#E0CF9B]/10
                  "
                >
                  Link do projeto
                </a>
              ) : null}

              {project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    rounded-md
                    border
                    border-[#E0CF9B]/20
                    bg-[#E0CF9B]/5
                    px-3
                    py-1
                    text-xs
                    text-[#E0CF9B]
                    transition-all
                    duration-300
                    hover:border-[#E0CF9B]/40
                    hover:bg-[#E0CF9B]/10
                  "
                >
                  Repositório
                </a>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}