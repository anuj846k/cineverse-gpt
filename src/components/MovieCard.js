import React from "react";
import { IMG_CDN_URL } from "../utils/constant";


const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
    <div className="w-52 pr-4">
      <img src={IMG_CDN_URL + posterPath} alt="MovieCardImage" />
    </div>
  );
};

export default MovieCard;
