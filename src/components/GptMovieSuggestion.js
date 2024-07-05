import React from "react";
import { useSelector } from "react-redux";

import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieName, movieResults } = useSelector((store) => store.gpt);
  if (!movieName) return null;

  return (
    <div className="bg-gray-900 p-6 m-4 rounded-lg shadow-lg ring-1 ">
     <h2 className="text-5xl font-bold text-blue-500 mb-4 border-b-4 border-blue-500 inline-block px-4 py-2 mx-auto max-w-max">
        Movie Suggestions
      </h2>
      <div>
        {movieName.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]?.results}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
