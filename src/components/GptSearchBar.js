import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import openai from "../utils/Openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(searchText.current?.value);

    const gptQuery =
      "Act as movie Recommendation systems and suggest some movies for the query" +
      searchText.current.value +
      ". only give me 5 name of movies,Commas separated like the example results given ahead .Example Result :Herramandi,Under paris,Fighter,The last dance,Mirzapur";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
  };

  return (
    <div className="pt-[10%] flex justify-center items-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black p-4 rounded-lg shadow-lg flex items-center justify-between w-1/2"
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 rounded-full text-black w-full mr-4"
          placeholder={lang[langKey].gptPlaceholder}
          style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
        />
        <button
          onClick={handleGptSearchClick}
          className="bg-orange-500 hover:bg-orange-600 py-3 rounded-md text-white px-4 transition duration-200 ease-in-out"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
