import React, { useEffect, useRef, useState } from "react";
import FoggyLogo from "../../assets/caseStudy imgs/Foggy_Logo.png";
import Arrow from "../../assets/caseStudy imgs/ArrowVector.png";
import FoggyImg1 from "../../assets/caseStudy imgs/Foggy Img1.png";
import FoggyImg2 from "../../assets/caseStudy imgs/Foggy Img2.png";
import ChallangeImg from "../../assets/caseStudy imgs/challenge img.png";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const scrollItems = [
  { id: 1, left: "Problem", right: "Solution" },
  { id: 2, left: "Problem", right: "Solution" },
  { id: 3, left: "Problem", right: "Solution" },
];

const caseSolutions = [
  {
    id: "01",
    title: "Challenges",
    points: [
      "Lack of digital presence to showcase its unique experiences.",
      "No structured platform for online discovery or direct booking.",
      "Needed high-quality visual content to match the thrill and beauty of the park.",
      "Required a consistent brand identity across social media and promotional assets.",
      "Wanted to generate awareness, trust, and footfall quickly.",
    ],
  },
  {
    id: "02",
    title: "Solutions",
    points: [
      "Website: Built a mobile-first, immersive site with booking and enquiry features.",
      "Digital Marketing: Launched targeted campaigns to drive buzz, engagement, and visits.",
      "Video Production: Shot and edited cinematic videos and reels for social media.",
      "Graphic Design: Created cohesive brand visuals for online and offline platforms.",
    ],
  },
  {
    id: "03",
    title: "Why it matters",
    content: `By combining strategic design, compelling visuals, and targeted marketing, 
    we transformed Foggy Mountain from a newly launched adventure park into a credible, 
    engaging, and highly discoverable destination. Our work not only boosted online 
    visibility and brand trust but also directly contributed to increased visitor 
    inquiries, bookings, and social media engagement. This set a strong foundation for 
    long-term growth in the competitive eco-tourism space.`,
  },
];

const performanceData = [
  {
    percentage: "40.4%",
    title: "Organic Traffic Growth",
  },
  {
    percentage: "38.5%",
    title: "Bounce Rate Reduction",
  },
  {
    percentage: "74.5%",
    title: "Monthly Traffic Increase",
  },
];

const SingleCaseStudies: React.FC = () => {
  const [translateX, setTranslateX] = useState(430);
  const targetX = useRef(430);
  const imageSectionRef = useRef<HTMLDivElement>(null);
  const scrollContainer = useRef<HTMLElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlide = (direction: "prev" | "next") => {
    if (direction === "next") {
      setCurrentSlide((prev) =>
        Math.min(prev + 1, Math.ceil(caseSolutions.length / 2) - 1)
      );
    } else {
      setCurrentSlide((prev) => Math.max(prev - 1, 0));
    }
  };

  useEffect(() => {
    scrollContainer.current = document.querySelector(
      ".overflow-y-auto"
    ) as HTMLElement | null;
    if (!scrollContainer.current) return;

    const handleScroll = () => {
      if (!imageSectionRef.current) return;

      const rect = imageSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // smoother range mapping (adjustable)
      const start = windowHeight * 0.5;
      const end = windowHeight * 0.1;
      const range = start - end;
      const progress = Math.min(Math.max((start - rect.top) / range, 0), 1);

      // translate from 430px → 0px
      targetX.current = 430 - progress * 430;
    };

    scrollContainer.current.addEventListener("scroll", handleScroll);
    handleScroll();

    // smooth lerp animation loop
    let animationFrame: number;
    const animate = () => {
      setTranslateX((prev) => prev + (targetX.current - prev) * 0.08); // 0.08 = smoothness factor
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (scrollContainer.current)
        scrollContainer.current.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div>
      <div className="px-4 md:px-10 lg:px-20 py-16 md:py-20  border-b border-[#242424]">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center ">
          <div className="flex flex-col gap-14">
            <h2 className="text-[32px] xl:text-[54px] font-light relative leading-[60px]">
              Foggy Mountain is a scenic nature and adventure park nestled in
              the Western Ghats.
            </h2>

            <button className="group bg-[#FBCA0C] text-black text-xs font-normal leading-[23px] px-4 md:px-6 w-fit h-[28px] md:h-[30px] rounded-md flex items-center justify-center gap-2 overflow-hidden relative transition-all duration-500 cursor-pointer ml-10">
              <span className="flex items-center gap-2 transition-all duration-500 ease-out group-hover:-translate-x-60 group-hover:opacity-0">
                Live Site
              </span>
              <span className="absolute flex items-center gap-2 transition-all duration-500 ease-out transform opacity-0 translate-x-40 group-hover:translate-x-0 group-hover:opacity-100">
                Live Site
              </span>
            </button>
          </div>

          <div className="flex justify-end pr-10">
            <img src={FoggyLogo} alt="" />
          </div>
        </div>
      </div>

      <div
        className="pt-16 md:pt-20"
        style={{
          borderBottom: "1px solid transparent",
          borderImage:
            "linear-gradient(90deg, #000000 0%, #575757 50%, #000000 100%) 1",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-start px-4 md:px-10 lg:px-20">
          <div className="flex flex-col gap-8 w-full max-w-[500px]">
            <div className="pb-8 border-b border-[#8B8B8B]">
              <p className="text-base eading-[34px] font-light text-[#A1A1A1] pb-1">
                Industry
              </p>
              <h3 className="text-2xl leading-[34px]">
                Adventure & Theme Park
              </h3>
            </div>

            <div className="pb-8 border-b border-[#8B8B8B]">
              <p className="text-base eading-[34px] font-light text-[#A1A1A1] pb-1">
                Country
              </p>
              <h3 className="text-2xl leading-[34px]">India</h3>
            </div>

            <div className="pb-8 ">
              <p className="text-base eading-[34px] font-light text-[#A1A1A1] pb-1">
                What We Did
              </p>
              <h3 className="text-2xl leading-[34px]">
                Website Design, Digital Marketing, Video Production, Video
                Editing, Graphic Design
              </h3>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl leading-[30px]">OverView</h3>
              <div className="w-[18px] h-[18px] bg-[#FBCA0C]"></div>
            </div>

            <p className="text-xl leading-[30px] text-[#A1A1A1]">
              Foggy Mountain is a scenic nature and adventure park located in
              the heart of the Western Ghats. It offers a range of experiences
              including trekking trails, eco-friendly stays, outdoor activities,
              and peaceful retreats in nature. Designed for families, adventure
              seekers, and nature lovers, the park provides a refreshing escape
              surrounded by lush greenery and mountain views
            </p>
          </div>
        </div>

        <div className="h-[280px] relative flex overflow-hidden">
          <div className="w-[170px] h-full absolute top-0 left-0 z-20 bg-gradient-to-r from-[#0A0A0A] to-transparent"></div>
          <div className="w-[170px] h-full absolute top-0 right-0 z-20 bg-gradient-to-l from-[#0A0A0A] to-transparent"></div>

          {/* text section */}
          <div className="w-full flex gap-[300px] animate-infinite-scroll whitespace-nowrap">
            {scrollItems.map((item) => (
              <div key={item.id} className="flex items-center gap-10">
                <p className="text-[96px] leading-[106px] text-[#FBCA0C]">
                  {item.left}
                </p>
                <img src={Arrow} alt="" />
                <p className="text-[96px] leading-[106px] text-[#FBCA0C]">
                  {item.right}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={imageSectionRef}
        className="pl-4 md:pl-10 lg:pl-20 py-16 md:py-24"
        style={{
          borderBottom: "1px solid transparent",
          borderImage:
            "linear-gradient(90deg, #000000 0%, #575757 50%, #000000 100%) 1",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-col space-y-4 md:space-y-14 w-full max-w-[520px]">
            <h2 className="text-[18px] md:text-[22px] lg:text-[32px] xl:text-[54px] font-light relative leading-[60px]">
              Turning <span className="text-[#FBCA0C]">Challenges</span> into
              Impact
            </h2>

            <p className="text-base md:text-xl text-[#C9C9C9] leading-[29px]">
              We tackled poor digital visibility and low engagement with
              strategic design, AI driven solutions and a unified brand
              experience because in today’s world, connection and clarity aren’t
              optional, they’re essential.
            </p>
          </div>

          {/* translating image section */}
          <div className="flex items-start relative">
            <img src={FoggyImg1} alt="" className="relative z-20" />

            {/* scroll-progress controlled image */}
            <img
              src={FoggyImg2}
              alt=""
              style={{
                transform: `translateX(${translateX}px)`,
                transition: "transform 0.2s ease-out",
              }}
              className="absolute left-0 h-[620px]"
            />
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 lg:px-20 py-16 md:py-24">
        <div className="grid grid-cols-3 gap-10">
          <img src={ChallangeImg} alt="" className="col-span-1" />

          <div className="col-span-2 space-y-12">
            <div className="flex justify-between items-end">
              <h2 className="text-[18px] md:text-[22px] lg:text-[32px] font-light relative leading-[42px] flex flex-col">
                <span className=" ">From Problem to Purpose: </span>
                <span className="text-[#FBCA0C]">
                  How We Solve What Matters
                </span>
              </h2>
              <div className="flex gap-3">
                <button
                  onClick={() => handleSlide("prev")}
                  className={`cursor-pointer hover:text-[#FBCA0C] hover:scale-110 duration-300 ease-in-out transition-all ${
                    currentSlide === 0 ? "opacity-50" : ""
                  }`}
                  disabled={currentSlide === 0}
                >
                  <GoChevronLeft className="size-8" />
                </button>
                <button
                  onClick={() => handleSlide("next")}
                  className={`cursor-pointer hover:text-[#FBCA0C] hover:scale-110 duration-300 ease-in-out transition-all ${
                    currentSlide === Math.ceil(caseSolutions.length / 2) - 1
                      ? "opacity-50"
                      : ""
                  }`}
                  disabled={
                    currentSlide === Math.ceil(caseSolutions.length / 2) - 1
                  }
                >
                  <GoChevronRight className="size-8" />
                </button>
              </div>
            </div>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * (100 / 2)}%)`,
                }}
              >
                {caseSolutions.map((section) => (
                  <div key={section.id} className="flex-shrink-0 w-1/2 px-4">
                    <div className="flex flex-col gap-4 w-full max-w-[550px]">
                      <h3 className="text-lg font-medium text-[#A1A1A1]">
                        {section.title}
                      </h3>
                      <h2 className="text-[90px] md:text-[120px] font-semibold leading-none text-white">
                        {section.id}
                      </h2>

                      {/* Conditional Render Based on Section Type */}
                      {section.title === "Challenges" && section.points && (
                        <>
                          <p className="text-[#C9C9C9] text-[16px] md:text-[18px] leading-[28px] font-light">
                            As a newly launched adventure park, Foggy Mountain
                            faced multiple challenges:
                          </p>
                          <ul className="space-y-4 text-[#C9C9C9] text-[16px] md:text-[18px] leading-[30px] font-light list-disc pl-5 ">
                            {section.points.map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {section.title === "Solutions" && section.points && (
                        <ul className="space-y-4 text-[#C9C9C9] text-[16px] md:text-[18px] leading-[30px] font-light list-disc pl-5  ">
                          {section.points.map((point, idx) => {
                            if (point.includes(":")) {
                              const [title, desc] = point.split(":");
                              return (
                                <li key={idx}>
                                  <span className="font-medium text-white">
                                    {title}:
                                  </span>
                                  <br />
                                  <span className="pl-1">{desc.trim()}</span>
                                </li>
                              );
                            }
                            return <li key={idx}>{point}</li>;
                          })}
                        </ul>
                      )}

                      {section.title === "Why it matters" && (
                        <p className="text-[#C9C9C9] text-[16px] md:text-[18px] leading-[30px] font-light">
                          {section.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 lg:px-20 py-16 flex flex-col gap-20">
        <h3 className="text-[32px] font-normal leading-[100px]">
          Performance Highlights
        </h3>

        <div className="grid grid-cols-2 gap-x-64 gap-y-20">
          {performanceData.map((item, index) => (
            <div key={index} className="flex flex-col gap-6">
              <p className="text-[54px] leading-[52px] font-normal text-[#FBCA0C]">
                {item.percentage}
              </p>
              <div className="h-px w-full border-t border-[#77787B]"></div>
              <p className="text-[2xl] leading-[52px] font-normal">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleCaseStudies;
