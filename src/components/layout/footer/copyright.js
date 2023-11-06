import React from "react";

const Copyright = () => {
  return (
    <p className="w-full text-center text-sm">
      &copy; {new Date().getFullYear()} Ma bibliothéque en ligne. Tous droits réservés.
    </p>
  );
};

export default Copyright;
