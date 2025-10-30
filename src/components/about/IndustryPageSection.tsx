import React from "react";
import IndustryImage from "../../assets/industry imgs/IndustrySection Img.png";
import IndustryIcon1 from "../../assets/industry imgs/Industry Icon1.png";
import IndustryIcon2 from "../../assets/industry imgs/Industry Icon2.png";
import IndustryIcon3 from "../../assets/industry imgs/Industry Icon3.png";
import IndustryIcon4 from "../../assets/industry imgs/Industry Icon4.png";

const industrySections = [
  {
    type: "left",
    title: "what we do",
    items: [
      {
        icon: IndustryIcon1,
        title: "Construction",
        description:
          "Captivating visual storytelling that engages and resonates with your audience",
      },
      {
        icon: IndustryIcon2,
        title: "Food & Beverage",
        description: "Serving up smart solutions and standout brand presence.",
      },
    ],
  },
  {
    type: "right",
    sections: [
      {
        borderBottom: true,
        items: [
          {
            icon: IndustryIcon3,
            title: "E-commerce & Retail",
            description:
              "We craft compelling brand identities that leave a lasting impression.",
            borderRight: true,
          },
          {
            icon: IndustryIcon4,
            title: "Healthcare & Wellness",
            description:
              "Innovative and aesthetic designs that bring your ideas to life.",
          },
        ],
      },
      {
        borderBottom: true,
        items: [
          {
            icon: IndustryIcon4,
            title: "Beauty & Wellness",
            description:
              "Captivating visual storytelling that engages and resonates with your audience",
            borderRight: true,
          },
          {
            icon: IndustryIcon3,
            title: "Hospitality & Tourism",
            description:
              "Blending tech and creativity to elevate beauty in the digital world.",
          },
        ],
      },
      {
        borderBottom: false,
        items: [
          {
            icon: IndustryIcon1,
            title: "Technology & Innovation",
            description:
              "Collaborating on future-first ideas with scalable AI-powered tools.",
            borderRight: true,
          },
          {
            icon: IndustryIcon4,
            title: "Fashion & Culture",
            description:
              "Shaping trends with digital innovation and cultural connection.",
          },
        ],
      },
    ],
  },
];

const IndustryPageSection: React.FC = () => {
  return (
    <>
      <div className="px-4 md:px-10 lg:px-16 py-12 sm:py-16 md:py-24 border-b border-[#333333] bg-[#0A0A0A]">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-6">
          <div className="w-full lg:max-w-[390px] flex flex-col gap-4 md:gap-5">
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-[1.2] sm:leading-[1.3] md:leading-[56px] lg:leading-[64px]">
              AI-Driven <span className="text-[#FBCA0C]">Success Stories</span>{" "}
              Across Industries
            </h2>
            <p className="text-[#999999] text-base sm:text-lg md:text-xl leading-[1.4] sm:leading-[22px] md:leading-[25px]">
              Where our technology and solutions delivered measurable impact.
            </p>
          </div>

          <img src={IndustryImage} alt="" className="w-full lg:w-auto object-cover" />
        </div>
      </div>

      <div className="px-4 md:px-10 lg:px-16 py-12 sm:py-16 md:py-24 pb-20 md:pb-36 bg-[#0A0A0A]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-14">
          {industrySections.map((section, index) =>
            section.type === "left" ? (
              <div
                key={index}
                className="border-b lg:border-b-0 lg:border-r border-[#454545] flex flex-col justify-between pb-8 sm:pb-10 md:pb-0 lg:pb-0"
              >
                <h2 className="text-lg sm:text-xl text-[#999999] leading-[25px] uppercase mb-6 sm:mb-8 md:mb-0">
                  {section.title}
                </h2>
                <div className="flex flex-col gap-12 sm:gap-16 md:gap-22">
                  {section.items?.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex flex-col gap-4 sm:gap-5 md:gap-6 items-start"
                    >
                      <img src={item.icon} alt="" className="w-10 h-10 sm:w-12 sm:h-12 md:w-auto md:h-auto" />
                      <h3 className="text-lg sm:text-xl md:text-2xl leading-[1.3] sm:leading-[26px] md:leading-[30px] uppercase">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base leading-[1.4] sm:leading-[22px] md:leading-[26px] text-[#999999] w-full max-w-full lg:max-w-[480px]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div key={index} className="lg:col-span-2 flex flex-col gap-8 sm:gap-10 md:gap-12">
                {section.sections?.map((subSection, subIndex) => (
                  <div
                    key={subIndex}
                    className={`flex flex-col sm:flex-row gap-8 sm:gap-10 md:gap-22 ${
                      subSection.borderBottom
                        ? "border-b border-[#454545] pb-8 sm:pb-10 md:pb-12"
                        : ""
                    }`}
                  >
                    {subSection.items?.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`flex flex-col gap-4 sm:gap-5 md:gap-6 items-start ${
                          item.borderRight
                            ? "border-b sm:border-b-0 sm:border-r border-[#454545] pb-8 sm:pb-0 sm:pr-8 md:pr-12 lg:pr-22"
                            : ""
                        }`}
                      >
                        <img src={item.icon} alt="" className="w-10 h-10 sm:w-12 sm:h-12 md:w-auto md:h-auto" />
                        <h3 className="text-lg sm:text-xl md:text-2xl leading-[1.3] sm:leading-[26px] md:leading-[30px] uppercase">
                          {item.title}
                        </h3>
                        <p className="text-sm sm:text-base leading-[1.4] sm:leading-[24px] md:leading-[30px] text-[#999999] w-full max-w-full lg:max-w-[480px]">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default IndustryPageSection;
