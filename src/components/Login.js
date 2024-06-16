import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
      </div>
      <form className="p-12  absolute w-3/12 my-36 mx-auto right-0 left-0 bg-black bg-opacity-80 ">
        <h1 className="font-bold text-3xl py-4  text-white ">
          {isSignInForm ? "Sign in" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full bg-black bg-opacity-45 text-white border rounded border-gray-400"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="p-4 my-3 w-full bg-black bg-opacity-45 text-white border rounded border-gray-400  "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full bg-black bg-opacity-45 text-white border rounded border-gray-400"
        />
        <button className="p-2 my-6 bg-red-600 rounded-md text-white w-full">
          {isSignInForm ? "Sign in" : "Signn up"}
        </button>
        <p
          className="text-white py-4 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Cineverse? Sign up Now"
            : "Already a member? Sign in Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
