import React, { useState, useEffect } from "react";
import Navlink from "./navlink";

const NavigationLinks = ({ isOpen }) => {
  const [isDotVisible, setIsDotVisible] = useState(true);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  //! ********************************** useEffect **********************************
  // Point clignotant en mode REC - only desktop
  useEffect(() => {
    const interval = setInterval(() => {
      setIsDotVisible((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Disparition + Apparition de la sous nav - only desktop
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setIsScrollingDown(currentScrollPosition > lastScrollPosition);
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);

  // Liste des liens
  const linksData = [
    {
      imageSrc: "../assets/img/pap.jpg",
      altText: "Ajouter les livres a votre bibliothéque",
      text: "Livres",
      to: "/Books",
    },
  ];

  return (
    <div
      className={`${
        isScrollingDown ? "hidden" : "block"
      } pt-4 md:p-1 fixed h-full w-full border-b bg-cyan-500 ${
        isOpen
          ? "top-0 mt-16 border-t transform translate-x-0 z-10"
          : "md:static md:transform-none -translate-x-full"
      } transition-transform duration-700 ease-in-out`}
    >
      <ul className="pb-16 h-full w-full flex flex-col md:flex-row md:justify-between md:pb-0 md:max-w-screen-md md:mx-auto md:space-x-4 md:text-center">
        {linksData.map((link) => (
          <Navlink key={link.text} {...link} isOpen={isOpen} />
        ))}

        <li
          className={`md:h-auto transition-opacity duration-500 py-3 ${
            isOpen ? "opacity-100 mx-5" : "opacity-0 md:opacity-100"
          }`}
        >
        </li>
      </ul>
    </div>
  );
};

export default NavigationLinks;
