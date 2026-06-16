import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projects, projectsacademic, type Project } from '../data/projects';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    
    <motion.div
      className="text-[#E5E7EB]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
            {/* Seção Profissional */}
      <h3 className="inline-block text-lg font-bold uppercase tracking-widest text-white after:mt-1 after:block after:h-[2px] after:w-full after:bg-white/30">
        Projetos Profissionais
      </h3>

      <div className="mt-8 grid gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setActiveProject(project)}
          />
        ))}
      </div>


      {/* Seção Acadêmica */}
      <h3 className="mt-16 inline-block text-lg font-bold uppercase tracking-widest text-white after:mt-1 after:block after:h-[2px] after:w-full after:bg-white/30">
  Projetos Acadêmicos
</h3>

      <div className="mt-8 grid gap-6 mb-12">
        {projectsacademic.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setActiveProject(project)}
          />
        ))}
      </div>



      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />



    </motion.div>
  );
}