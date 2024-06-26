"use client";

import React from "react";
import Image from "next/image";
import face from "@/public/face.jpeg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/app/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={face}
              width="192"
              height="192"
              quality="95"
              priority={true}
              alt="Tian Yao"
              className="h-48 w-48 rounded-full object-cover shadow-xl border-[0.35rem] border-white"
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-10 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, I'm Tian. I'm a <span className="font-bold">CS student</span> at
        the <span className="font-bold">University of Waterloo </span>
        interested in fullstack development and data science
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 
          hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me
        </Link>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
        focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer 
        borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/tian-yao-aa3708271/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 text-[1.35rem] flex items-center gap-2 rounded-full
          focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 
          transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/TianYao12"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
