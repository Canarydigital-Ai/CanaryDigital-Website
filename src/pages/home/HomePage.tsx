import type React from "react";
import Navbar from "../../components/navbar/Navbar";
import VideoHero from "../../components/homepage/VideoHero";
import HeroBrandsSection from "../../components/homepage/HeroBrandsSection";
import OurProductSection from "../../components/homepage/OurProductSection";
import OurServiceSection from "../../components/homepage/OurServiceSection";
import WorksSection from "../../components/homepage/WorksSection";

const HomePage: React.FC = () => {
  return (
    <div className="h-screen overflow-y-auto scrollbar-hide bg-[#000000] text-white">
      <Navbar />
      <VideoHero />
      <HeroBrandsSection />
      <OurProductSection />
      <OurServiceSection />
      <WorksSection />
    </div>
  );
};

export default HomePage;
