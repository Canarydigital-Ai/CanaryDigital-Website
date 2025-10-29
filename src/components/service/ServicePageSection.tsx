import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import BackGroundBG from "../../assets/service images/service bg overlay.png";
import { serviceContentData } from "../../components/service/serviceContentData";
import UXImage1 from "../../assets/service images/uiux image 1.png";
import UXImage2 from "../../assets/service images/uiux image 2.png";

import { IoIosArrowDown } from "react-icons/io";
import { useLocation } from "react-router-dom";

type ServiceKey = keyof typeof serviceContentData;

interface DesignCreativeItem {
  type: "image" | "video";
  src: string;
  alt?: string;
  title: string;
  description: string;
  scale?: string;
}

interface DesignCreativeCardProps {
  item: DesignCreativeItem;
}

const tabs: ServiceKey[] = [
  "AI Powered Solutions",
  "Web Development",
  "UX/UI Designing",
  "Design & Creative",
  "Digital Marketing",
  "Affiliate Partnership",
];

const ServicePageSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ServiceKey>("AI Powered Solutions");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const location = useLocation();
  const [marketingIndices, setMarketingIndices] = useState<{
    [key: string]: number;
  }>({});
  const [marketingOpenStates, setMarketingOpenStates] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const current = serviceContentData[activeTab];

  useEffect(() => {
    if (current.marketingSections) {
      const intervals: number[] = [];

      current.marketingSections.forEach((section, index) => {
        const startDelay = index * 1000;

        const timeout = setTimeout(() => {
          // Start the interval after the initial delay
          const interval = setInterval(() => {
            setMarketingIndices((prev) => ({
              ...prev,
              [section.key]:
                ((prev[section.key] || 0) + 1) % section.images.length,
            }));
          }, 4000); // Same interval for all sections

          intervals.push(interval);
        }, startDelay);

        intervals.push(timeout);
      });

      return () => {
        intervals.forEach((timer) => clearTimeout(timer));
      };
    }
  }, [current.marketingSections]);

  const toggleMarketingSection = (key: string) => {
    setMarketingOpenStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
  if (location.state?.selectedTab) {
    const tab = location.state.selectedTab;
    const matchingTab = tabs.find(
      (t) =>
        t.toLowerCase().includes(tab.toLowerCase()) ||
        tab.toLowerCase().includes(t.toLowerCase())
    );
    if (matchingTab) {
      setActiveTab(matchingTab);
    }
  }
}, [location.key, location.state]);

  // Reusable component
  const DesignCreativeCard = ({ item }: DesignCreativeCardProps) => (
    <div className="relative group overflow-hidden space-y-5">
      <div className="relative overflow-hidden group border transition-all duration-400 border-[#2B2B2B]">
        {/* Media - Image or Video */}
        {item.type === "image" ? (
          <img
            src={item.src}
            alt={item.alt || item.title}
            className={`w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-all duration-400 ease-out group-hover:scale-105 ${
              item.scale || ""
            }`}
          />
        ) : (
          <video
            src={item.src}
            autoPlay
            loop
            muted
            playsInline
            className={`w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-all duration-400 ease-out ${
              item.scale || "group-hover:scale-105"
            }`}
          />
        )}

        {/* Hover Content */}
        <div className="absolute inset-0 flex">
          <div className="translate-y-full group-hover:translate-y-0 group-hover:bg-black/30 group-hover:backdrop-blur-xs transition-all duration-400 ease-out py-8 sm:py-12 md:py-20 px-6 sm:px-8 md:px-12">
            <p className="text-base sm:text-lg md:text-xl leading-[1.4] sm:leading-[24px] md:leading-[27px] text-[#A1A1A1]">
              {item.description}
            </p>
          </div>
        </div>
      </div>
      <p className="text-lg sm:text-[20px] md:text-[22px] leading-[1.3] sm:leading-[24px] md:leading-[27px] font-medium">{item.title}</p>
    </div>
  );

  return (
    <div className="py-16 md:py-20 pb-24 md:pb-36 min-h-screen bg-black text-white">
      {/* Tabs */}
      <div
        className="flex flex-wrap gap-3 pb-12 md:pb-20 justify-start px-4 md:px-10 lg:px-16"
        style={{
          borderBottom: "1px solid transparent",
          borderImage:
            "linear-gradient(90deg, #000000 0%, #414141 50%, #000000 100%) 1",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 sm:px-6 md:px-8 py-1 rounded-full border transition-all duration-300 text-xs sm:text-sm leading-[27px]
              ${
                activeTab === tab
                  ? "bg-[#FBCA0C] border-[#FBCA0C] text-black font-normal"
                  : "border-[#565656] text-white hover:border-[#FBCA0C] hover:text-[#FBCA0C]"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      {current && (
        <div className="pt-8 md:pt-12 flex flex-col gap-12 md:gap-16 relative">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center overflow-hidden px-4 md:px-10 lg:px-16 gap-8 md:gap-4">
            <div className="flex flex-col space-y-4 md:space-y-6">
              <h2
                className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[64px] leading-[1.2] sm:leading-[1.3] md:leading-[80px] lg:leading-[106px]"
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 30.38%, #000000 130.49%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {current.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#A1A1A1] leading-[1.4] sm:leading-[24px] md:leading-[27px] relative z-10 w-full max-w-full lg:max-w-[92%]">
                {current.desc}
              </p>
            </div>

            <div className="flex justify-center relative">
              {activeTab === "UX/UI Designing" ? (
                <div className="relative">
                  <img
                    src={current.video}
                    alt={current.title}
                    className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[580px] object-cover rotate-[30deg]"
                  />
                  <img
                    src={UXImage1}
                    alt=""
                    className="absolute bottom-0 w-[100px] sm:w-[140px] md:w-[160px] lg:w-[180px]"
                  />
                  <img
                    src={UXImage2}
                    alt=""
                    className="absolute bottom-0 right-0 w-[60px] sm:w-[80px] md:w-[100px] lg:w-[110px]"
                  />
                </div>
              ) : activeTab === "Digital Marketing"  ? (
                <img
                  src={current.video}
                  alt={current.title}
                  className="h-[300px] sm:h-[400px] md:h-[550px] lg:h-[650px] object-cover"
                />
              ) : (
                <video
                  src={current.video}
                  autoPlay
                  loop
                  muted
                  className={`h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover ${
                    activeTab === "AI-Powered Solutions" ? "rotate-[30deg]" : ""
                  }`}
                ></video>
              )}
            </div>
          </div>

          {/* What Makes Section */}
          <div
            className="px-4 md:px-10 lg:px-16"
            style={{ backgroundImage: `url(${BackGroundBG})` }}
          >
            {/* only for Design & Creative tab */}
            {activeTab === "Design & Creative" &&
              current.designCreativeItems && (
                <div className="py-12 md:py-24 relative">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2">
                    {current.designCreativeItems.map((item, index) => (
                      <DesignCreativeCard key={index} item={item} />
                    ))}
                  </div>
                </div>
              )}

            {/* only for Digital Marketing tab */}
            {(activeTab === "Digital Marketing" || activeTab === "Affiliate Partnership")  && current.marketingSections && (
              <div className="py-12 md:py-24 relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                  {current.marketingSections.map((section) => (
                    <div key={section.key} className="space-y-4 md:space-y-6">
                      {/* Slideshow */}
                      <div className="relative overflow-hidden h-[300px] sm:h-[400px] md:h-[450px] lg:h-[510px]">
                        {section.images.map((src: string, i: number) => (
                          <img
                            key={i}
                            src={src}
                            alt=""
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                              i === (marketingIndices[section.key] || 0)
                                ? "opacity-100"
                                : "opacity-0"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Collapsible Section */}
                      <div className="px-3 space-y-6 md:space-y-8 transition-all duration-500">
                        <div
                          className="flex justify-between items-center cursor-pointer select-none"
                          onClick={() => toggleMarketingSection(section.key)}
                        >
                          <p className="text-lg sm:text-xl md:text-2xl leading-[1.3] sm:leading-[1.4] md:leading-[42px] font-normal">
                            {section.title}
                          </p>
                          <IoIosArrowDown
                            className={`size-5 sm:size-6 transition-transform duration-500 ${
                              marketingOpenStates[section.key]
                                ? "rotate-180"
                                : "rotate-0"
                            }`}
                          />
                        </div>

                        <div
                          className={`overflow-hidden transition-all duration-700 ease-in-out ${
                            marketingOpenStates[section.key]
                              ? "max-h-[400px] opacity-100 translate-y-0"
                              : "max-h-0 opacity-0 -translate-y-4"
                          }`}
                        >
                          <p className="text-sm sm:text-base leading-[1.4] sm:leading-[27px] text-[#A1A1A1] text-justify h-[150px] sm:h-[170px]">
                            {section.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab !== "Digital Marketing" &&
              activeTab !== "Affiliate Partnership" && (
                <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 md:gap-16 py-16 md:py-32 relative">
                  <div className="flex flex-col gap-8 md:gap-14 col-span-1 w-full max-w-full lg:max-w-[420px]">
                    <h2
                      className="text-[24px] sm:text-[28px] md:text-[32px] leading-[1.3] sm:leading-[1.4] md:leading-[42px] flex flex-col"
                      style={{
                        background:
                          "linear-gradient(180deg, #FFFFFF 30.38%, #000000 130.49%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {current.whatMakes.title.split(" ").slice(0, 3).join(" ")}{" "}
                      <span>
                        {current.whatMakes.title.split(" ").slice(3).join(" ")}
                      </span>
                    </h2>
                    <p className="text-[#A1A1A1] text-base sm:text-lg md:text-xl leading-[1.4] sm:leading-[24px] md:leading-[27px]">
                      {current.whatMakes.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 col-span-1 lg:col-span-2 gap-4 md:gap-8 items-start">
                    {current.features.map((feature, i) => (
                      <div
                        key={i}
                        className={`bg-[#151515] rounded-[10px] p-6 md:p-8 py-8 md:py-12 transition-all h-full group hover:bg-[#FBCA0C] hover:text-black duration-500 ease-in-out ${
                          i % 2 === 0
                            ? "hover:-rotate-[3deg]"
                            : "hover:rotate-[3deg]"
                        }`}
                      >
                        <div className="h-full flex flex-col items-start">
                          <img
                            src={feature.img}
                            alt={feature.title}
                            className="mb-6 md:mb-10 h-[50px] sm:h-[60px] md:h-[65px] group-hover:invert duration-300 ease-in-out"
                          />
                          <h3 className="text-lg sm:text-[20px] md:text-[22px] leading-[1.3] sm:leading-[24px] md:leading-[27px] font-medium mb-8 md:mb-12 h-[35px] sm:h-[40px]">
                            {feature.title}
                          </h3>
                          <p className="text-sm sm:text-base leading-[1.4] sm:leading-[27px]">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>

          {/* FAQ Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 px-4 md:px-10 lg:px-16 relative gap-8 md:gap-4">
            <div className="flex flex-col gap-8 md:gap-14 w-full max-w-full lg:max-w-[650px]">
              <h2
                className="text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] sm:leading-[1.3] md:leading-[58px] flex flex-col"
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 30.38%, #000000 130.49%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Frequently Asked <span>Questions</span>
              </h2>

              <div className="border border-[#363636] rounded-[10px] p-6 md:p-8 space-y-6 md:space-y-8">
                <h2 className="text-lg sm:text-[20px] md:text-[22px] leading-[1.3] sm:leading-[1.4] md:leading-[42px]">
                  Still Have a Question?
                </h2>
                <p className="text-[#A1A1A1] text-sm sm:text-base leading-[1.4] sm:leading-[27px]">
                  We're happy to help! If you didn't find the answer you were
                  looking for, feel free to reach out. Whether it's a quick
                  doubt or something big, our team is here for you. Let's chat!
                </p>
                <button className="group bg-[#FBCA0C] text-black text-xs font-normal leading-[23px] px-4 md:px-6 h-[28px] md:h-[30px] rounded-md flex items-center justify-center gap-2 overflow-hidden relative transition-all duration-500 cursor-pointer">
                  <span className="flex items-center gap-2 transition-all duration-500 ease-out group-hover:-translate-x-60 group-hover:opacity-0">
                    Chat Now
                  </span>
                  <span className="absolute flex items-center gap-2 transition-all duration-500 ease-out transform opacity-0 translate-x-40 group-hover:translate-x-0 group-hover:opacity-100">
                    Chat Now
                  </span>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {current.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="transition-all duration-500 backdrop-blur-[415px] rounded-[10px] py-4 relative overflow-hidden faq-card"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left px-4 md:px-8 py-4 md:py-5 text-sm sm:text-base md:text-[22px]"
                  >
                    <span className="text-left pr-4">{faq.question}</span>
                    <FiChevronDown
                      className={`text-gray-300 transition-transform duration-300  ${
                        activeIndex === index ? "rotate-180 text-[#FBCA0C]" : ""
                      }`}
                      size={18} 
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 w-full max-w-full lg:max-w-[90%] ${
                      activeIndex === index ? "max-h-40 px-4 md:px-8 pb-4 md:pb-5" : "max-h-0"
                    }`}
                  >
                    <p className="text-[#A1A1A1] text-sm sm:text-base leading-[1.4] sm:leading-[27px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicePageSection;