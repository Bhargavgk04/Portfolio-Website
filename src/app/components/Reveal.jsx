"use client";
import React from "react";
import { motion } from "framer-motion";

const Reveal = ({ children, delay = 0 }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.section>
  );
};

export default Reveal;


