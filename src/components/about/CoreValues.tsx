import React from "react";
import CoreBg from "../../assets/aboutus/CoreValueImg.png";

const CoreValues: React.FC = () => {
  return (
    <div
      className="h-full min-h-[500px] md:max-h-[710px] py-10 md:py-0 flex flex-col justify-center items-center relative px-4 md:px-10 lg:px-16"
      style={{
        backgroundImage: `url(${CoreBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-center flex-col gap-10 md:gap-20 w-full">
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
          <h4 className="text-[#FBCA0C] text-lg md:text-xl leading-[26px] md:leading-[30px]">
            CORE VALUES
          </h4>
          <h2 className="text-[32px] leading-[38px] md:text-[48px] md:leading-[55px] w-full max-w-[90%] md:max-w-full">
            Empowering Clients through Innovation
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-gradient-to-r from-[#191919] to-[#282828] flex flex-col rounded-[15px] p-6 md:p-8 gap-4 md:gap-6 w-full md:w-[560px] mx-auto">
            <h3 className="text-[#FBCA0C] font-normal text-[28px] leading-[32px] md:text-[36px] md:leading-[30px]">
              Our Vision
            </h3>
            <p className="text-[#C9C9C9] text-base md:text-2xl leading-[24px] md:leading-[30px]">
              To lead in AI-Powered Digital Marketing, recognized for
              innovation, reliability, and delivering impactful results that
              drive client success.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#191919] to-[#282828] flex flex-col rounded-[15px] p-6 md:p-8 gap-4 md:gap-6 w-full md:w-[560px] mx-auto">
            <h3 className="text-[#FBCA0C] font-normal text-[28px] leading-[32px] md:text-[36px] md:leading-[30px]">
              Our Mission
            </h3>
            <p className="text-[#C9C9C9] text-base md:text-2xl leading-[24px] md:leading-[30px]">
              To lead in AI-Powered Digital Marketing, recognized for
              innovation, reliability, and delivering impactful results that
              drive client success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;