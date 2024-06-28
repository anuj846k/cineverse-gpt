import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
 
  
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlaying  && (
      <div className="bg-black w-screen ">
        <div className="-mt-32 relative z-20">
          <MovieList title={"Now playing"} movies={movies.nowPlaying} />
          <MovieList title={"Trending"} movies={movies.nowPlaying} />
          <MovieList title={"Popular "} movies={movies.popularMovies} />
          <MovieList title={"Upcoming movies"} movies={movies.nowPlaying} />
          <MovieList title={"Horror movies"} movies={movies.nowPlaying} />
          <MovieList title={"Now playing"} movies={movies.nowPlaying} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
