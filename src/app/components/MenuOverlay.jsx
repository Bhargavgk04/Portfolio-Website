"use client";
import Link from "next/link";

const MenuOverlay = ({ links, isOpen, onClose }) => {
  const handleClick = (href) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-8">
        {links.map((link, index) => (
          <button
            key={index}
            onClick={() => handleClick(link.href)}
            className="text-white text-2xl font-medium hover:text-purple-500 transition-colors duration-300"
          >
            {link.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuOverlay;