import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div className="w-full md:w-1/4 mb-7 md:mb-0">
      <h2 className="text-xl mb-2">Besoin d'aide ?</h2>
      <Link to="#" className="block mb-2">
        Contact
      </Link>
      <Link to="#" className="block">
        F.A.Q
      </Link>
    </div>
  );
};

export default Help;
