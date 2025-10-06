"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SkillsTreadmill from './SkillsTreadmill';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'education', label: 'Education' },
  ];

  return (
    <section id="about" className="min-h-screen w-full bg-[#121212] py-12 md:py-20">
      <div className="w-full h-full px-4 md:px-8 lg:px-12">
        <div className="w-full max-w-[95%] mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-4 mb-8 md:mb-12">
            {tabs.map((tab) => (
              <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 md:px-6 md:py-2 rounded-lg transition-all duration-300 text-sm md:text-base ${
                  activeTab === tab.id
                    ? 'bg-[#333333] text-white'
                    : 'text-[#ADB7BE] hover:text-white hover:bg-[#1E1E1E]'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#1E1E1E] rounded-lg p-6 md:p-8 border border-[#333333] w-full min-h-[60vh]">
            {activeTab === 'about' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full flex flex-col"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">About Me</h2>
                <p className="text-[#ADB7BE] leading-relaxed mb-6 md:mb-8 text-sm md:text-base max-w-3xl">
                  I am a passionate full-stack developer with expertise in building modern web applications. 
                  My journey in software development has been driven by a constant desire to learn and create 
                  innovative solutions. I specialize in React, Node.js, and MongoDB, and I&apos;m always exploring 
                  new technologies to enhance my skill set.
                </p>
                <div className="w-full mt-auto">
                  <SkillsTreadmill />
                </div>
              </motion.div>
            )}

            {activeTab === 'education' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  <motion.div whileHover={{ y: -4 }} className="bg-[#0A0A0A] p-4 md:p-6 rounded-lg border border-[#333333] hover:border-[#666666] transition-all duration-300">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Bachelor of Technology in Computer Science</h3>
                    <p className="text-[#ADB7BE] text-sm md:text-base">N. B. Navale College of Engineering and Technology, Solapur</p>
                    <p className="text-gray-500 text-sm md:text-base">2022-2026</p>
                    <p className="text-[#FF8C00] text-sm md:text-base mt-2">CGPA: 8.58</p>
                  </motion.div>
                  <motion.div whileHover={{ y: -4 }} className="bg-[#0A0A0A] p-4 md:p-6 rounded-lg border border-[#333333] hover:border-[#666666] transition-all duration-300">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Higher Secondary Education</h3>
                    <p className="text-[#ADB7BE] text-sm md:text-base">Narayana Junior College, Hyderabad</p>
                    <p className="text-gray-500 text-sm md:text-base">2022</p>
                    <p className="text-[#FF8C00] text-sm md:text-base mt-2">Percentage: 90.5</p>
                  </motion.div>
                  <motion.div whileHover={{ y: -4 }} className="bg-[#0A0A0A] p-4 md:p-6 rounded-lg border border-[#333333] hover:border-[#666666] transition-all duration-300">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Secondary Education</h3>
                    <p className="text-[#ADB7BE] text-sm md:text-base">H. C. Convent English Medium School, Solapur</p>
                    <p className="text-gray-500 text-sm md:text-base">2020</p>
                    <p className="text-[#FF8C00] text-sm md:text-base mt-2">Percentage: 84.5%</p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
