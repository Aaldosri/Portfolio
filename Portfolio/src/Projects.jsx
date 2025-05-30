import React, { useState, useEffect } from "react";
import img1 from "./img/pro1.png";

import img3 from "./img/pro3.png";
import img4 from "./img/pro4.png";

// Translate
import { useTranslation } from "react-i18next";

// External Libraries
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Grid } from "@mui/material";

import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "HEALTHY",
    image: img1,
    site: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Weather",
    image: img1,
    site: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Adventure Tours",
    image: img3,
    site: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "مواقيت الصلاة",
    image: img4,
    site: "https://example.com",
    github: "https://github.com",
  },
];

export default function Projects({ darkMode, local }) {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-in-out",
    });
  }, []);

  const { t } = useTranslation();

  const direction = local == "ar" ? "rtl" : "ltr";

  return (
    <section dir={direction} className="min-h-[600px] text-center mt-20">
      <div className="relative inline-block group text-center mb-20">
        <h1
          className="text-4xl mb-5 text-center text-[#b33939]"
          style={{ fontFamily: "TajawalBold" }}
        >
          {t("Projects")}

          <span className="absolute bottom-0 left-0 right-0 border-b-2 border-[#b33939]"></span>
        </h1>
      </div>
      {/* المشاريع */}
      <div className="flex flex-col gap-20 items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-full max-w-[700px] mx-auto"
            data-aos={
              local === "ar" && index % 2 === 0
                ? "fade-left"
                : local === "ar" && index % 2 !== 0
                ? "fade-right"
                : local !== "ar" && index % 2 === 0
                ? "fade-right"
                : "fade-left"
            }
          >
            {/* صورة المشروع */}
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-[500px] object-cover rounded-xl shadow-lg transition-transform duration-500 ease-in-out relative z-0
              ${
                index % 2 === 0
                  ? local === "ar"
                    ? "md:translate-x-[60%]"
                    : "md:translate-x-[-60%]"
                  : local === "ar"
                  ? "md:translate-x-[-60%]"
                  : "md:translate-x-[60%]"
              }
            `}
            />

            {/* الكرت */}
            <div
              className={`bg-white border p-6 rounded-xl shadow-2xl w-64 mx-auto relative z-10
              md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2
              -mt-12 md:mt-0`}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <div className="flex gap-3 justify-center">
                <a
                  href={project.site}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("Visit Website")}
                </a>
                <a
                  href={project.github}
                  className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-100 transition text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
    </section>
  );
}
