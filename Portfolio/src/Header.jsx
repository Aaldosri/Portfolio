import React from "react";
import Button from "@mui/material/Button";
import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";
// Translate
import { useTranslation } from "react-i18next";

export default function Header({ darkMode, setDarkMode }) {
  const { language, setLanguage } = useContext(LanguageContext);

  function toggleLanguage() {
    setLanguage(language === "en" ? "ar" : "en");
  }
  function handleDarkMode(e) {
    setDarkMode(e.target.checked);
  }

  return (
    <>
      <header
        className={`header sticky top-0 ${
          darkMode ? "bg-white" : "bg-[#1a1a1a]"
        } shadow-md flex items-center justify-between px-1 py-6`}
      >
        <div class="w-3/12 flex justify-end items-center gap-4">
          <div className="wrapper">
            <input
              type="checkbox"
              name="checkbox"
              className="switch"
              onChange={handleDarkMode}
              checked={darkMode}
            />
          </div>

          <div>
            <Button onClick={toggleLanguage} variant="outlined">
              {language === "en" ? "EN" : "AR"}
            </Button>
          </div>
        </div>

        <nav
          className={`nav font-semibold text-lg ${
            darkMode ? "text-[#1a1a1a]" : "text-white"
          }`}
        >
          <ul className="flex items-center">
            <li className="relative group p-4 cursor-pointer">
              <a
                href=""
                className={`text-3xl group-hover:text-[#b33939] transition-colors duration-200 ${
                  darkMode ? "text-[#1a1a1a]" : "text-white"
                }`}
              >
                للتواصل
              </a>
              <span className="absolute right-0 bottom-0 w-0 h-0.5 bg-[#b33939] transition-all duration-500 group-hover:w-full origin-right"></span>
            </li>

            <li className="relative group p-4 cursor-pointer">
              <a
                href=""
                className={`text-3xl group-hover:text-[#b33939] transition-colors duration-200 ${
                  darkMode ? "text-[#1a1a1a]" : "text-white"
                }`}
              >
                المهارات
              </a>
              <span className="absolute right-0 bottom-0 w-0 h-0.5 bg-[#b33939] transition-all duration-500 group-hover:w-full origin-right"></span>
            </li>

            <li className="relative group p-4 cursor-pointer">
              <a
                href=""
                className={` text-3xl group-hover:text-[#b33939] transition-colors duration-200 ${
                  darkMode ? "text-[#1a1a1a]" : "text-white"
                }`}
              >
                المشاريع
              </a>
              <span className="absolute right-0 bottom-0 w-0 h-0.5 bg-[#b33939] transition-all duration-500 group-hover:w-full origin-right"></span>
            </li>

            <li className="relative group p-4 cursor-pointer">
              <a
                href=""
                className={` text-3xl group-hover:text-[#b33939] transition-colors duration-200 ${
                  darkMode ? "text-[#1a1a1a]" : "text-white"
                }`}
              >
                من انا
              </a>
              <span className="absolute right-0 bottom-0 w-0 h-0.5 bg-[#b33939] transition-all duration-500 group-hover:w-full origin-right"></span>
            </li>
          </ul>
        </nav>

        <div className="relative group p-4 cursor-pointer">
          <h1
            className={`text-5xl relative transition-colors duration-200 text-right mr-8 group-hover:text-[#b33939] ${
              darkMode ? "text-[#1a1a1a]" : "text-white"
            }`}
          >
            عبدالله
            {/* Top border */}
            <span className="absolute top-[-15px] left-0 w-0 h-0.5 bg-[#b33939] group-hover:w-full transition-all duration-500"></span>
            {/* Bottom border */}
            <span className="absolute bottom-[-10px] left-0 w-0 h-0.5 bg-[#b33939] group-hover:w-full transition-all duration-500"></span>
            {/* Left border */}
            <span className="absolute top-0 left-[-10px] h-0 w-0.5 bg-[#b33939] group-hover:h-full transition-all duration-500"></span>
            {/* Right border */}
            <span className="absolute top-0 right-[-10px] h-0 w-0.5 bg-[#b33939] group-hover:h-full transition-all duration-500"></span>
          </h1>
        </div>
      </header>
    </>
  );
}
