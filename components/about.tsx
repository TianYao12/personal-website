"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/app/lib/hooks";
import highlights from "@/public/nba.jpg";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[46rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I decided to study Computer Science because of my passion for{" "}
        <span className="italic">problem solving</span>. I love math and
        programming, not only for the satisfaction of solving a problem or
        seeing a program work on first try (never happens LOL), but also for
        their limitless potential to solve real-world problems. I am always
        looking to connect with like-minded peers and professionals, so feel
        free to reach out!
      </p>

      <p className="mb-10">
        In my free time, I enjoy playing/watching sports, reading, or playing
        piano. In high school, I was on my school's varsity basketball, soccer,
        and badminton team and placed 3rd at OFSAA Provincials for badminton!
        Here's a short 20 second video of some basketball "highlights" (I barely
        got any on video, and excuse the film quality LOL)
      </p>
      <video className="rounded" src="highlights.mp4" controls></video>
    </motion.section>
  );
}
