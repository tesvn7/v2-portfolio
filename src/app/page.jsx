"use client";

import { useInView } from "react-intersection-observer";
import HeadingSection from "@/components/heading_section";
import NavSection from "@/components/nav_section";
import SocialSection from "@/components/social_section";
import AboutSection from "@/components/about_section";
import ExperienceSection from "@/components/experience_section";
import ProjectSection from "@/components/project_section";
import FootnoteSection from "@/components/footnote_section";
import { useEffect, useState } from "react";
import { getData } from "@/lib/firebase/db";
import HeadingSectionModel from "@/models/HeadingSection";
import SocialSectionModel from "@/models/SocialSection";
import AboutSectionModel from "@/models/AboutSection";
import ExperienceModel from "@/models/Experience";
import ProjectModel from "@/models/Project";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { motion } from "framer-motion"

export default function Home() {

  const [loading, setLoading] = useState(true);
  const [headingData, setHeadingData] = useState(null);
  const [socialData, setSocialData] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const [experienceData, setExperienceData] = useState(null);
  const [projectData, setProjectData] = useState(null);
  const [urls, setUrls] = useState([]);

  useEffect( () => {
    async function fetchData() {
      const result = await getData();
        if (result) {
          const r1s = result['heading_section'];
          const r1 = new HeadingSectionModel(
            r1s['name'],
            r1s['title'],
            r1s['sub_heading']
          )
          const r2s = result['social_section'];
          const r2 = new SocialSectionModel(
              r2s['github'],
              r2s['linkedIn'],
              r2s['twitter']
            )
            const r3s = result['about_section'];
            const r3 = new AboutSectionModel(
                r3s['para1'],
                r3s['para2'],
                r3s['para3']
              )
            const r4 = [result['resume_url'], result['all_projects_url']]
            
            const r5s = result['experience_section']
            const r5 = []
            for (const key in r5s ) {
              const d = new ExperienceModel(
                r5s[key]['duration'],
                r5s[key]['role'],
                r5s[key]['company'],
                r5s[key]['description'],
                r5s[key]['technologies']
              )
              r5.push(d)
            }
            const r6s = result['project_section']
            const r6 = []
            for (const key in r6s ) {
              const d = new ProjectModel(
                r6s[key]['image_url'],
                r6s[key]['app_url'],
                r6s[key]['github_url'],
                r6s[key]['name'],
                r6s[key]['description'],
                r6s[key]['technologies']
              )
              r6.push(d)
            }
            setHeadingData(r1)
            setSocialData(r2)
            setAboutData(r3)
            setExperienceData(r5)
            setProjectData(r6)
            setUrls(r4)
        }
        else {
          setTimeout(() => {
            setLoading(true);
          }, 4000);
        }
    }
    if (loading==false) setLoading(true);
    fetchData();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const { ref: aboutRef, inView: aboutRefVisible, entry: aboutEntry} = useInView({threshold: 1});
  const { ref: expRef, inView: expRefVisible, entry: expEntry} = useInView({threshold: 1});
  const { ref: projectRef, inView: projectRefVisible, entry: projectEntry} = useInView({threshold: 0.8});


  return (
    <div  className="gradient-bg flex h-screen ">
      {loading 
        ? 
        <div className="flex items-center justify-center w-full h-full">
          <ClimbingBoxLoader color={"#d4387c"} loading={loading} size={30} />
        </div>
        : <>    
        {/* // Left-View */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 1}} className="w-1/2 overflow-hidden flex flex-col items-center justify-around pl-64">
        <HeadingSection name={headingData.name} role={headingData.role} subHeading={headingData.sub_heading} />
        <NavSection aboutEntry={aboutEntry} expEntry={expEntry} projectEntry={projectEntry} aboutRefVisible={aboutRefVisible} expRefVisible={expRefVisible} projectRefVisible={projectRefVisible} />
        <SocialSection githubUrl={socialData.github} linkedinUrl={socialData.linkedin} twitterUrl={socialData.twitter} />
      </motion.div>
      {/* // Right-View */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 1}}  id="content" className="w-1/2 flex flex-col justify-start items-center gap-20 overflow-y-auto  pt-32 pr-96 ">
        <AboutSection ref={aboutRef} para1={aboutData.para1} para2={aboutData.para2} para3={aboutData.para3} />
        <ExperienceSection ref={expRef} resumeUrl={urls[0]} experienceList={experienceData}  />
        <ProjectSection ref={projectRef} allProjectsUrl={urls[1]} projectsList={projectData} />
        <FootnoteSection />
      </motion.div>
        </>
       }
      </div>
  );
}
