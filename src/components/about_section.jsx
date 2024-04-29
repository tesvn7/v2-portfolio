import React from 'react';
import { forwardRef } from 'react';

const AboutSection = forwardRef(({ para1, para2, para3 }, ref) => {
  return (
    <section ref={ref} className="scroll-mt-24 text-md font-normal text-slate-300">
      <p className="mb-4">{para1}</p>
      <p className="mb-4">{para2}</p>
      <p className="mb-4">{para3}</p>
    </section>
  );
});

export default AboutSection;