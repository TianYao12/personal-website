import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import nba from "@/public/nba.jpg";
import book from "@/public/book.jpeg";
import med from "@/public/med.jpg";
import netflix from "@/public/netflix.jpg"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  // {
  //   name: "Skills",
  //   hash: "#skills",
  // },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer - Eon Media",
    location: "Toronto, Ontario",
    description:
      "Incoming.",
    icon: React.createElement(FaReact),
    date: "May - August 2024",
  },

  {
    title: "Machine Learning Developer",
    location: "Waterloo, Ontario",
    description:
      "Worked on building RAG full-stack applicaitons using Python, LangChain, OpenAI, and HuggingFace",
    icon: React.createElement(LuGraduationCap),
    date: "Sept. 2023 - April 2024",
  },
  {
    title: "Software Developer - A&L Canada Laboratories",
    location: "London Ontario",
    description:
      "Worked on a Next.js/Spring Boot application using TypeScript and CSS/TailwindCSS",
    icon: React.createElement(CgWorkAlt),
    date: "June - August 2023",
  },
  {
    title: "Math Instructor",
    location: "London, Ontario",
    description:
      "Tutored students grade 1-12 math",
    icon: React.createElement(LuGraduationCap),
    date: "Jan. 2021 - June 2023",
  },
] as const;

export const projectsData = [
  {
    title: "NBAExplorer",
    description:
      `Displays NBA player statistics, interactive charts, and news`,
    tags: ["TypeScript", "React.js", "Next.js", "MongoDB", "Python", "CSS"],
    imageUrl: nba,
    githubUrl: "https://github.com/TianYao12/nba"
  },
  {
    title: "RAG Book Recommender",
    description:
      `A search engine that compares user prompts to web-scapped Goodreads data stored as vector embeddings`,
    tags: ["Python", "LangChain", "Hugging Face", "Streamlit"],
    imageUrl: book,
    githubUrl: "https://github.com/TianYao12/Book-Recommender"
  },
  {
    title: "Doctor-Patient Dashboard",
    description:
      `A role-based web app where patients select symptoms and get diagnosed through disease 
       API and doctors prescribe medications`,
    tags: ["JavaScript", "React.js", "Express.js", "PostgreSQL", "AWS (Lambda, API Gateway)", "Docker", "FastAPI", "CSS"],
    imageUrl: med,
    githubUrl: "https://github.com/TianYao12/Doctor-Patient-Dashboard"
  },
  {
    title: "Video Streaming Studio",
    description:
     `A web app where all users can watch videos and authenticated users can upload videos`,
    tags: ["JavaScript", "React.js", "Express.js", "MongoDB", "AWS (S3, Cloudfront)", "TailwindCSS"],
    imageUrl: netflix,
    githubUrl: "https://github.com/TianYao12/Video-Streaming-Studio"
  },
] as const;

export const skillsData = [
  "JavaScript", "TypeScript", "Python", "Java", "C", "Bash",
  "HTML", "CSS/TailwindCSS", "React.js", "Next.js", "Express.js", 
  "Node.js", "Django", "Flask", "Scikit-Learn", "NumPy", "Pandas",
  "MongoDB", "PostgreSQL", "Docker", "AWS", "Heroku", "Linux", 
  "Postman", "Git"
] as const;