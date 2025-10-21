import React from "react";
import ToolImg1 from "../../assets/Tool Img 1.png";
import ToolImg2 from "../../assets/Tool Img 2.png";
import ToolImg3 from "../../assets/Tool Img 3.png";
import ToolImg4 from "../../assets/Tool Img 4.png";
import ToolImg5 from "../../assets/Tool Img 5.png";
import ToolImg6 from "../../assets/Tool Img 6.png";
import ToolImg7 from "../../assets/Tool Img 7.png";
import ToolImg8 from "../../assets/Tool Img 8.png";
import ToolImg9 from "../../assets/Tool Img 9.png";
import ToolImg10 from "../../assets/Tool Img 10.png";
import ToolImg11 from "../../assets/Tool Img 11.png";
import ToolImg12 from "../../assets/Tool Img 12.png";
import ToolImg13 from "../../assets/Tool Img 13.png";
import ToolImg14 from "../../assets/Tool Img 14.png";
import ToolImg15 from "../../assets/Tool Img 15.png";
import ToolImg16 from "../../assets/Tool Img 16.png";
import ToolImg17 from "../../assets/Tool Img 17.png";

const ToolsSlider: React.FC = () => {
  const tools = [
    { id: 1, name: "Json", image: ToolImg1 },
    { id: 2, name: "Next.js", image: ToolImg2 },
    { id: 3, name: "React", image: ToolImg3 },
    { id: 4, name: "Figma", image: ToolImg4 },
    { id: 5, name: "Tailwind Css", image: ToolImg5 },
    { id: 6, name: "HTML", image: ToolImg6 },
    { id: 7, name: "AWS", image: ToolImg7 },
    { id: 8, name: "JavaScript", image: ToolImg8 },
    { id: 9, name: "Framer Motion", image: ToolImg9 },
    { id: 10, name: "After Effects", image: ToolImg10 },
    { id: 11, name: "Node.js", image: ToolImg11 },
    { id: 12, name: "Illustrator", image: ToolImg12 },
    { id: 13, name: "WordPress", image: ToolImg13 },
    { id: 14, name: "FireBase", image: ToolImg14 },
    { id: 15, name: "Photoshop", image: ToolImg15 },
    { id: 16, name: "MongoDB", image: ToolImg16 },
    { id: 17, name: "SQL", image: ToolImg17 },
  ];

  return (
    <div>
      <div className="mb-16">
        <h1 className="text-[18px] md:text-xl font-light relative w-fit">
          Tools We Play with
          <span className="w-[6px] h-[6px] bg-[#30CF00] rounded-full absolute top-1/2 -translate-y-1/2 -right-3"></span>
        </h1>
      </div>

      <div className="relative overflow-hidden w-full ">
        {/* gradient blur */}
        <div className="w-14 h-full bg-gradient-to-r from-[#000000] to-transparent absolute left-0 z-10"></div>
        <div className="w-14 h-full bg-gradient-to-l from-[#000000] to-transparent absolute right-0 z-10"></div>

        <div className="animate-scroll flex w-max items-center">
          {/* Main set */}
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="flex flex-col items-center justify-center mx-8 md:mx-12"
            >
              <img
                src={tool.image}
                alt={tool.name}
                className="w-20 h-20 lg:w-auto lg:h-auto object-contain mb-2"
              />
            </div>
          ))}

          {/* Duplicate for seamless scroll */}
          {tools.map((tool) => (
            <div
              key={`dup-${tool.id}`}
              className="flex flex-col items-center justify-center mx-8 md:mx-12"
            >
              <img
                src={tool.image}
                alt={tool.name}
                className="w-20 h-20 lg:w-auto lg:h-auto object-contain mb-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsSlider;
