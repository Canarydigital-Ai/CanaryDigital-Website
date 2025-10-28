// src/data/serviceContentData.ts
import GridIcon1 from "../../assets/service images/Grid Icon 1.png";
import GridIcon2 from "../../assets/service images/Grid Icon 2.png";
import GridIcon3 from "../../assets/service images/Grid Icon 3.png";
import GridIcon4 from "../../assets/service images/Grid Icon 4.png";

import GridIcon5 from "../../assets/service images/Grid Icon 5.png";
import GridIcon6 from "../../assets/service images/Grid Icon 6.png";
import GridIcon7 from "../../assets/service images/Grid Icon 7.png";
import GridIcon8 from "../../assets/service images/Grid Icon 8.png";

import GridIcon9 from "../../assets/service images/Grid Icon 9.png";
import GridIcon10 from "../../assets/service images/Grid Icon 10.png";
import GridIcon11 from "../../assets/service images/Grid Icon 11.png";
import GridIcon12 from "../../assets/service images/Grid Icon 12.png";

import GridIcon13 from "../../assets/service images/Grid Icon 13.png";
import GridIcon14 from "../../assets/service images/Grid Icon 14.png";
import GridIcon15 from "../../assets/service images/Grid Icon 15.png";
import GridIcon16 from "../../assets/service images/Grid Icon 16.png";

import DesignImage from "../../assets/service images/DesignImage.png";

import AffiliateImg1 from "../../assets/service images/Affiliate Img 1.png";
import AffiliateImg2 from "../../assets/service images/Affiliate Img 2.png";
import AffiliateImg3 from "../../assets/service images/Affiliate Img 3.png";

import SEOImg1 from "../../assets/service images/SEO Img 1.png";
import SEOImg2 from "../../assets/service images/SEO Img 2.png";
import SEOImg3 from "../../assets/service images/SEO Img 3.png";
import SEOImg4 from "../../assets/service images/SEO Img 4.png";
import SEOImg5 from "../../assets/service images/SEO Img 5.png";
import SEOImg6 from "../../assets/service images/SEO Img 6.png";

import SocialImg1 from "../../assets/service images/Social Img 1.png";
import SocialImg2 from "../../assets/service images/Social Img 2.png";
import SocialImg3 from "../../assets/service images/Social Img 3.png";
import SocialImg4 from "../../assets/service images/Social Img 4.png";
import SocialImg5 from "../../assets/service images/Social Img 5.png";

import MarketingImg1 from "../../assets/service images/Marketing Img 1.png";
import MarketingImg2 from "../../assets/service images/Marketing Img 2.png";
import MarketingImg3 from "../../assets/service images/Marketing Img 3.png";
import MarketingImg4 from "../../assets/service images/Marketing Img 4.png";
import MarketingImg5 from "../../assets/service images/Marketing Img 5.png";
import MarketingImg6 from "../../assets/service images/Marketing Img 6.png";

export interface DesignCreativeItem {
  type: "image" | "video";
  src: string;
  alt?: string;
  title: string;
  description: string;
  scale?: string;
}

export interface MarketingSection {
  key: string;
  title: string;
  images: string[];
  description: string;
}

export type ServiceDataType = {
  title: string;
  desc: string;
  video: string;
  whatMakes: {
    title: string;
    desc: string;
  };
  features: {
    img: string;
    title: string;
    desc: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  designCreativeItems?: DesignCreativeItem[];
  marketingSections?: MarketingSection[];
};

export const serviceContentData: Record<string, ServiceDataType> = {
  "AI Powered Solutions": {
    title: "AI-Powered Solutions",
    desc: `Unlock the power of AI to automate, optimize, and scale your operations. Our tailored AI-powered software solutions transform raw data into actionable insights 
    through business intelligence and predictive analytics. We streamline workflows, automate repetitive tasks, and reduce errors with smart automation tools. 
    Harness natural language processing for chatbots, sentiment analysis, and advanced customer support. Our custom AI systems integrate seamlessly into your 
    existing setup and evolve alongside your business. Partner with us to gain efficiency, cut costs, and stay ahead of the competition.`,
    video:
      "https://res.cloudinary.com/ddyymyvny/video/upload/v1761107950/u5254972858_httpss.mj_nf3mtk.mp4",
    whatMakes: {
      title: "What Makes Our AI Solutions Stand Out",
      desc: "Our AI is simple, smart, and built to understand you. It learns, adapts, and makes your work easier, your decisions smarter, and your experience smoother",
    },
    features: [
      {
        img: GridIcon1,
        title: "Generative AI + LLM",
        desc: `AI AI that truly understands what you mean, not just what you say. It learns, adapts, and helps you write, create, and solve problems quickly and intelligently. 
        It’s like having a smart partner that’s always improving and ready to support you.`,
      },
      {
        img: GridIcon2,
        title: "Computer Vision",
        desc: "Our computer vision helps machines see and understand images, objects, and patterns in real time. It quickly detects and processes what it sees, making your work faster, smarter, and more accurate.",
      },
      {
        img: GridIcon3,
        title: "Predictive Analysis",
        desc: "Our predictive analysis looks at past data to help you see what’s likely to happen next. It turns patterns into smart predictions, so you can make faster, better decisions with confidence.",
      },
      {
        img: GridIcon4,
        title: "Agentic AI",
        desc: "Our agentic AI does not just give answers. It takes smart actions on its own. It can plan, decide, and complete tasks for you, making your work smoother, faster, and more efficient without constant instructions.",
      },
    ],
    faqs: [
      {
        question: "What types of AI services do you offer?",
        answer:
          "We provide BI & analytics, workflow automation, predictive modeling, NLP applications (like chatbots and sentiment analysis), and custom AI development.",
      },
      {
        question: "How will AI benefit my business?",
        answer:
          "AI delivers smarter decision-making, improved efficiency, cost savings, competitive advantage, and a better customer experience.",
      },
      {
        question: "Can you integrate AI into my existing systems?",
        answer:
          "Yes, our custom AI solutions are built to fit seamlessly within your current infrastructure.",
      },
      {
        question: "What’s the process and timeline?",
        answer:
          "We start with a needs assessment, then move to solution design, development, and deployment - each stage customized to your timeline and goals.",
      },
    ],
  },

  "Web Development": {
    title: "Web Development",
    desc: `Your website is your brand’s first impression—make it fast, responsive, and conversion-ready. Our web development and optimization services 
    ensure your site not only looks great but also performs flawlessly. We build clean, mobile-friendly websites with user experience, speed, and SEO in mind. 
    Already have a site? We optimize page speed, structure, and content to improve engagement and rankings. From custom builds to performance upgrades, 
    we tailor every project to your business needs. Let your website work smarter and load faster—across all devices.`,
    video:
      "https://res.cloudinary.com/ddyymyvny/video/upload/v1761128945/Untitled_video_-_Made_with_Clipchamp_1_qvugkt.mp4",
    whatMakes: {
      title: "What Makes Our Web Development Stand Out",
      desc: `We build websites fast, but we never compromise on quality. Our websites are interactive, easy to use, and designed to help your business grow with a modern, future-ready feel`,
    },
    features: [
      {
        img: GridIcon5,
        title: "Fast Delivery",
        desc: "We develop websites quickly, helping you launch faster without delays, while maintaining precision and care at every step.",
      },
      {
        img: GridIcon6,
        title: "Uncompromised Quality",
        desc: "We never rush at the cost of quality. Every website we build is strong, reliable, and crafted to perform at its best.",
      },
      {
        img: GridIcon7,
        title: "Future-Proof Technology",
        desc: "We use the latest coding languages and keep your website upgraded, so it stays modern, secure, and never gets outdated in a fast-changing digital world.",
      },
      {
        img: GridIcon8,
        title: "Fully Responsive & Interactive",
        desc: "Our websites work beautifully on any device and offer an intuitive, engaging experience that your customers will love.",
      },
    ],
    faqs: [
      {
        question: "What’s included in web development?",
        answer:
          "Custom design, responsive layout, CMS integration, and SEO-friendly structure.",
      },
      {
        question: "What does optimization involve?",
        answer:
          "Improving load speed, fixing technical issues, mobile responsiveness, and content alignment with SEO best practices.",
      },
      {
        question: "Do you work on existing websites?",
        answer:
          "Yes, we optimize and enhance current sites for better speed, performance, and visibility.",
      },
      {
        question: "Is this service good for SEO?",
        answer:
          "Absolutely, site speed, structure, and mobile usability are key SEO ranking factors.",
      },
    ],
  },

  "UX/UI Designing": {
    title: "UX/UI Designing",
    desc: `User experience is everything. Our UI/UX design services focus on creating intuitive, engaging, and user-friendly interfaces that keep people coming back. 
    We blend smart functionality with clean design to ensure every interaction feels effortless—on web, mobile, or app platforms. 
    From wireframes and prototypes to final visuals, we design with purpose and performance in mind. Our process is user-centered, data-backed, 
    and tailored to your brand’s goals. Let’s build digital experiences that are not just beautiful, but truly usable.`,
    video:
      "https://res.cloudinary.com/ddyymyvny/image/upload/v1761132207/c4e8ac19bb12cf5a02656062cfaa28956acc1223_1_esai9w.gif",
    whatMakes: {
      title: "What Makes Our UX/UI Services Stand Out",
      desc: `We don’t just design screens. We design feelings. Our interfaces are simple, natural, and made to feel like home for your users.`,
    },
    features: [
      {
        img: GridIcon9,
        title: "We Design for People",
        desc: "Our designs are made for real people. We focus on what feels simple, natural, and easy for your users, not just what looks good.",
      },
      {
        img: GridIcon10,
        title: "Apps and Websites That Just Feel Right",
        desc: "Whether it’s a mobile app or a website, we create designs that work smoothly everywhere and feel right in your users' hands.",
      },
      {
        img: GridIcon11,
        title: "Clean, Modern, and Effortless",
        desc: "We keep things clean and fresh. No clutter, no confusion — just modern designs that help your brand shine.",
      },
      {
        img: GridIcon12,
        title: "Built Together With You",
        desc: "You know your brand best. We listen, share, and build designs with you, so the final result feels just right for your business and your users.",
      },
    ],
    faqs: [
      {
        question: "What’s included in your UI/UX design services?",
        answer:
          "Wireframes, user flows, prototypes, interface design, and interaction planning.",
      },
      {
        question: "Do you design for both web and mobile apps?",
        answer:
          "Yes, we create responsive, platform-specific experiences for all devices.",
      },
      {
        question: "Can you work with my development team?",
        answer:
          "Absolutely, we provide developer-ready files and support throughout implementation.",
      },
      {
        question: "How do you ensure a good user experience?",
        answer:
          "We conduct research, test user flows, and iterate based on feedback to ensure usability and clarity.",
      },
    ],
  },

  "Design & Creative": {
    title: "Design & Creative",
    desc: `At Canary, design is not just about colors and frames. It is about creating a vibe that people remember. We craft visuals that move with purpose and stories that feel alive. From bold graphics to smooth motion visuals, from real-time video shoots to edits that flow like a conversation, we build what your brand wants to say in a way people love to see. Every project is a chance for us to turn ideas into moments that stay with your audience`,
    video:
      "https://res.cloudinary.com/ddyymyvny/video/upload/v1761135317/Untitled_video_-_Made_with_Clipchamp_2_t4k3nm.mp4",
    whatMakes: {
      title: "Where Ideas Become Visual Stories",
      desc: `We turn your thoughts into beautiful visuals that people can feel, remember, and connect with.`,
    },
    features: [
      {
        img: GridIcon13,
        title: "We Build Brands with Soul",
        desc: "Your brand is more than a logo. We help you build a brand that feels alive, tells your story, and truly connects with people.",
      },
      {
        img: GridIcon14,
        title: "Clarity That Cuts Through Noise",
        desc: "We don’t just make you look good. We make sure your brand message is clear, focused, and impossible to ignore in a crowded world.",
      },
      {
        img: GridIcon15,
        title: "Consistency That Travels Everywhere",
        desc: "From your website to your packaging to your social posts, we create a brand that feels the same, everywhere your customer meets you.",
      },
      {
        img: GridIcon16,
        title: "Brands Ready to Grow",
        desc: "We build brands that are not stuck in the moment. They grow with you, stay fresh, and are ready for the next big step in your journey.",
      },
    ],
    faqs: [
      {
        question: "What types of design services do you offer?",
        answer:
          "Logos, branding, social media posts, brochures, banners, packaging, UI/UX, and more.",
      },
      {
        question: "Do you offer custom designs?",
        answer:
          "Yes, all designs are made from scratch to fit your brand’s identity and purpose.",
      },
      {
        question: "Can I request revisions?",
        answer:
          "Absolutely—our process includes revision rounds to ensure you’re 100% satisfied.",
      },
      {
        question: "Do you handle both digital and print design?",
        answer:
          "Yes, we design for websites, social platforms, and print materials alike.",
      },
    ],
    designCreativeItems: [
      {
        type: "image" as const,
        src: DesignImage,
        alt: "Graphic Design",
        title: "Graphic Design",
        description:
          "At Canary, we create striking visuals like logos, hoardings, flyers, and scroll-stopping social media posts. Whether it is a quick creative or full branding, we make sure your brand shines everywhere.",
      },
      {
        type: "video" as const,
        src: "https://res.cloudinary.com/ddyymyvny/video/upload/v1760790730/ug_mocktail33_x9j1lg.mp4",
        alt: "Motion Animation",
        title: "Motion Animation",
        description:
          "At Canary, we create striking visuals like logos, hoardings, flyers, and scroll stopping social media posts. Whether it is a quick creative or full branding, we make sure your brand shines everywhere",
      },
      {
        type: "video" as const,
        src: "https://res.cloudinary.com/ddyymyvny/video/upload/v1761136425/Sequence_04_rtznmh.mp4",
        alt: "Video Production",
        title: "Video Production",
        description:
          "At Canary, we create striking visuals like logos, hoardings, flyers, and scroll stopping social media posts. Whether it is a quick creative or full branding, we make sure your brand shines everywhere",
        scale: "scale-120 group-hover:scale-130",
      },
      {
        type: "video" as const,
        src: "https://res.cloudinary.com/ddyymyvny/video/upload/v1761136464/5251134_Editing_Video_1920x1080_aqofor.mp4",
        alt: "Video Editing",
        title: "Video Editing",
        description:
          "At Canary, we create striking visuals like logos, hoardings, flyers, and scroll stopping social media posts. Whether it is a quick creative or full branding, we make sure your brand shines everywhere",
      },
    ],
  },

  "Digital Marketing": {
    title: "Digital Marketing",
    desc: `Digital marketing that is sharp, strategic, and results driven. At Canary, we build custom growth strategies across SEO, Google Ads, Meta Ads, email campaigns, 
  and content marketing. From boosting visibility to generating high quality leads, we turn every click into measurable impact. Whether you are launching, scaling, 
  or revamping, we make your brand impossible to ignore`,
    video:
      "https://res.cloudinary.com/ddyymyvny/image/upload/v1761128678/470c15492c6eabc7c60df818c2d777548a8ceaa6_ymftjq.gif",
    whatMakes: {
      title: " ",
      desc: ``,
    },
    features: [
      {
        img: "",
        title: "",
        desc: "",
      },
      {
        img: "",
        title: "",
        desc: "",
      },
      {
        img: "",
        title: "",
        desc: "",
      },
      {
        img: "",
        title: "",
        desc: "",
      },
    ],
    faqs: [
      {
        question: "What’s included in your SEO services?",
        answer:
          "Blog writing, website content, SEO copy, social media posts, email campaigns, and more.",
      },
      {
        question: "How long does it take to see results?",
        answer:
          "Most websites begin seeing improvements in 3–6 months, depending on goals and competition.",
      },
      {
        question: "Is ongoing SEO necessary?",
        answer:
          "Yes, search engines update regularly, so ongoing SEO keeps your site relevant and competitive.",
      },
      {
        question: "Do you offer local SEO?",
        answer:
          "Yes, we help businesses rank for local searches and reach nearby customers effectively.",
      },
    ],
    marketingSections: [
      {
        key: "seo",
        title: "SEO Services",
        images: [SEOImg1, SEOImg2, SEOImg3, SEOImg4, SEOImg5, SEOImg6],
        description: `Our expert SEO services help you boost visibility, drive organic traffic, and grow steadily. 
        We handle everything from smart keyword research and on-page fixes to technical SEO and quality backlinks. 
        With regular tracking and strategies tailored just for you, we help businesses in Kochi and beyond stay ahead both locally and globally.`,
      },
      {
        key: "social",
        title: "Social Media Marketing",
        images: [SocialImg1, SocialImg2, SocialImg3, SocialImg4, SocialImg5],
        description: `We turn your social media into a powerful tool for brand growth. With smart strategies, creative storytelling, and AI insights, 
        we create content that builds real connections and lasting loyalty. From high-performing reels to meaningful engagement, 
        we help your brand stay top of mind on Instagram, Facebook, LinkedIn, and more. Ready to make an impact?`,
      },
      {
        key: "marketing",
        title: "Performance Marketing",
        images: [
          MarketingImg1,
          MarketingImg2,
          MarketingImg3,
          MarketingImg4,
          MarketingImg5,
          MarketingImg6,
        ],
        description: `Our performance marketing services focus on driving real growth with more leads, more sales, and better ROI. 
        We run goal focused campaigns across Google, Meta, and more, with every ad tracked, tested, and optimized. Whether you are starting or scaling, 
        we tailor strategies to fit your goals. Let your money work smarter and your business grow with results you can measure`,
      },
    ],
  },

  "Affiliate Partnership": {
    title: "Affiliate Partnership",
    desc: `Turn partnerships into profits with our smart affiliate marketing solutions. We help you build and manage a network of affiliates who promote your brand 
    for performance-based rewards. From setting up tracking systems to onboarding the right partners, we handle the entire process. Our team ensures your offers, 
    creatives, and commission models are optimized for results. Whether you’re looking to scale sales, increase traffic, or boost brand awareness, affiliate marketing 
    offers low-risk, high-reward growth. Let your brand grow through partnerships that perform.`,
    video:
      "https://res.cloudinary.com/ddyymyvny/video/upload/v1761128678/Sequence_02_nyzubt.mp4",
    whatMakes: {
      title: " ",
      desc: ``,
    },
    features: [
      {
        img: "",
        title: "",
        desc: "",
      },
      {
        img: "",
        title: "",
        desc: "",
      },
      {
        img: "",
        title: "",
        desc: "",
      },
      {
        img: "",
        title: "",
        desc: "",
      },
    ],
    faqs: [
      {
        question: "What is affiliate marketing?",
        answer:
          "A performance-based marketing model where partners promote your products and earn a commission on sales.",
      },
      {
        question: "What do your services include?",
        answer:
          "Affiliate setup, partner recruitment, tracking integration, offer strategy, and performance management.",
      },
      {
        question: "Is it suitable for small businesses?",
        answer:
          "Yes, it’s a cost-effective way to grow without upfront ad spend.",
      },
      {
        question: "How do you track results?",
        answer:
          "We use affiliate platforms and tools to track clicks, sales, and partner performance in real time.",
      },
    ],
    marketingSections: [
      {
        key: "affiliate",
        title: "Affiliate Marketing",
        images: [AffiliateImg1],
        description: `Grow your brand through smart partnerships. We help you build and manage a team of affiliates who promote your 
        business and deliver real results. From tracking to finding the right partners, we handle it all so you can scale faster with less risk.`,
      },
      {
        key: "support",
        title: "360° Marketing Support",
        images: [AffiliateImg2],
        description: `Our 360° Digital Marketing service covers every touchpoint of your customer journey, combining strategy, creativity, and technology to deliver real results. 
        From SEO, social media, and content marketing to performance ads, influencer campaigns, and automation — we create integrated solutions tailored to your brand and audience.`,
      },
      {
        key: "influencer",
        title: "Influencer Collaborations",
        images: [AffiliateImg3],
        description: `At Canary Digital AI, we connect your brand with the right niche influencers who truly resonate with your audience. 
        Through authentic storytelling and smart affiliate links, we help you expand your reach, build genuine trust, and drive measurable growth. 
        It is not just about visibility. It is about partnerships that perform.`,
      },
    ],
  },
};
