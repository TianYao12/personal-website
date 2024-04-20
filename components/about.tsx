"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/app/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After exploring my interests in high school, I decided to pursue my
        passion for math and programming.
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem, and actually
        apply my skills to solve real-world issues.
      </p>

      <p className="mb-3">
        <span className="italic">When I'm not coding</span>, I enjoy playing
        various sports, whether it is basketball, badminton, or soccer.
        Throughout high school, I was on my school's varsity team and even won a
        bronze metal at OFSAA Provincials for badminton!
      </p>

      <p>
        I am always looking to connect with like-minded peers and professionals
        who are passionate about technology and innovation. Whether it’s
        discussing the latest tech trends, brainstorming on a potential project,
        or hitting the court for a friendly game, feel free to reach out!
      </p>
    </motion.section>
  );
}
