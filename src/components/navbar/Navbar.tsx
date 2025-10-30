import React, { useState, useEffect } from "react";
import Logo from "../../assets/TextLogo.png";
import CanaryLogo from "../../assets/videos/logo turn.mp4";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [showSubNav, setShowSubNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");

  const navigate = useNavigate();
  const location = useLocation();

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

  // Dynamically set the active link based on the URL path
  useEffect(() => {
    const path = location.pathname;

    if (path === "/") setActiveLink("Home");
    else if (
      path === "/company-overview" ||
      path === "/core-values" ||
      path === "/mission-statement" ||
      path === "/what-makes-you-different" ||
      path === "/founding-story" ||
      path === "/industries-we-serve"
    ) {
      setActiveLink("About Us");
    } else if (path === "/products") setActiveLink("Products");
    else if (path === "/services") setActiveLink("Services");
    else if (path === "/blogs") setActiveLink("Blogs");
    else if (path === "/case-studies") setActiveLink("Case Studies");
    else if (path === "/portfolio") setActiveLink("Portfolio");
    else if (path === "/contact") setActiveLink("Contact Us");
  }, [location]);

  const handleNavClick = (link: string) => {
    setActiveLink(link);

    // Navigation logic
    switch (link) {
      case "Home":
        navigate("/");
        break;
      case "Portfolio":
        navigate("/portfolio");
        break;
      case "Products":
        navigate("/products");
        break;
      case "Case Studies":
        navigate("/case-studies");
        break;
      case "Blogs":
        navigate("/blogs");
        break;
      default:
        break;
    }

    // Toggle submenu for About Us and Services
    if (link === "About Us" || link === "Services") {
      setShowSubNav((prev) => (activeLink === link ? !prev : true));
    } else {
      setShowSubNav(false);
      setMobileMenuOpen(false);
    }
  };

  const handleAboutSubLinkClick = (sublink: string) => {
    switch (sublink) {
      case "Company Overview":
        navigate("/company-overview");
        break;
      case "Core Values":
        navigate("/core-values");
        break;
      case "Mission Statement":
        navigate("/mission-statement");
        break;
      case "What makes you different":
        navigate("/what-makes-you-different");
        break;
      case "Founding Story":
        navigate("/founding-story");
        break;
      case "Industries we serve":
        navigate("/industries-we-serve");
        break;
      default:
        break;
    }

    // Close all dropdowns and mobile menu after navigation
    setShowSubNav(false);
    setMobileMenuOpen(false);
  };

  const handleServiceClick = (service: string) => {
    navigate("/services", { state: { selectedTab: service } });
    setShowSubNav(false);
    setActiveLink("Services");
    setMobileMenuOpen(false);
  };

  const handleMobileNavClick = (link: string) => {
    setActiveLink(link);

    // Navigation logic
    switch (link) {
      case "Home":
        navigate("/");
        break;
      case "Portfolio":
        navigate("/portfolio");
        break;
      case "Products":
        navigate("/products");
        break;
      case "Case Studies":
        navigate("/case-studies");
        break;
      case "Blogs":
        navigate("/blogs");
        break;
      default:
        break;
    }

    if (link === "About Us" || link === "Services") {
      setShowSubNav((prev) => (activeLink === link ? !prev : true));
    } else {
      setShowSubNav(false);
      setMobileMenuOpen(false);
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
            {navLinks.map((link) => (
              <div
                key={link}
                className="border-b border-gray-800 pb-4 last:border-b-0"
              >
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

                {/* Mobile About Submenu */}
                {activeLink === "About Us" &&
                  link === "About Us" &&
                  showSubNav && (
                    <div className="mt-3 ml-4 space-y-2">
                      {aboutSubLinks.map((sublink, index) => (
                        <p
                          key={index}
                          onClick={() => handleAboutSubLinkClick(sublink)}
                          className="text-white hover:text-[#FBCA0C] cursor-pointer transition-colors text-base py-1"
                        >
                          {sublink}
                        </p>
                      ))}
                    </div>
                  )}

                {/* Mobile Services Submenu */}
                {activeLink === "Services" &&
                  link === "Services" &&
                  showSubNav && (
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

            <button
              className="w-full bg-yellow-400 text-gray-900 px-6 py-3 rounded-md text-base font-semibold hover:bg-yellow-500 transition-colors mt-4"
              onClick={closeAllMenus}
            >
              Get In Touch
            </button>
          </div>
        </div>
      )}

      {/* Desktop About Subnav */}
      {showSubNav && activeLink === "About Us" && (
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-full w-full max-w-[670px] h-[220px] bg-[#000000] items-center justify-center z-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
            {aboutSubLinks.map((sublink, index) => (
              <p
                key={index}
                onClick={() => handleAboutSubLinkClick(sublink)}
                className="hover:text-[#FBCA0C] cursor-pointer transition-colors"
              >
                {sublink}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Services Subnav */}
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
