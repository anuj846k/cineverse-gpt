import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMG_CDN_URL } from "../utils/constant";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="object-cover md:h-full h-screen w-full" src={BG_IMG_CDN_URL} alt="" />
      </div>
      <div className="md:p-0">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearchPage;
