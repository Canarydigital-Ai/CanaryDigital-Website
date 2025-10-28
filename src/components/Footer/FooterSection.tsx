import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import LogoTurn from "../../assets/videos/logo turn.mp4";
import TextLogo from "../../assets/TextLogo2.png";
import { IoIosArrowDown, IoMdMail } from "react-icons/io";
import { MdAddIcCall } from "react-icons/md";

const FooterSection: React.FC = () => {
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) =>
      prev.includes(menu) ? prev.filter((m) => m !== menu) : [...prev, menu]
    );
  };

  const menuColumns = [
    {
      title: "Left Column",
      items: [
        { name: "Vision" },
        { name: "Cases" },
        {
          name: "Services",
          submenu: [
            "AI Powered Solutions",
            "Web & App Development",
            "Design and Creative",
            "Digital Marketing",
            "Affiliate Partnership",
          ],
        },
      ],
    },
    {
      title: "Right Column",
      items: [
        { name: "About" },
        { name: "Blogs" },
        {
          name: "Work",
          submenu: ["UI/UX Design", "Brand Identity", "Motion Graphics"],
        },
      ],
    },
  ];

  return (
<footer className="bg-[#101010] px-4 md:px-10 lg:px-20 pt-16 pb-14">
  <div className="w-full max-w-[90%] mx-auto">
    {/* Top Newsletter Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center border-b border-[#515151] pb-16 px-2 gap-10 lg:gap-0">
      <div className="flex flex-col gap-8 order-2 lg:order-1">
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-[64px] font-normal leading-tight sm:leading-snug xl:leading-[67px] w-full max-w-2xl">
          Mobile Thinking in your mailbox
        </h2>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <div className="w-[10px] h-[10px] bg-[#D9D9D9] rounded-full"></div>
            <label className="text-lg sm:text-xl leading-[30px]">Email address</label>
          </div>
          <div className="flex items-center max-w-xl h-[60px] sm:h-[70px] rounded-full bg-[#EEEEEE] p-1">
            <input
              type="email"
              placeholder="example@email.com"
              className="flex-1 px-4 py-3 bg-transparent text-base text-black placeholder-black/50 focus:outline-none"
            />
            <button className="bg-[#000000] font-normal px-6 sm:px-8 py-2 h-full rounded-full hover:bg-gray-200 transition text-sm sm:text-base">
              Send
            </button>
          </div>
          <div className="flex items-center space-x-2 text-sm sm:text-base">
            <input
              type="checkbox"
              className="appearance-auto w-4 h-4 border border-gray-500 rounded-none accent-[#FBCA0C] cursor-pointer transition-all duration-200"
            />
            <span>I agree to the privacy statement</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center flex-shrink-0 order-1 lg:order-2">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
          <video
            src={LogoTurn}
            autoPlay
            loop
            muted
            className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[165px] lg:h-[165px]"
          ></video>
          <img
            src={TextLogo}
            alt="Canary Digital.ai"
            className="object-cover w-auto h-auto sm:-ml-4 mt-4 sm:mt-0"
          />
        </div>
      </div>
    </div>

    {/* Bottom Links Section */}
    <div className="flex flex-col lg:flex-row justify-between gap-10 mt-16 pb-16 px-2">
      <div className="space-y-10">
        <h3 className="text-xl leading-[20px] font-normal">Directly to</h3>

        <div className="flex flex-row gap-10 sm:gap-20 text-lg sm:text-xl leading-[20px] font-normal">
          {menuColumns.map((col, colIndex) => (
            <ul key={colIndex} className="space-y-8 sm:space-y-10 w-full sm:w-44">
              {col.items.map((item, index) => (
                <li key={index}>
                  {!item.submenu ? (
                    <div className="hover:text-[#FBCA0C] transition-colors cursor-pointer">
                      {item.name}
                    </div>
                  ) : (
                    <div onClick={() => toggleMenu(item.name)}>
                      <div className="flex items-center justify-between cursor-pointer hover:text-[#FBCA0C] transition-colors">
                        <p>{item.name}</p>
                        <IoIosArrowDown
                          className={`w-4 h-4 mt-[2px] transform transition-transform duration-300 ${
                            openMenus.includes(item.name)
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </div>

                      {/* Submenu */}
                      {openMenus.includes(item.name) && (
                        <ul className="mt-6 sm:mt-8 ml-4 space-y-4 sm:space-y-5 text-sm sm:text-base">
                          {item.submenu.map((sub, subIndex) => (
                            <li
                              key={subIndex}
                              className="hover:text-[#FBCA0C] cursor-pointer"
                            >
                              {sub}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between w-full max-w-[630px] gap-10 sm:gap-0">
        <div className="flex flex-col gap-8 sm:gap-12">
          <h4 className="text-xl sm:text-2xl leading-[27px] font-normal">Address</h4>
          <p className="text-base sm:text-lg leading-[25px]">
            First Floor, Laxmane's Tower,
            <br />
            Canary Digital, M O Road,
            <br />
            opposite to Municipal Office,
            <br />
            Aluva, Kerala 683101
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:gap-12">
          <h4 className="text-xl sm:text-2xl leading-[27px] font-normal">
            Get in touch
          </h4>
          <ul className="text-base sm:text-lg leading-[25px] space-y-3">
            <li className="flex items-center gap-4">
              <IoMdMail className="size-5 sm:size-6" /> info@canarydigital.ai
            </li>
            <li className="flex items-center gap-4">
              <MdAddIcCall className="size-5 sm:size-6" /> +91 7994431793
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom Line */}
    <div className="border-t border-[#515151] pt-10 px-2 flex flex-col md:flex-row items-center justify-between text-lg sm:text-xl">
      <p className="text-center md:text-left mb-5 md:mb-0">info@canarydigital.ai.com</p>

      <div className="flex  flex-row items-center gap-8 sm:gap-20">
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/company/canary-digital-ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#ffffff] rounded-full p-2 sm:p-3 hover:scale-110 transition-all duration-300 ease-in-out"
          >
            <FaLinkedinIn className="size-5 sm:size-6" />
          </a>
          <a
            href="https://www.instagram.com/canarydigital.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#ffffff] rounded-full p-2 sm:p-3 hover:scale-110 transition-all duration-300 ease-in-out"
          >
            <FaInstagram className="size-5 sm:size-6" />
          </a>
          <a
            href="https://www.facebook.com/canarydigitalAI"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#ffffff] rounded-full p-2 sm:p-3 hover:scale-110 transition-all duration-300 ease-in-out"
          >
            <FaFacebookF className="size-5 sm:size-6" />
          </a>
        </div>

        <p className=" ">Privacy Policy</p>
      </div>
    </div>
  </div>
</footer>
  );
};

export default FooterSection;
