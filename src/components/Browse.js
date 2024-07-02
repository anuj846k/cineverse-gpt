import { useSelector } from "react-redux";
import useNowPlayinMovies from "../Hooks/UseNowPlayingMovies";
import usePopularMovies from "../Hooks/UsePopularMovies";
import useRatedMovies from "../Hooks/UseRatedMovies";
import useUpcomingMovies from "../Hooks/UseUpcomingMovies";
import GptSearch from "./GptSearchPage";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayinMovies();
  usePopularMovies();
  useRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <div className="relative overflow-x-hidden">
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
