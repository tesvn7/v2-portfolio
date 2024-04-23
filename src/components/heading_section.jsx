import React from 'react';

const HeadingSection = ({ name, role, subHeading }) => {
  return (
    <div className="flex flex-col justify-between items-start w-2/3 mt-16">
      <div>
        <h1 className="text-4xl sm:text-5xl text-white font-bold tracking-tight">
          {name}
        </h1>
        <h3 className="mt-3 text-lg sm:text-xl text-white font-medium tracking-tight">
          {role}
        </h3>
        <p className="mt-4 max-w-xs leading-normal font-light text-slate-500">
          {subHeading}
        </p>
      </div>
    </div>
  );
};

export default HeadingSection;