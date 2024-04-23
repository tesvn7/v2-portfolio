import React from 'react';

const ExperienceCard = ({
  experience_duration,
  experience_role_company,
  experience_description,
  experience_technologies,
}) => {
  return (
    <div className="group cursor-alias flex items-start justify-start rounded-sm px-6 py-4 mb-6 transition duration-200 hover:bg-slate-500 hover:bg-opacity-10 hover:backdrop-blur-md hover:backdrop-filter">
      <div className="h-max w-1/3">
        {/* Experience Duration */}
        <p id="experience_duration" className="mt-1 text-xs leading-snug text-gray-400">
          {experience_duration}
        </p>
      </div>
      <div className="pl-400 h-max w-full">
        {/* Experience Role, company */}
        <h3 id="experience_role_company" className="font-medium leading-snug text-white transition duration-200 group-hover:text-pink-default">
          {experience_role_company}
        </h3>
        {/* Experience Description */}
        <p id="experience_description" className="mt-2 text-sm leading-normal text-gray-400 font-light">
          {experience_description}
        </p>
        {/* Experience Technologies */}
        <ul id="experience_technologies" className="mt-2 flex flex-wrap">
          {experience_technologies.map((tech, index) => (
            <li key={index} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                {tech}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;