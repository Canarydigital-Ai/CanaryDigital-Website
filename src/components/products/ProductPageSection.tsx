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
import ProductBanner2 from "../../assets/product imgs/ProductBanner2.png";
import ProductBanner3 from "../../assets/product imgs/ProductBanner3.png";
import ProductBanner4 from "../../assets/product imgs/ProductBanner4.png";
import ProductBanner5 from "../../assets/product imgs/ProductBanner5.png";

import Thumbnail from "../../assets/product imgs/thumbnail.png";
import { FaPlay } from "react-icons/fa";
import { image, sub } from "framer-motion/client";

const items = [
  { img: LeftGIF1, label: "Startups" },
  { img: LeftGIF2, label: "Digital Agencies" },
  { img: LeftGIF3, label: "Marketers" },
  { img: LeftGIF4, label: "E-commerce owners" },
];

const SeoVideo =
  "https://res.cloudinary.com/ddyymyvny/video/upload/v1761825558/Seo_Vido_qaa5of.mp4";

const ProductPageSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => videoRef.current?.play(), 100);
  };

  const section1 = [
    {
      title: "AI Assistant to Audit, Optimize & Grow",
      subtitle:
        "Experience smarter SEO with Canary Digital’s AI driven solution — built to uncover opportunities, enhance visibility, and drive measurable result",
      image: ProductBanner,
    },
    {
      title: "Canary Vision: The Future of Intelligent Monitoring",
      subtitle:
        "Canary Vision brings AI powered intelligence to your existing CCTV, detecting behaviour, tracking occupancy, and delivering real time insights for safer, smarter spaces.",
      image: ProductBanner2,
    },
    {
      title: "PaperLens Scan Anything Store Everything",
      subtitle:
        "PaperLens instantly converts any document you capture—business cards, invoices, IDs, or receipts—into a smart, searchable digital file, automatically detects the document type, organizes it into the right folder, and lets you save or share it effortlessly.",
      image: ProductBanner3,
    },
    {
      title: "From  Event Creation to  Memories Powered by AI",
      subtitle:
        "Selfind.ai is an AI-powered platform that helps guests easily find, share, and relive event memories using advanced face recognition. Simply upload a selfie, and Selfind.ai organizes and securely shares your photos with custom branding options.",
      image: ProductBanner4,
    },
    {
      title: "Turn Ideas into Scripts & Storyboards",
      subtitle:
        "Fable is your AI-powered creative partner that instantly transforms ideas into scripts, shotlists, and storyboards. Whether you'recreating adfilms, digital content, or brandstories, Fable accelerates your creative workflow while ensuring your vision is visually cohesive and production-ready.",
      image: ProductBanner5,
    },
  ];

  return (
    <div className="bg-[#0A0A0A]">
      {/* main banner section */}
      <div
        className="h-screen flex flex-col justify-center items-start relative px-4 md:px-10 lg:px-16"
        style={{
          backgroundImage: `url(${ProductBanner})`,
          backgroundSize: "cover",
        }}
        >
        {/* Content */}
        <div className="relative space-y-6 sm:space-y-8 px-4 sm:px-6 w-full max-w-full sm:max-w-[540px] md:max-w-[640px] mt-40 sm:mt-48 md:mt-60">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-[1.2] sm:leading-[1.3] md:leading-[56px] lg:leading-[60px]">
            AI Assistant to Audit, Optimize & Grow
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-light leading-[1.4] sm:leading-[20px] md:leading-[22px] lg:leading-[25px] text-[#FFFFFF]">
            Experience smarter SEO with Canary Digital's AI driven solution -
            built to uncover opportunities, enhance visibility, and drive
            measurable results
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
              What is Canary SEO and Who is it For
            </h2>
            <p className="text-base sm:text-lg leading-[1.4] sm:leading-[26px] md:leading-[28px] lg:leading-[30px]">
              Canary SEO is an AI-powered tool that quickly analyzes your
              website and highlights what's affecting your search rankings.
              You'll get a free summary with key SEO insights. If you want
              deeper reports like keyword data and technical fixes, you can
              upgrade anytime. It's simple, clear, and built to help you grow
              online, no guesswork needed
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
                  Smart Fix Recommendations
                </h2>
                <p className="text-sm sm:text-base leading-[1.4] sm:leading-[22px] font-light w-full max-w-full sm:max-w-[300px] text-[#DBDBDB] mt-4 sm:mt-0">
                  Get simple, clear suggestions to fix issues and boost your
                  site's performance. Ask ChatGPT
                </p>
                <div className="w-full flex justify-center md:justify-end mt-4 sm:mt-0">
                  <img
                    src={RightGIF1}
                    alt=""
                    className="w-20 h-20 sm:w-auto sm:h-auto"
                  />
                </div>
              </div>

              <div className="bg-[#1F1F1F] flex-1 p-6 sm:p-8 flex flex-col sm:flex-row items-start justify-between rounded-md gap-4 sm:gap-0">
                <div className="space-y-4 sm:space-y-5">
                  <h2 className="text-xl sm:text-2xl leading-[1.3] sm:leading-[30px] font-semibold w-full max-w-full sm:max-w-[300px]">
                    AI-powered Issue Detection
                  </h2>
                  <p className="text-sm sm:text-base leading-[1.4] sm:leading-[22px] font-light w-full max-w-full sm:max-w-[270px] text-[#DBDBDB]">
                    Spots what's wrong with your website instantly and
                    intelligently, so you don't have to dig through the code
                  </p>
                </div>
                <img
                  src={RightGIF2}
                  alt=""
                  className="h-[120px] w-[120px] sm:h-[180px] sm:w-[180px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] self-center sm:self-auto"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3  w-full">
              {/* Card 1 */}
              <div className="bg-[#1F1F1F] rounded-md p-6 sm:p-8 flex flex-col justify-between space-y-4 sm:space-y-5 items-center">
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl leading-[1.3] sm:leading-[30px] font-semibold w-full max-w-full sm:max-w-[200px] text-left">
                    Real-time Site Health Score
                  </h2>
                  <p className="text-sm sm:text-base leading-[1.4] sm:leading-[22px] font-light w-full max-w-full sm:max-w-[270px] text-[#DBDBDB] text-left">
                    Check your website's overall health in real time with a
                    clear, simple score
                  </p>
                </div>
                <img
                  src={RightGIF3}
                  alt=""
                  className="h-[120px] sm:h-[150px] md:h-[180px] lg:h-[220px] object-contain"
                />
              </div>

              <div className="col-span-1 sm:col-span-2 flex flex-col gap-3 ">
                <div className="bg-[#1F1F1F] w-full p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between rounded-md gap-4 sm:gap-0">
                  <div className="space-y-4 sm:space-y-5">
                    <h2 className="text-xl sm:text-2xl leading-[1.3] sm:leading-[30px] font-semibold w-full max-w-full sm:max-w-[200px]">
                      Competitor Comparison
                    </h2>
                    <p className="text-sm sm:text-base leading-[1.4] sm:leading-[22px] font-light w-full max-w-full sm:max-w-[270px] text-[#DBDBDB]">
                      See how your website stacks up against others in your
                      industry
                    </p>
                  </div>
                  <video
                    src={RightGIF4}
                    autoPlay
                    loop
                    muted
                    className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[155px] lg:h-[155px]"
                  ></video>
                </div>

                <div className="bg-[#1F1F1F] w-full p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between rounded-md gap-4 sm:gap-0">
                  <div className="space-y-4 sm:space-y-5">
                    <h2 className="text-xl sm:text-2xl leading-[1.3] sm:leading-[30px] font-semibold w-full max-w-full sm:max-w-[200px]">
                      Exportable SEO Reports
                    </h2>
                    <p className="text-sm sm:text-base leading-[1.4] sm:leading-[22px] font-light w-full max-w-full sm:max-w-[270px] text-[#DBDBDB]">
                      Download and share your full SEO report anytime you need
                      it
                    </p>
                  </div>
                  <img
                    src={RightGIF5}
                    alt=""
                    className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-auto md:h-auto"
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
              See how Canary SEO simplifies audits
            </h2>

            {/* Flow container */}
            <div className="relative flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-10 w-full">
              {/* Dotted line */}
              <div className="absolute top-0 bottom-0 left-1/2 w-px border-l-2 border-dotted border-[#7E7E7E] -translate-x-1/2 z-0"></div>

              {/* Steps */}
              {[
                "Click 'Start Free Scan'",
                "Enter the website URL",
                "View basic SEO results instantly",
                "Explore premium insights (blurred or locked)",
                "Upgrade to unlock the full report",
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

export default ProductPageSection;
