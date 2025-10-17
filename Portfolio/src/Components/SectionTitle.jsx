import { m, LazyMotion, domAnimation } from "framer-motion";
import React from "react";

import { useDarkModeContext } from "../Components/Contexts/DarkModeContext";

export default function SectionTitle(props) {
  const { darkMode } = useDarkModeContext();

  const { title, subtitle } = props;
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={{ x: window.innerWidth < 640 ? 300 : 650 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-primary-600 p-6 noselect max-w-[1000px] mx-auto "
      >
        <span
          className={`opacity-50  ${darkMode ? "text-white" : "text-black"}`}
          style={{
            textTransform: "uppercase",
            fontWeight: "600",
          }}
        >
          {subtitle}
        </span>
        <h2
          className={`tracking-wider text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${
            darkMode ? "text-white" : "text-black"
          } font-Tajawal`}
        >
          {title}
        </h2>
      </m.div>
    </LazyMotion>
  );
}
