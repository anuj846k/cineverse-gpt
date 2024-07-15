import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: -230,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: 230,
      behavior: "smooth",
    });
  };

  return (
    <div className="p-6">
      <h1 className="font-semibold text-xl md:text-3xl mb-5 py-4 text-yellow-500 md:text-left">
        {title}
      </h1>
      <div className="relative flex items-center">
        <button
          onClick={scrollLeft}
          className="absolute left-2 md:left-12 z-10"
        >
          <IoIosArrowDropleftCircle
            size={50}
            className="hidden md:block  text-gray-300 hover:text-yellow-500"
          />
        </button>
        <div
          className="flex overflow-x-scroll no-scrollbar p-2 w-full"
          ref={scrollContainerRef}
        >
          <div className="flex space-x-4">
            {Array.isArray(movies) &&
              movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} posterPath={movie.poster_path} />
              ))}
          </div>
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-2 md:right-12 z-10"
        >
          <IoIosArrowDroprightCircle
            size={50}
            className="hidden md:block  text-gray-300 hover:text-yellow-500"
          />
        </button>
      </div>
    </div>
  );
};

export default MovieList;
