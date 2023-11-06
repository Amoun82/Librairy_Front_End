import React from "react";

const Button = ({
  onClick,
  className,
  children,
  variant = "default",
  ...props
}) => {
  let baseStyle =
    "font-bold px-12 py-2 my-4 rounded inline-block transition-all duration-200 ease-in-out";

  let variantStyles = {
    default: "text-primary bg-accent-3 hover:bg-accent-2",
    secondary:
      "text-primary border border-white hover:bg-primary hover:text-secondary-1",
    third: "text border border-black hover:bg-primary",
  };

  let combinedStyles = `${baseStyle} ${variantStyles[variant]} ${className}`;

  return (
    <button onClick={onClick} className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
