export const portfolioData = {
  personal: {
    name: "Kaushik Gohil",
    title: "Web Developer",
    tagline:
      "Frontend Developer - Building responsive, high-performance web applications",
    bio: "Frontend Developer with 4+ years of experience building scalable, responsive, and high-performance web applications using React.js, Next.js, and TypeScript. Skilled in REST API integration, component-based architecture, UI/UX implementation, authentication flows, and optimizing performance for production-ready applications.",
    image: "/images/avatar.jpg",
    email: "gohilkaushik555@gmail.com",
    location: "Ahmedabad, Gujarat, India",
    resumeUrl: "/kaushik_gohil.pdf",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/gohilkaushik",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://in.linkedin.com/in/kaushik-gohil-3a8449219",
        icon: "linkedin",
      },
    ],
  },
  skills: {
    categories: [
      {
        title: "Frontend",
        items: [
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "React",
          "Next.js",
          "JavaScript",
          "Bootstrap",
          "TypeScript",
          "GSAP",
          "Framer Motion",
        ],
      },
      {
        title: "Tools & DevOps",
        items: [
          "Cursor",
          "Figma",
          "Docker",
          "React Query",
          "Git",
          "Figma",
          "Notion",
          "Slack",
          "VS Code",
        ],
      },

      {
        title: "Other Skills",
        items: [
          "REST API Integration",
          "State Management",
          "Routing & Navigation",
          "Authentication",
          "Dashboard Development",
        ],
      },
    ],
  },
  education: [
    {
      id: "1",
      degree: "Bachelor of Commerce / B.Com",
      institution: "K K Parekh Commerce College - Amreli",
      period: "2014 - 2017",
    },
    {
      id: "2",
      degree: "Web Designing Courses / Web Designing",
      institution: "Industrial Training Institutes - Amreli",
      period: "2014 – 2015",
    },
  ],
  certifications: [
    {
      id: "1",
      title: "Certification Name",
      issuer: "Issuer (e.g. Udemy, Coursera)",
      year: "2023",
      url: "",
    },
  ],
  openSource: [
    {
      id: "1",
      name: "Project or Repo Name",
      description: "Short description of your contribution or the project.",
      url: "https://github.com/gohilkaushik/your-repo",
      tech: ["React", "TypeScript"],
    },
  ],
  projects: [
    {
      id: "1",
      title: "Upside – Real Estate Property App",
      description:
        "Real estate platform with property listings, user onboarding, and transaction workflows.",
      tags: ["React", "Typescript", "Tailwind CSS", "REST API", "Firebase"],
      highlights: [
        "Designed major UI modules and improved navigation",
        "Integrated REST APIs for property workflows",
        "Built admin dashboards with Chart.js analytics",
        "Implemented user onboarding and authentication flows",
        "Optimized property listing search and filters",
      ],
      liveUrl: "https://withupside.com/",
      featured: false,
    },
    {
      id: "2",
      title: "TopFrog AI",
      description:
        "Unified AI dashboard integrating multiple AI APIs into one seamless interface.",
      tags: [
        "Next.Js",
        "Typescript",
        "Tailwind CSS",
        "API Integration",
        "React Query",
        "State Management",
      ],
      highlights: [
        "Integrated multiple AI provider APIs into a single interface",
        "Built responsive dashboard with real-time model switching",
        "Implemented API key management and usage analytics",
      ],
      liveUrl: "https://topfrog.ai/",
      featured: false,
    },
    {
      id: "3",
      title: "Radicalloop Corporate - Website",
      description:
        "Corporate website with SSR, SEO optimization, and responsive design.",
      tags: [
        "Next.Js",
        "Typescript",
        "Tailwind CSS",
        "API Integration",
        "SEO",
        "SSR",
      ],
      highlights: [
        "Delivered server-side rendering for fast load and SEO",
        "Implemented responsive layouts and component library",
        "Optimized Lighthouse performance score",
      ],
      liveUrl: "https://www.radicalloop.com/",
      featured: false,
    },
    {
      id: "4",
      title: "Mastreet",
      description:
        "A stylish and modern landing page designed for showcasing products or services. It features clean UI components, responsive design, and well-structured content sections for better user experience.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
      liveUrl: "https://mastreet.netlify.app",
      featured: true,
    },
    {
      id: "5",
      title: "Waxom",
      description:
        "A creative multi-page business website with elegant design and smooth visual sections. Built with a focus on layout structure, typography, and responsive design for a professional web presence.",
      tags: ["HTML", "CSS", "JavaScript", "Typography", "Multi-page"],
      liveUrl: "https://waxoms.netlify.app",
      featured: true,
    },
    {
      id: "6",
      title: "Ebook",
      description:
        "A modern and responsive eBook website built with a clean UI and smooth layout structure. It showcases digital books with organized sections, attractive design, and user-friendly navigation.",
      tags: ["HTML", "CSS", "jQuery", "Responsive Design", "UI Components"],
      liveUrl: "https://ebooksdemo.netlify.app/",
      featured: false,
    },
  ],
  experience: [
    {
      id: "1",
      role: "Front-End Developer",
      company: "RadicalLoop Technolabs",
      period: "2021 – Present",
      description:
        "Lead architecture for the core product platform. Introduced design systems and improved frontend performance by 40%. Mentor for the frontend guild.",
      highlights: [
        "Developed responsive, high-performance web applications using React.js, Next.js, and TypeScript",
        "Integrated REST APIs and optimized data-fetching using Axios and React Query",
        "Built reusable UI components and improved code structure",
        "Improved application performance by refining state management",
        "Built frontend modules and implemented CRUD features using Vanilla JS",
        "Assisted senior developers with API integration and UI refinements",
        "Designed major UI modules and improved navigation across products",
        "Built admin dashboards with Chart.js and analytics tooling",
      ],
    },
  ],
} as const;

export type PortfolioData = typeof portfolioData;
