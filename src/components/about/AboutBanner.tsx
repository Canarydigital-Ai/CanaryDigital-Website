import React from "react";
import banner from "../../assets/aboutus/aboutus-bannerbg.png";
import gif1 from "../../assets/aboutus/gif1.gif";
import whoweare from "../../assets/aboutus/whoweareimg.png";

const AboutBanner: React.FC = () => {
  return (
    <div>
      <div className="relative ">
        <img src={banner} alt="banner" className="w-full" />

        <div className="absolute inset-0 grid grid-cols-2 items-center px-4 md:px-10 lg:px-16 py-8 md:py-20">
          <div className="space-y-4">
            <h2 className="text-[48px] leading-[55px] w-full max-w-[770px]">
              Unlock Success with Canary Digital{" "}
              <span className="text-[#FBC800]">AI-Powered Marketing</span>
            </h2>
            <p className="text-[#C9C9C9] text-2xl leading-[30px]">
              From concept to conversion, we turn ideas into digital success
              stories.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={gif1} className="w-24 " />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center gap-8 px-4 md:px-10 lg:px-16 py-6 pb-32">
        <div className="flex justify-center ">
          <img src={whoweare} />
        </div>
        <div className="flex flex-col gap-10">
          <h4 className="text-[#FBCA0C] text-xl leading-[30px]">WHO WE ARE</h4>
          <h2 className="text-[48px] leading-[55px] w-full max-w-[770px]">
            Transforming Businesses in the Digital Age.
          </h2>
          <p className="text-[#C9C9C9] text-2xl leading-[30px] w-full max-w-[760px]">
            Canary Digital is a forward-thinking digital solutions provider dedicated to delivering top-notch AI-powered software, web and mobile app development, and effective digital marketing strategies. Our team of experts is committed to driving your business success through technology and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
