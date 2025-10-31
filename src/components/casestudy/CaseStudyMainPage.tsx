import React from "react";
import Arrow from "../../assets/Arrow.png";

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
    src: FoggyVido,
    title: "Foggy Mountain",
    subtitle: "Adventure & Theme Park",
    blur: "64px",
  },
  {
    src: SNBVido,
    title: "SNB",
    subtitle: "IT & Security Solutions",
    blur: "35px",
  },
  {
    src: MMVido,
    title: "MM Medicare",
    subtitle: "Healthcare",
    blur: "64px",
  },
  {
    src: KLFVido,
    title: "KLF",
    subtitle: "Arts, Culture and Public Events",
    blur: "64px",
  },
  {
    src: GentleVido,
    title: "Gentle Ayurvedic",
    subtitle: "Ayurvedic Skincare and Wellness",
    blur: "64px",
  },
];

const CaseStudyMainPage: React.FC = () => {
  return (
    <>
      <div className=" px-4 md:px-10 lg:px-20 py-16 md:py-20  border-b border-[#242424]">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center ">
          <h2 className="text-[32px] xl:text-[62px] font-light relative leading-[70px]">
            Excellence <br /> in Every Project
          </h2>
          <p className="text-xl text-[#A1A1A1] leading-[30px] w-full max-w-[620px]">
            Explore our projects in digital marketing. From strategic campaigns
            to professional website designs, each project is focused on
            delivering clear results. See how we help businesses achieve their
            goals in the digital space.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-10 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-2 gap-2">
          {videos.map((item, index) => (
            <div className="relative" key={index}>
              <video src={item.src} autoPlay loop muted></video>
              <div
                className="absolute bottom-0 px-6 pt-7 w-full h-[110px]"
                style={{
                  backdropFilter: `blur(${item.blur})`,
                  WebkitBackdropFilter: `blur(${item.blur})`,
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, white 40%, white 100%)",
                  maskImage:
                    "linear-gradient(to bottom, transparent 0%, white 40%, white 100%)",
                }}
              >
                <p className="text-[#A1A1A1] text-base leading-[34px]">
                  {item.title}
                </p>
                <div className="text-2xl leading-[27px] flex items-center gap-2">
                  <p>{item.subtitle}</p>
                  <img src={Arrow} alt="" className="w-5 h-5" />
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
