import React from "react";
import Navbar from "../../components/navbar/Navbar";
import FooterSection from "../../components/Footer/FooterSection";
import AboutBanner from "../../components/about/AboutBanner";
import Whoweare from "../../components/about/whoWeAre";
import CoreValues from "../../components/about/CoreValues";
import Grid from "../../components/about/Grid";

const AboutUsPage: React.FC = () => {
  return (
    <div className="h-screen overflow-y-auto scrollbar-hide bg-[#000000] text-white">
      <Navbar />
      <AboutBanner />
      <Whoweare/>
      <CoreValues/>
      <Grid/>
      <FooterSection />
    </div>
  );
};

export default AboutUsPage;
