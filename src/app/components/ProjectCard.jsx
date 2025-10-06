import React from "react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, onClick }) => {
  return (
    <div className="group will-change-transform">
      <button
        type="button"
        onClick={onClick}
        className="h-52 md:h-64 w-full rounded-xl relative text-left transition-transform duration-300 ease-out transform-gpu group-hover:scale-[1.03] group-hover:z-[2] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
        style={{ background: `url(${imgUrl}) center/cover no-repeat` }}
      />
      <div className="text-white rounded-xl mt-3 bg-[#181818] border border-[#2a2a2a] p-4 transition-transform duration-300 ease-out transform-gpu group-hover:scale-[1.01] group-hover:shadow-[0_12px_36px_rgba(0,0,0,0.35)]">
        <h5 className="text-lg md:text-xl font-semibold mb-2 truncate" title={title}>{title}</h5>
        <p className="text-[#ADB7BE] text-sm md:text-base h-12 overflow-hidden">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
