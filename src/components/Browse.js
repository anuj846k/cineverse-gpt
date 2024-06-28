import  useNowPlayinMovies from '../Hooks/UseNowPlayingMovies'
import usePopularMovies from '../Hooks/UsePopularMovies';
import Header from "./Header";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayinMovies();
  usePopularMovies();

  
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
