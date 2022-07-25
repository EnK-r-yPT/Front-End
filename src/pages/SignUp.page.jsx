import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="my-32 flex w-2/3 max-w-4xl shadow-2xl rounded-2xl">
        <div className="w-3/5 rounded-l-2xl">
          <div className="text-left p-5">
            <span className="font-semibold text-black ">The </span>
            <span className="font-semibold text-[color:var(--color-primary)]">
              Enkrypt
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[color:var(--color-primary)] text-3xl font-bold mb-2">
              Create an account
            </h1>
            <div className="bg-[color:var(--color-primary)] w-12 h-1 rounded-xl"></div>
          </div>
          <div>
            <form action="" className="flex flex-col">
              <input type="text" placeholder="Enter User Id" />
              <input type="password" placeholder="Enter Password" />
            </form>
          </div>
        </div>

        <div className="w-2/5 bg-[color:var(--color-primary)]  flex justify-center items-center flex-col py-32 px-16 rounded-r-2xl">
          <h2 className="mb-2 text-3xl text-white font-bold">Hello, Friend!</h2>
          <div className="bg-white w-10 h-1 rounded-xl mb-2"></div>
          <p className="text-white mb-10">
            Fill up personal information and start journey with us.
          </p>
          <Link
            to="/login"
            className="text-white border-2 border-white rounded-full px-6 py-2 font-semibold hover:bg-white hover:text-[color:var(--color-primary)]"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
