import React from "react";
import CoreBg from "../../assets/aboutus/CoreValueImg.png";

const coreValues: React.FC = () => {
  return (
    <div
      className="h-full max-h-[710px]  flex flex-col justify-center items-center relative px-4 md:px-10 lg:px-16"
      style={{
        backgroundImage: `url(${CoreBg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center justify-center flex-col gap-20">
        <div className="flex flex-col items-center gap-6">
          <h4 className="text-[#FBCA0C] text-xl leading-[30px]">CORE VALUES</h4>
          <h2 className="text-[48px] leading-[55px] w-full ">
            Empowering Clients through Innovation
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-[#191919] to-[#282828] flex flex-col rounded-[15px] p-8 gap-6 w-[560px]">
            <h3 className="text-[#FBCA0C] font-normal text-[36px] leading-[30px]">
              Our Vision
            </h3>
            <p className="text-[#C9C9C9] text-2xl leading-[30px]">
              To lead in AI-Powered Digital Marketing, recognized for
              innovation, reliability, and delivering impactful results that
              drive client success.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#191919] to-[#282828] flex flex-col rounded-[15px] p-8 gap-6 w-[560px]">
            <h3 className="text-[#FBCA0C] font-normal text-[36px] leading-[30px]">
              Our Mission
            </h3>
            <p className="text-[#C9C9C9] text-2xl leading-[30px]">
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

export default coreValues;
