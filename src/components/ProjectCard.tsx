import type { Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full w-80 max-w-md overflow-hidden rounded-lg border border-[#E5E7EB] bg-[#2b2b2b] text-left transition hover:border-[#E5E7EB] cursor-pointer"
    >
      <div className="aspect-video w-full overflow-hidden bg-[#2b2b2b]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="space-y-3 p-5">
        <h4 className="text-base font-semibold text-[#E5E7EB]">{project.title}</h4>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#E5E7EB] px-3 py-1 text-xs text-[#E5E7EB]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
