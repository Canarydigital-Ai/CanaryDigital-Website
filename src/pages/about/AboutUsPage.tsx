import React from "react";
import Navbar from "../../components/navbar/Navbar";
import FooterSection from "../../components/Footer/FooterSection";

const AboutUsPage: React.FC = () => {
  return (
    <div className="h-screen overflow-y-auto scrollbar-hide bg-[#000000] text-white">
      <Navbar />

      <FooterSection />
    </div>
  );
};

export default AboutUsPage;
