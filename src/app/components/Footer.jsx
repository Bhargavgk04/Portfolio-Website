"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-[#000000e6] backdrop-blur-md border-t border-[#33353F]"
    >
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Copyright */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center md:items-start"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mb-4"
            >
              <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-[#FF8C00] via-[#FF0000] to-[#0066FF] bg-clip-text text-transparent">
                BK
              </Link>
            </motion.div>
            <p className="text-[#ADB7BE] text-lg">
              © {currentYear} Bhargav Katkam. All rights reserved.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-white text-2xl font-semibold mb-6">Quick Links</h3>
            <div className="space-y-4">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="block text-[#ADB7BE] text-lg hover:text-white transition-colors relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF8C00] via-[#FF0000] to-[#0066FF] group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-white text-2xl font-semibold mb-6">Connect</h3>
            <div className="flex space-x-6">
              <motion.a
                href="https://github.com/Bhargavgk04"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-[#ADB7BE] hover:text-white transition-colors"
              >
                <Image src={GithubIcon} alt="Github Icon" className="h-8 w-8" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/bhargav-katkam04"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-[#ADB7BE] hover:text-white transition-colors"
              >
                <Image src={LinkedinIcon} alt="LinkedIn Icon" className="h-8 w-8" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;