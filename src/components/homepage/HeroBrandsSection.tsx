import React from "react";
import { HiArrowLongDown } from "react-icons/hi2";
import { motion } from "framer-motion";
import RoundedText from "../../assets/Rounded Text.png";

import Vishraam from "../../assets/vihraam.png";
import Evolv from "../../assets/evolv.png";
import Foggy from "../../assets/foggy.png";
import KLF from "../../assets/klf.png";
import Joans from "../../assets/joans.png";
import UrbanGossip from "../../assets/urban-gossip.png";
import Shaaman from "../../assets/shaaman.png";
import Flora from "../../assets/flora.png";

const HeroBrandsSection: React.FC = () => {
  const brands = [
    { name: "Urban Gossip", logo: UrbanGossip },
    { name: "Le Flora Towers", logo: Flora },
    { name: "Shaaman", logo: Shaaman },
    { name: "Joans Pastry", logo: Joans },
    { name: "KLF", logo: KLF },
    { name: "Foggy", logo: Foggy },
    { name: "Evolv", logo: Evolv },
    { name: "Visbraam", logo: Vishraam },
  ];

  return (
    <section className="bg-black text-white px-4 md:px-14 py-10 pb-20 ">
      <div className="space-y-24">
        {/* Hero Text */}
        <div className="flex items-start justify-between">
          <div className="w-full max-w-7xl">
            <h1 className="text-3xl md:text-4xl lg:text-[44px] font-light leading-[50px]">
              Smart brands need smart marketing. We bring AI, design,
              development, and automation together to{" "}
              <span className="text-yellow-400 font-normal">
                grow your business
              </span>
            </h1>
          </div>

          {/* Circular Badge */}
          <div className="flex items-center justify-center rounded-full w-[120px] h-[120px] text-amber-400 relative cursor-pointer">
            <div className="absolute bottom-4 text-white rounded-full w-18 h-18 flex items-center justify-center">
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "backInOut",
                }}
              >
                <HiArrowLongDown size={25} />
              </motion.div>
            </div>

            {/* Circular Text Image with Rotation */}
            <motion.img
              src={RoundedText}
              alt="Circular text"
              className="absolute w-full h-full"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </div>

        {/* Brand Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-items-center gap-y-10 max-w-2xl mx-auto ">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center   transition-all duration-300 "
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full  "
              />
            </div>
          ))}
        </div>
 
      </div>
    </section>
  );
};

export default HeroBrandsSection;
