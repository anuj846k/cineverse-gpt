import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { Api_options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingMovies =()=>{
    const dispatch = useDispatch();

    const nowPlaying = useSelector(
      (store) => store.movies.nowPlayingMovies
    );

    const getNowPlaying = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        Api_options
      );
      const json =await data.json();
      dispatch(addNowPlayingMovies(json.results))
    };
  
    useEffect(() => {
      !nowPlaying && getNowPlaying();
    },[])
}


export default useNowPlayingMovies;