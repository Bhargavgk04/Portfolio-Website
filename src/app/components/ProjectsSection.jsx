"use client";
import React, { useState ,useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView} from "framer-motion";


const projectsData = 
    [
        {
            id: 1,
            title: "Real-Time Chatting Website",
            description: "A web-based platform enabling seamless real-time chat between users.",
            image: "/images/projects/1.png",
            tag: ["All", "Web"],
            gitUrl: "https://github.com/Bhargavgk04/Chat-MERN-App",
            previewUrl: "https://silent-chat.netlify.app/",
          },
          {
            id: 2,
            title: "Student Learning Platform",
            description: "A full-stack MERN web application designed for students to ask, answer, and review questions related to their colleges. Built with React, Node.js, Express, and MongoDB, featuring user authentication, responsive UI, and role-based content access.",
            image: "/images/projects/2.png",
            tag: ["All", "Web", "MERN"],
            gitUrl: "https://github.com/Bhargavgk04/SkillSutra/tree/main",
            previewUrl: "https://skillsutra.netlify.app/",
          },
          {
            id: 3,
            title: "Portfolio Website",
            description: "Designed this very site for my portfolio",
            image: "/images/projects/3.png",
            tag: ["All", "Web"],
            gitUrl: "https://github.com/Bhargavgk04/Portfolio-Website",
            previewUrl: "/",
          }, 
          {
            id: 4,
            title: "Campus 360 - Automated Paperless Transparent College System",
            description: "An all-in-one automated and paperless system ensuring transparent and efficient campus management.",
            image: "/images/projects/4.png",
            tag: ["All", "Web"],
            gitUrl: "https://github.com/Bhargavgk04/Campus360",
            previewUrl: "",
          },
          {
            id: 5,
            title: "Campus Connect - Student Q & A Platform",
            description: "A student-driven Q&A platform fostering knowledge sharing and peer-to-peer support within the campus.",
            image: "/images/projects/5.png",
            tag: ["All", "Web"],
            gitUrl: "https://github.com/Bhargavgk04/Campus-Connect",
            previewUrl: "",
          },
        
          {
            id: 6,
            title: "Digital Attendance System",
            description: "A comprehensive data analysis project using Python, Pandas, and Matplotlib for data visualization and insights.",
            image: "/images/projects/6.png",
            tag: ["All", "Python"],
            gitUrl: "https://github.com/Bhargavgk04/Digital-Attendance-System",
            previewUrl: "",
          },
                  
    ]

const ProjectsSection = () => {
  const[tag,setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref , { once: true });


  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
      );

  const cardVariants ={
    initial: {y:50 , opacity :0},
    animate: {y:0 , opacity:1},
  };    

  return (
    <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects
        </h2>
        <div className ="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
        />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
        <ul ref={ref} className ="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project,index) => (
              <motion.li
                key={index} 
                variants={cardVariants} 
                initial ="initial" 
                animate={isInView ? "animate" 
                                : " initial"}                
                transition={{ duration : 0.3,delay: index * 0.3}} 
              >
                <ProjectCard 
                  key={project.id} 
                  title={project.title} 
                  description={project.description} 
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl} 
                  />
                </motion.li>
                  ))}   
                </ul>
                </div>
                </section>
                );
            };




export default ProjectsSection;