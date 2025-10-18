import React from "react";
import BirdGIF from "../../assets/GIF/bird GIF.gif";
import { motion } from "framer-motion";
import ServiceImg1 from "../../assets/ServiceImg 1.png";
import ServiceImg2 from "../../assets/ServiceImg 2.png";
import ServiceImg3 from "../../assets/ServiceImg 3.png";
import ServiceImg4 from "../../assets/ServiceImg 4.png";
import ServiceImg5 from "../../assets/ServiceImg 5.png";

const OurServiceSection: React.FC = () => {
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
      title: "Design and Creative",
      image: ServiceImg4,
    },
    {
      number: "05",
      title: "Digital Marketing",
      image: ServiceImg5,
    },
  ];

  return (
    <div className=" text-white px-4 md:px-10 lg:px-16 py-22 min-h-screen flex flex-col relative">
      {/* Header */}
      <div className="flex w-full justify-between items-center mb-20">
        <div className="flex items-center gap-4">
          <h1 className="text-[18px] md:text-[22px] font-light relative">
            Our Services
            <span className="w-[6px] h-[6px] bg-[#30CF00] rounded-full absolute top-1/2 -translate-y-1/2 -right-3"></span>
          </h1>
          <img
            src={BirdGIF}
            alt="bird"
            className="w-[50px] h-[50px] object-contain"
          />
        </div>

        {/* Arrow Controls — stays at top-right */}
        <div className="flex items-center gap-3">
          <h2 className="text-2xl leading-[31px] w-full max-w-[625px]">
            Smart solutions across AI, design, development, video, and marketing
            built to elevate your brand and deliver results
          </h2>
        </div>
      </div>

      <div className="space-y-5 mt-10 mb-24">
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
              className="group relative flex items-center justify-between border-b border-[#5e5e5ecc] pt-4 pb-10 cursor-pointer w-full "
            >
              {/* Number */}
              <p className="text-[35px] font-medium leading-[55px]">
                {card.number}/
              </p>

              {/* Text Content */}
              <div className="flex items-center space-x-6 relative z-10">
                <p className="text-[36px] font-normal leading-[55px]">
                  {card.title}
                </p>
                {/* <img src={Arrow3} alt="" className="mr-2 relative group-hover:-rotate-[35deg] transition-transform duration-400 " /> */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 412"
                  className="w-7 h-7 mr-2 relative group-hover:-rotate-[35deg] group-hover:stroke-[#FBCA0C] transition-transform duration-400"
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
              <div className="absolute left-20 top-12 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
                    className="w-full h-full object-cover "
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
