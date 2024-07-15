import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import VideoBackground from "./VideoBackground";
import { MdOutlineStar } from "react-icons/md";

const MoviePage = () => {
  const { id } = useParams();
  const movies = useSelector((store) => store.movies);
  console.log(movies);

  const allMovies = [
    ...(movies.nowPlaying || []),
    ...(movies.ratedMovies || []),
    ...(movies.popularMovies || []),
    ...(movies.upcomingMovies || []),
  ];
  const movie = allMovies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div className="text-white">Movie not found</div>;
  }

  return (
    <div className="flex justify-between h-full pl-10 pr-12 pt-3 bg-black text-white gap-10 ">
      <div className="w-[30%]">
        <img
          src={IMG_CDN_URL + movie.poster_path}
          alt={movie.title}
          className="h-auto w-full object-cover rounded-lg shadow-lg"
        />
        <div className="mt-4 text-4xl ">
          <div className="flex mb-6">
          <MdOutlineStar className="text-yellow-400" size={30} />
          <MdOutlineStar className="text-yellow-400" size={30} />
          <MdOutlineStar className="text-yellow-400" size={30} />
          <MdOutlineStar className="text-yellow-400" size={30} />
          <MdOutlineStar  size={30} />
          </div>
          <h1 className="">Reviews</h1>
          <div className="">
          {movie.vote_average} / 10
          </div>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-4xl font-bold bg-blue-950 w-1/2 p-2 pl-5  rounded-full">{movie.title}</h1>
        <p className="mt-4 ">{movie.overview}</p>
        <div className="border border-white p-4 bg-slate-800 shadow-lg mb-10 rounded-3xl">
          <VideoBackground movieId={id} className="w-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
