import React from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { FiLayers } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { BsChatLeftText } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";
import { FiHash } from "react-icons/fi";
import { GiTeamIdea } from "react-icons/gi";
import { FaEye } from "react-icons/fa";

const Grid = () => {
  const Items = [
    {
      id: "01",
      icon: <BsLightningChargeFill />,
      title: "Alertness and Sensitivity",
      content:
        "Once used in mines to sense danger early, canaries symbolized alertness. At Canary Digital Solutions, our AI-powered marketing keeps your brand equally aware, ahead of market shifts and opportunities.",
    },
    {
      id: "02",
      icon: <FiLayers />,
      title: "Vibrant and Distinctive",
      content:
        "Like the bright canary that stands out, Canary Digital shines in the digital space, using AI-powered marketing to craft strategies that make your brand truly stand apart.",
    },
    {
      id: "03",
      icon: <FaRegClock />,
      title: "Time-Bound Delivery",
      content:
        "Like a canary’s steady rhythm, Canary Digital values precision, delivering every project on time, every time, without compromising quality.",
    },
    {
      id: "04",
      icon: <BsChatLeftText />,
      title: "Communication Clarity",
      content:
        "Like the canary’s clear song, Canary Digital ensures transparent communication and strategies that resonate — making your message heard loud and clear.",
    },
    {
      id: "05",
      icon: <FaRegLightbulb />,
      title: "Adaptability",
      content:
        "Like canaries that adapt anywhere, Canary Digital delivers flexible, tailored solutions for every business and market.",
    },
    {
      id: "06",
      icon: <FiHash />,
      title: "Cheerful and Positive",
      content:
        "Like the canary’s cheerful spirit, Canary Digital fosters positive, collaborative partnerships for a smooth and rewarding experience.",
    },
    {
      id: "07",
      icon: <GiTeamIdea />,
      title: "Nurturing Environment",
      content:
        "Like canaries in a nurturing space, Canary Digital helps your business grow with continuous support and innovation for lasting success.",
    },
    {
      id: "08",
      icon: <FaEye />,
      title: "Brand Management",
      content:
        "Like canaries with keen senses, Canary Digital pays close attention to detail, delivering precise, high-quality solutions that help your business thrive in the digital age.",
    },
  ];

  return (
    <div className="flex flex-col p-20">
      <span className="text-[#FBCA0C]">WHAT MAKES YOU DIFFERENT</span>
      <span className="text-4xl font-light py-5">
        The Canary Advantage:
        <br />
        Symbolism and Benefits for Your Business
      </span>

      <div className="grid grid-cols-4 gap-5 mt-15">
        {Items.map((items, index) => {
          return (
            <div className="flex border border-[#FFFFFF1A] rounded-lg p-5">
              <div className="flex flex-cols-4" key={index}>
                <div className="flex flex-col">
                  <div className="flex justify-between text-[#FBCA0C]">
                    <span className="text-base">{items.id}</span>
                    <span className="text-[#FBCA0C]">{items.icon}</span>
                  </div>
                  <div className="flex flex-col py-10 text-sm">
                    <h3>{items.title}</h3>
                    <span className="text-[#B5B5B5] py-2">{items.content}</span>
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
