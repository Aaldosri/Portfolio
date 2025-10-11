import React from "react";

// External Libraries

import Button from "@mui/material/Button";
import DarkMode from "../Components/DarkMode";
import { useDarkModeContext } from "../Components/Contexts/DarkModeContext";

export default function Header({ scrollToSection, refs }) {
  const { darkMode, toggleDarkMode } = useDarkModeContext();

  return (
    <nav className="font-semibold text-lg">
      <div className="div-header">
        <div>
          <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <div>
          <ul
            className={`flex list-none relative gap-[50px] text-[1.8rem] ${
              darkMode ? "text-white" : "text-black"
            } max-lg:hidden`}
          >
            {" "}
            <li className="relative cursor-pointer p-4 group">
              <span
                onClick={() => scrollToSection(refs.contactRef)}
                className="text-3xl transition-colors duration-200 group-hover:text-[#b33939]"
              >
                للتواصل
              </span>
              <span className="underline"></span>
            </li>
            <li className="relative cursor-pointer p-4 group">
              <span
                onClick={() => scrollToSection(refs.skillsRef)}
                className="text-3xl transition-colors duration-200 group-hover:text-[#b33939]"
              >
                المهارات
              </span>
              <span className="underline"></span>
            </li>
            <li className="relative cursor-pointer p-4 group">
              <span
                onClick={() => scrollToSection(refs.projectsRef, 70)} // نزول أكثر
                className="text-3xl transition-colors duration-200 group-hover:text-[#b33939]"
              >
                المشاريع
              </span>
              <span className="underline"></span>
            </li>
            <li className="relative cursor-pointer p-4 group">
              <span
                onClick={() => scrollToSection(refs.aboutRef)}
                className="text-3xl transition-colors duration-200 group-hover:text-[#b33939]"
              >
                نبذة عني
              </span>
              <span className="underline"></span>
            </li>
          </ul>
        </div>

        <div>
          <h1 className={`${darkMode ? "text-white" : "text-black"} text-3xl`}>
            عبدالله الدوسري
          </h1>
        </div>
      </div>
    </nav>
  );
}
