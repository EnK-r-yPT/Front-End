import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [dropMenu, setDropMenu] = useState(false);

  const dropMenuHandler = () => {
    setDropMenu((dropMenu) => !dropMenu);
  };

  return (
    <React.Fragment>
      <nav className=" p-4 md:p-3 bg-white  shadow-lg shadow-gray-300 border-2 fixed top-0 left-0 w-full z-50">
        <div className="w-11/12 md:w-[85%]  lg:w-4/5 mx-auto max-w-[1440px] flex justify-between items-center">
          <div className="logo">
            <h1 className="font-bold text-2xl">
              <span className="text-black">The</span>{" "}
              <span className="text-[color:var(--color-primary)]">Enkrypt</span>
            </h1>
          </div>

          {/* Vissble When Screen Is Greater than 768 pixels */}
          <div className="hidden md:flex items-center gap-6 lg:gap-12">
            <div className="">
              <ul className="flex gap-6 lg:gap-8 font-semibold text-md">
                <Link
                  to="/"
                  className="hover:text-[color:var(--color-primary)]"
                >
                  Home
                </Link>
                <Link
                  to="/aboutus"
                  className="hover:text-[color:var(--color-primary)]"
                >
                  About Us
                </Link>
                <Link
                  to="/contactus"
                  className="hover:text-[color:var(--color-primary)]"
                >
                  Contact Us
                </Link>
              </ul>
            </div>
            <div className="flex gap-4">
              <Link
                className="px-4 py-2 border-2 border-[color:var(--color-primary)] bg-white text-[color:var(--color-primary)] rounded-full font-semibold hover:bg-[color:var(--color-primary)] hover:text-white"
                to="/login"
              >
                Log In
              </Link>
              <Link
                className="px-4 py-2 border-2 border-[color:var(--color-primary)] bg-[color:var(--color-primary)] text-white rounded-full font-semibold hover:bg-white hover:text-[color:var(--color-primary)]"
                to="/signup"
              >
                Sign Up
              </Link>
            </div>
          </div>
          {/* Burger Menu For Smaller Screen Sizes */}
          <div className="flex items-center justify-center md:hidden">
            <button className="" onClick={dropMenuHandler}>
              {!dropMenu && <FaBars className="text-2xl" />}
              {dropMenu && <ImCross className="text-2xl" />}
            </button>
          </div>
        </div>
      </nav>
      {dropMenu && (
        <div className="flex flex-col items-center justify-center gap-8 md:hidden absolute z-10 top-12 left-0 bg-white w-full py-8 shadow-lg shadow-gray-200">
          <div className="">
            <ul className="flex flex-col font-semibold text-lg gap-4">
              <Link
                to="/"
                className="hover:text-[color:var(--color-primary)]"
                onClick={dropMenuHandler}
              >
                Home
              </Link>
              <Link
                to="/aboutus"
                className="hover:text-[color:var(--color-primary)]"
                onClick={dropMenuHandler}
              >
                About Us
              </Link>
              <Link
                to="/contactus"
                className="hover:text-[color:var(--color-primary)]"
                onClick={dropMenuHandler}
              >
                Contact Us
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-4 ">
            <Link
              to="/login"
              className="px-32 py-2 border-2 border-[color:var(--color-primary)] bg-white text-[color:var(--color-primary)] rounded-full font-semibold hover:bg-[color:var(--color-primary)] hover:text-white"
              onClick={dropMenuHandler}
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="px-32 py-2 border-2 border-[color:var(--color-primary)] bg-[color:var(--color-primary)] text-white rounded-full font-semibold hover:bg-white hover:text-[color:var(--color-primary)]"
              onClick={dropMenuHandler}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Navbar;
