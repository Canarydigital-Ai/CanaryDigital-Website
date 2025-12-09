import React from "react";
import Navbar from "../../components/navbar/Navbar";
import FooterSection from "../../components/Footer/FooterSection";
import AboutBanner from "../../components/about/AboutBanner"; 
import CoreValues from "../../components/about/CoreValues";
import Grid from "../../components/about/Grid";
import IndustryServeSection from "../../components/about/IndustryServeSection";

const AboutUsPage: React.FC = () => {
  return (
    <div className="h-screen overflow-y-auto scrollbar-hide bg-[#000000] text-white">
      <Navbar />
      <AboutBanner /> 
      <CoreValues/>
      <Grid/>
      <IndustryServeSection />
      <FooterSection />
    </div>
  );
};

export default AboutUsPage;
