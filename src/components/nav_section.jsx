import React from 'react';

const renderNavLink = (text, entry, refVisible) => (
  <button
    onClick={() => {
      entry?.target.scrollIntoView({ behavior: 'smooth' });
    }}
    className="group flex items-center py-3"
  >
    <span
      className={`nav-indicator mr-4 h-px ${
        refVisible
          ? 'bg-white w-16'
          : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'
      } transition-all duration-200`}
    ></span>
    <span
      className={`nav-text text-xs font-bold uppercase tracking-widest ${
        refVisible
          ? 'text-white'
          : 'text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'
      } transition-all duration-200`}
    >
      {text}
    </span>
  </button>
);


const NavSection = ({ aboutEntry, expEntry, projectEntry, aboutRefVisible, expRefVisible, projectRefVisible }) => {
  return (
    <nav className="nav w-2/3">
      <ul className="mt-16">
        <li>{renderNavLink("About", aboutEntry, aboutRefVisible )}</li>
        <li>{renderNavLink("Experience", expEntry, expRefVisible)}</li>
        <li>{renderNavLink("Projects", projectEntry, projectRefVisible)}</li>
      </ul>
    </nav>
  );
};

export default NavSection;