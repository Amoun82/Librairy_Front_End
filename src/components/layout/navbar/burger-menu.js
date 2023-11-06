import React from "react";

const BurgerMenu = ({ isOpen, toggleOpen }) => (
  <button
    id="burgerBtn"
    className="md:hidden relative w-6 h-7"
    // Fonction dans navbar.js permettant l'ouverture du menu
    onClick={toggleOpen}
  >
    {/* Style du menu burger qui se transforme en croix */}
    <div
      className={`absolute w-6 h-1 bg-black left-1/2 transform -translate-x-1/2 transition-transform duration-300 ${
        isOpen ? "top-1/2 rotate-45" : "top-1"
      }`}
    />
    <div
      className={`absolute w-6 h-1 bg-black left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
        isOpen ? "opacity-0" : "top-3"
      }`}
    />
    <div
      className={`absolute w-6 h-1 bg-black left-1/2 transform -translate-x-1/2 transition-transform duration-300 ${
        isOpen ? "top-1/2 -rotate-45" : "top-5"
      }`}
    />
  </button>
);

export default BurgerMenu;
