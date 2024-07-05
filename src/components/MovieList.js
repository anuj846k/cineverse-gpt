import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const MovieList = ({ title, movies }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <div className="p-6">
      <h1 className="font-semibold text-3xl mb-5 py-4 text-yellow-500">
        {title}
      </h1>
      <div className="relative flex items-center">
        <button 
          onClick={scrollLeft} 
          className="absolute left-12"
        >
          <IoIosArrowDropleftCircle size={50} className="text-gray-300 hover:text-yellow-500" />
        </button>
        <div
          className="flex overflow-x-scroll no-scrollbar p-2 ml-20 mr-20 w-[90%]"
          ref={scrollContainerRef}
        >
          <div className="flex space-x-4">
            {Array.isArray(movies) && movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} /> 
            ))}
          </div>
        </div>
        <button 
          onClick={scrollRight} 
          className="absolute right-12 z-10"
        >
          <IoIosArrowDroprightCircle size={50} className="text-gray-300 hover:text-yellow-500" />
        </button>
      </div>
    </div>
  );
};

export default MovieList;
