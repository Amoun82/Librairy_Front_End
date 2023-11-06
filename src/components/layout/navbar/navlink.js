import React from "react";
import { Link } from "react-router-dom";

const Navlink = ({ imageSrc, altText, text, to, isOpen }) => {
  return (
    <li
      className={`${
        isOpen ? "opacity-100 mx-5" : "opacity-0 md:opacity-100"
      } transition-opacity duration-500 py-3`}
    >
      <Link to={to} className="flex items-center h-full w-full">
        {/* Image - only mobile */}
        <img
          src={imageSrc}
          alt={altText}
          className="h-16 w-16 md:hidden object-cover"
        />
        {/* Text nav */}
        <p className="flex-grow text-lg md:hover:text-accent-2 ps-5 md:ps-0">{text}</p>
        {/* Arrow - only mobile */}
        <div className="flex items-center md:hidden">
          <div className="h-3 w-0.5 border-l border-secondary-3 rotate-90 mr-[-8px]"></div>
          <div className="w-3 h-3 border-t border-r border-secondary-3 transform rotate-45"></div>
        </div>
      </Link>
    </li>
  );
};

export default Navlink;
