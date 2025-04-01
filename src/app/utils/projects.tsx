import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import kasinaLandingage from '@/assets/images/project/kasina/Kasina_home.png'
import kasinaSearch from '@/assets/images/project/Kasina/Searching.png';
import kasinaChat from '@/assets/images/project/Kasina/chat.png';
import kasinaLogin from '@/assets/images/project/Kasina/login.png';
import kasinaParallel from '@/assets/images/project/Kasina/parallelview.png';
import kasinaProfile from '@/assets/images/project/Kasina/profile_change.png';
import home_tablet from "@/assets/images//project/Abe_garage/Home_tablet.png";
import admin_laptop from '@/assets/images/project/Abe_garage/Admin_dashboard_laptop.png';
import create_order from '@/assets/images/project/Abe_garage/Create_order_laptop.png';
import customer_laptop from '@/assets/images/project/Abe_garage/customer_laptop.png';
import employee_laptop from '@/assets/images/project/Abe_garage/Employee_laptop.png';
import order_tablet from '@/assets/images/project/Abe_garage/Order_tablet.png';
import service_mobile from '@/assets/images/project/Abe_garage/service_mobile.png';

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
      github_link: "https://github.com/Estifanos58/Kasina-Frontend",
      backend_link: "https://github.com/Estifanos58/Kasina-Backend-API",
      image: kasinaLandingage,
      otherImage: [
        {id:'1', image : kasinaLogin, title: "Login Page"},
        {id:'2', image : kasinaSearch, title: "Searching Page"},
        {id:'3', image : kasinaChat, title: "Chat Page"},
        {id:'4', image : kasinaParallel, title: "Parallel View"},
        {id:'5', image : kasinaProfile, title: "Profile Change"},
        {id:'6', image : kasinaLandingage, title: "Home Page"},
      ],
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
      company: "Personal project",
      year: "2024",
      title: "Abe Garage",
      results: [
        { title: "Role Based Access Control"},
        { title: "Admin Dashboard" },
        { title: "Employee Management" },
        { title: "Customer Management" },
        { title: "Order Management" },
        { title: "User Registration"},
        { title: "Message Sending using Gmail" },
      ],
      url_link: "https://garage-frontend.onrender.com/",
      github_link: "https://github.com/Estifanos58/Garage-frontend",
      backend_link: "https://github.com/Estifanos58/Garage_Project_Backend",
      image: admin_laptop,
      otherImage: [
        {id:'1', image : home_tablet, title: "admin_laptop"},
        {id:'2', image : create_order, title: "create_order"},
        {id:'3', image : customer_laptop, title: "customer_laptop"},
        {id:'4', image : employee_laptop, title: "employee_laptop"},
        {id:'5', image : order_tablet, title: "order_tablet"},
        {id:'6', image : service_mobile, title: "service_mobile"},
      ],
      tech: [
        {title: "Express"},
        {title: "React"},
        {title: "MongoDB"},
        {title: "Zustand"},
        {title: "Gmail API"},
      ],
      otherResult: [
        { title: "JWT Authentication"},
        { title: "Order Assignment"},
        { title: "Order Tracking"},
        { title : "Order Complition"},
        { title: "Order Complition Message Sending"},
        { title: "Password Recovery"},
        { title: "Forgot Password Message Sending"},
      ],
      description:"Abe Garage is a comprehensive garage management system designed to streamline operations with efficiency and ease. Built with robust role-based access control, it ensures secure and organized management of employees, customers, and orders. Admins can seamlessly add employees, customers, and track orders, while automated notifications enhance communication—sending instant messages when a new employee is added and securely delivering login credentials. The system also includes a password recovery feature for seamless account access. With a user-friendly interface and essential garage functionalities, Abe Garage optimizes workflow, ensuring a smooth and efficient experience for all users."
    }
  ];
  