import React from "react";
import { Link } from "react-router-dom";
import livre from './../../assets/img/livre.png'

const Logo = ({ mobileWidth, desktopWidth }) => {
  // Utilisez pour changer la Class (style) de l'image
  const myClassName = `${mobileWidth} ${"md:" + desktopWidth} mx-auto`;

  return (
    <Link to="/home" className="">
      <img
        src={livre}
        alt="Biblio en ligne"
        className={myClassName}
      />
    </Link>
  );
};

export default Logo;
