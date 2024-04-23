"use client";
import Image from "next/image";
import IconGitHub from "../../public/assets/icons/git-icon-g.svg";
import IconTwitter from "../../public/assets/icons/twitter-icon-g.svg";
import IconLinkdin from "../../public/assets/icons/linkdin-icon-g.svg";
import ExperienceCard from "@/components/experience_card";
import ProjectCard from "@/components/project_card";
import PoetryText from "@/components/footnote_section";
import { useInView } from "react-intersection-observer";
import HeadingSection from "@/components/heading_section";
import NavSection from "@/components/nav_section";
import SocialSection from "@/components/social_section";
import AboutSection from "@/components/about_section";
import ExperienceSection from "@/components/experience_section";
import ProjectSection from "@/components/project_section";
import FootnoteSection from "@/components/footnote_section";

export default function Home() {

  const name = "Brittany Chiang"
  const role = "Senior Frontend Engineer"
  const subHeading="I build pixel-perfect, engaging, and accessible digital experiences."

  const githubUrl = "https://github.com/tesvn7"
  const linkedinUrl = "https://www.linkedin.com/in/brittanychiang/"
  const twitterUrl = "https://twitter.com/brittanychiang"

  const para1 = "Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I've had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.";

  const para2 = "My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.";

  const para3 = "When I'm not at the computer, I'm usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds.";

  const resumeUrl = "https://docs.google.com/document/d/10m_y657-d1x76_875a1_9/edit?usp=sharing"
  const experienceList = [
    {
      duration: "2021 - Present",
      roleCompany: "Senior Frontend Engineer, Accessibility ✧ Klaviyo",
      description:
        "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback.",
      technologies: ["Ember", "scss", "Javascript", "MusicKit.js"],
    },{
      duration: "2021 - Present",
      roleCompany: "Senior Frontend Engineer, Accessibility ✧ Klaviyo",
      description:
        "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback.",
      technologies: ["Ember", "scss", "Javascript", "MusicKit.js"],
    },
  ]

  const allProjectsUrl = "https://github.com/tesvn7?tab=repositories"
  const projectsList = [ 
    { 
      link: "https://github.com/tesvn7/indian-olympic-analysis",
      image: "https://raw.githubusercontent.com/tesvn7/indian-olympic-analysis/main/assets/olympics-2.jpeg",
      name: "Indian Olympic Analysis",
      description: "An interactive web app that allows users to explore the history of the Indian Olympics.",
      technologies: ["Ember", "scss", "Javascript", "MusicKit.js"],
    },
    { 
      link: "https://github.com/tesvn7/indian-olympic-analysis",
      image: "https://raw.githubusercontent.com/tesvn7/indian-olympic-analysis/main/assets/olympics-2.jpeg",
      name: "Indian Olympic Analysis",
      description: "An interactive web app that allows users to explore the history of the Indian Olympics.",
      technologies: ["Ember", "scss", "Javascript", "MusicKit.js"],
    },
    { 
      link: "https://github.com/tesvn7/indian-olympic-analysis",
      image: "https://raw.githubusercontent.com/tesvn7/indian-olympic-analysis/main/assets/olympics-2.jpeg",
      name: "Indian Olympic Analysis",
      description: "An interactive web app that allows users to explore the history of the Indian Olympics.",
      technologies: ["Ember", "scss", "Javascript", "MusicKit.js"],
    },
]

  const { ref: aboutRef, inView: aboutRefVisible, entry: aboutEntry} = useInView({threshold: 0.9});
  const { ref: expRef, inView: expRefVisible, entry: expEntry} = useInView({threshold: 1});
  const { ref: projectRef, inView: projectRefVisible, entry: projectEntry} = useInView({threshold: 0.3});

  
  return (
    <div className="gradient-bg flex h-screen">
      {/* // Left-View */}
      <div className="w-1/2 overflow-hidden flex flex-col items-center justify-around pl-64">
        <HeadingSection name={name} role={role} subHeading={subHeading} />
        <NavSection aboutEntry={aboutEntry} expEntry={expEntry} projectEntry={projectEntry} aboutRefVisible={aboutRefVisible} expRefVisible={expRefVisible} projectRefVisible={projectRefVisible} />
        <SocialSection githubUrl={githubUrl} linkedinUrl={linkedinUrl} twitterUrl={twitterUrl} />
      </div>
      {/* // Right-View */}
      <div id="content" className="w-1/2 flex flex-col justify-start items-center gap-20 overflow-y-auto  pt-32 pr-96 ">
        <AboutSection ref={aboutRef} para1={para1} para2={para2} para3={para3} />
        
        <ExperienceSection ref={expRef} resumeUrl={resumeUrl} experienceList={experienceList}  />
        
        <ProjectSection ref={projectRef} allProjectsUrl={allProjectsUrl} projectsList={projectsList} />

        <FootnoteSection />
      </div>
    </div>
  );
}
