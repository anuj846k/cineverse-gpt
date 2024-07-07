import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGAUGES } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // User is signed in.
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };



  return (
    <div className="absolute w-full md:px-8 md:py-2 px-2 py-0 bg-gradient-to-b from-black z-10 flex md:flex-row justify-between flex-col sm: ">
      <img className="w-80 py-0 -mt-2 md:mb-2 mx-auto md:mx-0 " src="./download.png" alt="Logo" />
      {user && (
        <div className="flex items-center mb-10 -mt-7 flex-row text-xs ">
          {showGptSearch && (
            <select
              className="py-3 px-2 rounded border-none bg-gray-900 text-white m-2"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGAUGES.map((lang) => (
                <option key={lang.identifers} value={lang.identifers}>
                  {lang.name}
                </option>
              ))}
              
            </select>
          )}
          <button
            onClick={handleGptSearch}
            className="p-2 rounded-lg bg-orange-200 font-bold mx-4 m-2"
          >
           {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="w-16 h-16 mr-3 rounded-full"
            src={user?.photoURL}
            alt=""
          />

          <button
            onClick={handleSignOut}
            className="bg-orange-500 font-bold text-white md:p-2 rounded-full md:rounded-md border-1 border-black p-1"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
