import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Api_options, IMG_CDN_URL } from "../utils/constant";
import { useParams, Link } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { addMovieInfo, addTrailer, deleteMovieInfo } from "../utils/movieInfoSlice";

const MoviePage = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const id = movieId;
  const movieData = useSelector((store) => store.movieInfo.movieData);
  const trailer = useSelector((store) => store.movieInfo.trailer);

  useEffect(() => {
    const fetchTrailer = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        Api_options
      );
      const json = await data.json();
      console.log(json);
      const trailerVideos = json.results.filter(
        (trailer) => trailer.type === 'Trailer'
      );
      dispatch(addTrailer(trailerVideos[0] || json.results[0]));
    };

    const fetchData = async () => {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/'+ movieId  +'?language=en-US',
        Api_options
      );
      const json = await data.json();
      dispatch(addMovieInfo(json));
    };

    fetchTrailer();
    fetchData();

    return () => {
      dispatch(deleteMovieInfo());
    };
  }, []);

  console.log(movieData);

  if (movieData) {
    const {
      original_title,
      budget,
      revenue,
      runtime,
      vote_average,
      vote_count,
      overview,
      genres,
      status,
      poster_path,
      release_date,
    } = movieData;

  return (
    movieData && (<div className="flex flex-col md:flex-row justify-between h-full p-6 bg-gray-900 text-white gap-6">
      <div className="md:w-[30%] w-full">
        <img
          src={IMG_CDN_URL + poster_path}
          alt={original_title}
          className="h-auto w-full object-cover rounded-lg shadow-lg"
        />
        <div className="mt-6">
          <div className="flex">
            <h2 className="text-4xl font-semibold pr-2">Reviews</h2>
            <MdOutlineStar size={30} className="text-yellow-400" />
          </div>
          <div className="text-xl font-bold">{vote_average} / 10</div>
        </div>
      </div>
      <div className="md:w-[70%] w-full">
        <div className="flex items-center justify-between bg-blue-900 p-2 md:p-4 rounded-full mb-6">
          <h1 className="md:text-4xl p-3 font-bold text-yellow-400 md:p-3 bg-black rounded-full">
            {original_title}
          </h1>
          <Link
            className="bg-orange-400 rounded-full md:p-2 p-1 text-black font-mono hover:bg-orange-500 transition duration-300"
            to={"/browse"}
          >
            <IoMdHome size={40} />
          </Link>
        </div>
        <div className="border border-gray-700 p-4 bg-gray-800 shadow-lg rounded-3xl mb-6">
          {trailer && (
            <iframe
              className="w-full rounded-2xl aspect-video mx-auto "
              src={'https://www.youtube.com/embed/' + trailer.key}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div className="bg-blue-900 p-4 rounded-md">
          <h2 className="p-4 text-3xl rounded-md">Description</h2>
          <p className="mt-4 p-4 bg-gray-800 rounded-lg">{overview}</p>
        </div>
      </div>
    </div>
  ));
};
}

export default MoviePage;
