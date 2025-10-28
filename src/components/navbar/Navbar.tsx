// import React, { useState } from "react";
// import Logo from "../../assets/TextLogo.png";
// import CanaryLogo from "../../assets/videos/logo turn.mp4";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

// const Navbar: React.FC = () => {
//   const [activeLink, setActiveLink] = useState("Home");
//   const [showSubNav, setShowSubNav] = useState(false);
//   const [selectedService, setSelectedService] = useState(
//     "AI Powered Solutions"
//   );

//   const navigate = useNavigate();

//   const navLinks = [
//     "Home",
//     "About Us",
//     "Products",
//     "Services",
//     "Blogs",
//     "Case Studies",
//     "Portfolio",
//     "Contact Us",
//   ];

//   const aboutSubLinks = [
//     "Company Overview",
//     "Core Values",
//     "Mission Statement",
//     "What makes you different",
//     "Founding Story",
//     "Industries we serve",
//   ];

//   const serviceLinks: Record<string, string[]> = {
//     "AI Powered Solutions": [
//       "Business Intelligence and Analytics",
//       "Automation and Workflow optimisation",
//       "Predictive modelling and forecasting",
//       "Natural Language Processing",
//       "Custom AI Solutions",
//     ],
//     "Web and App Development": [
//       "Website Development",
//       "Application Development",
//     ],
//     "Design and Creative": [
//       "UX/UI Design",
//       "Graphic Design",
//       "Video Shooting",
//       "Motion Graphics",
//       "Video Editing",
//     ],
//     "Digital Marketing": ["SEO Services", "Perfomance Marketing"],
//     "Affiliate Partnership": ["Affiliate Marketing", "360 Marketing"],
//     "Content & Outreach": ["Content Marketing", "Influencer Marketing"],
//   };

//   const handleNavClick = (link: string) => {
//     setActiveLink(link);
//     if (link === "About Us" || link === "Services") {
//       setShowSubNav((prev) => (activeLink === link ? !prev : true));
//     } else {
//       setShowSubNav(false);
//     }
//   };

//   return (
//     <nav className="bg-[#000000] px-4 md:px-12 py-4 relative">
//       <div className="mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <div
//           onClick={() => navigate("/")}
//           className="flex items-center cursor-pointer"
//         >
//           <video
//             src={CanaryLogo}
//             autoPlay
//             loop
//             muted
//             className="w-[65px] h-[65px] rounded-full"
//           ></video>

//           <img src={Logo} alt="Canary Text Logo" className="" />
//         </div>

//         {/* Navigation Links */}
//         <div className="flex items-center space-x-10 relative">
//           {navLinks.map((link) => (
//             <button
//               key={link}
//               onClick={() => handleNavClick(link)}
//               className={`text-base font-normal transition-colors leading-[24px] ${
//                 activeLink === link
//                   ? "text-[#FBCA0C]"
//                   : "text-white hover:text-[#FBCA0C]"
//               }`}
//             >
//               {link}
//             </button>
//           ))}
//         </div>

//         {/* Get In Touch Button */}
//         <button className="hidden lg:block bg-yellow-400 text-gray-900 px-6 py-2 rounded-md text-sm font-semibold hover:bg-yellow-500 transition-colors">
//           Get In Touch
//         </button>

//         {/* Mobile Menu Button */}
//         <button className="lg:hidden text-white">
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Sub Navigation (About Us) */}
//       {showSubNav && activeLink === "About Us" && (
//         <div className="absolute left-1/2 -translate-x-1/2 top-full w-full max-w-[670px] h-[220px] bg-[#000000] flex items-center justify-center z-50">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
//             {aboutSubLinks.map((sublink, index) => (
//               <p
//                 key={index}
//                 className="hover:text-[#FBCA0C] cursor-pointer transition-colors"
//               >
//                 {sublink}
//               </p>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Sub Navigation (Services) */}
//       {showSubNav && activeLink === "Services" && (
//         <div className="absolute left-1/2 -translate-x-1/2 top-full w-full max-w-[750px] py-6 px-10 bg-[#000000] flex items-center  z-50">
//           <div className="flex ">
//             {/* Left column - main categories */}
//             <div
//               className="pr-5 space-y-5 w-fit "
//               style={{
//                 borderRight: "1px solid transparent",
//                 borderImage:
//                   "linear-gradient(180deg, #000000 0%, #565656 50%, #000000 100%) 1",
//               }}
//             >
//               {Object.keys(serviceLinks).map((category) => (
//                 <p
//                   key={category}
//                   onClick={() => setSelectedService(category)}
//                   className={`cursor-pointer transition-colors flex items-center gap-3 leading-[25px] ${
//                     selectedService === category
//                       ? "text-[#FBCA0C]"
//                       : "hover:text-[#FBCA0C]"
//                   }`}
//                 >
//                   {category}
//                   <MdOutlineKeyboardArrowRight className="size-4" />
//                 </p>
//               ))}
//             </div>

//             {/* Right column - subitems */}
//             <div
//               className={`w-fit space-y-5 pl-8 ${
//                 selectedService === "Design and Creative"
//                   ? "grid grid-cols-2 h-fit space-x-8 "
//                   : "space-y-5 pl-8"
//               }`}
//             >
//               {serviceLinks[selectedService].map((item, index) => (
//                 <p
//                   key={index}
//                   className="cursor-pointer font-normal hover:text-[#FBCA0C] transition-colors w-fit"
//                 >
//                   {item}
//                 </p>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import Logo from "../../assets/TextLogo.png";
import CanaryLogo from "../../assets/videos/logo turn.mp4";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [showSubNav, setShowSubNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

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

  const serviceLinks = [
    "AI Powered Solutions",
    "Web Development",
    "UX/UI Designing",
    "Design & Creative",
    "Digital Marketing",
    "Affiliate Partnership",
  ];

  const handleNavClick = (link: string) => {
    setActiveLink(link);

    // Navigate directly for Home
    if (link === "Home") {
      navigate("/");
      setShowSubNav(false);
      setMobileMenuOpen(false);
      return;
    }

    // Toggle submenu for About Us and Services
    if (link === "About Us" || link === "Services") {
      setShowSubNav((prev) => (activeLink === link ? !prev : true));
    } else {
      setShowSubNav(false);
      setMobileMenuOpen(false);
      // Add navigation for other links here if needed
    }
  };

  const handleServiceClick = (service: string) => {
    navigate("/services", { state: { selectedTab: service } });
    setShowSubNav(false);
    setActiveLink("Services");
    setMobileMenuOpen(false);
  };

  const handleMobileNavClick = (link: string) => {
    setActiveLink(link);

    if (link === "Home") {
      navigate("/");
      setShowSubNav(false);
      setMobileMenuOpen(false);
      return;
    }

    // Toggle submenu for About Us and Services on mobile
    if (link === "About Us" || link === "Services") {
      setShowSubNav((prev) => (activeLink === link ? !prev : true));
    } else {
      setShowSubNav(false);
      setMobileMenuOpen(false);
      // Add navigation for other links here if needed
    }
  };

  const handleMobileServiceClick = (service: string) => {
    navigate("/services", { state: { selectedTab: service } });
    setShowSubNav(false);
    setActiveLink("Services");
    setMobileMenuOpen(false);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setShowSubNav(false);
  };

  return (
    <nav className="bg-[#000000] px-4 md:px-12 py-4 relative">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => {
            navigate("/");
            setActiveLink("Home");
            closeAllMenus();
          }}
          className="flex items-center cursor-pointer"
        >
          <video
            src={CanaryLogo}
            autoPlay
            loop
            muted
            className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[65px] lg:h-[65px] rounded-full"
          ></video>
          <img src={Logo} alt="Canary Text Logo" className="block" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-10 relative">
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

        {/* Desktop Get In Touch Button */}
        <button className="hidden lg:block bg-yellow-400 text-gray-900 px-6 py-2 rounded-md text-sm font-semibold hover:bg-yellow-500 transition-colors">
          Get In Touch
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#000000] z-50 border-t border-gray-800 max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-6 space-y-4">
            {/* Mobile Navigation Links */}
            {navLinks.map((link) => (
              <div key={link} className="border-b border-gray-800 pb-4 last:border-b-0">
                <button
                  onClick={() => handleMobileNavClick(link)}
                  className={`text-lg font-normal transition-colors leading-[24px] w-full text-left flex items-center justify-between ${
                    activeLink === link
                      ? "text-[#FBCA0C]"
                      : "text-white hover:text-[#FBCA0C]"
                  }`}
                >
                  {link}
                  {(link === "About Us" || link === "Services") && (
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${
                        showSubNav && activeLink === link ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>
                
                {/* Mobile Sub Navigation (About Us) */}
                {activeLink === "About Us" && link === "About Us" && showSubNav && (
                  <div className="mt-3 ml-4 space-y-2">
                    {aboutSubLinks.map((sublink, index) => (
                      <p
                        key={index}
                        className="text-white hover:text-[#FBCA0C] cursor-pointer transition-colors text-base py-1"
                        onClick={closeAllMenus}
                      >
                        {sublink}
                      </p>
                    ))}
                  </div>
                )}

                {/* Mobile Sub Navigation (Services) */}
                {activeLink === "Services" && link === "Services" && showSubNav && (
                  <div className="mt-3 ml-4 space-y-2">
                    {serviceLinks.map((service, index) => (
                      <p
                        key={index}
                        onClick={() => handleMobileServiceClick(service)}
                        className="text-white hover:text-[#FBCA0C] cursor-pointer transition-colors text-base py-1"
                      >
                        {service}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile Get In Touch Button */}
            <button 
              className="w-full bg-yellow-400 text-gray-900 px-6 py-3 rounded-md text-base font-semibold hover:bg-yellow-500 transition-colors mt-4"
              onClick={closeAllMenus}
            >
              Get In Touch
            </button>
          </div>
        </div>
      )}

      {/* Desktop Sub Navigation (About Us) */}
      {showSubNav && activeLink === "About Us" && (
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-full w-full max-w-[670px] h-[220px] bg-[#000000] items-center justify-center z-50">
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

      {/* Desktop Sub Navigation (Services) */}
      {showSubNav && activeLink === "Services" && (
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-full w-full max-w-[670px] h-[220px] bg-[#000000] items-center justify-center z-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
            {serviceLinks.map((service, index) => (
              <p
                key={index}
                onClick={() => handleServiceClick(service)}
                className="hover:text-[#FBCA0C] cursor-pointer transition-colors"
              >
                {service}
              </p>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
