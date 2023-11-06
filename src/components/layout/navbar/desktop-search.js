import React, { useState } from "react";
import SearchIcon from "./search-icon";

const DesktopSearch = ({ onSearch }) => {
  // État pour garder une trace de la valeur saisie dans le champ de recherche
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex-grow mx-4 hidden md:flex items-center mx-32">
      <div className="relative w-full">
        {/* Champ de saisie pour la recherche */}
        <input
          type="text"
          placeholder="Que recherchez-vous ?"
          className="w-full p-2 ps-5 focus:outline-none focus:ring focus:ring-accent-1 border rounded-full"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {/* Icône de recherche à côté du champ de saisie */}
        <div className="absolute top-2 right-3">
          <SearchIcon
            // Cache l'icône sur mobile
            hideOnMobile={true}
            // Appelle la fonction onSearch avec la valeur actuelle du champ lorsqu'on clique sur l'icône
            onSearch={() => onSearch(searchValue)}
            // Indique que la barre de recherche est active
            isSearchBarActive={true}
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopSearch;
