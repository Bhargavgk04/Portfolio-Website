"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  // Social links data
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/bhargav-katkam/",
      label: "LinkedIn",
      icon: (
        <img src="/linkedin-icon.svg" alt="LinkedIn" className="w-8 h-8" />
      ),
    },
    {
      href: "https://github.com/Bhargavgk04",
      label: "GitHub",
      icon: (
        <img src="/github-icon.svg" alt="GitHub" className="w-8 h-8" />
      ),
    },
    {
      href: "https://leetcode.com/u/k_bhargav_76/",
      label: "LeetCode",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M36.7 32.6L27.2 42.1C25.4 43.9 22.5 43.9 20.7 42.1L7.9 29.3C6.1 27.5 6.1 24.6 7.9 22.8L20.7 10C22.5 8.2 25.4 8.2 27.2 10L36.7 19.5" stroke="#FFA116" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M42.1 25H17.6" stroke="#FFA116" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
      ),
    },
    {
      href: "https://twitter.com/bhargavkatkam",
      label: "Twitter",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#1DA1F2" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.6 1.64.96c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.7 2.16 2.94 4.07 2.97A9.05 9.05 0 010 21.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.41-.01-.61A9.22 9.22 0 0023 3z"/></svg>
      ),
    },
  ];

  if (!isMounted) {
    return null;
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#121212]/95 backdrop-blur-md border-b border-[#333333]"
          : "bg-transparent border-b border-[#333333]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-[#FF8C00] via-[#FF0000] to-[#0066FF] bg-clip-text text-transparent">
              BK
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className="text-lg text-[#ADB7BE] hover:text-white transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF8C00] via-[#FF0000] to-[#0066FF] group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
            {/* Social Icons */}
            <div className="flex items-center space-x-4 ml-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="transition-transform duration-200 hover:drop-shadow-[0_2px_8px_rgba(255,140,0,0.4)]"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
            suppressHydrationWarning
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden"
            >
              <div className="py-2 space-y-1 bg-[#121212]/95 backdrop-blur-md border-t border-[#333333]">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={link.href}
                      className="block text-lg text-[#ADB7BE] hover:text-white transition-colors duration-300 px-4 py-3 relative group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF8C00] via-[#FF0000] to-[#0066FF] group-hover:w-full transition-all duration-300" />
                    </Link>
                  </motion.div>
                ))}
                {/* Social Icons Mobile */}
                <div className="flex items-center justify-center space-x-6 mt-4 pb-2">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className="transition-transform duration-200 hover:drop-shadow-[0_2px_8px_rgba(255,140,0,0.4)]"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 