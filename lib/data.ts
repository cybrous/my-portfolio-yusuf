import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import amazonImg from "@/public/amazon.png";
import portfolioImg from "@/public/portfolio.png";
import ecateringImg from "@/public/e-catering.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated B.Tech CSE",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "Built a portfolio website using TypeScript, CSS, JavaScript, and Next.js, deployed on Cloudflare Pages. Offered a sleek, responsive design with dynamic features to effectively showcase my projects and skills.",
    tags: ["Typescript", "CSS", "Javascript","Next.js"],
    imageUrl: portfolioImg,
  },
  {
    title: "Chemmentor.com",
    description:
      "Launched Chemmentor.com on WordPress with 50+ quizzes and 100+ educational pieces, increasing user engagement by 30% and enhancing student performance.",
    tags: ["WORDPRESS","NAMECHEAP Hosting"],
    imageUrl: null,
  },
  {
    title: "Amazon E-Commerce Website Replication Initiative",
    description:
      "Built a fully responsive 100% replica of an Amazon e-commerce site using HTML and CSS, closely matching the original design and functionality.",
    tags: ["Html", "CSS", "Javascript"],
    imageUrl: amazonImg,
  },
  {
    title: "E-Catering",
    description:
      "Created a responsive catering management portal using HTML, CSS, JavaScript, and Django. The secure backend and API integration boosted operational efficiency by 25% and cut processing times by 40%.",
    tags: ["Html","CSS","Javascript","Django"],
    imageUrl: ecateringImg,
  },
  {
    title: "Hospital Management System",
    description:
      "Implemented features such as appointment scheduling and staff management, which resulted in operational efficiency and decrease response to patient inquiries 20% faster.",
    tags: ["Java", "OOPS"],
    imageUrl: null,
  },
] as const;

export const skillsData = [
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "SQL",
  "PostgreSQL",
  "Python",
  "Django",
] as const;