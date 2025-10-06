"use client";
import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [active, setActive] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Fallback: compute active section by position when on homepage
      if (window.location.pathname === "/") {
        const sectionIds = ["home", "about", "projects", "contact"];
        let currentId = active;
        let minDistance = Infinity;
        sectionIds.forEach((id) => {
          const el = document.getElementById(id);
          if (!el) return;
          const rect = el.getBoundingClientRect();
          // Distance of section's top to viewport top
          const distance = Math.abs(rect.top - 100); // slight offset for fixed navbar
          // Consider section in view if a chunk is visible
          const isVisible = rect.top < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.2;
          if (isVisible && distance < minDistance) {
            minDistance = distance;
            currentId = id;
          }
        });
        if (currentId && currentId !== active) {
          setActive(currentId);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Scrollspy only on homepage
    const sectionIds = ["home", "about", "projects", "contact"]; 
    const observers = [];
    if (window.location.pathname === "/") {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActive(id);
              }
            });
          },
          { rootMargin: "-25% 0px -60% 0px", threshold: 0.15 }
        );
        observer.observe(el);
        observers.push(observer);
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  // Determine active tab from route
  useEffect(() => {
    if (!pathname) return;
    if (pathname.startsWith('/projects')) {
      setActive('projects');
    }
  }, [pathname]);

  // Sync active with URL hash so underline updates immediately on click/bookmark
  useEffect(() => {
    const setFromHash = () => {
      const hash = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '';
      if (hash === 'about' || hash === 'projects' || hash === 'contact') {
        setActive(hash);
      }
    };
    setFromHash();
    window.addEventListener('hashchange', setFromHash);
    return () => window.removeEventListener('hashchange', setFromHash);
  }, []);

  const navLinks = useMemo(() => ([
    { href: "/#about", id: "about", label: "About" },
    { href: "/#projects", id: "projects", label: "Projects" },
    { href: "/#contact", id: "contact", label: "Contact" },
  ]), []);

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
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="w-full px-2 sm:px-4">
        <div className="h-20 flex items-center">
          <div className={`w-full ${isScrolled ? "drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]" : ""}`}>
            <div className="relative p-[1px] rounded-2xl bg-[linear-gradient(135deg,rgba(255,140,0,0.35),rgba(255,0,0,0.25),rgba(0,102,255,0.35))]">
              <div className={`rounded-2xl bg-[#0b0b0b]/70 backdrop-blur-md border border-white/5`}
              >
                <div className="flex justify-between items-center px-4 md:px-6 h-16">
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
                          onClick={() => setActive(link.id)}
                          className={`text-sm tracking-wide uppercase ${active === link.id ? "text-white" : "text-[#ADB7BE] hover:text-white"} transition-colors duration-300 relative group`}
                        >
                          {link.label}
                          <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#FF8C00] via-[#FF0000] to-[#0066FF] transition-all duration-300 ${active === link.id ? "w-full" : "w-0 group-hover:w-full"}`} />
                        </Link>
                      </motion.div>
                    ))}
                    {/* Social Icons */}
                    <div className="flex items-center space-x-3 ml-4">
                      {socialLinks.map((social) => (
                        <motion.a
                          key={social.href}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.15, rotate: 6 }}
                          whileTap={{ scale: 0.95 }}
                          className="transition-transform duration-200 hover:drop-shadow-[0_2px_8px_rgba(255,140,0,0.35)]"
                          aria-label={social.label}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                    {/* CTA */}
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="ml-4 relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-full"
                      aria-label="Hire Me"
                    >
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF8C00_0%,#FF0000_50%,#0066FF_100%)]" />
              <span className="relative w-full px-6 py-3 transition-all bg-[#121212] rounded-full group-hover:bg-opacity-0">
                Hire Me
              </span>
                    </motion.a>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        // Ensure we are at home then open CV
                        if (window.location.pathname !== "/") {
                          window.location.href = "/#home";
                          setTimeout(() => window.dispatchEvent(new Event('open-cv')), 350);
                        } else {
                          window.dispatchEvent(new Event('open-cv'));
                        }
                      }}
                      className="ml-2 relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-full"
                      aria-label="View CV"
                    >
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF8C00_0%,#FF0000_50%,#0066FF_100%)]" />
                      <span className="relative w-full px-6 py-3 transition-all bg-[#121212] rounded-full group-hover:bg-opacity-0">
                        View CV
                      </span>
                    </motion.button>
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
              </div>
            </div>
          </div>
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
              <div className="mx-1 mb-2 p-[1px] rounded-2xl bg-[linear-gradient(135deg,rgba(255,140,0,0.35),rgba(255,0,0,0.25),rgba(0,102,255,0.35))]">
                <div className="rounded-2xl bg-[#0b0b0b]/80 backdrop-blur-md border border-white/5">
                  <div className="py-2 space-y-1">
                    {navLinks.map((link) => (
                      <motion.div
                        key={link.href}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <Link
                          href={link.href}
                          className={`block text-base ${active === link.id ? "text-white" : "text-[#ADB7BE] hover:text-white"} transition-colors duration-300 px-4 py-3 relative group`}
                          onClick={() => { setActive(link.id); setIsMenuOpen(false); }}
                        >
                          {link.label}
                          <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#FF8C00] via-[#FF0000] to-[#0066FF] transition-all duration-300 ${active === link.id ? "w-full" : "w-0 group-hover:w-full"}`} />
                        </Link>
                      </motion.div>
                    ))}
                    <div className="px-4 pt-1">
                      <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="relative inline-flex items-center justify-center w-full p-[1px] overflow-hidden rounded-full"
                        aria-label="Hire Me"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#FF8C00_0%,#FF0000_50%,#0066FF_100%)] opacity-80 blur-[2px]" />
                        <span className="relative px-4 py-2 bg-[#0b0b0b]/90 rounded-full text-white text-sm text-center">Hire Me</span>
                      </motion.a>
                    </div>
                    {/* Social Icons Mobile */}
                    <div className="flex items-center justify-center space-x-6 mt-3 pb-3">
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