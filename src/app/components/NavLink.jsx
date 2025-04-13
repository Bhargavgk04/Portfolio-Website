"use client";
import Link from "next/link";

const NavLink = ({ href, title }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white relative group"
    >
      {title}
      <span className="h-[1px] inline-block bg-gradient-to-r from-orange-500 to-orange-800 absolute left-0 -bottom-0.5 w-0 group-hover:w-full transition-[width] duration-300">
        &nbsp;
      </span>
    </Link>
  );
};

export default NavLink;