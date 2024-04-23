import React from 'react';

const NavSection = ({ aboutEntry, expEntry, projectEntry, aboutRefVisible, expRefVisible, projectRefVisible }) => {
  return (
    <nav className="nav w-2/3">
      <ul className="mt-16">
        {/* About */}
        <li>
          <button
            onClick={() => {
              aboutEntry.target.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center py-3"
          >
            {aboutRefVisible ? (
              <>
                <span className="nav-indicator mr-4 h-px bg-white w-16 transition duration-200"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-white transition duration-200">
                  About
                </span>
              </>
            ) : (
              <>
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  About
                </span>
              </>
            )}
          </button>
        </li>
        {/* Experience */}
        <li>
          <button
            onClick={() => {
              expEntry.target.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center py-3"
          >
            {expRefVisible ? (
              <>
                <span className="nav-indicator mr-4 h-px bg-white w-16 transition duration-200"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-white transition duration-200">
                  Experience
                </span>
              </>
            ) : (
              <>
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  Experience
                </span>
              </>
            )}
          </button>
        </li>
        {/* Projects */}
        <li>
          <button
            onClick={() => {
              projectEntry.target.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center py-3"
          >
            {projectRefVisible ? (
              <>
                <span className="nav-indicator mr-4 h-px bg-white w-16 transition duration-200"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-white transition duration-200">
                  Projects
                </span>
              </>
            ) : (
              <>
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  Projects
                </span>
              </>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavSection;