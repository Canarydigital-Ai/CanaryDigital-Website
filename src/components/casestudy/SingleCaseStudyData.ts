// SingleCaseStudyData.ts


import FoggyLogo from "../../assets/caseStudy imgs/Foggy_Logo.png";
import FoggyImg1 from "../../assets/caseStudy imgs/Foggy Img1.png";
import FoggyImg2 from "../../assets/caseStudy imgs/Foggy Img2.png";
import SNBLogo from "../../assets/caseStudy imgs/SNB logo.png";

export const caseStudyData = [
  {
    id: "foggyMountain",
    title: "Foggy Mountain",
    mainhead: "Foggy Mountain is a scenic nature and adventure park nestled in the Western Ghats.",
    mainImg: `${FoggyLogo}`,
    subtitle: "Adventure & Theme Park",
    description:
      "Foggy Mountain is a scenic nature and adventure park located in the heart of the Western Ghats. It offers a range of experiences including trekking trails, eco-friendly stays, outdoor activities, and peaceful retreats in nature. Designed for families, adventure seekers, and nature lovers, the park provides a refreshing escape surrounded by lush greenery and mountain views",
    country: "India",
    industry: "Adventure & Theme Park",
    whatWeDid:
      "Website Design, Digital Marketing, Video Production, Video Editing, Graphic Design",

    challenges:"We tackled poor digital visibility and low engagement with strategic design, AI driven solutions and a unified brand experience because in today’s world, connection and clarity aren’t optional, they’re essential",
        translatingImgs: {
      img1: `${FoggyImg1}`,
      img2: `${FoggyImg2}`
    },
      
    caseSolutions: [
      {
        id: "01",
        title: "Challenges",
        points: [
          "Lack of digital presence to showcase its unique experiences.",
          "No structured platform for online discovery or direct booking.",
          "Needed high-quality visual content to match the thrill and beauty of the park.",
          "Required a consistent brand identity across social media and promotional assets.",
          "Wanted to generate awareness, trust, and footfall quickly.",
        ],
      },
      {
        id: "02",
        title: "Solutions",
        points: [
          "Website: Built a mobile-first, immersive site with booking and enquiry features.",
          "Digital Marketing: Launched targeted campaigns to drive buzz, engagement, and visits.",
          "Video Production: Shot and edited cinematic videos and reels for social media.",
          "Graphic Design: Created cohesive brand visuals for online and offline platforms.",
        ],
      },
      {
        id: "03",
        title: "Why it matters",
        content: `By combining strategic design, compelling visuals, and targeted marketing, we transformed Foggy Mountain from a newly launched adventure park into a credible, engaging, and highly discoverable destination.`,
      },
    ],
    performance: [
      {
        percentage: "40.4%",
        title: "Organic Traffic Growth",
      },
      {
        percentage: "38.5%",
        title: "Bounce Rate Reduction",
      },
      {
        percentage: "74.5%",
        title: "Monthly Traffic Increase",
      },
    ], 
  },



  {
    id: "snb",
    title: "SNB",
    mainhead: "SNB Group is a technology firm specializing in AI-driven   business solutions.",
    mainImg: `${SNBLogo}`,
    // subtitle: "Adventure & Theme Park",
    description:
      "SNB Group is a trusted IT solutions provider and distributor based in the Middle East. With over 15 years of experience, they offer smart security and infrastructure solutions, including AI-powered video analytics, surveillance systems, power backup, and access control. They work with global tech partners like Ipsotek and Eviden to bring advanced technology to businesses across the region. Their newly launched website reflects their commitment to innovation with fast loading, smart SEO, and a smooth user experience that helps customers easily explore their services and connect with the team.",
    country: "UAE",
    industry: "T & Security Solutions",
    whatWeDid:
      "Website Redesign, Website Trailer Motion Video, Corporate Profile Design",

    challenges:"We tackled poor digital visibility and low engagement with strategic design, AI driven solutions and a unified brand experience because in today’s world, connection and clarity aren’t optional, they’re essential",
        translatingImgs: {
      img1: `${FoggyImg1}`,
      img2: `${FoggyImg2}`
    },
      
    caseSolutions: [
      {
        id: "01",
        title: "Challenges",
      content: `SNB Group came to us with a website and company profile that no longer reflected their growth or their position as a leader in IT and security solutions. Their online presence was missing structure and clarity, and important details like their services, clients, and vendor partnerships were either incomplete or hard to find. The user journey felt confusing, and the brand’s expertise in AI and enterprise technology wasn’t coming through the way it should`
      },
      {
        id: "02",
        title: "Solutions",
        points: [
          "We completely redesigned their website, making it clean, modern, and easy to navigate. We focused on improving user flow, organizing content clearly, and making sure it worked beautifully on all devices.",
          "We created a high-quality website trailer video that captures the energy and impact of their new digital presence.",
          "We gave their corporate profile a full makeover — turning it into a visually engaging and professionally crafted document that clearly tells their story, highlights their services, showcases their clients and vendors, and reflects their market leadership.",
        ],
      },
      {
        id: "03",
        title: "Why it matters",
        content: `By combining strategic design, compelling visuals, and targeted marketing, we transformed Foggy Mountain from a newly launched adventure park into a credible, engaging, and highly discoverable destination.`,
      },
    ],
    performance: [
      {
        percentage: "41.6%",
        title: "Organic Traffic Growth",
      },
      {
        percentage: "35.1%",
        title: "Bounce Rate Reduction",
      },
      {
        percentage: "20%",
        title: "Monthly Traffic Increase",
      },
    ], 
  },
];
