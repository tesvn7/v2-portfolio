import React from "react";

const ProjectCard = ({
  project_link,
  project_image,
  project_name,
  project_description,
  project_technologies,
}) => {
  return (
    // <!-- Project link -->
    <a
      id="project_link"
      href={project_link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="group flex items-start justify-start rounded-sm px-6 py-4 transition duration-200 hover:bg-slate-500 hover:bg-opacity-10 hover:backdrop:blur-md hover:backdrop:filter mb-6">
        {/* <!-- Project Image --> */}
        <div className="mt-1 h-max w-1/3">
          <div className="h-24 w-40 rounded-sm bg-slate-800 shadow-md border border-slate-700 group-hover:border-2">
            <img
              id="project_image"
              src={project_image}
              alt="Image-P"
              className="object-fill w-full h-full"
            ></img>
          </div>
        </div>
        {/* <!-- Project Name --> */}
        <div className="ml-6 h-max w-full">
          <div className="flex gap-2 justify-start items-center">
            <h3
              id="project_name"
              className="font-medium leading-snug text-white transition duration-200 group-hover:text-pink-500"
            >
              {project_name}
            </h3>
            <p className="text-white text-sm translate-y-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-200">
              {" "}
              ↗{" "}
            </p>
          </div>

          {/* <!-- Project Description --> */}
          <p
            id="project_description"
            className="mt-2 text-sm leading-normal text-gray-400"
          >
            {project_description}
          </p>
          {/* <!-- Project Technologies --> */}
          <ul id="experience_technologies" className="mt-2 flex flex-wrap">
            {project_technologies.map((tech, index) => (
              <li key={index} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
