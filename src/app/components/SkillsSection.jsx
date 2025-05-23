"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const getSkillLevel = (level) => {
  if (level >= 90) return { label: "Expert", color: "from-[#FF8C00] via-[#FF0000] to-[#0066FF]" };
  if (level >= 75) return { label: "Advanced", color: "from-[#FF8C00] via-[#FF0000] to-[#FF8C00]" };
  if (level >= 60) return { label: "Intermediate", color: "from-[#FF8C00] to-[#FF0000]" };
  if (level >= 30) return { label: "Beginner", color: "from-[#FF8C00] to-[#FF8C00]" };

};

const skillsData = [
  { name: "React", level: 60, image: "/images/skills/react.svg" },
  { name: "JavaScript", level: 80, image: "/images/skills/javascript.svg" },
  { name: "HTML", level: 80, image: "/images/skills/html.svg" },
  { name: "CSS", level: 80, image: "/images/skills/css.svg" },
  { name: "Next.js", level:30 , image: "/images/skills/react.svg" },
  { name: "Node.js", level: 80, image: "/images/skills/nodejs.svg" },
  { name: "Express.js", level: 80, image: "/images/skills/express.svg" },
  { name: "MongoDB", level: 75, image: "/images/skills/mongodb.svg" },
  { name: "Java", level: 70, image: "/images/skills/java.svg" },
  { name: "Power BI", level: 85, image: "/images/skills/powerbi.svg" },
  { name: "Canva", level: 85, image: "/images/skills/canva.svg" },
];

const SkillsSection = () => {
  return (
    <section className="py-16 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => {
            const { label, color } = getSkillLevel(skill.level);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1E1E1E] rounded-lg p-6 border border-[#333333] relative group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="relative w-8 h-8">
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[#ADB7BE]">{skill.name}</span>
                  </div>
                  <span className={`text-sm font-medium bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                    {label}
                  </span>
                </div>
                <div className="h-2 bg-[#333333] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${color}`}
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#1E1E1E] px-3 py-1 rounded text-sm text-white"
                >
                  {label}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 