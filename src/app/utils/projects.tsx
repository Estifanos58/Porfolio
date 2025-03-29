import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import kasinaLandingage from '@/assets/images/project/Kasina_home.png'
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";

export const portfolioProjects = [
    {
      id:'123',
      company: "Personal project",
      year: "2024",
      title: "Kasina Chat App",
      results: [
        { title: "Real time chat App" },
        { title: "File sharing integrated" },
        { title: "Group creation added" },
        { title: "Group messaging"}
      ],
      url_link: "kassina.netlify.app",
      github_link: "hearc",
      image: kasinaLandingage,
      tech: [
        {title: "SpringBoot"},
        {title: "React"},
        {title: "MongoDB"},
        {title: "Zustand"},
        {title: "Tailwind"}
      ],
      otherResult: [
        { title: "JWT Authentication"},
        { title: "WebSocket For Real time communication"},
      ],
      description:"Kasina Chat is a full-featured real-time messaging application built with React, Zustand, and Spring Boot, leveraging WebSockets for instant communication. It supports both individual and group chats, allowing users to create groups, add members, and collaborate effortlessly. With a powerful user search feature, individuals can quickly find and connect with others by name. The app ensures a smooth and interactive experience with a clean, responsive UI, making conversations seamless across devices. Designed for efficiency and scalability, Kasina Chat delivers fast, reliable messaging while maintaining a modern and intuitive user experience."
    },
    {
      id:'234',
      company: "Innovative Co",
      year: "2021",
      title: "Light Saas Landing Page",
      results: [
        { title: "Boosted sales by 20%" },
        { title: "Expanded customer reach by 35%" },
        { title: "Increased brand awareness by 15%" },
      ],
      // url_link: "https://youtu.be/4k7IdSLxh6w",
      github_link: "",
      image: lightSaasLandingPage,
    },
    {
      id:'432',
      company: "Quantum Dynamics",
      year: "2023",
      title: "AI Startup Landing Page",
      results: [
        { title: "Enhanced user experience by 40%" },
        { title: "Improved site speed by 50%" },
        { title: "Increased mobile traffic by 35%" },
      ],
      url_link: "https://youtu.be/4k7IdSLxh6w",
      github_link: "",
      image: aiStartupLandingPage,
    },
  ];
  