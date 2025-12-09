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
    <div className="container mx-auto h-[400px] bg-black mb-30">
      <div className="px-50 flex flex-col py-10">
        <h3 className="text-[#FBCA0C]">Testimonials</h3>
        <div className="flex justify-between">
          <h1 className="text-3xl mt-1">What People Say?</h1>
          <div className="flex">
            <button
              onClick={prevPage}
              className="w-8 h-8 flex justify-center items-center border text-[#C9C9C9] border-[#C9C9C9] rounded-full"
            >
              ←
            </button>
            <button
              onClick={nextPage}
              className="ml-4 w-8 h-8 flex justify-center items-center text-[#C9C9C9] border border-[#C9C9C9] rounded-full"
            >
              →
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-10 gap-5">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="border border-[#FFFFFF1A] p-5 rounded-lg bg-[#121212] max-w-[400px] h-[220px]"
            >
              <div className="flex flex-col-3 justify-between">
                <div className="flex">
                  <img src={item.icon1} alt="icon" />
                  <div className="flex flex-col ml-3">
                    <p className="text-xs">{item.name}</p>
                    <p className="text-xs font-thin text-gray-400 mt-1 whitespace-nowrap">
                      {item.company}
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src={item.icon2}
                    alt="icon"
                    className="ml-20 w-13 h-13"
                  />
                </div>
              </div>
              <p className="mt-4 text-sm font-thin bg-[#121212]">
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
