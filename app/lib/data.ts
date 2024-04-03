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
    title: "Math Instructor",
    location: "London, Ontario",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan. 2021 - June 2023",
  },
  {
    title: "Front-End Developer - A&L Canada Laboratories",
    location: "London Ontario",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "June - August 2023",
  },
  {
    title: "Machine Learning Developer",
    location: "Waterloo, Ontario",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "Sept. 2023 - April 2024",
  },
  {
    title: "Full-Stack Developer - Eon Media",
    location: "Toronto, Ontario",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "May - August 2024",
  },
] as const;

export const projectsData = [
  {
    title: "NBA News and Statistics",
    description:
      `Displays statistics and interactive charts using Chart.js for 1000+ players stored in MongoDB database
      Utilized Next.js API routes to construct REST endpoints that interact with database and third-party APIs
      Integrated server-side rendering using getServerSideProps
      Incorporated Credentials, Google, and Github user authentication using NextAuth, MongoDB, and sessions`,
    tags: ["TypeScript", "React.js", "Next.js", "MongoDB", "Python", "CSS"],
    imageUrl: nba,
  },
  {
    title: "RAG Book Recommender",
    description:
      `Built a RAG search engine using LangChain, Hugging Face all-MiniLM-L6-v2 model, and Streamlit
       Web-scrapped Goodreads book data using requests and BeautifulSoup and stored it as vector embeddings
       Employed FAISS similarity search to compare user prompts to vector embeddings}`,
    tags: ["Python", "LangChain", "Hugging Face", "Streamlit"],
    imageUrl: book,
  },
  {
    title: "Doctor-Patient Dashboard",
    description:
      `Developed a disease prediction and treatment app, performing user auth with PostgreSQL, JWTs, and cookies
       Deployed a prediction Logistic Regression API using AWS Lambda, API Gateway, Docker, and FastAPI
       Constructed Express.js REST endpoints to interact with database, prediction API, and React.js frontend
       Performed JEST tests for the authentication and header React.js components`,
    tags: ["JavaScript", "React.js", "Express.js", "PostgreSQL", "AWS", "Docker", "FastAPI", "CSS"],
    imageUrl: med,
  },
  {
    title: "Video Streaming Studio",
    description:
     `Utilized Amazon S3 for secure video storage and Amazon CloudFront CDN to reduce latency
      Utilized AWS SDK to upload, delete, and retrieve videos from S3
      Incorporated user authentication and authorization using JWTs, cookies, and MongoDB database
      Used Mongoose for storing and querying user data and video metadata from MongoDB
      Employed React Context for state management and encrypted data using Bcrypt and Crypto`,
    tags: ["JavaScript", "React.js", "Express.js", "MongoDB", "AWS", "TailwindCSS"],
    imageUrl: netflix,
  },
] as const;

export const skillsData = [
  "JavaScript", "TypeScript", "Python", "Java", "C", "Bash",
  "HTML", "CSS/TailwindCSS", "React.js", "Next.js", "Express.js", 
  "Node.js", "Django", "Flask", "Scikit-Learn", "NumPy", "Pandas",
  "MongoDB", "PostgreSQL", "Docker", "AWS", "Heroku", "Linux", 
  "Postman", "Git"
] as const;