import React from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { FiLayers } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { BsChatLeftText } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";
import { FiHash } from "react-icons/fi";
import { GiTeamIdea } from "react-icons/gi";
import { FaEye } from "react-icons/fa";

const Grid: React.FC = () => {
  const Items = [
    {
      id: "01",
      icon: <BsLightningChargeFill className="size-6" />,
      title: "Alertness and Sensitivity",
      content:
        "Once used in mines to sense danger early, canaries symbolized alertness. At Canary Digital Solutions, our AI-powered marketing keeps your brand equally aware, ahead of market shifts and opportunities.",
    },
    {
      id: "02",
      icon: <FiLayers className="size-6" />,
      title: "Vibrant and Distinctive",
      content:
        "Like the bright canary that stands out, Canary Digital shines in the digital space, using AI-powered marketing to craft strategies that make your brand truly stand apart.",
    },
    {
      id: "03",
      icon: <FaRegClock className="size-6" />,
      title: "Time-Bound Delivery",
      content:
        "Like a canary's steady rhythm, Canary Digital values precision, delivering every project on time, every time, without compromising quality.",
    },
    {
      id: "04",
      icon: <BsChatLeftText className="size-6" />,
      title: "Communication Clarity",
      content:
        "Like the canary's clear song, Canary Digital ensures transparent communication and strategies that resonate — making your message heard loud and clear.",
    },
    {
      id: "05",
      icon: <FaRegLightbulb className="size-6" />,
      title: "Adaptability",
      content:
        "Like canaries that adapt anywhere, Canary Digital delivers flexible, tailored solutions for every business and market.",
    },
    {
      id: "06",
      icon: <FiHash className="size-6" />,
      title: "Cheerful and Positive",
      content:
        "Like the canary's cheerful spirit, Canary Digital fosters positive, collaborative partnerships for a smooth and rewarding experience.",
    },
    {
      id: "07",
      icon: <GiTeamIdea className="size-6" />,
      title: "Nurturing Environment",
      content:
        "Like canaries in a nurturing space, Canary Digital helps your business grow with continuous support and innovation for lasting success.",
    },
    {
      id: "08",
      icon: <FaEye className="size-6" />,
      title: "Brand Management",
      content:
        "Like canaries with keen senses, Canary Digital pays close attention to detail, delivering precise, high-quality solutions that help your business thrive in the digital age.",
    },
  ];

  return (
    <div className="flex flex-col px-4 md:px-10 lg:px-16 py-10 md:py-20">
      <h3 className="text-[#FBCA0C] text-lg md:text-xl leading-[26px] md:leading-[30px]">
        WHAT MAKES YOU DIFFERENT
      </h3>
      <div className="text-[32px] leading-[38px] md:text-[48px] md:leading-[55px] font-light py-4 md:py-5">
        <p>The Canary Advantage: </p>
        <p>Symbolism and Benefits for Your Business</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-8 md:mt-15">
        {Items.map((items, index) => {
          return (
            <div 
              className="flex bg-[#0A0A0A] border border-[#FFFFFF1A] rounded-[16px] p-6 md:p-8"
              key={index}
            >
              <div className="flex w-full">
                <div className="flex flex-col gap-3 md:gap-4 w-full">
                  <div className="flex justify-between items-start text-[#FBCA0C]">
                    <p className="text-base leading-6">{items.id}</p>
                    <div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-[10px] bg-[#FFFFFF0D] flex items-center justify-center flex-shrink-0">
                      {items.icon}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base leading-6 ">{items.title}</h3>
                    <p className="text-[#FFFFFFB2] text-sm md:text-base leading-[22px] md:leading-[26px]">
                      {items.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Grid;