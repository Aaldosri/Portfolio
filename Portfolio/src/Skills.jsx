import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import tailwind from "./img/tailwind.svg";

// Translate
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

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
      icon: <img src={tailwind} alt="Tailwind CSS" className="w-12 h-12" />,
    },
    { name: "Bootstrap", icon: <FaBootstrap size={50} color="#563d7c" /> },
  ];
  return (
    <>
      <section className="min-h-[600px] text-center mt-20 mb-10 md:mb-10">
        <div className="relative inline-block group text-center mb-20">
          <h1
            className="text-4xl mb-5 text-center text-[#b33939]"
            style={{ fontFamily: "TajawalBold" }}
          >
            {t("Skills")}

            <span className="absolute bottom-0 left-0 right-0 border-b-2 border-[#b33939]"></span>
          </h1>
        </div>

        {/* المهارات مع الأيقونات */}
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "9999px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                border: "2px solid #b33939",
                backgroundColor: "#ffffff",
                color: "#b33939",
                fontWeight: "bold",
                fontSize: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transition:
                  "transform 0.5s ease, box-shadow 0.5s ease, background-color 0.5s ease, color 0.5s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.25)";
                e.currentTarget.style.boxShadow =
                  "0 12px 24px rgba(179,57,57,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.color = "#b33939";
              }}
              data-aos="zoom-in"
            >
              {skill.icon}
              <span style={{ marginTop: "0.75rem" }}>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
