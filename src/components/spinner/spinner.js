import React from "react";

const Spinner = ({ className }) => {
  let baseStyle =
    "flex justify-center items-center mx-auto";
    let combinedStyles = `${baseStyle} ${className}`;
  return (
    <div className={combinedStyles}>
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-accent-3"></div>
    </div>
  );
};

export default Spinner;
