import React from "react";
import spinner from "../../assets/spinner.svg";

const LoadingSpinner = ({ containerClass }) => {
  return (
    <div className={`flex items-center justify-center ${containerClass}`}>
      <img src={spinner} className="w-12" alt="" />
    </div>
  );
};

export default LoadingSpinner;
