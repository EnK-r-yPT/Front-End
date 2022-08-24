import React from "react";
import { useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";

const Home = () => {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);
  return (
    <div className="mt-28 mx-auto">
      <div className="header flex flex-col items-center justify-center">
        <h1 className="text-[color:var(--color-primary)] text-4xl font-semibold mb-2 text-center">
          Enkrypt
        </h1>
        <div className="h-[0.30rem] w-12 bg-[color:var(--color-primary)] rounded-full"></div>
        <p
          className={twMerge(
            "mt-4 text-lg",
            isDarkMode ? "text-gray-300" : "text-gray-400"
          )}
        >
          Graphical Password Authentication
        </p>
      </div>
    </div>
  );
};

export default Home;
