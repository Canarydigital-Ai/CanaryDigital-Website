import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const advantages = [
  {
    id: "1",
    number: "01",
    title: "E-commerce & Retail",
    description:
      "Helping brands scale faster with smart, data-led strategies that turn every click into a customer.",
  },
  {
    id: "2",
    number: "02",
    title: "Healthcare & Wellness",
    description:
      "Building trust and visibility for clinics and wellness brands through meaningful, patient-focused digital outreach.",
  },
  {
    id: "3",
    number: "03",
    title: "Flexible & Adaptive",
    description:
      "Our solutions are tailored to fit your unique business needs and evolve with changing market conditions",
  },
  {
    id: "4",
    number: "04",
    title: "Construction",
    description:
      "Empowering builders and developers with digital solutions that attract the right leads and strengthen credibility.",
  },
  {
    id: "5",
    number: "05",
    title: "Education",
    description:
      "Driving admissions and engagement for schools and EdTech brands with content, campaigns, and smart automation.",
  },
  {
    id: "6",
    number: "06",
    title: "Hospitality & Tourism",
    description:
      "Crafting immersive digital experiences that turn travel inspiration into real-world bookings and loyal guests.",
  },
  {
    id: "7",
    number: "07",
    title: "Beauty & Wellness",
    description:
      "Positioning beauty and skincare brands for growth with visuals, content, and campaigns that spark desire.",
  },
  {
    id: "8",
    number: "08",
    title: "Food & Beverage",
    description:
      "Creating appetite-driven branding and marketing that helps food businesses get discovered, ordered, and remembered.",
  },
  {
    id: "9",
    number: "09",
    title: "Technology & Innovation",
    description:
      "Fueling startups, SaaS, and deep-tech brands with performance-driven marketing built for the future of business.",
  },
  {
    id: "10",
    number: "10",
    title: "Fashion & Culture",
    description:
      "Blending style and storytelling to help apparel and cultural brands stand out, sell more, and stay unforgettable.",
  },
];
const IndustryServeSection: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 640) {
        setSlidesToShow(1);
      } else if (width <= 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize(); // Run once on mount

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <div className="text-white px-4 md:px-10 lg:px-16 py-12 md:py-16 lg:py-20 pb-16 md:pb-18 flex flex-col relative">
      {/* Header */}
      <div className="flex flex-col w-full gap-4 md:gap-6 mb-8 md:mb-10">
        <h4 className="text-[#FBCA0C] text-lg md:text-xl leading-[26px] md:leading-[30px]">
          INDUSTRIES WE SERVE
        </h4>

        <h2 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-light relative w-full max-w-full md:max-w-[500px] leading-[1.3] sm:leading-[1.4] md:leading-[42px]">
          Powering Growth Across Diverse Industries and Markets
        </h2>
      </div>

      {/* Advantages Slider */}
      <Slider ref={sliderRef} {...settings} className="w-full mb-8 md:mb-10">
        {advantages.map((item) => (
          <div key={item.id} className="px-2 sm:px-4 md:px-10">
            <div className="space-y-4 md:space-y-6 lg:space-y-10">
              <h2 className="text-[48px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[128px] text-[#FBCA0C] font-medium border-b border-[#565656] pb-2 md:pb-3 lg:pb-4">
                {item.number}
              </h2>
              <h3 className="text-xl sm:text-[22px] md:text-2xl font-medium leading-[1.3] sm:leading-[1.4] md:leading-[27px]">
                {item.title.includes("&") ? (
                  <>
                    {item.title.split("&")[0]} & <br />
                    {item.title.split("&")[1]}
                  </>
                ) : (
                  item.title
                )}
              </h3>
              <p className="text-base md:text-base text-[#C9C9C9] leading-[1.4] md:leading-[25px] w-full max-w-full md:max-w-[400px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default IndustryServeSection;
