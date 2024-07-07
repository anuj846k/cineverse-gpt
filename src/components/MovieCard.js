import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="movie-card w-36 md:w-52 flex-shrink-0 transition-transform duration-300 ease-in-out cursor-pointer">
      <div className="movie-card-inner h-auto w-full object-cover rounded-lg shadow-lg">
        <img
          src={IMG_CDN_URL + posterPath}
          alt="Movie Poster"
          className="h-auto w-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default MovieCard;