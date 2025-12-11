import React, { useState } from "react";
import testimonials1 from "../../assets/aboutus/testimonials1.png";
import testimonials2 from "../../assets/aboutus/testimonials2.png";
import testimonials3 from "../../assets/aboutus/testimonials3.png";
import quote from "../../assets/aboutus/quote.png";

const items = [
  {
    icon1: testimonials1,
    name: "Nikhil",
    company: "SNB Group",
    icon2: quote,
    content:
      "We're incredibly grateful for AdAgency's professionalism and creativity. They transformed our brand identity and helped us connect with our audience in ways we never imagined possible.",
  },
  {
    icon1: testimonials2,
    name: "Rajesh Kumar",
    company: "Global Ventures Ltd.",
    icon2: quote,
    content:
      "The team's strategic approach and attention to detail exceeded our expectations. Our digital presence has grown exponentially since partnering with them.",
  },
  {
    icon1: testimonials3,
    name: "Emily Chen",
    company: "Creative Solutions Co.",
    icon2: quote,
    content:
      "Outstanding work! They didn't just deliver a project—they delivered a comprehensive brand experience that resonates with our target market perfectly.",
  },
  {
    icon1: testimonials2,
    name: "Rajesh Kumar",
    company: "Global Ventures Ltd.",
    icon2: quote,
    content:
      "The team's strategic approach and attention to detail exceeded our expectations. Our digital presence has grown exponentially since partnering with them.",
  },
  {
    icon1: testimonials3,
    name: "Emily Chen",
    company: "Creative Solutions Co.",
    icon2: quote,
    content:
      "Outstanding work! They didn't just deliver a project—they delivered a comprehensive brand experience that resonates with our target market perfectly.",
  },
  {
    icon1: testimonials1,
    name: "Nikhil",
    company: "SNB Group",
    icon2: quote,
    content:
      "We're incredibly grateful for AdAgency's professionalism and creativity. They transformed our brand identity and helped us connect with our audience in ways we never imagined possible.",
  },
];

const Testimonials: React.FC = () => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;

  const startIndex = page * itemsPerPage;
  const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => {
    if (startIndex + itemsPerPage < items.length) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

return (
    <div className="pt-12 md:pt-16 lg:pt-20 pb-20 md:pb-32 px-4 md:px-10 lg:px-16">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        <h3 className="text-[#FBCA0C] text-lg md:text-xl leading-[26px] md:leading-[30px]">
          Testimonials
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 sm:gap-0">
          <h1 className="text-[28px] leading-[38px] md:text-[36px] md:leading-[55px]">
            What People Say?
          </h1>
          <div className="flex">
            <button
              onClick={prevPage}
              className="w-8 h-8 flex justify-center items-center border text-[#C9C9C9] border-[#C9C9C9] rounded-full hover:opacity-80 transition-opacity"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              onClick={nextPage}
              className="ml-4 w-8 h-8 flex justify-center items-center text-[#C9C9C9] border border-[#C9C9C9] rounded-full hover:opacity-80 transition-opacity"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 md:gap-5">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="border border-[#FFFFFF1A] p-6 md:p-8 rounded-lg bg-[#121212]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img 
                    src={item.icon1} 
                    alt={`${item.name}'s profile`} 
                    className="w-10 h-10 md:w-12 md:h-12"
                  />
                  <div className="flex flex-col ml-3">
                    <p className="text-base leading-6 font-medium">{item.name}</p>
                    <p className="text-sm leading-5 text-[#FFFFFF99] whitespace-nowrap overflow-hidden text-ellipsis">
                      {item.company}
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src={item.icon2}
                    alt="Company logo"
                    className="w-10 h-10 md:w-13 md:h-13"
                  />
                </div>
              </div>
              <p className="mt-4 md:mt-5 text-sm md:text-base leading-[22px] md:leading-6 text-[#FFFFFFCC]">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
