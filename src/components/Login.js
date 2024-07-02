import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG_CDN_URL, User_Avatar } from "../utils/constant";
const Login = () => {
  const dispatch = useDispatch();
  
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");


  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:User_Avatar
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "--" + errorCode);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "--" + errorCode);
        });
    }

    //sign up and sign in logic
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_IMG_CDN_URL}
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12  absolute w-3/12 my-36 mx-auto right-0 left-0 bg-black bg-opacity-80 "
      >
        <h1 className="font-bold text-3xl py-4  text-white ">
          {isSignInForm ? "Sign in" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full bg-black bg-opacity-45 text-white border rounded border-gray-400"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 my-3 w-full bg-black bg-opacity-45 text-white border rounded border-gray-400  "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full bg-black bg-opacity-45 text-white border rounded border-gray-400"
        />

        <p className="text-red-500 font-semibold ">{errorMessage}</p>

        <button
          className="p-2 my-6 bg-[#e84b24] rounded-md text-white w-full"
          onClick={handleButtonClick}
        >
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
