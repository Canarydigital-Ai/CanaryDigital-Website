import React, { useState } from "react";
import CanaryLogo from "../../assets/videos/logo turn.mp4";
import { MdEmail, MdPhone } from "react-icons/md";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    budget: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Log form data to console instead of API call
    console.log("Form submitted with data:", formData);

    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      budget: "",
    });
  };

  const formFields = [
    { id: "name", label: "Name", type: "text", required: true },
    { id: "company", label: "Company", type: "text", required: false },
    { id: "email", label: "Email", type: "email", required: true },
    { id: "budget", label: "Budget", type: "text", required: false },
  ];

  return (
    <div
      className="text-white pt-16 md:pt-20 bg-gradient-to-b from-[#000000] to-[#101010] min-h-screen flex flex-col relative"
      style={{
        borderTop: "1px solid transparent",
        borderImage:
          "linear-gradient(90deg, #000000 0%, #565656 50%, #000000 100%) 1",
      }}
    >
      <div className="px-4 md:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-row w-full justify-between items-center mb-16 md:mb-32 lg:pr-5 gap-8 md:gap-4">
          <h2 className="text-[#FBCA0C] text-[50px] sm:text-[8  0px] md:text-[180px] lg:text-[260px] leading-[50px] sm:leading-[100px] md:leading-[150px] lg:leading-[200px] tracking-[-2%] text-left">
            Contact Us
          </h2>

          <div className="lg:mr-20">
            <video
              src={CanaryLogo}
              autoPlay
              loop
              muted
              className="w-[60px] h-[60px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] rounded-full"
            ></video>
          </div>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-24 items-start">
          {/* Left side: Text + Socials */}
          <div className="space-y-6 md:space-y-8 col-span-1">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-light leading-[1.3] sm:leading-[1.4] md:leading-[41px] w-full max-w-full lg:max-w-md">
              Let's unlock together the next level of possibilities! Reach out.
            </h2>
          </div>

          {/* Right side: Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 lg:gap-x-18 gap-y-12 md:gap-y-16 lg:gap-y-20 w-full col-span-1 lg:col-span-2"
          >
            {formFields.map((field) => (
              <div key={field.id} className="flex items-center gap-4 md:gap-6">
                <label htmlFor={field.id} className="text-base sm:text-lg md:text-xl leading-[27px] whitespace-nowrap">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleChange}
                  required={field.required}
                  placeholder=""
                  className="border-b border-b-[#565656] h-none focus:outline-none w-full bg-transparent text-gray-300 text-sm md:text-base"
                />
              </div>
            ))}

            {/* Submit Button */}
            <div className="col-span-1 sm:col-span-2 flex justify-center -mt-4">
              <button
                type="submit"
                className="group bg-[#FBCA0C] text-black text-sm md:text-base font-normal leading-[23px] px-4 md:px-6 lg:px-10 h-[36px] md:h-[40px] w-fit rounded-md flex items-center justify-center overflow-hidden relative transition-all duration-600 cursor-pointer"
              >
                {/* Original text that moves left */}
                <span className="flex items-center transition-all duration-700 ease-out group-hover:-translate-x-60 group-hover:opacity-0">
                  Submit{" "}
                </span>

                {/* Duplicate text that slides in from right */}
                <span className="absolute flex items-center transition-all duration-700 ease-out transform opacity-0 translate-x-40 group-hover:translate-x-0 group-hover:opacity-100">
                  Submit{" "}
                </span>
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 md:-mt-6 space-y-8 md:space-y-12">
          <p className="text-lg sm:text-xl md:text-2xl leading-[24px]">Social Media</p>
          <div className="flex space-x-6 md:space-x-10 text-sm md:text-base leading-[25px]">
            <a href="#" className="hover:text-[#FBCA0C] transition">
              Instagram
            </a>
            <a href="#" className="hover:text-[#FBCA0C] transition">
              Twitter
            </a>
            <a href="#" className="hover:text-[#FBCA0C] transition">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-px border-b border-b-[#515151] py-8 md:py-10"></div>

      <div className="px-4 md:px-10 lg:px-16 py-12 md:py-20 flex flex-col lg:flex-row justify-between gap-12 md:gap-16 lg:gap-4">
        <div className="flex flex-row md:justify-between w-full lg:max-w-[360px] gap-8 md:gap-4">
          <div className="space-y-6 md:space-y-8 text-lg md:text-xl leading-[20px]">
            <p className="hover:text-[#FBCA0C] cursor-pointer transition">
              About Us
            </p>
            <p className="hover:text-[#FBCA0C] cursor-pointer transition">
              Products
            </p>
            <p className="hover:text-[#FBCA0C] cursor-pointer transition">
              Services
            </p>
          </div>

          <div className="space-y-6 md:space-y-8 text-lg md:text-xl leading-[20px]">
            <p className="hover:text-[#FBCA0C] cursor-pointer transition">
              Case Studies
            </p>
            <p className="hover:text-[#FBCA0C] cursor-pointer transition">
              Portfolio
            </p>
            <p className="hover:text-[#FBCA0C] cursor-pointer transition">
              Blogs
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full lg:max-w-[580px] gap-8 md:gap-4">
          <div className="space-y-6 md:space-y-10">
            <h4 className="text-xl md:text-2xl font-medium leading-[27px]">Address</h4>
            <p className="leading-[20px] md:leading-[22px] text-sm md:text-base max-w-full md:max-w-[220px]">
              First Floor, Laxman's Tower, Canary Digital, M.O Road, opposite to
              Municipal Office, Aluva, Kerala 683101
            </p>
          </div>

          <div className="space-y-6 md:space-y-10">
            <h4 className="text-xl md:text-2xl font-medium leading-[27px]">
              Get in touch
            </h4>
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="flex items-center gap-2">
                <MdEmail className="text-[#FBCA0C]" />
                <a
                  href="mailto:info@canarydigital.ai"
                  className="hover:text-[#FBCA0C] transition text-sm md:text-base"
                >
                  info@canarydigital.ai
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MdPhone className="text-[#FBCA0C]" />
                <a
                  href="tel:+917994431793"
                  className="hover:text-[#FBCA0C] transition text-sm md:text-base"
                >
                  +91 7994431793
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-px border-t border-t-[#515151]"></div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-lg md:text-xl py-4 md:py-6 px-4 md:px-10 lg:px-16 gap-3 md:gap-4">
        <p className="text-center md:text-left">info@canarydigital.ai.com</p>
        <p className="hover:text-[#FBCA0C] transition cursor-pointer">
          Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default ContactSection;