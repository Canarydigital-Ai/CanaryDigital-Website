import React, { useRef, useState } from "react";
import LeftGIF1 from "../../assets/product imgs/leftGIF1.gif";
import LeftGIF2 from "../../assets/product imgs/leftGIF2.gif";
import LeftGIF3 from "../../assets/product imgs/leftGIF3.gif";
import LeftGIF4 from "../../assets/product imgs/leftGIF4.gif";

import RightGIF1 from "../../assets/product imgs/Gif1.gif";
import RightGIF2 from "../../assets/product imgs/Gif2.gif";
import RightGIF3 from "../../assets/product imgs/Gif3.gif";
import RightGIF4 from "../../assets/product imgs/Gif4.gif";
import RightGIF5 from "../../assets/product imgs/Gif5.gif";
import ProductBanner2 from "../../assets/product imgs/ProductBanner2.png";

import Thumbnail from "../../assets/product imgs/thumbnail.png";
import { FaPlay } from "react-icons/fa";

const items = [
  { img: LeftGIF1, label: "Restaurants" },
  { img: LeftGIF2, label: "Bars & Pubs" },
  { img: LeftGIF3, label: "Staff Monitoring" },
  { img: LeftGIF4, label: "Retail Stores" },
  { img: LeftGIF3, label: "Warehouses" },
  { img: LeftGIF4, label: "Supermarkets & Hypermarkets" },
];

const SeoVideo =
  "https://res.cloudinary.com/ddyymyvny/video/upload/v1761825558/Seo_Vido_qaa5of.mp4";

const ProductSection2: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => videoRef.current?.play(), 100);
  };

  return (
    <div className="bg-[#0A0A0A]">
      {/* main banner section */}
      <div
        className="h-screen flex flex-col justify-center items-start relative px-4 md:px-10 lg:px-16"
        style={{
          backgroundImage: `url(${ProductBanner2})`,
          backgroundSize: "cover",
        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Content */}
        <div className="relative space-y-6 sm:space-y-8 px-4 sm:px-6 w-full max-w-full sm:max-w-[540px] md:max-w-[740px] mt-40 sm:mt-48 md:mt-60">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-[1.2] sm:leading-[1.3] md:leading-[56px] lg:leading-[60px]">
            Canary Vision: The Future of Intelligent Monitoring
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-light leading-[1.4] sm:leading-[20px] md:leading-[22px] lg:leading-[25px] text-[#FFFFFF] w-[650px]">
            Canary Vision brings AI powered intelligence to your existing CCTV,
            detecting behaviour, tracking occupancy, and delivering real time
            insights for safer, smarter spaces.
          </p>
          <button
            onClick={() => window.open("https://www.canaryseo.site/", "_blank")}
            className="group bg-[#FBCA0C] text-black text-xs font-normal leading-[23px] px-4 md:px-6 h-[28px] md:h-[30px] rounded-md flex items-center justify-center gap-2 overflow-hidden relative transition-all duration-600 cursor-pointer w-fit"
          >
            <span className="flex items-center gap-2 transition-all duration-500 ease-out group-hover:-translate-x-60 group-hover:opacity-0">
              Start free scan{" "}
            </span>

            <span className="absolute flex items-center gap-2 transition-all duration-500 ease-out transform opacity-0 translate-x-40 group-hover:translate-x-0 group-hover:opacity-100">
              Start free scan{" "}
            </span>
          </button>
        </div>
      </div>

      <div
        className="px-4 md:px-10 lg:px-16 py-12 sm:py-16 md:py-24 pb-20 md:pb-36 bg-[#0A0A0A] mt-16 sm:mt-20 md:mt-24 text-white"
        style={{
          borderTop: "1px solid transparent",
          borderImage:
            "linear-gradient(90deg, #000000 0%, #898989 50%, #000000 100%) 1",
        }}
      >
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 md:gap-18 items-start pb-10 md:pb-28">
          {/* LEFT SIDE */}
          <div className="space-y-12 sm:space-y-14 md:space-y-16">
            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[54px] leading-[1.2] sm:leading-[1.3] md:leading-[50px] lg:leading-[60px] xl:leading-[64px]">
              What is Canary Vision and Who is it For
            </h2>
            <p className="text-base sm:text-lg leading-[1.4] sm:leading-[26px] md:leading-[28px] lg:leading-[30px]">
              Canary Vision is an advanced AI driven monitoring system designed
              to transform how spaces are observed, analyzed, and managed. It
              helps businesses, institutions, and public environments understand
              real time activity through intelligent insights such as occupancy
              tracking, behavior detection, queue monitoring, and operational
              analytics. It is built for anyone who wants clearer visibility,
              safer premises, and data backed decision making without replacing
              their existing CCTV infrastructure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-gray-200">
              {items.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[55px] md:h-[55px]"
                  />
                  <p className="text-lg sm:text-xl leading-[1.3] sm:leading-[30px] md:leading-[34px] font-medium">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: INFO CARDS */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-3 ">
            <div className="flex flex-col sm:flex-row h-auto sm:h-[345px] gap-3 ">
              <div className="bg-[#1F1F1F] w-full sm:w-[435px] p-6 sm:p-8 flex flex-col justify-between items-start rounded-md">
                <h2 className="text-xl sm:text-2xl leading-[1.3] sm:leading-[30px] font-semibold w-full max-w-full sm:max-w-[300px]">
                  Behavior Detection
                </h2>
                <p className="text-sm sm:text-base leading-[1.4] sm:leading-[22px] font-light w-full max-w-full sm:max-w-[300px] text-[#DBDBDB] mt-4 sm:mt-0">
                  Understands actions like waiting, crowding, movement, and idle
                  time through AI video analysis
                </p>
                <div className="w-full flex justify-center md:justify-end mt-4 sm:mt-0">
                  <img
                    src={RightGIF1}
                    alt=""
                    className="w-20 h-20 sm:w-[125.87px] sm:h-[125.87px]"
                  />
                </div>
              </div>

              <div className="bg-[#1F1F1F] flex-1 p-6 sm:p-8 flex flex-col sm:flex-row items-start justify-between rounded-md gap-4 sm:gap-0">
                <div className="space-y-4 sm:space-y-5">
                  <h2 className="text-xl sm:text-2xl leading-[1.3] sm:leading-[30px] font-semibold w-full max-w-full sm:max-w-[300px]">
                    Occupancy Tracking
                  </h2>
                  <p className="text-sm sm:text-base leading-[1.4] sm:leading-[22px] font-light w-full max-w-full sm:max-w-[270px] text-[#DBDBDB]">
                    Identifies seat availability, crowd levels, and space usage
                    in real time.
                  </p>
                </div>
                <div className="w-full sm:w-auto flex justify-center sm:justify-end items-end mt-4 sm:mt-0 sm:self-end">
                  <img
                    src={RightGIF2}
                    alt=""
                    className="h-[120px] w-[120px] sm:h-[180px] sm:w-[180px] md:h-[200px] md:w-[200px] lg:h-[117.29px] lg:w-[116.52px]"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3  w-full">
              {/* Card 1 */}
              <div className="bg-[#1F1F1F] rounded-md p-6 sm:p-8 flex flex-col justify-between space-y-4 sm:space-y-5 items-center">
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl leading-[1.3] sm:leading-[30px] font-semibold w-full max-w-full sm:max-w-[200px] text-left">
                    Staff Monitoring
                  </h2>
                  <p className="text-sm sm:text-base leading-[1.4] sm:leading-[22px] font-light w-full max-w-full sm:max-w-[270px] text-[#DBDBDB] text-left">
                    Tracks staff activity, service speed, and workflow
                    efficiency.
                  </p>
                </div>
                <img
                  src={RightGIF4}
                  alt=""
                  className="h-[120px] sm:h-[150px] md:h-[180px] lg:h-[127.75px] lg:w-[175.81px] object-contain"
                />
              </div>

              <div className="col-span-1 sm:col-span-2 flex flex-col gap-3 ">
                <div className="bg-[#1F1F1F] w-full p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between rounded-md gap-4 sm:gap-0">
                  <div className="space-y-4 sm:space-y-5">
                    <h2 className="text-xl sm:text-2xl leading-[1.3] sm:leading-[30px] font-semibold w-full max-w-full sm:max-w-[200px]">
                      Custom AI Automations
                    </h2>
                    <p className="text-sm sm:text-base leading-[1.4] sm:leading-[22px] font-light w-full max-w-full sm:max-w-[270px] text-[#DBDBDB]">
                      Adapts to each client's needs—queue flow, seat detection,
                      process compliance, and more.
                    </p>
                  </div>
                 <img
                  src={RightGIF3}
                  alt=""
                  className="h-[120px] sm:h-[150px] md:h-[180px] lg:h-[128.24px] lg:w-[229px] object-contain"
                />
                </div>

                <div className="bg-[#1F1F1F] w-full p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between rounded-md gap-4 sm:gap-0">
                  <div className="space-y-4 sm:space-y-5">
                    <h2 className="text-xl sm:text-2xl leading-[1.3] sm:leading-[30px] font-semibold w-full max-w-full sm:max-w-[200px]">
                      Real-Time Alerts
                    </h2>
                    <p className="text-sm sm:text-base leading-[1.4] sm:leading-[22px] font-light w-full max-w-full sm:max-w-[270px] text-[#DBDBDB]">
                      Sends instant notifications when important events occur.
                    </p>
                  </div>
                  <img
                    src={RightGIF5}
                    alt=""
                    className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[184.85px] md:h-[184.85px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* demo video section */}
        <div className="pt-16 sm:pt-20 md:pt-28 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-5">
          <div className="relative col-span-1 lg:col-span-2">
            {/* Thumbnail (fades out when playing) */}
            <img
              src={Thumbnail}
              alt="SEO Thumbnail"
              className={`w-full h-auto object-cover absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isPlaying ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Video (fades in when playing) */}
            <video
              ref={videoRef}
              src={SeoVideo}
              className={`w-full h-auto object-cover transition-opacity duration-700 ease-in-out ${
                isPlaying ? "opacity-100" : "opacity-0"
              }`}
              onEnded={() => setIsPlaying(false)}
            />

            {/* Center play button */}
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="text-white w-[45px] h-[45px] md:w-[120px] md:h-[120px] rounded-full flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                style={{
                  background:
                    "linear-gradient(180deg, #FBCA0C 0%, #DADADA 100%)",
                  boxShadow: `
                0px 0px 11.7px 0px #FFFFFF,
                0px 0px 23.4px 0px #FFFFFF,
                0px 0px 81.9px 0px #FFFFFF,
                0px 0px 163.8px 0px #FFFFFF,
                0px 0px 250px 0px #FFFFFF
              `,
                }}
              >
                <FaPlay className="size-4 md:size-10 ml-1" />
              </button>
            )}

            {/* Bottom gradient overlay */}
            {!isPlaying && (
              <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] bg-gradient-to-b from-transparent to-[#0A0A0A] absolute bottom-0 pointer-events-none transition-opacity duration-700 ease-in-out"></div>
            )}
          </div>

          <div className="flex flex-col items-center justify-center w-full lg:w-fit mx-auto space-y-6 sm:space-y-8 relative">
            {/* Title */}
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-light leading-[1.3] sm:leading-[36px] md:leading-[42px] w-full max-w-full lg:max-w-[305px] text-center lg:text-left">
              How Canary Vision Streamlines Your Daily Operations
            </h2>

            {/* Flow container */}
            <div className="relative flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-10 w-full">
              {/* Dotted line */}
              <div className="absolute top-0 bottom-0 left-1/2 w-px border-l-2 border-dotted border-[#7E7E7E] -translate-x-1/2 z-0"></div>

              {/* Steps */}
              {[
                "Share Your Requirement",
                "Connect Your Existing CCTV",
                "Configure AI Models",
                "Set Alerts and Automation",
                "Go Live With Real-Time Insights",
              ].map((text, index) => (
                <div
                  key={index}
                  className="relative z-10 bg-[#1F1F1F] rounded-md px-4 sm:px-6 md:px-8 lg:px-12 w-full max-w-[280px] sm:max-w-[300px] h-[55px] sm:h-[60px] md:h-[65px] flex items-center justify-center text-center text-xs sm:text-sm leading-[1.4] sm:leading-[20px]"
                >
                  {text}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() =>
                window.open("https://www.canaryseo.site/", "_blank")
              }
              className="mt-2 sm:mt-4 group bg-[#FBCA0C] text-black text-xs font-normal leading-[23px] px-4 md:px-6 h-[28px] md:h-[30px] rounded-md flex items-center justify-center gap-2 overflow-hidden relative transition-all duration-600 cursor-pointer w-fit"
            >
              <span className="flex items-center gap-2 transition-all duration-500 ease-out group-hover:-translate-x-60 group-hover:opacity-0">
                Start free scan{" "}
              </span>

              <span className="absolute flex items-center gap-2 transition-all duration-500 ease-out transform opacity-0 translate-x-40 group-hover:translate-x-0 group-hover:opacity-100">
                Start free scan{" "}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection2;
