import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlaying && (
      <div className="bg-black w-screen">
        <div className="mt-0 md:-mt-24 relative z-20">
          <MovieList title={"Now playing"} movies={movies.nowPlaying} />
          <MovieList title={"Top Rated"} movies={movies.ratedMovies} />
          <MovieList title={"Popular "} movies={movies.popularMovies} />
          <MovieList title={"Upcoming movies"} movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
