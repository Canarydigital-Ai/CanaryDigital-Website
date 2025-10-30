import React, { useRef, useState } from "react";
import ProductBanner from "../../assets/product imgs/Product Banner.png";
import LeftGIF1 from "../../assets/product imgs/leftGIF1.gif";
import LeftGIF2 from "../../assets/product imgs/leftGIF2.gif";
import LeftGIF3 from "../../assets/product imgs/leftGIF3.gif";
import LeftGIF4 from "../../assets/product imgs/leftGIF4.gif";

import RightGIF1 from "../../assets/product imgs/RightGIF1.gif";
import RightGIF2 from "../../assets/product imgs/RightGIF2.gif";
import RightGIF3 from "../../assets/product imgs/RightGIF3.gif";
import RightGIF4 from "../../assets/product imgs/RightGIF4.mp4";
import RightGIF5 from "../../assets/product imgs/RightGIF5.gif";

import Thumbnail from "../../assets/product imgs/thumbnail.png";
import { FaPlay } from "react-icons/fa";

const items = [
  { img: LeftGIF1, label: "Startups" },
  { img: LeftGIF2, label: "Digital Agencies" },
  { img: LeftGIF3, label: "Marketers" },
  { img: LeftGIF4, label: "E-commerce owners" },
];

const SeoVideo = "https://res.cloudinary.com/ddyymyvny/video/upload/v1761825558/Seo_Vido_qaa5of.mp4";

const ProductPageSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => videoRef.current?.play(), 100);  
  };


  return (
    <div className="bg-[#0A0A0A]">
      <div
        className="h-screen flex flex-col justify-center items-start relative px-4 md:px-10 lg:px-16"
        style={{
          backgroundImage: `url(${ProductBanner})`,
          backgroundSize: "cover",
        }}
      >
        {/* Content */}
        <div className="relative space-y-8 px-4 sm:px-6 w-full max-w-[640px] mt-60">
          <h2 className=" text-[54px] leading-[60px] ">
            AI Assistant to Audit, Optimize & Grow
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-light leading-[22px] lg:leading-[25px] text-[#999999]">
            Experience smarter SEO with Canary Digital’s AI driven solution -
            built to uncover opportunities, enhance visibility, and drive
            measurable results
          </p>
          <button className="group bg-[#FBCA0C] text-black text-xs font-normal leading-[23px] px-4 md:px-6 h-[28px] md:h-[30px] rounded-md flex items-center justify-center gap-2 overflow-hidden relative transition-all duration-600 cursor-pointer w-fit">
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
        className="px-4 md:px-10 lg:px-16 py-12 sm:py-16 md:py-24 pb-20 md:pb-36 bg-[#0A0A0A] mt-24 text-white"
        style={{
          borderTop: "1px solid transparent",
          borderImage:
            "linear-gradient(90deg, #000000 0%, #898989 50%, #000000 100%) 1",
        }}
      >
        <div className="grid md:grid-cols-3 gap-18 items-start pb-28">
          {/* LEFT SIDE */}
          <div className="space-y-16">
            <h2 className="text-3xl md:text-4xl xl:text-[54px] leading-[64px]">
              What is Canary SEO and Who is it For
            </h2>
            <p className="text-lg leading-[30px] ">
              Canary SEO is an AI-powered tool that quickly analyzes your
              website and highlights what’s affecting your search rankings.
              You’ll get a free summary with key SEO insights. If you want
              deeper reports like keyword data and technical fixes, you can
              upgrade anytime. It’s simple, clear, and built to help you grow
              online, no guesswork needed
            </p>

            <div className="grid grid-cols-2 gap-6 text-gray-200">
              {items.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-[55px] h-[55px]"
                  />
                  <p className="text-xl leading-[34px] font-medium">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: INFO CARDS */}
          <div className="col-span-2 flex flex-col gap-3">
            <div className="flex h-[345px] gap-3">
              <div className="bg-[#1F1F1F] w-[435px] p-8 flex flex-col justify-between items-start rounded-md">
                <h2 className="text-2xl leading-[30px] font-semibold w-full max-w-[300px]">
                  Smart Fix Recommendations
                </h2>
                <p className="text-base leading-[22px] font-light w-full max-w-[300px] text-[#DBDBDB]">
                  Get simple, clear suggestions to fix issues and boost your
                  site’s performance. Ask ChatGPT
                </p>
                <div className="w-full flex justify-end">
                  <img src={RightGIF1} alt="" />
                </div>
              </div>

              <div className="bg-[#1F1F1F] flex-1  p-8 flex items-start justify-between rounded-md">
                <div className="space-y-5">
                  <h2 className="text-2xl leading-[30px] font-semibold w-full max-w-[300px]">
                    AI-powered Issue Detection
                  </h2>
                  <p className="text-base leading-[22px] font-light w-full max-w-[270px]  text-[#DBDBDB]">
                    Spots what’s wrong with your website instantly and
                    intelligently, so you don’t have to dig through the code
                  </p>
                </div>
                <img src={RightGIF2} alt="" className=" h-[250px] w-[250px]" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 w-full  ">
              {/* Card 1 */}
              <div className="bg-[#1F1F1F] rounded-md p-8 flex flex-col justify-between space-y-5 items-center">
                <div className="space-y-6">
                  <h2 className="text-2xl leading-[30px] font-semibold w-full max-w-[200px]">
                    Real-time Site Health Score
                  </h2>
                  <p className="text-base leading-[22px] font-light w-full max-w-[270px]  text-[#DBDBDB]">
                    Check your website’s overall health in real time with a
                    clear, simple score
                  </p>
                </div>
                <img
                  src={RightGIF3}
                  alt=""
                  className="h-[220px] object-contain"
                />
              </div>

              <div className="w-full col-span-2 flex flex-col gap-3">
                <div className="bg-[#1F1F1F]  w-full p-8 flex items-center justify-between rounded-md">
                  <div className="space-y-5">
                    <h2 className="text-2xl leading-[30px] font-semibold w-full max-w-[200px]">
                      Competitor Comparison
                    </h2>
                    <p className="text-base leading-[22px] font-light w-full max-w-[270px]  text-[#DBDBDB]">
                      See how your website stacks up against others in your
                      industry{" "}
                    </p>
                  </div>
                  <video
                    src={RightGIF4}
                    autoPlay
                    loop
                    muted
                    className="w-[155px] h-[155px]"
                  ></video>
                </div>

                <div className="bg-[#1F1F1F]  w-full p-8 flex items-center justify-between rounded-md">
                  <div className="space-y-5">
                    <h2 className="text-2xl leading-[30px] font-semibold w-full max-w-[200px]">
                      Exportable SEO Reports
                    </h2>
                    <p className="text-base leading-[22px] font-light w-full max-w-[270px]  text-[#DBDBDB]">
                      Download and share your full SEO report anytime you need
                      it
                    </p>
                  </div>
                  <img src={RightGIF5} alt="" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-28 grid grid-cols-3">
<div className="relative col-span-2">
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
          className="text-white w-[120px] h-[120px] rounded-full flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
          style={{
            background: "linear-gradient(180deg, #FBCA0C 0%, #DADADA 100%)",
            boxShadow: `
              0px 0px 11.7px 0px #FFFFFF,
              0px 0px 23.4px 0px #FFFFFF,
              0px 0px 81.9px 0px #FFFFFF,
              0px 0px 163.8px 0px #FFFFFF,
              0px 0px 250px 0px #FFFFFF
            `,
          }}
        >
          <FaPlay className="size-10 " />
        </button>
      )}

      {/* Bottom gradient overlay */}
      {!isPlaying && (
        <div className="w-full h-[300px] bg-gradient-to-b from-transparent to-[#0A0A0A] absolute bottom-0 pointer-events-none transition-opacity duration-700 ease-in-out"></div>
      )}
    </div>

        </div>
      </div>
    </div>
  );
};

export default ProductPageSection;
