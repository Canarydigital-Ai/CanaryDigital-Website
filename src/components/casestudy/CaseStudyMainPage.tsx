import React from "react";
import Arrow from "../../assets/Arrow.png";
import { useNavigate } from "react-router-dom";

const FoggyVido =
  "https://res.cloudinary.com/ddyymyvny/video/upload/v1761887368/Foggy_Vido_ns07em.mov";
const SNBVido =
  "https://res.cloudinary.com/ddyymyvny/video/upload/v1761887357/SNB_Vido_oiplgt.mp4";
const MMVido =
  "https://res.cloudinary.com/ddyymyvny/video/upload/v1761890601/MM_Vido_xuhnvf.mp4";
const KLFVido =
  "https://res.cloudinary.com/ddyymyvny/video/upload/v1761890602/KLF_Vido_jkx4jb.mp4";
const GentleVido =
  "https://res.cloudinary.com/ddyymyvny/video/upload/v1761890600/Gentle_Vido_zogv0z.mp4";

const videos = [
  {
    id: "foggyMountain",
    src: FoggyVido,
    title: "Foggy Mountain",
    subtitle: "Adventure & Theme Park",
    blur: "64px",
  },
  {
    id: "snb",
    src: SNBVido,
    title: "SNB",
    subtitle: "IT & Security Solutions",
    blur: "35px",
  },
  {
    id: "mmMedicare",
    src: MMVido,
    title: "MM Medicare",
    subtitle: "Healthcare",
    blur: "64px",
  },
  {
    id: "klf",
    src: KLFVido,
    title: "KLF",
    subtitle: "Arts, Culture and Public Events",
    blur: "64px",
  },
  {
    id: "gentleAyurvedic",
    src: GentleVido,
    title: "Gentle Ayurvedic",
    subtitle: "Ayurvedic Skincare and Wellness",
    blur: "64px",
  },
];

const CaseStudyMainPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-14 md:py-16 lg:py-20 border-b border-[#242424]">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8 md:gap-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-[62px] font-light relative leading-[1.2] sm:leading-[50px] md:leading-[60px] lg:leading-[70px]">
            Excellence <br /> in Every Project
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#A1A1A1] leading-[24px] sm:leading-[28px] md:leading-[30px] w-full max-w-full md:max-w-[620px]">
            Explore our projects in digital marketing. From strategic campaigns
            to professional website designs, each project is focused on
            delivering clear results. See how we help businesses achieve their
            goals in the digital space.
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-2">
          {videos.map((item, index) => (
            <div
              className="relative  cursor-pointer"
              key={index}
              onClick={() => navigate(`/case-studies/${item.id}`)}
            >
              <div className="overflow-hidden">
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  className="w-full h-auto aspect-video object-cover transition-all duration-300 ease-in-out hover:scale-105"
                ></video>
              </div>
              <div
                className="absolute bottom-0 px-4 sm:px-5 md:px-6 pt-4 sm:pt-5 md:pt-7 w-full h-[80px] sm:h-[90px] md:h-[110px] cursor-pointer"
                style={{
                  backdropFilter: `blur(${item.blur})`,
                  WebkitBackdropFilter: `blur(${item.blur})`,
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, white 40%, white 100%)",
                  maskImage:
                    "linear-gradient(to bottom, transparent 0%, white 40%, white 100%)",
                }}
              >
                <p className="text-[#A1A1A1] text-sm sm:text-base leading-[24px] sm:leading-[28px] md:leading-[34px]">
                  {item.title}
                </p>
                <div className="text-lg sm:text-xl md:text-2xl leading-[22px] sm:leading-[24px] md:leading-[27px] flex items-center gap-2">
                  <p>{item.subtitle}</p>
                  <img src={Arrow} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CaseStudyMainPage;
