import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 border-2 border-[color:var(--color-primary)]  rounded-full font-semibold  ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
