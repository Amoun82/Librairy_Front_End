import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ButtonLink = ({
  link,
  className,
  children,
  variant = "default",
  ...props
}) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate(link);
    window.scrollTo(0, 0);
  };

  let baseStyle =
    "font-bold px-12 py-2 my-4 rounded inline-block transition-all duration-200 ease-in-out";

  let variantStyles = {
    default: "text-primary bg-accent-3 hover:bg-accent-2",
    secondary:
      "text-primary border border-white hover:bg-primary hover:text-secondary-1",
      third:
      "text border border-black hover:bg-primary",
  };

  let combinedStyles = `${baseStyle} ${variantStyles[variant]} ${className}`;

  return (
    <Link to={link} onClick={handleClick} className={combinedStyles} {...props}>
      {children}
    </Link>
  );
};

export default ButtonLink;
