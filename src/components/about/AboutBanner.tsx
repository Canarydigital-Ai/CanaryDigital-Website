import React from "react";
import banner from "../../assets/aboutus/aboutus-bannerbg.png";
import CanaryGif from "../../assets/aboutus/CanaryLogoGif.gif";
import whoweare from "../../assets/aboutus/whoweareimg.png";

const AboutBanner: React.FC = () => {
  return (
    <div className="">
      {/* Banner Section */}
      <div
        className="relative w-full bg-no-repeat h-[350px] md:h-[470px] flex items-center px-4 md:px-10 lg:px-16"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover", 
        }}
      >
        <div className="relative z-40 grid grid-cols-1 md:grid-cols-2 items-center w-full">
          <div className="space-y-3 md:space-y-4 order-1 md:order-0">
            <h2 className="text-[32px] leading-[38px] md:text-[48px] md:leading-[55px] w-full max-w-[770px]">
              Unlock Success with Canary Digital{" "}
              <span className="text-[#FBC800]">AI-Powered Marketing</span>
            </h2>
            <p className="text-[#C9C9C9] text-base md:text-2xl leading-[22px] md:leading-[30px]">
              From concept to conversion, we turn ideas into digital success
              stories.
            </p>
          </div>
          <div className="flex justify-center mt-6 md:mt-0">
            <img 
              src={CanaryGif} 
              className="w-[120px] md:w-[200px]" 
              alt="Canary Digital Logo Animation"
            />
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 md:px-10 lg:px-16 py-6 md:py-16 lg:pb-32">
        <div className="flex justify-center order-2 md:order-1">
          <img 
            src={whoweare} 
            alt="Who we are visual representation"
            className="w-full max-w-[500px] md:max-w-none"
          />
        </div>
        <div className="flex flex-col gap-6 md:gap-10 order-1 md:order-2">
          <h4 className="text-[#FBCA0C] text-lg md:text-xl leading-[26px] md:leading-[30px]">
            WHO WE ARE
          </h4>
          <h2 className="text-[32px] leading-[38px] md:text-[48px] md:leading-[55px] w-full max-w-[770px]">
            Transforming Businesses in the Digital Age.
          </h2>
          <p className="text-[#C9C9C9] text-base md:text-2xl leading-[24px] md:leading-[30px] w-full max-w-[760px]">
            Canary Digital is a forward-thinking digital solutions provider
            dedicated to delivering top-notch AI-powered software, web and
            mobile app development, and effective digital marketing strategies.
            Our team of experts is committed to driving your business success
            through technology and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;