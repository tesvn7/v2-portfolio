"use client";
import Image from "next/image";
import IconGitHub from "../../public/assets/icons/git-icon-g.svg";
import IconTwitter from "../../public/assets/icons/twitter-icon-g.svg";
import IconLinkdin from "../../public/assets/icons/linkdin-icon-g.svg";
import ExperienceCard from "@/components/experience_card";
import ProjectCard from "@/components/project_card";
import PoetryText from "@/components/poetry_text";
import { useInView } from "react-intersection-observer";
import HeadingSection from "@/components/heading_section";
import NavSection from "@/components/nav_section";
import SocialSection from "@/components/social_section";

export default function Home() {
  const { ref: aboutRef, inView: aboutRefVisible, entry: aboutEntry} = useInView({threshold: 0.9});
  const { ref: expRef, inView: expRefVisible, entry: expEntry} = useInView({threshold: 1});
  const { ref: projectRef, inView: projectRefVisible, entry: projectEntry} = useInView({threshold: 0.3});

  const name = "Brittany Chiang"
  const role = "Senior Frontend Engineer"
  const subHeading="I build pixel-perfect, engaging, and accessible digital experiences."

  const githubUrl = "https://github.com/tesvn7"
  const linkedinUrl = "https://www.linkedin.com/in/brittanychiang/"
  const twitterUrl = "https://twitter.com/brittanychiang"


  const ed1 = "JULY - DEC 2024";
  const erc1 = "Senior Frontend Engineer, Accessebility ✧ Klaviyoo";
  const edes1 =
    "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback.";
  const et1 = ["Ember", "scss", "Javascript", "MusicKit.js"];

  const pl1 =
    "https://raw.githubusercontent.com/tesvn7/indian-olympic-analysis/main/assets/olympics-2.jpeg";
  const pi1 =
    "https://raw.githubusercontent.com/tesvn7/indian-olympic-analysis/main/assets/olympics-2.jpeg";
  const pn1 = "Indian Olympic Analysis";
  const pd1 =
    "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback.";
  const pt1 = ["Ember", "scss", "Javascript", "MusicKit.js", "Pandas", "Numpy"];

  return (
    // Root Layout
    <div className="gradient-bg flex h-screen">
      {/* // Left-fixed */}
      <div className="w-1/2 overflow-hidden flex flex-col items-center justify-around pl-64">
        <HeadingSection name={name} role={role} subHeading={subHeading} />
        <NavSection aboutEntry={aboutEntry} expEntry={expEntry} projectEntry={projectEntry} aboutRefVisible={aboutRefVisible} expRefVisible={expRefVisible} projectRefVisible={projectRefVisible} />
        <SocialSection githubUrl={githubUrl} linkedinUrl={linkedinUrl} twitterUrl={twitterUrl} />
      </div>
      {/* // Right-Scrollable */}
      <div
        id="content"
        className="w-1/2 flex flex-col justify-start items-center gap-20 overflow-y-auto  pt-32 pr-96 "
      >
        {/* About-section */}
        <section ref={aboutRef} className="scroll-mt-24 text-md font-normal text-slate-300">
          <p className="mb-4">
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an advertising agency, a start-up, a huge
            corporation, and a digital product studio.
          </p>
          <p className="mb-4">
            My main focus these days is building accessible user interfaces for
            our customers at Klaviyo. I most enjoy building software in the
            sweet spot where design and engineering meet — things that look good
            but are also built well under the hood. In my free time, I've also
            released an online video course that covers everything you need to
            know to build a web app with the Spotify API.
          </p>
          <p className="mb-4">
            When I’m not at the computer, I’m usually rock climbing, reading,
            hanging out with my wife and two cats, or running around Hyrule
            searching for Korok seeds.
          </p>
        </section>
        {/* Experience-section */}
        <section ref={expRef} className="scroll-mt-24">
          <ExperienceCard
            experience_duration={ed1}
            experience_role_company={erc1}
            experience_description={edes1}
            experience_technologies={et1}
          />
          <ExperienceCard
            experience_duration={ed1}
            experience_role_company={erc1}
            experience_description={edes1}
            experience_technologies={et1}
          />
          {/* resume */}
          <div className="flex items-center justify-start gap-1 mt-10 group">
            <h5 className="text-md text-slate-300 font-sans hover:underline underline-offset-4 decoration-2 hover:decoration-teal-400 duration-200 transition">
              Resume
            </h5>
            <span className="text-slate-300 group-hover:translate-x-2 transition duration-200 group-hover:text-teal-400">
              →
            </span>
          </div>
        </section>
        {/* Project-section */}
        <section ref={projectRef} id="projects" className="scroll-mt-24 mt-32">
          <ProjectCard
            project_link={pl1}
            project_image={pi1}
            project_name={pn1}
            project_description={pd1}
            project_technologies={pt1}
          />
          <ProjectCard
            project_link={pl1}
            project_image={pi1}
            project_name={pn1}
            project_description={pd1}
            project_technologies={pt1}
          />
          <ProjectCard
            project_link={pl1}
            project_image={pi1}
            project_name={pn1}
            project_description={pd1}
            project_technologies={pt1}
          />
          <ProjectCard
            project_link={pl1}
            project_image={pi1}
            project_name={pn1}
            project_description={pd1}
            project_technologies={pt1}
          />
          <ProjectCard
            project_link={pl1}
            project_image={pi1}
            project_name={pn1}
            project_description={pd1}
            project_technologies={pt1}
          />
        </section>

        {/* note-section */}
        <section id="note" className="pl-4">
          <PoetryText />
        </section>
      </div>
    </div>
  );
}
