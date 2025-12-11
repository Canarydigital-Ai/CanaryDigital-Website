import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { caseStudyData } from "../../components/casestudy/SingleCaseStudyData";
import Arrow from "../../assets/caseStudy imgs/ArrowVector.png";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import ChallangeImg from "../../assets/caseStudy imgs/challenge img.png";

const scrollItems = [
  { id: 1, left: "Problem", right: "Solution" },
  { id: 2, left: "Problem", right: "Solution" },
  { id: 3, left: "Problem", right: "Solution" },
];

const SingleCaseStudies: React.FC = () => {
  const { id } = useParams(); // Get the 'id' from the URL
  const navigate = useNavigate();

  // Find the case study that matches the id
  const caseStudy = caseStudyData.find((study) => study.id === id);

  if (!caseStudy) {
    // Handle the case where no case study is found (e.g., 404)
    return <div>Case study not found!</div>;
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const [translateX, setTranslateX] = useState(430);
  const targetX = useRef(430);
  const imageSectionRef = useRef<HTMLDivElement>(null);
  const scrollContainer = useRef<HTMLElement | null>(null);

  const handleSlide = (direction: "prev" | "next") => {
    if (direction === "next") {
      setCurrentSlide((prev) =>
        Math.min(prev + 1, Math.ceil(caseStudy.caseSolutions.length / 2) - 1)
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
      const start = windowHeight * 0.5;
      const end = windowHeight * 0.1;
      const range = start - end;
      const progress = Math.min(Math.max((start - rect.top) / range, 0), 1);

      targetX.current = 430 - progress * 430;
    };

    scrollContainer.current.addEventListener("scroll", handleScroll);
    handleScroll();

    let animationFrame: number;
    const animate = () => {
      setTranslateX((prev) => prev + (targetX.current - prev) * 0.08);
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
  {/* Header Section */}
  <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-14 md:py-16 lg:py-20 border-b border-[#242424]">
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8 md:gap-0">
      <div className="flex flex-col gap-8 sm:gap-10 md:gap-14 order-1 md:order-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-light relative leading-[1.2] sm:leading-[40px] md:leading-[50px] lg:leading-[60px]">
          {caseStudy.mainhead}
        </h2>

        <button
          onClick={() => navigate("/case-studies/projects")}
          className="group bg-[#FBCA0C] text-black text-xs font-normal leading-[23px] px-4 md:px-6 w-fit h-[28px] md:h-[30px] rounded-md flex items-center justify-center gap-2 overflow-hidden relative transition-all duration-500 cursor-pointer ml-0 md:ml-10"
        >
          <span className="flex items-center gap-2 transition-all duration-500 ease-out group-hover:-translate-x-60 group-hover:opacity-0">
            Live Site
          </span>
          <span className="absolute flex items-center gap-2 transition-all duration-500 ease-out transform opacity-0 translate-x-40 group-hover:translate-x-0 group-hover:opacity-100">
            Live Site
          </span>
        </button>
      </div>

      <div className="flex justify-start md:justify-end pr-0 md:pr-10 mt-4 md:mt-0">
        <img 
          src={caseStudy.mainImg} 
          alt={caseStudy.title} 
          className="w-[100px] md:w-auto md:max-w-none"
        />
      </div>
    </div>
  </div>

  {/* Info Section */}
  <div className="pt-12 sm:pt-14 md:pt-16 lg:pt-20">
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-start gap-8 md:gap-0 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="flex flex-col gap-6 md:gap-8 w-full max-w-full md:max-w-[500px]">
        <div className="pb-6 md:pb-8 border-b border-[#8B8B8B]">
          <p className="text-sm sm:text-base leading-[28px] sm:leading-[34px] font-light text-[#A1A1A1] pb-1">
            Industry
          </p>
          <h3 className="text-xl sm:text-2xl leading-[28px] sm:leading-[34px]">{caseStudy.industry}</h3>
        </div>

        <div className="pb-6 md:pb-8 border-b border-[#8B8B8B]">
          <p className="text-sm sm:text-base leading-[28px] sm:leading-[34px] font-light text-[#A1A1A1] pb-1">
            Country
          </p>
          <h3 className="text-xl sm:text-2xl leading-[28px] sm:leading-[34px]">{caseStudy.country}</h3>
        </div>

        <div className="pb-6 md:pb-8">
          <p className="text-sm sm:text-base leading-[28px] sm:leading-[34px] font-light text-[#A1A1A1] pb-1">
            What We Did
          </p>
          <h3 className="text-xl sm:text-2xl leading-[28px] sm:leading-[34px]">{caseStudy.whatWeDid}</h3>
        </div>
      </div>

      <div className="flex flex-col gap-6 md:gap-8">
        <div className="flex items-center gap-3">
          <h3 className="text-xl sm:text-2xl leading-[26px] sm:leading-[30px]">OverView</h3>
          <div className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] bg-[#FBCA0C]"></div>
        </div>

        <p className="text-base sm:text-lg md:text-xl leading-[24px] sm:leading-[28px] md:leading-[30px] text-[#A1A1A1]">
          {caseStudy.description}
        </p>
      </div>
    </div>
  </div>

  {/* Challenges & Solutions Scrolling Section */}
  <div className="h-[180px] sm:h-[220px] md:h-[280px] relative flex overflow-hidden">
    <div className="w-[80px] sm:w-[120px] md:w-[170px] h-full absolute top-0 left-0 z-20 bg-gradient-to-r from-[#0A0A0A] to-transparent"></div>
    <div className="w-[80px] sm:w-[120px] md:w-[170px] h-full absolute top-0 right-0 z-20 bg-gradient-to-l from-[#0A0A0A] to-transparent"></div>

    {/* text section */}
    <div className="w-full flex gap-[150px] sm:gap-[200px] md:gap-[300px] animate-infinite-scroll whitespace-nowrap">
      {scrollItems.map((item) => (
        <div key={item.id} className="flex items-center gap-6 sm:gap-8 md:gap-10">
          <p className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[50px] sm:leading-[70px] md:leading-[90px] lg:leading-[106px] text-[#FBCA0C]">
            {item.left}
          </p>
          <img src={Arrow} alt="" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <p className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[50px] sm:leading-[70px] md:leading-[90px] lg:leading-[106px] text-[#FBCA0C]">
            {item.right}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* Turning Challenges Section */}
  <div
    ref={imageSectionRef}
    className="pl-4 sm:pl-6 md:pl-10 lg:pl-20 py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24"
    style={{
      borderBottom: "1px solid transparent",
      borderImage:
        "linear-gradient(90deg, #000000 0%, #575757 50%, #000000 100%) 1",
    }}
  >
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-0">
      <div className="flex flex-col space-y-4 md:space-y-8 lg:space-y-10 xl:space-y-14 w-full max-w-full lg:max-w-[520px]">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[54px] font-light relative leading-[1.2] sm:leading-[30px] md:leading-[40px] lg:leading-[50px] xl:leading-[60px]">
          Turning <span className="text-[#FBCA0C]">Challenges</span> into
          Impact
        </h2>

        <p className="text-base md:text-lg lg:text-xl text-[#C9C9C9] leading-[24px] sm:leading-[26px] md:leading-[29px]">
          {caseStudy.challenges}
        </p>
      </div>

      {/* translating image section */}
      <div className="flex items-start relative w-full lg:w-auto overflow-hidden">
        <img
          src={caseStudy.translatingImgs?.img1}
          alt=""
          className="relative z-20 w-full lg:max-w-none"
        />

        {/* scroll-progress controlled image */}
        <img
          src={caseStudy.translatingImgs?.img2}
          alt=""
          style={{
            transform: `translateX(${translateX}px)`,
            transition: "transform 0.2s ease-out",
          }}
          className="absolute left-0 h-[260px] sm:h-[400px] md:h-[500px] lg:h-[320px] xl:h-auto w-auto"
        />
      </div>
    </div>
  </div>

  {/* Case Solution Section */}
  <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
      <img src={ChallangeImg} alt="" className="col-span-1 mx-auto w-auto h-auto" />

      <div className="col-span-1 lg:col-span-2 space-y-8 md:space-y-10 lg:space-y-12">
        <div className="flex flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light relative leading-[1.2] sm:leading-[30px] md:leading-[36px] lg:leading-[42px] flex flex-col">
            <span>From Problem to Purpose: </span>
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
              <GoChevronLeft className="size-6 sm:size-7 md:size-8" />
            </button>
            <button
              onClick={() => handleSlide("next")}
              className={`cursor-pointer hover:text-[#FBCA0C] hover:scale-110 duration-300 ease-in-out transition-all ${
                currentSlide ===
                Math.ceil(caseStudy.caseSolutions.length / 2) - 1
                  ? "opacity-50"
                  : ""
              }`}
              disabled={
                currentSlide ===
                Math.ceil(caseStudy.caseSolutions.length / 2) - 1
              }
            >
              <GoChevronRight className="size-6 sm:size-7 md:size-8" />
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
            {caseStudy.caseSolutions.map((section) => (
              <div key={section.id} className="flex-shrink-0 w-full sm:w-1/2 px-0 sm:px-4">
                <div className="flex flex-col gap-4 w-full max-w-full sm:max-w-[550px]">
                  <h3 className="text-base sm:text-lg font-medium text-[#A1A1A1]">
                    {section.title}
                  </h3>
                  <h2 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-semibold leading-none text-white">
                    {section.id}
                  </h2>

                  {/* Conditional Render Based on Section Type */}
                  {section.title === "Challenges" && (
                    <>
                      {section.points ? (
                        <>
                          <p className="text-[#C9C9C9] text-sm sm:text-base md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[28px] font-light">
                            As a newly launched adventure park, Foggy
                            Mountain faced multiple challenges:
                          </p>
                          <ul className="space-y-3 sm:space-y-4 text-[#C9C9C9] text-sm sm:text-base md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px] font-light list-disc pl-4 sm:pl-5">
                            {section.points.map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))}
                          </ul>
                        </>
                      ) : section.content ? (
                        <p className="text-[#C9C9C9] text-sm sm:text-base md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px] font-light">
                          {section.content}
                        </p>
                      ) : null}
                    </>
                  )}

                  {section.title === "Solutions" && section.points && (
                    <ul className="space-y-3 sm:space-y-4 text-[#C9C9C9] text-sm sm:text-base md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px] font-light list-disc pl-4 sm:pl-5">
                      {section.points.map((point, idx) => {
                        if (point.includes(":")) {
                          const [title, desc] = point.split(":");
                          return (
                            <li key={idx}>
                              <span className="font-medium text-white">
                                {title}:
                              </span>
                              <br />
                              <span className="pl-0 sm:pl-1">{desc.trim()}</span>
                            </li>
                          );
                        }
                        return <li key={idx}>{point}</li>;
                      })}
                    </ul>
                  )}

                  {section.title === "Why it matters" && (
                    <p className="text-[#C9C9C9] text-sm sm:text-base md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px] font-light">
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

  {/* Performance Highlights */}
  <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-14 md:py-16 flex flex-col gap-12 sm:gap-16 md:gap-20">
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-[40px] sm:leading-[60px] md:leading-[80px] lg:leading-[100px]">
      Performance Highlights
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-x-64 md:gap-y-20">
      {caseStudy.performance.map((item, index) => (
        <div key={index} className="flex flex-col gap-4 sm:gap-6">
          <p className="text-[40px] sm:text-[48px] md:text-[54px] leading-[40px] sm:leading-[44px] md:leading-[52px] font-normal text-[#FBCA0C]">
            {item.percentage}
          </p>
          <div className="h-px w-full border-t border-[#77787B]"></div>
          <p className="text-xl sm:text-2xl leading-[28px] sm:leading-[36px] md:leading-[52px] font-normal">
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
