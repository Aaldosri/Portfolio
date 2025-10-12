import React from "react";
import SectionTitle from "../Components/SectionTitle";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { introduction } from "../Constants/Constants";

import Features from "../Components/Features";

import { useDarkModeContext } from "../Components/Contexts/DarkModeContext";

export default function About({ ref }) {
  const { darkMode } = useDarkModeContext();

  return (
    <div dir="rtl" ref={ref}>
      <div className="overflow-hidden">
        <SectionTitle title="نبذة عني" subtitle="مقدمة" />
      </div>

      <div className="flex flex-col xl:flex-row justify-around p-6 noselect max-w-[1400px] mx-auto">
        <motion.div
          className="w-full md:w-[130%] md:h-full flex items-center mt-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <LazyMotion features={domAnimation} strict>
            <m.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className="text-grayscale-50 p-6 text-right text-white flex flex-col gap-6 
             w-full max-w-[600px] ml-auto 
             text-lg sm:text-xl md:text-2xl lg:text-[1.7rem] xl:text-[1.5rem] leading-relaxed"
            >
              <span className={`${darkMode ? "text-white" : "text-black"}`}>
                {introduction.text[0]}
              </span>
              <span className={`${darkMode ? "text-white" : "text-black"}`}>
                {introduction.text[1]}
              </span>
              <span className={`${darkMode ? "text-white" : "text-black"}`}>
                {introduction.text[2]}
              </span>
              <span className={`${darkMode ? "text-white" : "text-black"}`}>
                {introduction.text[3]}
              </span>
            </m.p>
          </LazyMotion>
        </motion.div>
        <Features />
      </div>
    </div>
  );
}
