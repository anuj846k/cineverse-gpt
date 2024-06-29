import  useNowPlayinMovies from '../Hooks/UseNowPlayingMovies'
import usePopularMovies from '../Hooks/UsePopularMovies';
import useRatedMovies from '../Hooks/UseRatedMovies';
import useUpcomingMovies from '../Hooks/UseUpcomingMovies';
import Header from "./Header";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayinMovies();
  usePopularMovies();
  useRatedMovies();
  useUpcomingMovies();

  
  return (
    <div className='relative overflow-x-hidden'>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
