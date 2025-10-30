import React from "react";
import BlogBanner from "../../assets/blogs imgs/Blog Banner.png";
import { IoSearch } from "react-icons/io5"; 

import BlogImg1 from "../../assets/blogs imgs/Blog-Demi Img1.png";
import BlogImg2 from "../../assets/blogs imgs/Blog-Demi Img2.png";
import BlogImg3 from "../../assets/blogs imgs/Blog-Demi Img3.png";
import AuthorImg from "../../assets/blogs imgs/UserImg.png";

const blogs = [
  {
    title: "Optimizing Workflow Processes for Maximum Efficiency",
    desc: "Optimizing workflow processes isn't just about saving time — it's about reducing stress, enhancing quality, and boosting overall efficiency.",
    author: "Josh Kennedy",
    time: "4 Min Read",
    img: BlogImg1,
    authorImg: AuthorImg,
  },
  {
    title: "Optimizing Workflow Processes for Maximum Efficiency",
    desc: "Optimizing workflow processes isn't just about saving time — it's about reducing stress, enhancing quality, and boosting overall efficiency.",
    author: "Josh Kennedy",
    time: "4 Min Read",
    img: BlogImg2,
    authorImg: AuthorImg,
  },
  {
    title: "Optimizing Workflow Processes for Maximum Efficiency",
    desc: "Optimizing workflow processes isn't just about saving time — it's about reducing stress, enhancing quality, and boosting overall efficiency.",
    author: "Josh Kennedy",
    time: "4 Min Read",
    img: BlogImg3,
    authorImg: AuthorImg,
  },
  {
    title: "Optimizing Workflow Processes for Maximum Efficiency",
    desc: "Optimizing workflow processes isn't just about saving time — it's about reducing stress, enhancing quality, and boosting overall efficiency.",
    author: "Josh Kennedy",
    time: "4 Min Read",
    img: BlogImg1,
    authorImg: AuthorImg,
  },
  {
    title: "Optimizing Workflow Processes for Maximum Efficiency",
    desc: "Optimizing workflow processes isn't just about saving time — it's about reducing stress, enhancing quality, and boosting overall efficiency.",
    author: "Josh Kennedy",
    time: "4 Min Read",
    img: BlogImg2,
    authorImg: AuthorImg,
  },
  {
    title: "Optimizing Workflow Processes for Maximum Efficiency",
    desc: "Optimizing workflow processes isn't just about saving time — it's about reducing stress, enhancing quality, and boosting overall efficiency.",
    author: "Josh Kennedy",
    time: "4 Min Read",
    img: BlogImg3,
    authorImg: AuthorImg,
  },
];

const categories = [
  "All",
  "Tasks",
  "Collaboration",
  "Productivity",
  "Strategies",
];

const BlogsSection: React.FC = () => {
  return (
    <>
      <div
        className="h-[400px] sm:h-[480px] md:h-[580px] flex flex-col justify-center items-center relative"
        style={{
          backgroundImage: `url(${BlogBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content */}
        <div className="relative text-center space-y-8 sm:space-y-10 md:space-y-12 px-4 sm:px-6">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-[1.2] sm:leading-[1.3] md:leading-[56px] lg:leading-[64px] flex flex-col">
            <span>Insights and Inspiration</span>
            <span className="text-[#FBCA0C] -mt-1 sm:-mt-2">Explore Our Blog </span>
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-light leading-[1.4] sm:leading-[22px] md:leading-[24px] lg:leading-[25px] w-full max-w-full sm:max-w-[90%] md:max-w-[82%] mx-auto text-[#999999]">
            Stay ahead of the curve with in-depth articles, expert insights, and
            fresh perspectives tailored to help you grow in today's fast-moving
            digital landscape.
          </p>

          {/* Search Bar */}
          <div className="flex justify-center items-center px-4 sm:px-0">
            <div className="flex items-center w-full max-w-full sm:max-w-[500px] md:max-w-[600px] h-[50px]  md:h-[70px] rounded-full border border-white/30 bg-transparent px-6 sm:px-8 py-2 transition-all duration-300 focus-within:border-white/60">
              <input
                type="text"
                placeholder="Search for Blogs..."
                className="flex-1 bg-transparent text-white placeholder-white/60 focus:outline-none text-xs sm:text-sm font-normal"
              />
              <button className="text-white/70 hover:text-white transition-colors duration-200 font-normal">
                <IoSearch className="size-5 sm:size-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 lg:px-16 py-12 sm:py-16 md:py-24 pb-20 md:pb-36 bg-[#0A0A0A] flex flex-col items-center gap-20 sm:gap-24 md:gap-32">
        {/* Header */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full max-w-full sm:max-w-[90%]">
          <h2 className="text-white text-base sm:text-lg md:text-xl font-light text-center">
            Top Picks
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`px-6 sm:px-8 md:px-10 py-2 rounded-full text-xs sm:text-sm font-normal border border-[#757575] transition-all duration-300 cursor-pointer ${
                  cat === "All"
                    ? "bg-[#FBCA0C] text-black border-[#FBCA0C]"
                    : "text-gray-300 hover:text-[#FBCA0C] hover:border-[#FBCA0C]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-full sm:max-w-[90%]">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] rounded-[8px] sm:rounded-[10px] overflow-hidden transition-all duration-500 p-2 sm:p-3"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="object-cover w-full h-[200px] sm:h-[220px] md:h-auto"
              />
              <div className="pt-6 sm:pt-8 p-4 sm:p-5 flex flex-col gap-4 sm:gap-6">
                <h3 className="text-white text-lg sm:text-xl font-normal leading-[1.3] sm:leading-[24px] w-full max-w-full">
                  {blog.title}
                </h3>
                <p className="text-[#999999] text-xs sm:text-sm leading-[1.4] sm:leading-[20px] border-b border-[#525252] pb-4 sm:pb-7">
                  {blog.desc}
                </p>

                {/* Footer: Author + Read Time */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img
                      src={blog.authorImg}
                      alt={blog.author}
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border border-[#2C2C2C]"
                    />
                    <p className="text-[#999999] text-xs sm:text-sm">{blog.author}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[#999999] text-xs"> 
                    <span>{blog.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogsSection;
