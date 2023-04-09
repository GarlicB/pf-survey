import React, { useState } from "react";
import SignUp from "../components/Form/SignUp";
import SignIn from "../components/Form/SignIn";
import { FaTimes } from "react-icons/fa";

function Sign({ close }) {
  const [showSignUp, setShowSign] = useState(false);

  const toggleSignUp = () => {
    setShowSign(!showSignUp);
  };

  const handleClose = (event) => {
    event.preventDefault();
    close();
  };
  return (
    <div className="modal fixed z-50 top-0 left-0 w-full h-full bg-opacity-50 bg-gray-700 flex items-center justify-center">
      <div
        className={`
          ${
            showSignUp ? "bg-indigo-500" : "bg-white"
          } relative rounded-lg w-full max-w-md mx-auto my-16`}
      >
        <button
          className="absolute top-0 right-0 m-4 focus:outline-none"
          onClick={handleClose}
        >
          <FaTimes
            className={`${
              showSignUp ? "text-white" : "text-gray-500"
            } text-2xl`}
          />
        </button>
        {showSignUp ? <SignUp /> : <SignIn />}
        <div className="m-4 text-center">
          <span className="text-sm mr-5">
            {showSignUp
              ? "I already have an account!"
              : "Do not have an account?"}
          </span>
          <span
            className={` ${
              showSignUp ? "text-white" : "text-indigo-500"
            } text-sm font-medium cursor-pointer`}
            onClick={toggleSignUp}
          >
            {showSignUp ? "Sign In" : "Sign Up"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sign;
