"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
  { name: 'React', icon: '/images/skills/react.svg' },
  { name: 'HTML', icon: '/images/skills/html.svg' },
  { name: 'CSS', icon: '/images/skills/css.svg' },
  { name: 'JavaScript', icon: '/images/skills/javascript.svg' },
  { name: 'MongoDB', icon: '/images/skills/mongodb.svg' },
  { name: 'Java', icon: '/images/skills/java.svg' },
  { name: 'Canva', icon: '/images/skills/canva.svg' },
  { name: 'Power BI', icon: '/images/skills/powerbi.svg' },
];

const SkillsTreadmill = () => {
  return (
    <div className="relative w-full h-40 overflow-hidden bg-[#0A0A0A] rounded-lg border border-[#333333] p-4">
      <motion.div
        className="absolute flex space-x-12"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-16 h-16 relative">
              <Image
                src={skill.icon}
                alt={skill.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-white text-sm mt-2 font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsTreadmill; 