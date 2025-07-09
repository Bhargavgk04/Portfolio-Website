"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
  { name: 'React', icon: '/images/skills/react.svg', color: '#61DAFB' },
  { name: 'HTML', icon: '/images/skills/html.svg', color: '#E34F26' },
  { name: 'CSS', icon: '/images/skills/css.svg', color: '#1572B6' },
  { name: 'JavaScript', icon: '/images/skills/javascript.svg', color: '#F7DF1E' },
  { name: 'MongoDB', icon: '/images/skills/mongodb.svg', color: '#47A248' },
  { name: 'Java', icon: '/images/skills/java.svg', color: '#ED8B00' },
  { name: 'Canva', icon: '/images/skills/canva.svg', color: '#00C4CC' },
  { name: 'Power BI', icon: '/images/skills/powerbi.svg', color: '#F2C811' },
];

const SkillsTreadmill = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      }
    },
    hover: {
      y: -8,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      }
    }
  };

  return (
    <div className="relative w-full min-h-[300px] bg-gradient-to-br from-[#0A0A0A] via-[#121212] to-[#0A0A0A] rounded-2xl border border-[#333333] p-8 shadow-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#0A0A0A] opacity-50 rounded-2xl"></div>
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 relative z-10"
      >
        <h3 className="text-2xl font-bold text-white mb-2">Technical Skills</h3>
        <div className="w-24 h-1 bg-gradient-to-r from-[#FF8C00] via-[#FF0000] to-[#0066FF] mx-auto rounded-full"></div>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 relative z-10"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={skillVariants}
            whileHover="hover"
            className="group cursor-pointer"
          >
            <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-6 border border-[#333333] hover:border-[#444444] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#FF8C00]/10">
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ 
                  background: `radial-gradient(circle at center, ${skill.color}20, transparent 70%)`,
                  filter: 'blur(20px)'
                }}
              ></div>
              
              {/* Skill Icon */}
              <motion.div
                variants={iconVariants}
                className="relative w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain drop-shadow-lg"
                />
                {/* Pulse Animation */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    border: `2px solid ${skill.color}40`,
                    boxShadow: `0 0 20px ${skill.color}20`
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.2, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
              
              {/* Skill Name */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-[#FF8C00] transition-colors duration-300">
                  {skill.name}
                </h4>
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#FF8C00] to-[#FF0000] mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
              
              {/* Floating Particles */}
              <motion.div
                className="absolute top-2 right-2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-60"
                style={{ backgroundColor: skill.color }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Decoration */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-[#FF8C00] to-transparent rounded-full"
      />
    </div>
  );
};

export default SkillsTreadmill; 