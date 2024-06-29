import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying:null,
    trailerVideo:null,
    popularMovies:null,
    ratedMovies:null,
    upcomingMovies:null,
  },
  reducers:{
    addNowPlayingMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addTrailerVideo:(state,action)=>{
      state.trailerVideo=action.payload;
    },
    addPopularMovies:(state,action)=>{
      state.popularMovies=action.payload;
    },
    addRatedMovies:(state,action)=>{
      state.ratedMovies=action.payload;
    },
    addUpcomingMovies:(state,action)=>{
      state.upcomingMovies=action.payload;
    },
  }
});

export const {addTrailerVideo, addNowPlayingMovies,addPopularMovies,addRatedMovies,addUpcomingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
