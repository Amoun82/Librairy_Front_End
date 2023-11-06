import React from "react";
import { FiSearch } from "react-icons/fi";
import { IconContext } from "react-icons";

const SearchIcon = ({
  toggleSearch, // Fonction pour activer/désactiver la barre de recherche
  onSearch, // Fonction pour effectuer la recherche
  isSearchBarActive, // Indique si la barre de recherche est active sur mobile
  hideOnMobile = false, // Si vrai, l'icône sera masquée sur mobile
}) => (
  <button
    // Si "hideOnMobile" est vrai, l'icône sera masquée sur mobile et affichée sur les écrans plus grands. Sinon, elle sera affichée uniquement sur mobile.
    className={hideOnMobile ? "hidden md:inline-block" : "md:hidden"}
    onClick={() => {
      // Si la barre de recherche est ouverte, effectue une recherche. Sinon, active la barre de recherche.
      if (isSearchBarActive) {
        onSearch();
      } else {
        toggleSearch();
      }
    }}
  >
    <IconContext.Provider value={{ size: "25px" }}>
      <FiSearch />
    </IconContext.Provider>
  </button>
);

export default SearchIcon;
