import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Charvi Wadhwa",
  initials: "CW",
  url: "https://dillion.io",
  
  description:
    "Building impactful products with code | Software Engineer | 2x Hackathon Finalist | Full Stack | Open Source",
  summary:"I love building systems that make life easier for developers and communities. Whether it’s refining workflows, contributing to open source, or mentoring early-stage devs, I focus on clarity, impact, and continuous improvement. I share actively, learn in public, and care deeply about making engineering more accessible and collaborative.",
  avatarUrl: "/me1.png",
  skills: [
    "Java",
    "C",
    "C++",
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "React.js",
    "PostgreSQL",
    "Next.js",
    "AWS",
    "Docker",
    "CI/CD Fundamentals",
    "React Native",
    "Git",
    "LLM Integration"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "charviwadhwa06@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/charrviwadhwa",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/charvi-wadhwa-23b565291/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/charvi_wadhwa",
        icon: Icons.x,

        navbar: true,
      },
     
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Karma Points",
      href: "",
      badges: [],
      location: "Hybrid",
      title: "Full Stack Developer",
      logoUrl: "/karmapoints.png",
      start: "August 2025",
      end: "Present",
      description:"Conceptualized 'Karma Streaks' to drive daily retention and engineered a multi-platform fundraiser suite for 1,000+ users, reducing onboarding friction through standardized API documentation.",
    },
      {
      company: "Shiv Nadar Foundation",
      badges: [],
      href: "",
      location: "Remote",
      title: "SDE Intern",
      logoUrl: "/image.png",
      start: "June 2025",
      end: "August 2025",
      description:
       "Built a budget management frontend with React and Tailwind CSS, integrated with FastAPI for secure, real-time financial tracking and visualization across departments.",
    },
    
  ],
  education: [
    {
      school: "Maharaja Surajmal Institute of Technology",
      href: "https://msit.in",
      degree: "BTech, Information Technology (CGPA 9.34)",
      logoUrl: "/msit.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Geek Room",
      href: "https://www.geekroom.in/",
      degree: "DSA Department",
      logoUrl: "/geekroom.png",
      start: "Sept 2024",
      end: "Sept 2025",
    },
    {
      school: "Microsoft Student Chapter - MSIT",
      href: "https://mscmsit.xyz/",
      degree: "DSA Department",
      logoUrl: "/msc.png",
      start: "Sept 2024",
      end: "Sept 2025",
    },
    {
      school: "IEEE MSIT",
      href: "https://in.linkedin.com/company/ieeemsit",
      degree: "Software Project Department",
      logoUrl: "/ieee.png",
      start: "March 2024",
      end: "March 2025",
    },
  ],
  projects: [
     {
      title: "Unlure",
      href: "",
      dates: "May 2026 ",
      active: true,
      description:"Engineered a privacy-first digital wellbeing mobile application utilizing SQLite for local data persistence, implementing a custom habit-tracking engine that gamifies productivity through real-time streak calculations and user-defined focus goals." 
      ,technologies: [
        "React Native", "TypeScript", "SQLite (op-sqlite)", "Async Storage"
      ],
      links: [
        {
          type: "Website",
          href: "https://unlure-website.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/charrviwadhwa/unlure",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:"unlure.mp4"    },
     {
      title: "Swigit",
      href: "",
      dates: "March 2026 ",
      active: true,
      description:"Swigit is the AI-native CLI that writes your documentation, blocks credential leaks, and synchronizes your repository natively—without breaking your flow state." 
      ,technologies: [
        "Nodejs",
        "NPM","Commander.js"
      ],
      links: [
        {
          type: "Website",
          href: "https://swigit-website.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/charrviwadhwa/swigit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:"swigit.mp4"    },
     {
      title: "Hubble",
      href: "",
      dates: "October 2025 ",
      active: true,
      description:"Engineered a role-based event management system with JWT-based authentication and structured approval workflows, handling 100+ events across 10+ societies while ensuring data consistency and secure access control."
      ,technologies: [
        "React",
        "Nodejs","Express","Postgres","DrizzleORM"
      ],
      links: [
        {
          type: "Website",
          href: "https://hubble-lime-gamma.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/charrviwadhwa/hubble",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:"https://www.youtube.com/watch?v=yQPzhnAEQbI"    },
    {
      title: "GitPeek",
      href: "https://gitpeek1.vercel.app/",
      dates: "July 2025",
      active: true,
      description:
        "GitPeek is an AI-powered tool designed to help developers instantly understand any public GitHub repository, even those without a README.",
      technologies: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Google Gemini API",
        "TailwindCSS",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://gitpeek1.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/charrviwadhwa/SolveStack",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/gitpeek.mp4",
    },
    
    
   
  ],
  hackathons: [
    {
      title: "HackCBS",
      dates: "November 8th - 9th, 2025",
      location: "Delhi, India",
      description:
        "Developed a mobile application focused on mental well-being that features intuitive habit tracking and mindfulness tools to help users manage stress and improve daily consistency.",
      image: "", // Added missing property
      video: "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [{
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/charrviwadhwa/Calmind",
        },],
    },{
      title: "SIH",
      dates: "September 18th - 19th, 2025",
      location: "Delhi, India",
      description:
        "Engineered a digital attendance system that utilizes dynamic QR code generation to eliminate manual errors and reduce roll-call time for large classrooms.",
      image: "", // Added missing property
      video: "", 
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [{
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/charrviwadhwa/SIH2025"
        },],
    },
    {
      title: "Hackemon",
      dates: "April 20rd - 23th, 2025",
      location: "Noida, India",
      description:
        "Finalist amoung 300+ teams at Hackemon 2025, built an AI-powered platform to help users discover and learn from top hackathon projects. ",
        image:"https://media.licdn.com/dms/image/v2/D560BAQE3_mF30h9q_w/company-logo_200_200/company-logo_200_200/0/1731229537037/shebuildshack_logo?e=2147483647&v=beta&t=SJRf6OJ_pQk1RceaiMmepo-XKPmfZg2u46OLNtp3_Yk",
      video:"",
        mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [{
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/charrviwadhwa/HackXplore",
        },],
    },
    {
      title: "AM Hacks",
      dates: "April 4th - 7th, 2025",
      location: "Delhi, India",
      description:
        "Top 15 finalist amoung 2000+ registrations at AM Hacks IGDTUW 2025, built hackxplore, an AI-powered platform that offers personalized recommendations, detailed project analyses, and interactive learning resources to inspire innovation and skill development.",
      image:
        "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/91dfaba48df54f32bdb7462ba86649e9/assets/logo/229.jpeg",
      video:"",
        mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [{
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/charrviwadhwa/HackXplore",
        },],
    },
    {
      title: "BVP HEX",
      dates: "Oct 18th - 19th, 2024",
      location: "New Delhi, India",
      description:"Semi-finalist amoung 250+ teams ,TrackSafe is a precision-built device that fuses accident detection with heart rate monitoring. It delivers instant GPS alerts during emergencies and tracks vital health metrics—ensuring safety and proactive care, wherever life takes you.",
      icon: "public",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlBRLKeUKBrz1iz75VB56BcSRTR4K_OoTfAQ&s",
      video:"",
        links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/charrviwadhwa/Women-safety",
        },
      ]
    },
   
    
  ],
  opensource: [
    {
      title: "Hacktoberfest",
      dates: "Oct 1st - 31st, 2025",
      location: "Super Contributer",
      description:"Recognized as a Super Contributor for delivering high-impact code contributions and optimizing documentation across multiple repositories.",
        image:"https://raw.githubusercontent.com/github/explore/e838e6d3526495c83c195ed234acf109cb781f00/topics/hacktoberfest/hacktoberfest.png",
      links: [],
    },
    {
      title: "Girlscript Summer of Code",
      dates: "August 2025 - October 2025",
      location: "Mentor",
      description:"Guiding devs through open source contributions and clean coding practices.",
        image:"https://miro.medium.com/v2/resize:fit:400/1%2AZfYWXN0zA6TqQQ7wGNJUOg.jpeg",
      links: [],
    },
    {
      title: "Hacktoberfest",
      dates: "Oct 1st - 31st, 2024",
      location: "Contributer",
      description:"Enhanced 3 open-source projects during Hacktoberfest by submitting 8 pull requests, resolving 3 critical bugs, and refining features to improve user experience for over 500 active contributors.",
        image:"https://raw.githubusercontent.com/github/explore/e838e6d3526495c83c195ed234acf109cb781f00/topics/hacktoberfest/hacktoberfest.png",
      
        links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/charrviwadhwa/Open-Source-Contributions",
        },
      ]
    },
    
   
    
  ],
} as const;
