const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[28%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-7xl font-bold ">{title}</h1>
      <p className="py-5 text-xl w-1/2">{overview}</p>
      <div className="flex items-center">
        <button className="px-10 items-center flex p-4 rounded-xl  border text-black bg-white text-5xl hover:bg-black hover:text-white transition-all duration-500">
          <img src="./play.svg" className="h-14 w-14 mr-4" alt="" />
           Play
        </button>

        <button className="px-12 py-5 rounded-xl m-4 ml-5 border text-white bg-gray-600 text-5xl">
          Details
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
