import React from "react";

import BrandLogo1 from "../../assets/brands logos/Brand Logo 1.png";
import BrandLogo2 from "../../assets/brands logos/Brand Logo 2.png";
import BrandLogo3 from "../../assets/brands logos/Brand Logo 3.png";
import BrandLogo4 from "../../assets/brands logos/Brand Logo 4.png";
import BrandLogo5 from "../../assets/brands logos/Brand Logo 5.png";
import BrandLogo6 from "../../assets/brands logos/Brand Logo 6.png";
import BrandLogo7 from "../../assets/brands logos/Brand Logo 7.png";
import BrandLogo8 from "../../assets/brands logos/Brand Logo 8.png";
import BrandLogo9 from "../../assets/brands logos/Brand Logo 9.png";
import BrandLogo10 from "../../assets/brands logos/Brand Logo 10.png";
import BrandLogo11 from "../../assets/brands logos/Brand Logo 11.png";
import BrandLogo12 from "../../assets/brands logos/Brand Logo 12.png";
import BrandLogo13 from "../../assets/brands logos/Brand Logo 13.png";
import BrandLogo14 from "../../assets/brands logos/Brand Logo 14.png";
import BrandLogo15 from "../../assets/brands logos/Brand Logo 15.png";
import BrandLogo16 from "../../assets/brands logos/Brand Logo 16.png";
import BrandLogo17 from "../../assets/brands logos/Brand Logo 17.png";
import BrandLogo18 from "../../assets/brands logos/Brand Logo 18.png";
import BrandLogo19 from "../../assets/brands logos/Brand Logo 19.png";
import BrandLogo20 from "../../assets/brands logos/Brand Logo 20.png";
import BrandLogo21 from "../../assets/brands logos/Brand Logo 21.png";
import BrandLogo22 from "../../assets/brands logos/Brand Logo 22.png";
import BrandLogo23 from "../../assets/brands logos/Brand Logo 23.png";
import BrandLogo24 from "../../assets/brands logos/Brand Logo 24.png";
import BrandLogo25 from "../../assets/brands logos/Brand Logo 25.png";
import BrandLogo26 from "../../assets/brands logos/Brand Logo 26.png";
import BrandLogo27 from "../../assets/brands logos/Brand Logo 27.png";
import BrandLogo28 from "../../assets/brands logos/Brand Logo 28.png";
import BrandLogo29 from "../../assets/brands logos/vihraam.png";
import BrandLogo30 from "../../assets/brands logos/evolv.png";
import BrandLogo31 from "../../assets/brands logos/foggy.png";
import BrandLogo32 from "../../assets/brands logos/klf.png";
import BrandLogo33 from "../../assets/brands logos/joans.png";
import BrandLogo34 from "../../assets/brands logos/urban-gossip.png";
import BrandLogo35 from "../../assets/brands logos/shaaman.png";
import BrandLogo36 from "../../assets/brands logos/flora.png";

const BrandSection: React.FC = () => {
  const brandLogos = [
    BrandLogo32,
    BrandLogo35,
    BrandLogo3,
    BrandLogo36,
    BrandLogo33,
    BrandLogo34,
    BrandLogo29,
    BrandLogo30,
    BrandLogo31,
    BrandLogo8,
    BrandLogo9,
    BrandLogo10,
    BrandLogo11,
    BrandLogo12,
    BrandLogo13,
    BrandLogo14,
    BrandLogo15,
    BrandLogo16,
    BrandLogo17,
    BrandLogo18,
    BrandLogo19,
    BrandLogo20,
    BrandLogo21,
    BrandLogo22,
    BrandLogo23,
    BrandLogo24,
    BrandLogo25,
    BrandLogo26,
    BrandLogo27,
    BrandLogo28,
    BrandLogo1,
    BrandLogo2,
    BrandLogo4,
    BrandLogo5,
    BrandLogo6,
    BrandLogo7,
  ];

  return (
    <div className="text-white px-4 md:px-10 lg:px-16 py-16 md:py-20 pb-24 md:pb-40 min-h-screen flex flex-col relative">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-6">
        <div className="flex flex-col w-full lg:max-w-[420px] space-y-4 md:space-y-6">
          <h2 className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[32px] font-light relative w-full max-w-full lg:max-w-[280px] leading-[1.3] sm:leading-[1.4] md:leading-[38px]">
            Brands That
            <span className="text-[#FBCA0C]"> Partnered With Us</span>
          </h2>

          <p className="text-base sm:text-lg text-[#C9C9C9] leading-[1.4] sm:leading-[20px] w-full max-w-full lg:max-w-[400px]">
            From startups to established leaders - Explore the brands that
            trusted us to spark real growth.
          </p>
        </div>

        {/* right section */}
        <div className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-14 justify-items-center items-center relative">
            {brandLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-full h-full relative"
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="object-contain w-auto h-auto max-w-[80px] sm:max-w-[100px] md:max-w-none opacity-90 hover:opacity-100 transition duration-300"
                />
              </div>
            ))}

            {/* Column Dividers - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block absolute top-0 left-[16.66%] w-px h-full bg-[#1a1a1a]"></div>
            <div className="hidden lg:block absolute top-0 left-[33.33%] w-px h-full bg-[#1a1a1a]"></div>
            <div className="block absolute top-0 left-[50%] w-px h-full bg-[#1a1a1a]"></div>
            <div className="hidden lg:block absolute top-0 left-[66.66%] w-px h-full bg-[#1a1a1a]"></div>
            <div className="hidden lg:block absolute top-0 left-[83.33%] w-px h-full bg-[#1a1a1a]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;