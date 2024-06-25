import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { Api_options } from "../utils/constant";
import { useDispatch } from "react-redux";

const useNowPlayingMovies =()=>{
    const dispatch = useDispatch();
    const getNowPlaying = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        Api_options
      );
      const json =await data.json();
      console.log(json.results);
      dispatch(addNowPlayingMovies(json.results))
    };
  
    useEffect(() => {
      getNowPlaying();
    },[])
}


export default useNowPlayingMovies;