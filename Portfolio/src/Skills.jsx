import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ICONS
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaBootstrap,
  FaToolbox,
} from "react-icons/fa";
import { BeakerIcon } from "@heroicons/react/20/solid";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skills = [
    { name: "HTML", icon: <FaHtml5 size={50} color="#e34c26" /> },
    { name: "CSS", icon: <FaCss3Alt size={50} color="#2965f1" /> },
    { name: "JavaScript", icon: <FaJs size={50} color="#f0db4f" /> },
    { name: "React", icon: <FaReact size={50} color="#61dafb" /> },
    { name: "Git", icon: <FaGitAlt size={50} color="#f1502f" /> },
    {
      name: "Tailwind",
      icon: <BeakerIcon className="w-12 h-12 text-teal-500" />,
    },
    { name: "Bootstrap", icon: <FaBootstrap size={50} color="#563d7c" /> },
  ];

  return (
    <>
      <section className="min-h-[600px] text-center mt-20">
        <div className="relative inline-block group text-center mb-20">
          <h1
            className="text-4xl mb-5 text-center text-[#b33939]"
            style={{ fontFamily: "TajawalBold" }}
          >
            المهارات
            <span className="absolute bottom-0 left-0 right-0 border-b-2 border-[#b33939]"></span>
          </h1>
        </div>

        {/* المهارات مع الأيقونات */}
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-32 h-32 flex flex-col items-center justify-center rounded-full shadow-lg border-2 border-[#b33939] bg-white text-[#b33939] text-base font-bold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-[#f2f2f2] hover:text-[#b33939]"
              data-aos="zoom-in"
            >
              {/* عرض الأيقونة */}
              {skill.icon}
              <span className="mt-3">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
