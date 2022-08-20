import React, { useEffect } from "react";
import Navbar from "./Navbar";

import { MdDarkMode } from "react-icons/md";
import { RiSunFill } from "react-icons/ri";

import { useDispatch, useSelector } from "react-redux";
import { setIsDarkMode } from "../store/reducers/ui.Reducer";

const Layout = (props) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const darkModeChangeHandler = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="w-11/12 md:w-10/12  lg:w-4/5 max-w-[1440px] m-24 mx-auto">
        <main className=" justify-center items-center">{props.children}</main>
      </div>
      <div className="button absolute bottom-8 bg-[color:var(--color-primary)] shadow-lg shadow-[color:var(--main-color)] w-16 h-10 rounded-r-full flex justify-end items-center">
        <button className="p-2" onClick={darkModeChangeHandler}>
          {isDarkMode && (
            <MdDarkMode className="text-3xl text-[color:var(--main-color)]" />
          )}
          {!isDarkMode && (
            <RiSunFill className="text-3xl text-[color:var(--main-color)] " />
          )}
        </button>
      </div>
    </React.Fragment>
  );
};

export default Layout;
