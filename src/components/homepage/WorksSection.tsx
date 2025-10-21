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
      className=" text-white px-4 md:px-10 lg:px-16 py-20 pb-40 min-h-screen flex flex-col relative"
      style={{
        borderTop: "1px solid transparent",
        borderImage:
          "linear-gradient(90deg, #000000 0%, #565656 50%, #000000 100%) 1",
      }}
    >
      {/* Header */}
      <div className="flex w-full justify-between items-center mb-20">
        <div className="flex flex-col gap-3">
          <h1 className="text-[18px] md:text-[22px] font-light relative w-fit">
            Works
            <span className="w-[6px] h-[6px] bg-[#30CF00] rounded-full absolute top-1/2 -translate-y-1/2 -right-3"></span>
          </h1>

          <button className="group bg-[#FBCA0C] text-black text-xs font-normal leading-[23px] px-6 md:h-[30px] rounded-md flex items-center justify-center gap-2 overflow-hidden relative transition-all duration-600 cursor-pointer">
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
 
        <div className="flex justify-center items-center gap-6">
          <div className="flex items-center gap-2">
            {[Shape2, Shape1, Shape3].map((shape, i) => (
              <video
                key={i}
                src={shape}
                autoPlay
                loop
                muted
                playsInline
                className="w-10 h-10 sm:w-12 sm:h-12  md:w-[72px] md:h-[72px] object-contain"
              />
            ))}
          </div>

          <h2 className="text-2xl leading-[31px] w-full max-w-[665px]">
            Not the full story, just the jaw dropping part that made people
            stop, scroll back, and look again
          </h2>
        </div>
      </div>

      <div className="flex justify-between mt-12">
        <div className="bg-[#111111] p-4 overflow-hidden transition-all duration-500 ease-in-out group hover:rounded-[80px] group-hover:backdrop-blur-sm">
          <div className="flex gap-3">
            <div className="overflow-hidden transition-all duration-500 ease-in-out group-hover:rounded-l-[62px]">
              <video
                src={WorkVideo1}
                autoPlay
                loop
                muted
                className="w-[480px] h-auto transition-all duration-500 ease-in-out  "
              ></video>
            </div>

            <div className="overflow-hidden transition-all duration-500 ease-in-out group-hover:rounded-r-[62px]">
              <video
                src={WorkVideo2}
                autoPlay
                loop
                muted
                className="w-[480px] h-auto transition-all duration-500 ease-in-out  "
              ></video>
            </div>
          </div>
        </div>

        <div className="p-4 overflow-hidden transition-all duration-500 ease-in-out group hover:rounded-[80px] group-hover:backdrop-blur-sm">
          <div className="flex gap-3">
            <div className="overflow-hidden transition-all duration-500 ease-in-out group-hover:rounded-[62px]">
              <video
                src={WorkVideo3}
                autoPlay
                loop
                muted
                className="w-[660px] h-auto transition-all duration-500 ease-in-out  "
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksSection;
