import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import model from "../utils/Gemini";
import { Api_options } from "../utils/constant";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);
  const searchText = useRef(null);

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      Api_options
    );
    const json = await data.json();
    return json;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current?.value);

    const prompt =
      "Act as movie Recommendation systems and suggest some movies for the query" +
      searchText.current.value +
      ". only give me 5 name of movies,Commas separated like the example results given ahead nothing more than 5 movies remember this .Example Result :Herramandi,Under paris,Fighter,The last dance,Mirzapur";

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      const GeminiMovies = text.split(',');
      // console.log(GeminiMovies);

      const promiseArray = GeminiMovies.map((movie) => searchMovieTmdb(movie));

      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
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
