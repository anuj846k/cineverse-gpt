import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";
import { Api_options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";

const useUpcomingMovies =()=>{ 
    const dispatch = useDispatch();

    const upcomingMovies = useSelector((store) => store.movies.ratedMovies);


    const getUpcomingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        Api_options
      );
      const json =await data.json();
      dispatch(addUpcomingMovies(json.results))
    };
  
    useEffect(() => {
      !upcomingMovies &&  getUpcomingMovies();
    },[])
};


export default useUpcomingMovies; 