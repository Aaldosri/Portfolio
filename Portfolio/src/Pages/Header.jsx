import React from "react";

// External Libraries

import Button from "@mui/material/Button";
import DarkMode from "../Components/DarkMode";
import { useDarkModeContext } from "../Components/Contexts/DarkModeContext";
import { useState, useEffect } from "react";
export default function Header({ scrollToSection, refs }) {
  const { darkMode, toggleDarkMode } = useDarkModeContext();

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // تابع الحركة لأعلى أو أسفل
      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);

      setScrolled(currentScrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } 
  ${
    scrolled
      ? darkMode
        ? "bg-[#000000aa] backdrop-blur-sm shadow-[0_1px_2px_rgba(255,255,255,0.05)]" // ظل أخف للدارك
        : "bg-[#e9ecefaa] backdrop-blur-sm shadow-[0_1px_1px_rgba(0,0,0,0.01)]" // ظل أخف للايت
      : "bg-transparent shadow-none"
  }`}
    >
      <nav className="font-semibold text-lg">
        <div className="div-header flex justify-between items-center p-4">
          <div>
            <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>

          <div>
            <ul
              className={`flex list-none relative gap-[50px] text-[1.8rem] ${
                darkMode ? "text-white" : "text-black"
              } max-lg:hidden`}
            >
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
                  onClick={() => scrollToSection(refs.projectsRef, 60)}
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
            <h1
              className={`${
                darkMode ? "text-white" : "text-black"
              } text-3xl select-none`}
            >
              عبدالله الدوسري
            </h1>
          </div>
        </div>
      </nav>
    </header>
  );
}
