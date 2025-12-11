import React, { useRef, useState } from "react";
import LeftGIF1 from "../../assets/product imgs/Lgif41.gif";
import LeftGIF2 from "../../assets/product imgs/Lgif42.gif";
import LeftGIF3 from "../../assets/product imgs/Lgif43.gif";
import LeftGIF4 from "../../assets/product imgs/Lgif44.gif";

import RightGIF1 from "../../assets/product imgs/R51.png";
import RightGIF2 from "../../assets/product imgs/R52.png";
import RightGIF3 from "../../assets/product imgs/R53.png";
import RightGIF4 from "../../assets/product imgs/R54.png";
import RightGIF5 from "../../assets/product imgs/R55.png";
import ProductBanner2 from "../../assets/product imgs/ProductBanner7.png";

import Thumbnail from "../../assets/product imgs/thumbnail.png";
import { FaPlay } from "react-icons/fa";

const items = [
  { img: LeftGIF1, label: "Event Planners" },
  { img: LeftGIF2, label: "Content Creators" },
  { img: LeftGIF3, label: "Marketing Teams" },
  { img: LeftGIF4, label: "Brand Managers" },
];

const SeoVideo =
  "https://res.cloudinary.com/ddyymyvny/video/upload/v1761825558/Seo_Vido_qaa5of.mp4";

const ProductSection4: React.FC = () => {
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
            From Event Creation to Memories Powered by AI
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-light leading-[1.4] sm:leading-[20px] md:leading-[22px] lg:leading-[25px] text-[#FFFFFF]">
            Selfind.ai is an AI-powered platform that helps guests easily find,
            share, and relive event memories using advanced face recognition.
            Simply upload a selfie, and Selfind.ai organizes and securely shares
            your photos with custom branding options.
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
              What is Selfind and Who is it For
            </h2>
            <p className="text-base sm:text-lg leading-[1.4] sm:leading-[26px] md:leading-[28px] lg:leading-[30px]">
              Selfind.ai is an intelligent, AI-powered event solution from
              Canary Digital AI. Designed to enhance the event experience,
              Selfind.ai enables guests to instantly find their photos by simply
              uploading a selfie. Whether it’s a small gathering or a large
              conference, Selfind.ai uses advanced face recognition to instantly
              locate and organize guest photos. Secure sharing and custom
              branding features allow for seamless memory sharing, ensuring that
              technology works effortlessly for people, not the other way
              around.
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
                 Effortless Event Creation
                </h2>
                <p className="text-sm sm:text-base leading-[1.4] sm:leading-[22px] font-light w-full max-w-full sm:max-w-[300px] text-[#DBDBDB] mt-4 sm:mt-0">
                 Create your event in minutes just add a name, date, type, and cover image. Selfind.ai takes care of the rest, structuring everything automatically.
                </p>
                <div className="w-full flex justify-center md:justify-end mt-4 sm:mt-0">
                  <img
                    src={RightGIF1}
                    alt=""
                    className="w-20 h-20 sm:w-[116px] sm:h-[102px]"
                  />
                </div>
              </div>

              <div className="bg-[#1F1F1F] flex-1 p-6 sm:p-8 flex flex-col sm:flex-row items-start justify-between rounded-md gap-4 sm:gap-0">
                <div className="space-y-4 sm:space-y-5">
                  <h2 className="text-xl sm:text-2xl leading-[1.3] sm:leading-[30px] font-semibold w-full max-w-full sm:max-w-[300px]">
                    Custom Branding Made Simple
                  </h2>
                  <p className="text-sm sm:text-base leading-[1.4] sm:leading-[22px] font-light w-full max-w-full sm:max-w-[270px] text-[#DBDBDB]">
                   Personalize your event with your brand’s colors, fonts, and logo. Choose from elegant templates or create your own to make each event gallery uniquely yours.
                  </p>
                </div>
                <div className="w-full sm:w-auto flex justify-center sm:justify-end items-end mt-4 sm:mt-0 sm:self-end">
                  <img
                    src={RightGIF2}
                    alt=""
                    className="h-[120px] w-[120px] sm:h-[180px] sm:w-[180px] md:h-[200px] md:w-[200px] lg:h-[105.34px] lg:w-[121px]"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3  w-full">
              {/* Card 1 */}
              <div className="bg-[#1F1F1F] rounded-md p-6 sm:p-8 flex flex-col justify-between space-y-4 sm:space-y-5 items-center">
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl leading-[1.3] sm:leading-[30px] font-semibold w-full max-w-full sm:max-w-[200px] text-left">
                    WhatsApp & Email Notifications
                  </h2>
                  <p className="text-sm sm:text-base leading-[1.4] sm:leading-[22px] font-light w-full max-w-full sm:max-w-[270px] text-[#DBDBDB] text-left">
                    Keep guests informed and engaged with smart, branded notifications. Customize messages or let AI craft professional templates.
                  </p>
                </div>
                <img
                  src={RightGIF3}
                  alt=""
                  className="h-[120px] sm:h-[150px] md:h-[180px] lg:h-[161px] lg:w-[161px] object-contain"
                />
              </div>

              <div className="col-span-1 sm:col-span-2 flex flex-col gap-3 ">
                <div className="bg-[#1F1F1F] w-full p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between rounded-md gap-4 sm:gap-0">
                  <div className="space-y-4 sm:space-y-5">
                    <h2 className="text-xl sm:text-2xl leading-[1.3] sm:leading-[30px] font-semibold w-full max-w-full sm:max-w-[200px]">
                      Smart Photo Uploads
                    </h2>
                    <p className="text-sm sm:text-base leading-[1.4] sm:leading-[22px] font-light w-full max-w-full sm:max-w-[270px] text-[#DBDBDB]">
                      Easily upload thousands of photos or invite guests to contribute securely. AI optimizes and organizes every image for perfect clarity.
                    </p>
                  </div>
                  <img
                    src={RightGIF4}
                    alt=""
                    className="h-[120px] sm:h-[150px] md:h-[180px] lg:h-[160px] lg:w-[160px] object-contain"
                  />
                </div>

                <div className="bg-[#1F1F1F] w-full p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between rounded-md gap-4 sm:gap-0">
                  <div className="space-y-4 sm:space-y-5">
                    <h2 className="text-xl sm:text-2xl leading-[1.3] sm:leading-[30px] font-semibold w-full max-w-full sm:max-w-[200px]">
                      AI-Powered Face Recognition
                    </h2>
                    <p className="text-sm sm:text-base leading-[1.4] sm:leading-[22px] font-light w-full max-w-full sm:max-w-[270px] text-[#DBDBDB]">
                      Advanced AI matches selfies with event photos in seconds, ensuring accuracy, privacy, and security.
                    </p>
                  </div>
                  <img
                    src={RightGIF5}
                    alt=""
                    className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[109px] md:h-[97px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* demo video section */}
        {/* <div className="pt-16 sm:pt-20 md:pt-28 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-5">
          <div className="relative col-span-1 lg:col-span-2">
            
            <img
              src={Thumbnail}
              alt="SEO Thumbnail"
              className={`w-full h-auto object-cover absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isPlaying ? "opacity-0" : "opacity-100"
              }`}
            />

            
            <video
              ref={videoRef}
              src={SeoVideo}
              className={`w-full h-auto object-cover transition-opacity duration-700 ease-in-out ${
                isPlaying ? "opacity-100" : "opacity-0"
              }`}
              onEnded={() => setIsPlaying(false)}
            />

            
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

           
            {!isPlaying && (
              <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] bg-gradient-to-b from-transparent to-[#0A0A0A] absolute bottom-0 pointer-events-none transition-opacity duration-700 ease-in-out"></div>
            )}
          </div>

          <div className="flex flex-col items-center justify-center w-full lg:w-fit mx-auto space-y-6 sm:space-y-8 relative">
           
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-light leading-[1.3] sm:leading-[36px] md:leading-[42px] w-full max-w-full lg:max-w-[305px] text-center lg:text-left">
              How Canary Vision Streamlines Your Daily Operations
            </h2>

           
            <div className="relative flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-10 w-full">
             
              <div className="absolute top-0 bottom-0 left-1/2 w-px border-l-2 border-dotted border-[#7E7E7E] -translate-x-1/2 z-0"></div>

              
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
        </div> */}
      </div>
    </div>
  );
};

export default ProductSection4;
