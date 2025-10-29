import React from "react";

const AboutUsSection: React.FC = () => {
  const statsData = [
    { label: "Projects Delivered", value: "200+" },
    { label: "Client Satisfaction", value: "95%" },
    { label: "Happy Clients", value: "30+" },
    { label: "Conversion Rate", value: "98%" },
  ];

  const AboutUsVideo = "https://res.cloudinary.com/ddyymyvny/video/upload/v1761022341/About_us_he8bm7.mp4";

  return (
    <div
      className="text-white px-4 md:px-10 lg:px-16 py-16 md:py-20 pb-18 md:pb-40 min-h-screen flex flex-col relative"
      style={{
        borderTop: "1px solid transparent",
        borderImage:
          "linear-gradient(90deg, #000000 0%, #565656 50%, #000000 100%) 1",
      }}
    >
      {/* Header */}
      <div className="mb-6 md:mb-16">
        <h1 className="text-[16px] sm:text-[18px] md:text-[22px] font-light relative w-fit">
          About Us
          <span className="w-[4px] h-[4px] sm:w-[5px] sm:h-[5px] md:w-[6px] md:h-[6px] bg-[#30CF00] rounded-full absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-3"></span>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-between mb-12 md:mb-20 gap-8 md:gap-4">
        <div className="flex flex-col gap-y-6 md:gap-y-16">
          <h2 className="text-lg sm:text-xl md:text-2xl leading-[1.3] sm:leading-[1.4] md:leading-[31px] w-full max-w-full lg:max-w-[800px]">
            Canary is a creative tech agency that blends AI, design,
            development, and marketing to build bold, modern brands. From
            strategy to execution, we craft digital experiences that stand out
            and drive real growth
          </h2>

          <button className="group bg-[#FBCA0C] text-black text-xs font-normal leading-[23px] px-4 md:px-6 h-[28px] md:h-[30px] w-fit rounded-md flex items-center justify-center overflow-hidden relative transition-all duration-600 cursor-pointer">
            {/* Original text that moves left */}
            <span className="flex items-center transition-all duration-500 ease-out group-hover:-translate-x-60 group-hover:opacity-0">
              Know More{" "}
            </span>

            {/* Duplicate text that slides in from right */}
            <span className="absolute flex items-center transition-all duration-500 ease-out transform opacity-0 translate-x-40 group-hover:translate-x-0 group-hover:opacity-100">
              Know More{" "}
            </span>
          </button>
        </div>

        <div className="flex justify-center lg:mr-12">
          <div className="grid grid-cols-2 gap-x-16 md:gap-x-24 lg:gap-x-36 gap-y-8 md:gap-y-12">
            {statsData.map((stat, index) => (
              <div key={index}>
                <p className="text-base sm:text-lg md:text-xl leading-[27px] mb-2 md:mb-4">{stat.label}</p>
                <h3 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[65px] font-normal leading-[40px] sm:leading-[45px] md:leading-[50px] lg:leading-[55px]">
                  {stat.value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:px-8 lg:px-12 mt-5 md:mt-20">
        <video 
          src={AboutUsVideo} 
          autoPlay 
          loop 
          muted 
          className="w-full rounded-[20px] md:rounded-[28px] lg:rounded-[34px] overflow-hidden border-[4px] md:border-[6px] lg:border-[8px] border-[#2D2D2D]"
        ></video>
      </div>
    </div>
  );
};

export default AboutUsSection;