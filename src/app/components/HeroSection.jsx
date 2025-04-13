"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [showCVModal, setShowCVModal] = useState(false);

  const handleViewCV = () => {
    setShowCVModal(true);
  };

  return (
    <section id="home" className="lg:py-8">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 md:gap-12">
        <motion.div  
          initial ={{ opacity: 0 ,scale: 0.5}} 
          animate ={{opacity:1 , scale:1}} 
          transition={{duration: 0.7}} 
          className="col-span-12 sm:col-span-7 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] via-[#FF0000] to-[#0066FF]">
              Hello, I&apos;m{" "}
            </span>
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] via-[#FF0000] to-[#0066FF]">
              Bhargav Katkam
            </span>
            <br className="hidden sm:block" />
            <div className="text-white mt-3">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1000,
                  "App Developer",
                  1000,
                  "GDG On Campus Organizer",
                  1000,
                  "Coder",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white"
              />
            </div>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl max-w-[85%] mx-auto sm:mx-0">
            I&apos;m a full stack developer specializing in building exceptional digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
            <button
              onClick={() => {
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto relative inline-flex items-center justify-center p-[2px] overflow-hidden font-medium text-white rounded-full group"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF8C00_0%,#FF0000_50%,#0066FF_100%)]" />
              <span className="relative w-full px-6 py-3 transition-all bg-[#121212] rounded-full group-hover:bg-opacity-0">
                Hire Me
              </span>
            </button>

            <button
              onClick={() => setShowCVModal(true)}
              className="w-full sm:w-auto relative inline-flex items-center justify-center p-[2px] overflow-hidden font-medium text-white rounded-full group"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF8C00_0%,#FF0000_50%,#0066FF_100%)]" />
              <span className="relative w-full px-6 py-3 transition-all bg-[#121212] rounded-full group-hover:bg-opacity-0">
                View CV
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div  
          initial ={{ opacity: 0 ,scale: 0.5}} 
          animate ={{opacity:1 , scale:1}} 
          transition={{duration: 0.7}}  
          className="col-span-12 sm:col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mx-auto">
            <Image
              src="/images/hero-image.png"
              alt="hero-image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={600}
              height={600}
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* CV Modal */}
      {showCVModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-[#121212] rounded-lg w-full max-w-4xl h-[80vh] relative">
            <button
              onClick={() => setShowCVModal(false)}
              className="absolute top-4 right-4 text-white hover:text-orange-500"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="h-full p-4 sm:p-8">
              <iframe
                src="/files/resume.pdf"
                className="w-full h-full"
                title="CV Preview"
                type="application/pdf"
              />
            </div>
            <div className="absolute bottom-4 right-4">
              <a
                href="/files/resume.pdf"
                download="Bhargav_Katkam_Resume.pdf"
                className="relative inline-flex items-center justify-center p-[2px] overflow-hidden font-medium text-white rounded-full group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF8C00_0%,#FF0000_50%,#0066FF_100%)]" />
                <span className="relative px-6 py-3 transition-all bg-[#121212] rounded-full group-hover:bg-opacity-0">
                  Download CV
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;