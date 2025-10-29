import React from "react";
import BirdGIF from "../../assets/GIF/bird GIF.gif";
import { motion } from "framer-motion";
import ServiceImg1 from "../../assets/ServiceImg 1.png";
import ServiceImg2 from "../../assets/ServiceImg 2.png";
import ServiceImg3 from "../../assets/ServiceImg 3.png";
import ServiceImg4 from "../../assets/ServiceImg 4.png";
import ServiceImg5 from "../../assets/ServiceImg 5.png";
import { useNavigate } from "react-router-dom";

const OurServiceSection: React.FC = () => {
  const navigate = useNavigate();

  const cardData = [
    {
      number: "01",
      title: "AI Powered Services",
      image: ServiceImg1,
    },
    {
      number: "02",
      title: "Web Development",
      image: ServiceImg2,
    },
    {
      number: "03",
      title: "UX/UI Designing",
      image: ServiceImg3,
    },
    {
      number: "04",
      title: "Design & Creative",
      image: ServiceImg4,
    },
    {
      number: "05",
      title: "Digital Marketing",
      image: ServiceImg5,
    },
  ];

  return (
    <div className="text-white px-4 md:px-10 lg:px-16 py-16 md:py-22 min-h-screen flex flex-col relative">
      {/* Header */}
      <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-center mb-12 md:mb-20 gap-6 md:gap-4">
        <div className="flex items-center gap-3 md:gap-4">
          <h1 className="text-[16px] sm:text-[18px] md:text-[22px] font-light relative">
            Our Services
            <span className="w-[4px] h-[4px] sm:w-[5px] sm:h-[5px] md:w-[6px] md:h-[6px] bg-[#30CF00] rounded-full absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-3"></span>
          </h1>
          <img
            src={BirdGIF}
            alt="bird"
            className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] object-contain"
          />
        </div>

        {/* Description */}
        <div className="flex items-center gap-3">
          <h2 className="text-lg sm:text-xl md:text-2xl leading-[1.3] sm:leading-[1.4] md:leading-[31px] w-full max-w-full lg:max-w-[625px]">
            Smart solutions across AI, design, development, video, and marketing
            built to elevate your brand and deliver results
          </h2>
        </div>
      </div>

      <div className="space-y-4 md:space-y-5 mt-8 md:mt-10 mb-8 md:mb-24">
        {cardData.map((card, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.8,
                ease: "backInOut",
              }}
              key={index}
              className="group relative flex items-center justify-between border-b border-[#5e5e5ecc] pt-3 md:pt-4 pb-6 md:pb-10 cursor-pointer w-full"
            >
              {/* Number */}
              <p className="text-[24px] sm:text-[28px] md:text-[35px] font-medium leading-[1.2] sm:leading-[45px] md:leading-[55px]">
                {card.number}/
              </p>

              {/* Text Content */}
              <div
                className="flex items-center space-x-4 md:space-x-6 relative z-10"
                onClick={() =>
                  navigate("/services", { state: { selectedTab: card.title } })
                }
              >
                <p className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] font-normal leading-[1.3] sm:leading-[40px] md:leading-[50px] lg:leading-[55px] text-right md:text-left">
                  {card.title}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 412"
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-1 md:mr-2 relative group-hover:-rotate-[35deg] group-hover:stroke-[#FBCA0C] transition-transform duration-400"
                  fill="none"
                  stroke="white"
                  strokeWidth="30"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="256" x2="430" y2="256" />
                  <path d="M288 96c64 96 96 96 160 160-64 64-96 64-160 160" />
                </svg>
              </div>

              {/* Hover Image (LEFT SIDE NOW) */}
              <div className="hidden md:block absolute left-16 lg:left-20 top-8 md:top-12 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className={`w-full h-full overflow-hidden transform  ${
                    index % 2 === 0
                      ? "group-hover:scale-105 group-hover:-rotate-[8deg] rotate-0 scale-50 origin-top-left"
                      : "group-hover:scale-105 group-hover:rotate-[8deg] rotate-0 scale-50 origin-bottom-left"
                  } transition-transform duration-500`}
                >
                  <img
                    src={card.image}
                    alt={`${card.title} Preview`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServiceSection;