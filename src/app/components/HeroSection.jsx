"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [showCVModal, setShowCVModal] = useState(false);

  const handleViewCV = useCallback(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      // On mobile, open PDF in new tab
      window.open('/files/resume.pdf', '_blank');
    } else {
      setShowCVModal(true);
    }
  }, []);

  const handleScrollToContact = useCallback(() => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleDownloadCV = useCallback(() => {
    const link = document.createElement('a');
    link.href = '/files/resume.pdf';
    link.download = 'Bhargav_Katkam_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  // Listen for global event to open CV from Navbar
  React.useEffect(() => {
    const openCvHandler = () => {
      handleViewCV();
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('open-cv', openCvHandler);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('open-cv', openCvHandler);
      }
    };
  }, [handleViewCV]);

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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScrollToContact}
              className="w-full sm:w-auto relative inline-flex items-center justify-center p-[2px] overflow-hidden font-medium text-white rounded-full group anim-glow"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF8C00_0%,#FF0000_50%,#0066FF_100%)]" />
              <span className="relative w-full px-6 py-3 transition-all bg-[#121212] rounded-full group-hover:bg-opacity-0">
                Hire Me
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewCV}
              className="w-full sm:w-auto relative inline-flex items-center justify-center p-[2px] overflow-hidden font-medium text-white rounded-full group anim-glow"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF8C00_0%,#FF0000_50%,#0066FF_100%)]" />
              <span className="relative w-full px-6 py-3 transition-all bg-[#121212] rounded-full group-hover:bg-opacity-0">
                View CV
              </span>
            </motion.button>
          </div>
        </motion.div>

        <motion.div  
          initial ={{ opacity: 0 ,scale: 0.5}} 
          animate ={{opacity:1 , scale:1}} 
          transition={{duration: 0.7}}  
          className="col-span-12 sm:col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mx-auto anim-float">
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
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowCVModal(false)}
              className="absolute top-4 right-4 text-white hover:text-orange-500"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
            <div className="h-full p-4 sm:p-8">
              <iframe
                src="/files/resume.pdf"
                className="w-full h-full"
                title="CV Preview"
                type="application/pdf"
              />
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="relative inline-flex items-center justify-center p-[2px] overflow-hidden font-medium text-white rounded-full group">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF8C00_0%,#FF0000_50%,#0066FF_100%)]" />
                <button
                  onClick={handleDownloadCV}
                  className="relative w-full px-6 py-3 transition-all bg-[#121212] rounded-full group-hover:bg-opacity-0"
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;