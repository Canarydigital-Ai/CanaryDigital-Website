import React from "react";
import { HiArrowLongDown } from "react-icons/hi2";
import { motion } from "framer-motion";
import RoundedText from "../../assets/Rounded Text.png";

import Vishraam from "../../assets/brands logos/vihraam.png";
import Evolv from "../../assets/brands logos/evolv.png";
import Foggy from "../../assets/brands logos/foggy.png";
import KLF from "../../assets/brands logos/klf.png";
import Joans from "../../assets/brands logos/joans.png";
import UrbanGossip from "../../assets/brands logos/urban-gossip.png";
import Shaaman from "../../assets/brands logos/shaaman.png";
import Flora from "../../assets/brands logos/flora.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HeroBrandsSection: React.FC = () => {
  const navigate = useNavigate();


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
  const scrollToProducts = () => {
    const productsSection = document.getElementById("our-products-section");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <section className="  px-4 md:px-14 py-10 pb-20 ">
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
          <div className="flex items-center justify-center rounded-full w-[120px] h-[120px] text-amber-400 relative cursor-pointer"
           onClick={scrollToProducts}
          >
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
        <div className="group relative max-w-2xl mx-auto py-4">
          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-items-center gap-y-10 transition-all duration-500 ">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center transition-all duration-300"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="  object-contain "
                />
              </div>
            ))}
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-xs">
            <p 
              onClick={() => navigate("/brands")}
            className="text-lg md:text-xl font-light tracking-wide flex items-center gap-2 cursor-pointer">
              Meet our Clients
              <MdOutlineKeyboardArrowRight className="size-4" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBrandsSection;
