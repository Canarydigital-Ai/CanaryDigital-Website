import React from "react";

import Shape1 from "../../assets/videos/shape 1.mp4";
import Shape2 from "../../assets/videos/shape 2.mp4";
import Shape3 from "../../assets/videos/shape 3.mp4";

const WorksSection: React.FC = () => {
  const WorkVideo1 =
    "https://res.cloudinary.com/ddyymyvny/video/upload/v1760790731/ug_mocktail5_rkiaoy.mp4";
  const WorkVideo2 =
    "https://res.cloudinary.com/ddyymyvny/video/upload/v1760790730/ug_mocktail33_x9j1lg.mp4";
  const WorkVideo3 =
    "https://res.cloudinary.com/ddyymyvny/video/upload/v1760790748/poster_scrolling_main_file_pre_qwhwpm.mp4";

  return (
    <div
      className="text-white px-4 md:px-10 lg:px-16 py-16 md:py-20 pb-20 md:pb-40 min-h-screen flex flex-col relative "
      style={{
        borderTop: "1px solid transparent",
        borderImage:
          "linear-gradient(90deg, #000000 0%, #565656 50%, #000000 100%) 1",
      }}
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-center mb-12 md:mb-20 gap-6 md:gap-4">
        <div className="flex flex-col gap-2 md:gap-3">
          <h1 className="text-[16px] sm:text-[18px] md:text-[22px] font-light relative w-fit">
            Works
            <span className="w-[4px] h-[4px] sm:w-[5px] sm:h-[5px] md:w-[6px] md:h-[6px] bg-[#30CF00] rounded-full absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-3"></span>
          </h1>

          <button className="group bg-[#FBCA0C] text-black text-xs font-normal leading-[23px] px-4 md:px-6 h-[28px] md:h-[30px] rounded-md flex items-center justify-center gap-2 overflow-hidden relative transition-all duration-600 cursor-pointer w-fit">
            {/* Original text that moves left */}
            <span className="flex items-center gap-2 transition-all duration-500 ease-out group-hover:-translate-x-60 group-hover:opacity-0">
              View Portfolio{" "}
            </span>

            {/* Duplicate text that slides in from right */}
            <span className="absolute flex items-center gap-2 transition-all duration-500 ease-out transform opacity-0 translate-x-40 group-hover:translate-x-0 group-hover:opacity-100">
              View Portfolio{" "}
            </span>
          </button>
        </div>
 
        <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center gap-4 md:gap-6 w-full lg:w-auto">
          <div className="flex items-center gap-1 md:gap-2">
            {[Shape2, Shape1, Shape3].map((shape, i) => (
              <video
                key={i}
                src={shape}
                autoPlay
                loop
                muted
                playsInline
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[72px] lg:h-[72px] object-contain"
              />
            ))}
          </div>

          <h2 className="text-lg sm:text-xl md:text-2xl leading-[1.3] sm:leading-[1.4] md:leading-[31px] w-full max-w-full lg:max-w-[665px]">
            Not the full story, just the jaw dropping part that made people
            stop, scroll back, and look again
          </h2>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-8 md:mt-12 gap-6 md:gap-4">
        <div className="bg-[#111111] p-3 md:p-4 overflow-hidden transition-all duration-500 ease-in-out group hover:rounded-[40px] md:hover:rounded-[80px] group-hover:backdrop-blur-sm w-full lg:w-auto">
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
            <div className="overflow-hidden transition-all duration-500 ease-in-out group-hover:rounded-l-[20px] sm:group-hover:rounded-l-[62px] w-full">
              <video
                src={WorkVideo1}
                autoPlay
                loop
                muted
                className="w-full h-auto max-w-full sm:max-w-[280px] md:max-w-[380px] lg:max-w-[480px] transition-all duration-500 ease-in-out"
              ></video>
            </div>

            <div className="overflow-hidden transition-all duration-500 ease-in-out group-hover:rounded-r-[20px] sm:group-hover:rounded-r-[62px] w-full">
              <video
                src={WorkVideo2}
                autoPlay
                loop
                muted
                className="w-full h-auto max-w-full sm:max-w-[280px] md:max-w-[380px] lg:max-w-[480px] transition-all duration-500 ease-in-out"
              ></video>
            </div>
          </div>
        </div>

        <div className="p-3 md:p-4 overflow-hidden transition-all duration-500 ease-in-out group hover:rounded-[40px] md:hover:rounded-[80px] group-hover:backdrop-blur-sm w-full lg:w-auto">
          <div className="flex gap-2 md:gap-3">
            <div className="overflow-hidden transition-all duration-500 ease-in-out group-hover:rounded-[20px] md:group-hover:rounded-[62px] w-full">
              <video
                src={WorkVideo3}
                autoPlay
                loop
                muted
                className="w-full h-auto max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[660px] transition-all duration-500 ease-in-out"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksSection;