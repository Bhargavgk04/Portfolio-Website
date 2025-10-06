"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ isOpen, onClose, project }) => {
  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-3xl rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex items-center justify-center bg-[#0b0b0b]">
              <img
                src={project.image}
                alt={project.title}
                className="max-h-[70vh] w-auto object-contain select-none"
                draggable={false}
              />
              <button
                onClick={onClose}
                className="absolute top-3 right-3 rounded-full bg-black/50 hover:bg-black/70 text-white p-2"
                aria-label="Close"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
              </button>
            </div>

            <div className="bg-[#0b0b0b] border border-white/5 p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h3 className="text-white text-2xl font-semibold">{project.title}</h3>
                  <p className="text-[#ADB7BE] mt-2">{project.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-5">
                {project.previewUrl && (
                  <a
                    href={project.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-full"
                  >
                    <span className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#FF8C00_0%,#FF0000_50%,#0066FF_100%)] opacity-80 blur-[2px]" />
                    <span className="relative px-4 py-2 bg-[#0b0b0b]/90 rounded-full text-white text-sm">Live Preview</span>
                  </a>
                )}
                {project.gitUrl && (
                  <a
                    href={project.gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-full"
                  >
                    <span className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#FF8C00_0%,#FF0000_50%,#0066FF_100%)] opacity-80 blur-[2px]" />
                    <span className="relative px-4 py-2 bg-[#0b0b0b]/90 rounded-full text-white text-sm">View Code</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;


