import React, { useState } from "react";
import img1 from "./img/pro1.png";

// External Libraries
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Grid } from "@mui/material";
const projects = [
  {
    title: "مشروع 1",
    image: img1,
    site: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "مشروع 2",
    image: img1,
    site: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "مشروع 3",
    image: "https://via.placeholder.com/400x200",
    site: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "مشروع 4",
    image: "https://via.placeholder.com/400x200",
    site: "https://example.com",
    github: "https://github.com",
  },
];

export default function Projects({ darkMode }) {
  return (
    <section className="min-h-[600px] text-center mt-20">
      <div className="relative inline-block group text-center mb-20">
        <h1
          className="text-4xl mb-5 text-center text-[#b33939]"
          style={{ fontFamily: "TajawalBold" }}
        >
          المشاريع
          <span className="absolute bottom-0 left-0 right-0 border-b-2 border-[#b33939]"></span>
        </h1>
      </div>

      {/* المشاريع */}
      <div className="flex flex-col gap-20 items-center">
        {projects.map((project, index) => (
          <div key={index} className="relative w-full max-w-[700px] mx-auto">
            {/* صورة المشروع */}
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-[500px] object-cover rounded-xl shadow-lg transition-transform duration-500 ease-in-out relative z-0
          ${
            index % 2 === 0 ? "md:translate-x-[-50%]" : "md:translate-x-[50%]"
          }`}
            />

            {/* الكرت */}
            <div
              className={`bg-white p-6 rounded-xl shadow-2xl w-64 mx-auto relative z-10
          md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2
          -mt-12 md:mt-0`}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">
                وصف مختصر عن المشروع والتقنيات المستخدمة فيه.
              </p>
              <div className="flex gap-3 justify-center">
                <a
                  href={project.site}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm"
                  target="_blank"
                >
                  زيارة الموقع
                </a>
                <a
                  href={project.github}
                  className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-100 transition text-sm"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
