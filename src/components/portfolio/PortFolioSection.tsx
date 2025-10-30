import React, { useRef, useState } from "react";
import Slider from "react-slick";

import PortfolioImg1 from "../../assets/portfolio imgs/Portfolio img1.png";
import PortfolioImg2 from "../../assets/portfolio imgs/Portfolio img2.png";
import PortfolioImg3 from "../../assets/portfolio imgs/Portfolio img3.png";
import PortfolioImg4 from "../../assets/portfolio imgs/Portfolio img4.png";
import PortfolioImg5 from "../../assets/portfolio imgs/Portfolio img5.png";
import PortfolioImg6 from "../../assets/portfolio imgs/Portfolio img6.png";
import PortfolioImg7 from "../../assets/portfolio imgs/Portfolio img7.png";
import PortfolioImg8 from "../../assets/portfolio imgs/Portfolio img8.png";
import PortfolioImg9 from "../../assets/portfolio imgs/Portfolio img9.png";
import PortfolioImg10 from "../../assets/portfolio imgs/Portfolio img10.png";
import PortfolioImg11 from "../../assets/portfolio imgs/Portfolio img11.png";

import PortfolioRightImg1 from "../../assets/portfolio imgs/PortfolioRightImg 1.png";
import PortfolioRightImg2 from "../../assets/portfolio imgs/PortfolioRightImg 2.png";
import PortfolioRightImg3 from "../../assets/portfolio imgs/PortfolioRightImg 3.png";
import PortfolioRightImg4 from "../../assets/portfolio imgs/PortfolioRightImg 4.png";
import PortfolioRightImg5 from "../../assets/portfolio imgs/PortfolioRightImg 5.png";
import PortfolioRightImg6 from "../../assets/portfolio imgs/PortfolioRightImg 6.png";
import PortfolioRightImg7 from "../../assets/portfolio imgs/PortfolioRightImg 7.png";
import PortfolioRightImg8 from "../../assets/portfolio imgs/PortfolioRightImg 8.png";
import PortfolioRightImg9 from "../../assets/portfolio imgs/PortfolioRightImg 9.png";
import PortfolioRightImg10 from "../../assets/portfolio imgs/PortfolioRightImg 10.png";
import PortfolioRightImg11 from "../../assets/portfolio imgs/PortfolioRightImg 11.png";

const portfolioImages = [
  {
    image: PortfolioImg1,
    title: "Graphic Design",
    rightImg: PortfolioRightImg1,
  },
  { image: PortfolioImg2, title: "Print Media", rightImg: PortfolioRightImg2 },
  { image: PortfolioImg3, title: "UI/UX", rightImg: PortfolioRightImg3 },
  {
    image: PortfolioImg4,
    title: "Graphic Design",
    rightImg: PortfolioRightImg4,
  },
  {
    image: PortfolioImg5,
    title: "Motion Animation",
    rightImg: PortfolioRightImg5,
  },
  {
    image: PortfolioImg6,
    title: "Video Production",
    rightImg: PortfolioRightImg7,
  },
  {
    image: PortfolioImg7,
    title: "Graphic Design",
    rightImg: PortfolioRightImg6,
  },
  {
    image: PortfolioImg8,
    title: "Motion Graphics",
    rightImg: PortfolioRightImg8,
  },
  { image: PortfolioImg9, title: "Print Media", rightImg: PortfolioRightImg9 },
  { image: PortfolioImg10, title: "UI/UX", rightImg: PortfolioRightImg10 },
  { image: PortfolioImg11, title: "UI/UX", rightImg: PortfolioRightImg11 },
];

const PortFolioSection: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } }, 
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="px-4 md:px-10 lg:px-16 py-8 md:py-20 pb-16 md:pb-36 flex flex-col justify-center relative">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-4">
        <div className="lg:col-span-2 flex flex-col gap-12 md:gap-20">
          <div className="relative">
            {/* Main Heading */}
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-[1.2] sm:leading-[1.3] md:leading-[56px] lg:leading-[62px] font-normal text-white">
              Where ideas turn into interfaces, stories move through pixels, and
              every frame is designed to make you
            </h2>

            {/* Animated Yellow Highlight */}
            <div className="absolute left-0 lg:left-[240px] bottom-0 bg-[#FBCA0C] rounded-full w-full lg:w-[330px] h-[40px] sm:h-[50px] lg:h-[60px] flex items-center mt-4 lg:mt-0">
              <div className="mx-2 sm:mx-4 overflow-hidden w-full">
                <div className="flex whitespace-nowrap animate-infinite-slide text-[24px] sm:text-[32px] md:text-[40px] lg:text-[52px] leading-[1.2] sm:leading-[1.3] md:leading-[50px] lg:leading-[62px] text-black">
                  <span className="mx-2 sm:mx-3">feel,</span>
                  <span className="mx-2 sm:mx-3">think,</span>
                  <span className="mx-2 sm:mx-3">and remember.</span>
                  <span className="mx-2 sm:mx-3">feel,</span>
                  <span className="mx-2 sm:mx-3">think,</span>
                  <span className="mx-2 sm:mx-3">and remember.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-10">
            <h1 className="text-[16px] sm:text-[18px] md:text-[22px] font-light relative w-fit">
              Portfolio
              <span className="w-[4px] h-[4px] sm:w-[5px] sm:h-[5px] md:w-[6px] md:h-[6px] bg-[#30CF00] rounded-full absolute top-2 -translate-y-1/2 -right-2 sm:-right-3"></span>
            </h1>

            <div
              className="w-full border-b lg:-ml-16"
              style={{
                borderImage:
                  "linear-gradient(90deg, #2B2B2B 0%, #000000 95.43%) 1",
              }}
            ></div>

            {/* Slider Section */}
            <div className="relative">
              <div className="absolute right-0 top-0 h-full w-16 sm:w-24 md:w-32 lg:w-[220px] bg-gradient-to-l from-[#000000] to-transparent pointer-events-none z-10"></div>

              <Slider ref={sliderRef} {...settings} className="w-full relative">
                {portfolioImages.map((item, i) => (
                  <div key={i} className="px-1">
                    <div
                      className="relative overflow-hidden rounded-[8px] md:rounded-[10px] group"
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <img
                        src={item.image}
                        alt={`Portfolio ${i + 1}`}
                        className="transition-transform duration-500 group-hover:scale-110"
                      />

                      <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out bg-black/90 py-2 md:py-3 flex items-center justify-center">
                        <p className="text-white text-sm sm:text-base font-normal">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/* Right main image — dynamically changes */}
        <div className="relative lg:col-span-1 flex justify-center items-start lg:items-end h-[400px] md:h-[500px] lg:h-auto">
          {/* Render both images but fade between them */}
          {portfolioImages.map((item, i) => (
            <img
              key={i}
              src={item.rightImg}
              alt=""
              className={`absolute transition-opacity duration-700 ease-in-out h-full lg:h-auto object-contain ${
                hoveredIndex === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Default image (visible when none hovered) */}
          <img
            src={PortfolioRightImg1}
            alt=""
            className={`absolute transition-opacity duration-700 ease-in-out h-full lg:h-auto object-contain ${
              hoveredIndex === null ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      <div className="w-full max-w-full lg:max-w-3xl mt-8 md:mt-14">
        <p className="text-base sm:text-lg md:text-xl text-[#A1A1A1] font-normal leading-[1.4] sm:leading-[24px] md:leading-[27px]">
          Whatever you're seeking stunning visuals, intuitive interfaces, bold
          motion or cinematic stories you'll find it right here at Canary. This
          is where design meets impact
        </p>
      </div>
    </div>
  );
};

export default PortFolioSection;