export const User_Avatar =
  "https://avatars.githubusercontent.com/u/136173245?v=4";
//change it later

export const Api_options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
  },
};



export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_IMG_CDN_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const SUPPORTED_LANGAUGES = [
  { identifers: "en", name: "English" },
  { identifers: "hn", name: "Hindi" },
  { identifers: "sp", name: "Spanish" },
];

export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;
