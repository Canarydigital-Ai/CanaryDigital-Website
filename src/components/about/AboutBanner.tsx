import React from "react";
import banner from "../../assets/aboutus/aboutus-bannerbg.png";
import gif1 from "../../assets/aboutus/gif1.gif";

const AboutBanner: React.FC = () => {
  return (
    <div className="relative ">
      <img src={banner} alt="banner" className="w-full" />

      <div className="absolute inset-0 grid grid-cols-2 items-center px-4 md:px-10 lg:px-16 py-8 md:py-20">
        <div>
          <div className="text-4xl text-white">
            Unlock Success with Canary Digital <br />
            <span className="text-yellow-400">AI-Powered Marketing</span>
            <span className="block text-lg font-thin text-[#C9C9C9] mt-2">
              From concept to conversion, we turn ideas into digital success
              stories.
            </span>
          </div>
        </div>

        <div className="flex justify-center">
          <img src={gif1} className="w-24 " />
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
