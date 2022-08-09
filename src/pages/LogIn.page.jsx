import React from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/UI/LoadingSpinner.component";

const LogIn = () => {
  return (
    <div>
      <h1>Log In </h1>
      <Link to="/accountrecovery">
        <p className="text-green-400 text-sm">Forgotten passowrd?</p>
      </Link>
      <LoadingSpinner></LoadingSpinner>
    </div>
  );
};

export default LogIn;
