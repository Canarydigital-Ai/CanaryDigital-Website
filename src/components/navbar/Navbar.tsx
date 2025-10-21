import React, { useState } from "react";
import Logo from "../../assets/TextLogo.png"; 
import CanaryLogo from "../../assets/videos/logo turn.mp4";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [showSubNav, setShowSubNav] = useState(false);
  const [selectedService, setSelectedService] = useState(
    "AI Powered Solutions"
  );

  const navLinks = [
    "Home",
    "About Us",
    "Products",
    "Services",
    "Blogs",
    "Case Studies",
    "Portfolio",
    "Contact Us",
  ];

  const aboutSubLinks = [
    "Company Overview",
    "Core Values",
    "Mission Statement",
    "What makes you different",
    "Founding Story",
    "Industries we serve",
  ];

  const serviceLinks: Record<string, string[]> = {
    "AI Powered Solutions": [
      "Business Intelligence and Analytics",
      "Automation and Workflow optimisation",
      "Predictive modelling and forecasting",
      "Natural Language Processing",
      "Custom AI Solutions",
    ],
    "Web and App Development": [
      "Website Development",
      "Application Development",
    ],
    "Design and Creative": [
      "UX/UI Design",
      "Graphic Design",
      "Video Shooting",
      "Motion Graphics",
      "Video Editing",
    ],
    "Digital Marketing": ["SEO Services", "Perfomance Marketing"],
    "Affiliate Partnership": ["Affiliate Marketing", "360 Marketing"],
    "Content & Outreach": ["Content Marketing", "Influencer Marketing"],
  };

  const handleNavClick = (link: string) => {
    setActiveLink(link);
    if (link === "About Us" || link === "Services") {
      setShowSubNav((prev) => (activeLink === link ? !prev : true));
    } else {
      setShowSubNav(false);
    }
  };

  return (
    <nav className="bg-[#000000] px-4 md:px-12 py-4 relative">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <video
            src={CanaryLogo}
            autoPlay
            loop
            muted
            className="w-[65px] h-[65px] rounded-full"
          ></video>

          <img src={Logo} alt="Canary Text Logo" className="" />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-10 relative">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className={`text-base font-normal transition-colors leading-[24px] ${
                activeLink === link
                  ? "text-[#FBCA0C]"
                  : "text-white hover:text-[#FBCA0C]"
              }`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Get In Touch Button */}
        <button className="hidden lg:block bg-yellow-400 text-gray-900 px-6 py-2 rounded-md text-sm font-semibold hover:bg-yellow-500 transition-colors">
          Get In Touch
        </button>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Sub Navigation (About Us) */}
      {showSubNav && activeLink === "About Us" && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-full max-w-[670px] h-[220px] bg-[#000000] flex items-center justify-center z-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
            {aboutSubLinks.map((sublink, index) => (
              <p
                key={index}
                className="hover:text-[#FBCA0C] cursor-pointer transition-colors"
              >
                {sublink}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Sub Navigation (Services) */}
      {showSubNav && activeLink === "Services" && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-full max-w-[750px] py-6 px-10 bg-[#000000] flex items-center  z-50">
          <div className="flex ">
            {/* Left column - main categories */}
            <div
              className="pr-5 space-y-5 w-fit "
              style={{
                borderRight: "1px solid transparent",
                borderImage:
                  "linear-gradient(180deg, #000000 0%, #565656 50%, #000000 100%) 1",
              }}
            >
              {Object.keys(serviceLinks).map((category) => (
                <p
                  key={category}
                  onClick={() => setSelectedService(category)}
                  className={`cursor-pointer transition-colors flex items-center gap-3 leading-[25px] ${
                    selectedService === category
                      ? "text-[#FBCA0C]"
                      : "hover:text-[#FBCA0C]"
                  }`}
                >
                  {category}
                  <MdOutlineKeyboardArrowRight className="size-4" />
                </p>
              ))}
            </div>

            {/* Right column - subitems */}
            <div
              className={`w-fit space-y-5 pl-8 ${
                selectedService === "Design and Creative"
                  ? "grid grid-cols-2 h-fit space-x-8 "
                  : "space-y-5 pl-8"
              }`}
            >
              {serviceLinks[selectedService].map((item, index) => (
                <p
                  key={index}
                  className="cursor-pointer font-normal hover:text-[#FBCA0C] transition-colors w-fit"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
