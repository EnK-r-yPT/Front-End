import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div>
      <h1>Log In </h1>
      <Link to="/accountrecovery">
        <p className="text-green-400 text-sm">Forgotten passowrd?</p>
      </Link>
    </div>
  );
};

export default LogIn;
