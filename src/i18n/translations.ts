import { pt } from "./pt";

export const en = {
  nav: {
    home: "Home",
    portfolio: "Portfolio",
    about: "About",
    contact: "Contact",
  },
  hero: {
    title: "Cosmic Node Studio",
    subtitle:
      "Node.js • TypeScript • Python • React • Angular • SQL • Docker • CI/CD • AI/LLM",
    btnPortfolio: "View Portfolio",
    btnContact: "Get in Touch",
  },
  portfolio: {
    title: "Portfolio",
    subtitle: "Projects that turned ideas into reality",
    allProjects: "All Projects",
    projects: {
      devxp: {
        title: "DevXP",
        description:
          "Internal portal for developers that centralizes APIs, technical documentation, and service status.",
      },
      chatbot: {
        title: "AI Chatbot",
        description:
          "Intelligent AI assistant with support for multiple languages and LLM integration.",
      },
      timezone: {
        title: "Timezone",
        description:
          "Remote teams struggle to schedule meetings, the application suggests better meeting times between people in different countries.",
      },
      saas: {
        title: "SaaS Management Portal",
        description:
          "Complete SaaS management portal with authentication, automated billing, and advanced metrics.",
      },
      food: {
        title: "Travel App",
        description:
          "Travel application with itinerary planning, maps integration, and social sharing.",
      },
    },
  },
  about: {
    title: "Who am I?",
    description:
      "Computer Engineering student, focused on Full Stack development and web application building. I have practical experience in personal projects involving REST API development with Node.js (TypeScript) and Python, as well as frontend applications with React and Angular.\n\nI work with relational and non-relational databases, containers and version control with Git, always seeking to apply best development practices, organization, and documentation. I'm interested in environments that value collaboration, continuous learning, and technical quality.\n\nI'm familiar with microservices concepts, DevOps, observability, and automation, as well as initial experiences with AI and LLM integrations in applications, always with a focus on responsible and conscious use of technology.",
  },
  contact: {
    title: "Contact Information",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
    twitter: "Twitter",
    location: "Location",
    locationValue: "São Paulo, SP - Brazil",
    linkedinValue: "Your Profile",
  },
};

export const translations = { en, pt };
export type Language = "pt" | "en";
