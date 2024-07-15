import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ movieId, className }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  //fetch trailer video and updating the redux store with trailer video data

  useMovieTrailer(movieId);

  return (
    <div className={className}>
      <iframe
        className={`w-full aspect-video ${className}`}
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&controls=1&playlist=${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
