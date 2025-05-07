import React, { useState } from "react";
import img2 from "./img/Me.png";

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
    image: img2,
    site: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "مشروع 2",
    image: "https://via.placeholder.com/400x200",
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
          <div key={index} className="relative w-[700px] h-[500px]">
            {/* صورة المشروع مع تحريكها لليسار أو اليمين أكثر */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-xl shadow-lg"
              style={{
                transform:
                  index % 2 === 0 ? "translateX(-50%)" : "translateX(50%)", // تحريك الصورة لليسار أو اليمين أكثر
                transition: "transform 0.5s ease-in-out",
              }}
            />

            {/* الكرت في منتصف الصورة وتثبيت مكانه */}
            <div
              className="absolute bg-white p-6 rounded-xl shadow-2xl w-64"
              style={{
                top: "50%", // جعل الكرت في منتصف الصورة عموديًا
                left: "50%", // تثبيت الكرت في المنتصف أفقيًا
                transform: "translate(-50%, -50%)", // لضبط الكرت في المنتصف بالضبط
                transition: "transform 0.5s ease-in-out",
              }}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">
                وصف مختصر عن المشروع والتقنيات المستخدمة فيه.
              </p>
              <div className="flex gap-3">
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
