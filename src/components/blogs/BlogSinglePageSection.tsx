import React from "react";
import blogsingle1 from "../../assets/blogs imgs/blogs-single1.png";
import { RiLinkedinFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import lap1 from "../../assets/blogs imgs/lap1.png";
import lap2 from "../../assets/blogs imgs/lap2.png";

const BlogSinglePageSection: React.FC = () => {
  const items = [
    {
      image: lap1,
      title: "Optimizing Workflow Processes for Maximum Efficiency",
      content:"Optimizing workflow processes isn't just about saving time - it's about working smarter, reducing delays, and boosting overall efficiency..."
    },
    {
      image: lap2,
      title: "Optimizing Workflow Processes for Maximum Efficiency",
      content: "Optimizing workflow processes isn't just about saving time - it's about working smarter, reducing delays, and boosting overall efficiency..."
    },
  ];

  const points = [
    {
      title: "Applications of AI Agents Across Industries",
      content:"AI agents are transforming business processes in multiple industries, enabling organizations to automate, optimize, and innovate.",
    },
    {
      title: "Customer Service & Virtual Assistance",
      content:"AI-powered chatbots and virtual assistants provide real-time, 24/7 customer support.Example: E-commerce platforms use AI-driven chatbots for product selection, order tracking, and customer issue resolution.",
    },
  ];

  return (
    <div className="px-4 md:px-10 lg:px-16 py-8 md:py-20">
      <h1 className="max-w-[600px] text-[54px] leading-[64px]">
          <span className="text-[#FBCB0B] whitespace-nowrap">
            The Rise of AI Agents in 2025:
          </span>
       <p>Revolutionizing Business Processes Across Industries</p> 
      </h1>
      <p className="text-[#999999] text-xs mt-10 max-w-[980px] font-thin">
        Artificial Intelligence (AI) is no longer a futuristic concept; it is a
        transformative force reshaping industries worldwide. One of the most
        groundbreaking advancements is the Rise of AI Agents in
        2025—intelligent, autonomous systems that streamline operations, enhance
        decision-making, and drive unprecedented efficiency across various
        business functions. AI agents are dynamic, intelligent systems capable
        of handling complex tasks, making independent decisions, and
        continuously learning. Their applications span across multiple
        industries, from customer service to finance, entertainment, and beyond.
      </p>
      <img src={blogsingle1} className="mt-20 w-full" />

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-0">
        {/* Main Content - Takes full width on mobile, 7/10 on desktop */}
        <div className="lg:col-span-7 text-xl text-[#999999] font-extralight">
          <h2 className="text-[#FBCA0C] text-3xl mt-10 lg:mt-20">
            Understanding AI Agents
          </h2>
          <p className="mt-10">
            AI agents are software programs designed to autonomously carry out
            tasks with minimal human intervention. Unlike traditional automation
            tools, AI agents possess:
          </p>
          <div className="ml-7 py-1">
            <li>
              Decision-making capabilities - Analyzing data to make informed
              choices.
            </li>
            <li> Autonomy – Performing tasks independently.</li>
            <li>
              Adaptability – Learning from interactions to improve over time.
            </li>
            <li>
              Collaboration – Seamlessly integrating with humans and other AI
              systems.
            </li>
          </div>
          <p>These intelligent systems operate in various modes:</p>

          <div className="ml-7 py-1">
            <li>
              Reactive AI Agents: Respond to real-time inputs without retaining
              memory.
            </li>
            <li>
              Deliberative AI Agents: Use stored knowledge and learning from
              past experiences.
            </li>
            <li>
              Hybrid AI Agents: Combine real-time decision-making with learning
              capabilities for advanced problem-solving.
            </li>
          </div>

          {points.map((point, index) => {
            return (
              <div key={index}>
                <h2 className="text-2xl text-white mt-10">{point.title}</h2>
                <p className="mt-10">{point.content}</p>
              </div>
            );
          })}
        </div>
        
        {/* Sidebar - Takes full width on mobile, 3/10 on desktop */}
        <div className="lg:col-span-3 lg:mt-40 lg:border-l lg:border-[#363636] lg:pl-8">
          <div className="flex gap-3 mb-8 lg:mb-0">
            <div className="border rounded-full p-2 cursor-pointer hover:bg-[#FBCA0C] hover:text-black transition-colors">
              <RiLinkedinFill className="w-6 h-6" />
            </div>
            <div className="border rounded-full p-2 cursor-pointer hover:bg-[#FBCA0C] hover:text-black transition-colors">
              <FaInstagram className="w-6 h-6" />
            </div>
            <div className="border rounded-full p-2 cursor-pointer hover:bg-[#FBCA0C] hover:text-black transition-colors">
              <FaTwitter className="w-6 h-6" />
            </div>
          </div>

          <h2 className="text-[#FBCA0C] text-3xl mt-15 lg:mb-15">Latest Article</h2>

          <div className="space-y-12 lg:space-y-15">
            {items.map((item, index) => {
              return (
                <div key={index} className="border-b border-[#363636] pb-8 lg:border-none lg:pb-0">
                  <img src={item.image} className="w-full h-auto" />
                  <p className="mt-5 font-light text-white">{item.title}</p>
                  <p className="mt-3 text-[#999999] text-sm">{item.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSinglePageSection;