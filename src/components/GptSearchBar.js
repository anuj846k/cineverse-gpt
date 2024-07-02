import { useSelector } from "react-redux";
import lang from "../utils/languageConstant"
const GptSearchBar = () => {
  const langKey=useSelector((store)=>store.config.language);
  console.log("langKey:", langKey);


  return (
    <div className="pt-[10%] flex justify-center items-center">
      <form
        action=""
        className="bg-black p-4 rounded-lg shadow-lg flex items-center justify-between w-1/2"
      >
        <input
          type="text"
          className="p-4 rounded-full text-black w-full mr-4"
          placeholder={lang[langKey].gptPlaceholder}
          style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
        />
        <button className="bg-orange-500 hover:bg-orange-600 py-3 rounded-md text-white px-4 transition duration-200 ease-in-out">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
