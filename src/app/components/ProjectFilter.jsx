"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectFilter = ({ onFilterChange, onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web', 'Python', 'Mobile', 'Full Stack'];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full md:w-1/2"
        >
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 rounded-lg bg-[#1E1E1E] border border-[#333333] text-white placeholder-[#ADB7BE] focus:outline-none focus:border-[#FF8C00] transition-colors duration-300"
          />
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-end">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-[#FF8C00] text-white'
                  : 'bg-[#1E1E1E] text-[#ADB7BE] hover:bg-[#333333]'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter; 