"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#000000e6] backdrop-blur-md border-t border-[#33353F]"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                BK
              </Link>
            </motion.div>
            <p className="mt-4 text-sm text-[#ADB7BE]">
              © {currentYear} Bhargav Katkam. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <motion.a
                href="#home"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block text-[#ADB7BE] hover:text-white transition-colors"
              >
                Home
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block text-[#ADB7BE] hover:text-white transition-colors"
              >
                About
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block text-[#ADB7BE] hover:text-white transition-colors"
              >
                Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block text-[#ADB7BE] hover:text-white transition-colors"
              >
                Contact
              </motion.a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-[#ADB7BE] hover:text-white transition-colors"
              >
                <Image src={GithubIcon} alt="Github Icon" className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/bhargav-katkam04"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-[#ADB7BE] hover:text-white transition-colors"
              >
                <Image src={LinkedinIcon} alt="LinkedIn Icon" className="h-6 w-6" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;