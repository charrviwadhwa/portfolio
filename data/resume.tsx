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
    "React",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "TailwindCSS",
    "Java",
    "C++",
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
      description:"Currently developing a social engagement suite with multi-platform sharing, self-serve fundraiser pages (goals, media, analytics), and actively updating technical documentation and changelogs with weekly progress visibility.",
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
      degree: "BTech, Information Technology (CGPA 9.31)",
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
      title: "Qrious",
      href: "",
      dates: "September 2025 ",
      active: true,
      description:"Qrious is a QR-based attendance application designed to make attendance tracking faster, smarter, and error-free for educational institutions. It eliminates manual entry and proxy attendance by allowing students to mark attendance simply by scanning a unique QR code generated for each class session." 
      ,technologies: [
        "React Native",
        "Nodejs",
        "PostgreSQL","DrizzleORM"
      ],
      links: [
       {
          type: "Source",
          href: "https://github.com/charrviwadhwa/SIH2025",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:"/k.mp4"    },
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
    {
      title: "SolveStack",
      href: "https://solvestack.vercel.app/",
      dates: "July 2025",
      active: true,
      description:
        "SolveStack, an AI tool that breaks down DSA problems with clear reasoning, code highlights, and smart practice suggestions for faster learning.",
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
          href: "https://solvestack.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/charrviwadhwa/SolveStack",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/solvestack.mp4",
    },
    {
      title: "HackXplore",
      href: "https://hackxplore.vercel.app/",
      dates: "March 2025 - April 2025",
      active: true,
      description:
        "HackXplore is an AI-powered platform that helps users discover and learn from top hackathon projects. It offers personalized recommendations, detailed project analyses, and interactive learning resources to inspire innovation and skill development.",
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://hackxplore.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/charrviwadhwa/HackXplore",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/hackxplore.mp4",
    },
   
  ],
  hackathons: [
    {
      title: "Hackemon",
      dates: "April 20rd - 23th, 2025",
      location: "Noida, India",
      description:
        "Finalist amoung 300+ teams at Hackemon 2025, built an AI-powered platform to help users discover and learn from top hackathon projects. ",
        image:"https://media.licdn.com/dms/image/v2/D560BAQE3_mF30h9q_w/company-logo_200_200/company-logo_200_200/0/1731229537037/shebuildshack_logo?e=2147483647&v=beta&t=SJRf6OJ_pQk1RceaiMmepo-XKPmfZg2u46OLNtp3_Yk",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "AM Hacks",
      dates: "April 4th - 7th, 2025",
      location: "Delhi, India",
      description:
        "Top 15 finalist amoung 2000+ registrations at AM Hacks IGDTUW 2025, built hackxplore, an AI-powered platform that offers personalized recommendations, detailed project analyses, and interactive learning resources to inspire innovation and skill development.",
      image:
        "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/91dfaba48df54f32bdb7462ba86649e9/assets/logo/229.jpeg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "BVP HEX",
      dates: "Oct 18th - 19th, 2024",
      location: "New Delhi, India",
      description:"Semi-finalist amoung 250+ teams ,TrackSafe is a precision-built device that fuses accident detection with heart rate monitoring. It delivers instant GPS alerts during emergencies and tracks vital health metrics—ensuring safety and proactive care, wherever life takes you.",
      icon: "public",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlBRLKeUKBrz1iz75VB56BcSRTR4K_OoTfAQ&s",
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
      title: "Girlscript Summer of Code",
      dates: "August 1st - Present",
      location: "Mentor",
      description:"Guiding devs through open source contributions and clean coding practices.",
        image:"https://miro.medium.com/v2/resize:fit:400/1%2AZfYWXN0zA6TqQQ7wGNJUOg.jpeg",
      links: [],
    },
    {
      title: "Hacktoberfest",
      dates: "Oct 1st - 31st, 2025",
      location: "Contributer",
      description:"Enhanced 3 open-source projects during Hacktoberfest by submitting 8 pull requests, resolving 3 critical bugs, and refining features to improve user experience for over 500 active contributors.",
        image:"https://raw.githubusercontent.com/github/explore/e838e6d3526495c83c195ed234acf109cb781f00/topics/hacktoberfest/hacktoberfest.png",
      links: [],
    },
    
   
    
  ],
} as const;
