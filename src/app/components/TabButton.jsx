import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b border-orange-500"
    : "text-[#ADB7BE] border-b border-transparent";

  return (
    <button
      onClick={selectTab}
      className={`mr-3 font-semibold hover:text-white ${buttonClasses} transition-colors duration-300`}
    >
      {children}
    </button>
  );
};

export default TabButton;
