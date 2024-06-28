import { AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[24%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-7xl font-bold ">{title}</h1>
      <p className="py-5 text-xl w-1/2">{overview}</p>
      <div className="flex items-center">
        <button className="px-7 items-center flex py-4 rounded-xl  border text-black bg-white text-4xl hover:bg-black hover:text-white transition-all duration-500">
          <img src="./play.svg" className="h-10 w-10 mr-4" alt="" />
          Play
        </button>

        <button className="px-4 items-center flex  py-4 rounded-xl m-4 ml-5 border text-white bg-gray-600 text-4xl">
          <AiOutlineInfoCircle className="h-10 w-10 mr-4" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
