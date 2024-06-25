import  useNowPlayinMovies from '../Hooks/UseNowPlayingMovies'
import Header from "./Header";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayinMovies();

  
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
