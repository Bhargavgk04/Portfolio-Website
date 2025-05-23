"use client";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-[#121212] flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold bg-gradient-to-r from-[#FF8C00] via-[#FF0000] to-[#0066FF] bg-clip-text text-transparent"
      >
        Loading...
      </motion.div>
    </div>
  );
};

export default Loading; 