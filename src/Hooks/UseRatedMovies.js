import { useEffect } from "react";
import { addRatedMovies } from "../utils/movieSlice";
import { Api_options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";

const useRatedMovies =()=>{ 
    const dispatch = useDispatch();

    const ratedMovies = useSelector((store) => store.movies.ratedMovies);


    const getRatedMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        Api_options
      );
      const json =await data.json();
      dispatch(addRatedMovies(json.results))
    };
  
    useEffect(() => {
      !ratedMovies &&  getRatedMovies();
    },[])
};


export default useRatedMovies; 