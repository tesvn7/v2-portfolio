'use client'
import React from "react";
import { motion } from "framer-motion"


import SourceCodeIcon from '../../public/assets/icons/s-code-icon.png'
import Image from "next/image";

const ProjectCard = ({
  project_image_url,
  project_app_url,
  project_github_url,
  project_name,
  project_description,
  project_technologies,
}) => {
  return (
    // <!-- Project link -->
   
      <div className="group flex items-start justify-start rounded-sm px-6 py-4 transition duration-200 hover:bg-slate-500 hover:bg-opacity-10 hover:backdrop:blur-md hover:backdrop:filter mb-6">
        {/* <!-- Project Image --> */}
        <div className="mt-1 h-max w-1/3">
          <div className="relative h-24 w-40 rounded-sm bg-slate-800 shadow-md border border-slate-700 group-hover:border-2">
            <Image src={project_image_url} alt="Image-P" layout="fill" objectFit="fill"  />
          </div>
        </div>
        {/* <!-- Project Name --> */}
      <div className="ml-6 h-max w-full">
      <a id="project_link" href={project_app_url} target="_blank" rel="noopener noreferrer" >
          <div className="flex gap-2 justify-start items-center">
            <h3
              id="project_name"
              className="font-semibold leading-snug text-white transition duration-200 group-hover:text-pink-default group-hover:font-bold"
            >
              {project_name}
            </h3>
            <p className="text-white font-bold text-sm translate-y-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-200">
              {" "}
              ↗{" "}
            </p>
          </div>
          </a>

          {/* <!-- Project Description --> */}
          <p
            id="project_description"
            className="mt-2 text-sm leading-normal font-semibold text-slate-default"
          >
            {project_description}
          </p>
          {/* <!-- Project Technologies --> */}
          <ul id="experience_technologies" className="mt-4 flex flex-wrap">
            {project_technologies.map((tech, index) => (
              <li key={index} className="mr-1.5 mt-2">
                <motion.div whileHover={{ scale: 1.1 }} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  {tech}
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
        {/* source-code icon */}
        <a id="source-code" href={project_github_url} target="_blank" rel="noopener noreferrer" >
        <motion.div  whileHover={{ scale: 1.3 }} className=' text-slate-100 rounded-md'>
          <Image src={SourceCodeIcon} alt='Source Code Icon' width={50} height={40} />
          
          <a href={project_github_url} />
        </motion.div>
        </a>
      </div>
    
  );
};

export default ProjectCard;
