import React, { useState } from "react";
import SearchIcon from "./search-icon";

const MobileSearchBar = ({ isSearchOpen, toggleSearch, onSearch }) => {
  // État pour conserver la valeur saisie dans le champ de recherche mobile
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="bg-primary px-3 md:py-3 border-b md:flex md:justify-between md:items-center">
      <div className="container mx-auto flex justify-between items-center max-w-screen-lg mx-auto h-16">
        {/* Icône de recherche à gauche du champ de saisie */}
        <SearchIcon
          // Lorsque l'icône est cliquée, elle effectue une recherche avec la valeur actuelle du champ de recherche
          onSearch={() => onSearch(searchValue)}
          // Indique que la barre de recherche est ouverte
          isSearchBarActive={true}
        />

        {/* Champ de saisie pour la recherche mobile */}
        <input
          type="text"
          placeholder="Que recherchez-vous ?"
          className="h-full w-full focus:outline-none text-lg px-5"
          // Valeur actuelle du champ de recherche
          value={searchValue}
          // Mise à jour de la valeur du champ de recherche lors de la saisie de l'utilisateur
          onChange={(e) => setSearchValue(e.target.value)}
        />

        {/* Bouton pour fermer la barre de recherche mobile */}
        <button
          id="closeBtn"
          className="md:hidden relative w-6 h-7"
          onClick={toggleSearch}
        >
          <div
            className={`absolute w-6 h-1 bg-black left-1/2 transform -translate-x-1/2 transition-transform duration-300 top-1/2 rotate-45`}
          />
          <div
            className={`absolute w-6 h-1 bg-black left-1/2 transform -translate-x-1/2 transition-transform duration-300 top-1/2 -rotate-45`}
          />
        </button>
      </div>
    </div>
  );
};

export default MobileSearchBar;
