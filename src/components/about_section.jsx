import React from 'react';
import { forwardRef } from 'react';

const AboutSection = forwardRef(({ para1, para2, para3 }, ref) => {
   // Regular expression to match words within backticks (``)
const regex = /`([^`]+)`/g;
function highlight_para(p){
  const parts = p.split(regex);
  let formattedText = parts.map((part, index) => {
    if (regex.test(part)) {
      return <span key={index} className="text-white">{part}</span>;
    } else {
      return part;
    }
  });

  return formattedText;
}
  return (
    <section ref={ref} className="scroll-mt-24 text-base font-md text-slate-default">
      <p className="mb-4">{highlight_para(para1)}</p>
      <p className="mb-4">{highlight_para(para2)}</p>
      <p className="mb-4">{highlight_para(para3)}</p>
    </section>
  );
});

export default AboutSection;