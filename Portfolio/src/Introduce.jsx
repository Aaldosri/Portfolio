import React from "react";
import img2 from "./img/Me.png";
import { Button } from "@mui/material";
import "./Cv.scss";
import { dir } from "i18next";

// Translate
import { useTranslation } from "react-i18next";

export default function Introduce({ darkMode, local }) {
  const { t } = useTranslation();

  const direction = local == "ar" ? "rtl" : "ltr";

  return (
    <>
      <section
        className="flex mt-[200px] flex-col md:flex-row  justify-center gap-50 items-start mt-10 min-h-[600px]"
        dir={direction}
      >
        <div className="flex gap-8">
          <div style={{ fontFamily: "TajawalBold" }}>
            <h1 className="text-5xl text-[#b33939] m-5">{t("Hey ! I am")} </h1>
            <h1 className="text-5xl text-[#b33939] m-5">
              {" "}
              {t("Abdullah Al-Dosari")}
            </h1>
            <h1 className="text-2xl text-[#b33939] m-5 mt-10">
              {local === "en" ? (
                <>
                  {t(
                    "Web developer I can help you build your website professionally"
                  )}
                  <br />
                  {t("and with high quality")}
                </>
              ) : (
                t("مطور ويب اقدر اساعدك ببناء موقعك بشكل احترافي وبجودة عالية")
              )}
            </h1>

            <div className="buttons mt-10 ">
              <button
                className="blob-btn"
                style={{ "--btn-bg": darkMode ? "#ffffff" : "#1a1a1a" }}
              >
                {t("CV")}

                <span className="blob-btn__inner">
                  <span className="blob-btn__blobs">
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                  </span>
                </span>
              </button>
              <br />
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              style={{
                position: "absolute",
                width: 0,
                height: 0,
                overflow: "hidden",
              }}
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    result="blur"
                    stdDeviation="10"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                    result="goo"
                  />
                  <feBlend in2="goo" in="SourceGraphic" result="mix" />
                </filter>
              </defs>
            </svg>

            <div className="flex gap-8 mt-15 m-5">
              <a
                href="https://www.linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl text-[#0077B5] hover:text-[#005C8A] transition-colors duration-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl text-[#333] hover:text-[#6e5494] transition-colors duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] overflow-hidden rounded-xl shadow-md">
            <img
              src={img2}
              alt="صورة"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </>
  );
}
