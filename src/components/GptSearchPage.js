import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_IMG_CDN_URL } from '../utils/constant'

const GptSearchPage = () => {
  return (
    <div>
       <div className="absolute -z-10">
        <img
          src={BG_IMG_CDN_URL}
          alt=""
        />
      </div>

      <GptSearchBar/>
      <GptMovieSuggestion/>
      
    </div>
  )
}

export default GptSearchPage
