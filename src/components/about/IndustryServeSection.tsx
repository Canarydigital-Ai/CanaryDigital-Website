import React, { useRef } from "react";
import Slider from "react-slick";
import Testimonials from "./Testimonials";

const IndustryServeSection: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

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
    <div className="text-white px-4 md:px-10 lg:px-16 py-16 md:py-20 pb-18 md:pb-36 flex flex-col relative">
      {/* Header */}
      <div className="flex flex-col w-full gap-6 mb-10 md:mb-20">
        <h4 className="text-[#FBCA0C] text-xl leading-[30px]">
          INDUSTRIES WE SERVE
        </h4>

        <h2 className="text-[16px] sm:text-[18px] md:text-[22px] xl:text-[32px] font-light relative w-full max-w-full md:max-w-[500px] leading-[1.3] sm:leading-[1.4] md:leading-[42px]">
          Powering Growth Across Diverse Industries and Markets
        </h2>
      </div>

      {/* Advantages Slider */}
      <Slider ref={sliderRef} {...settings} className="w-full mb-10 md:mb-28">
        {advantages.map((item) => (
          <div key={item.id} className="px-10">
            <div className="space-y-6 md:space-y-10">
              <h2 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] xl:text-[128px] text-[#FBCA0C] font-medium border-b border-[#565656] pb-3 md:pb-4">
                {item.number}
              </h2>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium leading-[1.3] sm:leading-[1.4] md:leading-[27px]">
                {item.title.includes("&") ? (
                  <>
                    {item.title.split("&")[0]} & <br />
                    {item.title.split("&")[1]}
                  </>
                ) : (
                  item.title
                )}
              </h3>
              <p className="text-sm md:text-base text-[#C9C9C9] leading-[1.4] md:leading-[25px] w-full max-w-full md:max-w-[400px]">
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
