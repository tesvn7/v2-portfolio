import React from 'react';
import ProjectCard from './project_card';

const ProjectSection = React.forwardRef(({ allProjectsUrl, projectsList }, ref) => {
  return (
    <section ref={ref} id="projects" className="scroll-mt-24 mt-32">
      {projectsList.map((project, index) => (
        <ProjectCard
          key={index}
          project_image_url={project.image_url}
          project_app_url={project.app_url}
          project_github_url={project.github_url}
          project_name={project.name}
          project_description={project.description}
          project_technologies={project.technologies}
        />
      ))}

      {/* All Projects */}
      <div className="flex items-center justify-start gap-1 mt-10 group">
        <h5 className="text-md text-slate-default font-mono font-semibold hover:underline underline-offset-4 decoration-2 hover:decoration-teal-400 duration-200 transition">
          <a href={allProjectsUrl} target="_blank" rel="noopener noreferrer">
            All Projects
          </a>
        </h5>
        <span className="text-slate-300 group-hover:translate-x-2 transition duration-200 group-hover:text-teal-400 font-mono font-semibold ">
          →
        </span>
      </div>
    </section>
  );
});

export default ProjectSection;