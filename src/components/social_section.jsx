import React from 'react';
import Image from "next/image";
import IconGitHub from "../../public/assets/icons/git-icon-g.svg";
import IconTwitter from "../../public/assets/icons/twitter-icon-g.svg";
import IconLinkedin from "../../public/assets/icons/linkdin-icon-g.svg";

const SocialSection = ({ githubUrl, linkedinUrl, twitterUrl }) => {
  return (
    <ul className="flex items-center mt-8 w-2/3 mb-16">
      {/* GitHub */}
      <li className="mr-10 text-xs shrink-0 hover:-translate-y-2 transition duration-200">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <Image src={IconGitHub} width={30} height={30} alt="GitHub" />
        </a>
      </li>
      {/* LinkedIn */}
      <li className="mr-10 text-xs shrink-0 hover:-translate-y-2 transition duration-200">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <Image src={IconLinkedin} width={30} height={30} alt="LinkedIn" />
        </a>
      </li>
      {/* Twitter */}
      <li className="mr-10 text-xs shrink-0 hover:-translate-y-2 transition duration-200">
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
          <Image src={IconTwitter} width={26} height={25} alt="Twitter" />
        </a>
      </li>
    </ul>
  );
};

export default SocialSection;