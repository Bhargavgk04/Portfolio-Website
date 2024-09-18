"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion";

const HeroSection = () => {
  return (
  <section className="lg:py-16">
    <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div  
          initial ={{ opacity: 0 ,scale: 0.5}} 
          animate ={{opacity:1 , scale:1}} 
          transition={{duration: 0.7}} 
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-2xl sm:text-2xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via to-secondary-700">
            Hello, I&apos;m Bhargav Katkam{" "}
              </span>
              <br></br>
              <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1000,
                "App Developer",
                1000,
                "GDSC Lead",
                1000,
                "Coder",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#d8d8d8] text-base sm:text-lg mb-6 lg:text-xl">
          To play game, go inside the 'Spider-Man' folder, right click and run 'SpideyPC' as administrator
          </p>
        <div>
          <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-500 via-red-500 to-secondary-500 hover:bg-slate-200 text-white mt-3">
            <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2">
              Hire Me
            </span>
          </button>
          <button  href ="https://drive.google.com/file/d/1sL1vbPEfR_WyG4QHC2TT1eYCAcQC11g-/view?usp=sharing" className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-yellow-500 via-red-500 to-secondary-500 hover:bg-slate-800 text-white  mt-3">
           
            <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2" >
          
                Download CV
          
            </span>
            </button>
          </div>  
        </motion.div>
                
        <motion.div  
          initial ={{ opacity: 0 ,scale: 0.5}} 
          animate ={{opacity:1 , scale:1}} 
          transition={{duration: 0.7}}  className="col-span-4 place-self-center mt-7 ml-12 mr-2 lg:mt-0">
        <div className="rounded-full bg-[#131313] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero-image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={600}
              height={600}
            />
          </div>
        </motion.div>
        </div>    
  </section>
  );
};

export default HeroSection