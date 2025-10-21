import React, { useRef } from "react";
import Slider from "react-slick";
import ToolsSlider from "./ToolsSlider";

const AdvantagesSection: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const advantages = [
    {
      id: "1",
      number: "01",
      title: "Standout Presence & Clear Communication",
      description:
        "Canary Digital helps your brand shine with distinctive solutions and ensures your message is delivered clearly and effectively.",
    },
    {
      id: "2",
      number: "02",
      title: "Trustworthy & Timely",
      description:
        "Canary Digital helps your brand shine with distinctive solutions and ensures your message is delivered clearly and effectively.",
    },
    {
      id: "3",
      number: "03",
      title: "Flexible & Adaptive",
      description:
        "Our solutions are tailored to fit your unique business needs and evolve with changing market conditions.",
    },
    {
      id: "4",
      number: "04",
      title: "Positive & Detail-Oriented",
      description:
        "We foster positive partnerships and deliver with precision, ensuring every detail meets the highest standards.",
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div
      className="text-white px-4 md:px-10 lg:px-16 py-20 pb-36 min-h-screen flex flex-col relative"
      style={{
        borderTop: "1px solid transparent",
        borderImage:
          "linear-gradient(90deg, #000000 0%, #565656 50%, #000000 100%) 1",
      }}
    >
      {/* Header */}
      <div className="flex w-full justify-between items-center mb-28">
        <h2 className="text-[18px] md:text-[22px] xl:text-[32px] font-light relative w-full max-w-[460px] leading-[42px]">
          Discover the Key <span className="text-[#FBCA0C]">Advantages</span> of
          Choosing Canary Digital.AI
        </h2>
      </div>

      {/* Advantages Slider */}
      <Slider ref={sliderRef} {...settings} className="w-full mb-28">
        {advantages.map((item) => (
          <div key={item.id} className="pr-5">
            <div className="space-y-10 space-x-20">
              <h2 className="text-6xl lg:text-[128px] font-medium border-b border-[#565656] pb-4">
                {item.number}
              </h2>
              <h3 className="text-2xl font-medium leading-[27px]">
                {item.title.includes("&") ? (
                  <>
                    {item.title.split("&")[0]} & <br />
                    {item.title.split("&")[1]}
                  </>
                ) : (
                  item.title
                )}
              </h3>
              <p className="text-base text-[#C9C9C9] leading-[25px] w-full max-w-[400px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
 
      <ToolsSlider /> 
    </div>
  );
};

export default AdvantagesSection;
