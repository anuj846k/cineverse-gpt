import { AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[24%] md:px-12 px-6 pb-10 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="md:text-7xl text-2xl font-bold mt-10">{title}</h1>
      <p className="py-5 text-xl w-[40%] md:inline-block hidden">{overview}</p>
      <div className="flex items-center my-2 mb-10 md:m-0">
        <button className="md:px-7 items-center flex py-2 px-3 md:py-4 rounded-xl border text-black bg-white md:text-4xl text-2xl hover:bg-black hover:text-white transition-all duration-500">
          <img src="./play.svg" className="h-10 w-10 mr-4" alt="" />
          Play
        </button>
    
        <button className="px-4 items-center md:flex hidden  py-4 rounded-xl m-4 ml-5 border text-white bg-gray-600 text-4xl">
          <AiOutlineInfoCircle className="h-10 w-10 mr-4" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
