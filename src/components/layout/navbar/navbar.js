import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./burger-menu";
import NavigationLinks from "./navigation-links";
import DesktopSearch from "./desktop-search";
import Logo from "../../logo/logo";
import SearchIcon from "./search-icon";
import MobileSearchBar from "./mobile-search-bar";
import Auth from "../../../contexts/Auth";

const Navbar = () => {
  const { isAuthenticated } = useContext(Auth);
  // État pour savoir si le menu burger est ouvert ou non
  const [isOpen, setIsOpen] = useState(false);
  // État pour savoir si le champ de recherche mobile est ouvert ou non
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  //! ********************************** useEffect **********************************
  // Écouteur d'événement pour fermer le menu et le champ de recherche si l'écran est > 992px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsOpen(false);
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Supprimer l'écouteur d'événement lors du nettoyage
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Si le menu est ouvert, interdit le scroll vertical
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Réinitialiser le style lors du nettoyage
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  //! ********************************** functions **********************************
  // Ferme le menu burger si la barre de recherche est ouverte (assignée à l'icon loupe + barre de recherche mobile)
  const toggleSearch = () => {
    if (isOpen) {
      setIsOpen(false);
    }
    setIsSearchOpen((prevState) => !prevState);
  };

  // Ferme la barre de recherche si le menu burger est ouvert (assignée au menu burger)
  const toggleMenu = () => {
    if (isSearchOpen) {
      setIsSearchOpen(false);
    }
    setIsOpen((prevState) => !prevState);
  };

  // Fonction pour gérer la recherche (assignée à la barre de recherche mobile et desktop)
  const search = (searchValue) => {
    console.log("Searching for:", searchValue);
  };

  //! ********************************** return **********************************
  return (
    <header>
      <nav className="fixed bg-cyan-500 top-0 w-full z-50">
        {/* Affiche le champ de recherche mobile si isSearchOpen est true */}
        {isSearchOpen ? (
          <MobileSearchBar
            isSearchOpen={isSearchOpen}
            toggleSearch={toggleSearch}
            onSearch={search}
          />
        ) : (
          <div className="bg-primary px-3 md:py-3 border-b md:flex md:justify-between md:items-center">
            <div className="container mx-auto flex justify-between items-center max-w-screen-lg mx-auto h-16">
              <div className="flex space-x-4">
                {/* Composant pour le menu burger */}
                <BurgerMenu
                  isOpen={isOpen}
                  toggleOpen={toggleMenu}
                />
                {/* Icône de recherche pour mobile */}
                <SearchIcon
                  toggleSearch={toggleSearch}
                  isSearchBarActive={false}
                />
              </div>
              {/* Logo */}

              <div className="flex space-x-4 items-center">
                <Logo mobileWidth="w-14" desktopWidth="w-16" />
                <Link to='/home' className="mx-1">
                  <span className="hidden md:inline-block font-dancing text-3xl">
                    Ma bibliothéque en ligne
                  </span>
                </Link>
              </div>
              {/* Champ de recherche pour desktop */}
              <DesktopSearch onSearch={search} />
            </div>
            <div className="flex">

              {(!isAuthenticated &&
                <Link to='/register' className="mx-1">
                  inscription
                </Link>
              )}
              {(!isAuthenticated &&
                <Link to='/login' className="mx-1">
                  connexion
                </Link>
              )}
              {(isAuthenticated &&
                <Link to='/profil' className="mx-1">
                  Mon compte
                </Link>
              )}
              {(isAuthenticated &&
                <Link to='/logout' className="mx-1">
                  deconnexion
                </Link>
              )}
            </div>
          </div>
        )}
        {/* Liens de navigation */}
        <NavigationLinks isOpen={isOpen} />
      </nav>
    </header>
  );
};

export default Navbar;
