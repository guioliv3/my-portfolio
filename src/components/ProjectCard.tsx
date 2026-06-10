import { motion } from 'framer-motion';
import type { Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({
  project,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="
        group
        w-full
        w-80
        max-w-md
        overflow-hidden
        rounded-lg
        border
        border-[#E5E7EB]/20
        bg-[#2b2b2b]
        text-left
        cursor-pointer
        transition-all
        duration-300
        hover:border-[#E0CF9B]/40
        hover:shadow-[0_0_30px_rgba(224,207,155,0.08)]
      "
    >
      <div className="aspect-video w-full overflow-hidden bg-[#2b2b2b]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="
            h-full
            w-full
            object-cover
            transition
            duration-300
            group-hover:scale-[1.05]
          "
        />
      </div>

      <div className="space-y-3 p-5">
        <h4 className="text-base font-semibold text-[#E5E7EB]">
          {project.title}
        </h4>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-[#E5E7EB]
                px-3
                py-1
                text-xs
                text-[#E5E7EB]
                transition-colors
                duration-300
                group-hover:border-[#E0CF9B]
                group-hover:text-[#E0CF9B]
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}