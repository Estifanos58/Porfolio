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
      github_link: "",
      image: kasinaLandingage,
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
  