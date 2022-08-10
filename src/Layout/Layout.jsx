import React from "react";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="w-11/12 md:w-10/12  lg:w-4/5 max-w-[1440px] m-24 mx-auto">
        <main className=" justify-center items-center">{props.children}</main>
      </div>
    </React.Fragment>
  );
};

export default Layout;