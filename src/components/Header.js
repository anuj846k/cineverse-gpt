import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";
import { TbLogout2 } from "react-icons/tb";


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
    <div className="absolute w-full bg-gradient-to-b from-black z-10 flex flex-col md:flex-row md:px-8 md:py-2 px-2 py-0 items-center justify-between">
      <img
        className="md:w-80 w-44 py-0 mb-2 md:mb-0 mx-auto md:mx-0"
        src="./download.png"
        alt="Logo"
      />
      {user && (
        <div className="flex items-center flex-row text-xs bg-blue-950 rounded-full md:rounded-full px-12  py-1  md:space-x-4 space-x-1 space-y-0 -mt-10 md:-mt-0 md:mb-10">
          {showGptSearch && (
            <select
              className="py-2 px-3 rounded bg-gray-900 text-white border-none -ml-9 md:ml-0"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifers} value={lang.identifers}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearch}
            className="py-2 px-3 rounded-md bg-orange-200 font-bold "
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>

          
          <img
            className="md:w-16 md:h-16 w-12 h-12 rounded-full"
            style={{ marginLeft: "30px" }}
            src={user?.photoURL}
            alt="User profile"
          />
          <button
            onClick={handleSignOut}
            className="bg-orange-500 font-bold text-white p-2 rounded-md "
          >
            <TbLogout2 />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
