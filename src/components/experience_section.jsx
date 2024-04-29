import React from 'react';
import ExperienceCard from './experience_card';

const ExperienceSection = React.forwardRef(({ resumeUrl, experienceList }, ref) => {
  return (
    <section ref={ref} className="scroll-mt-24">
      {experienceList.map((experience, index) => (
        <ExperienceCard
          key={index}
          experience_duration={experience.duration}
          experience_role={experience.role}
          experience_company={experience.company}
          experience_description={experience.description}
          experience_technologies={experience.technologies}
        />
      ))}

      {/* Resume */}
      <div className="flex items-center justify-start gap-1 mt-10 group">
        <h5 className="text-md text-slate-300 font-sans hover:underline underline-offset-4 decoration-2 hover:decoration-teal-400 duration-200 transition">
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </h5>
        <span className="text-slate-300 group-hover:translate-x-2 transition duration-200 group-hover:text-teal-400">
          →
        </span>
      </div>
    </section>
  );
});

export default ExperienceSection;