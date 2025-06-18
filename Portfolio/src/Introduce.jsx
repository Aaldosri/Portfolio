import React from "react";
import img2 from "./img/Me.png";
import { Button } from "@mui/material";
import "./Cv.scss";
import { dir } from "i18next";
import { useEffect, useState } from "react";
import CV from "../public/cv.pdf";

// Translate
import { useTranslation } from "react-i18next";

// External Libraries
import AOS from "aos";
import "aos/dist/aos.css";

export default function Introduce({ darkMode, local }) {
  const [aosEnabled, setAosEnabled] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 770) {
        setAosEnabled(false);
      } else {
        setAosEnabled(true);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize(); // تفعيل أولي حسب الحجم الحالي

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (aosEnabled) {
      AOS.init({ once: true, duration: 1000 });
    } else {
      AOS.refreshHard(); // لتحديث AOS وإيقاف الأنيميشن
    }
  }, [aosEnabled]);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
    });
  }, []);

  const { t } = useTranslation();

  const direction = local == "ar" ? "rtl" : "ltr";

  return (
    <>
      <section
        className="flex mt-[150px] flex-col xl:flex-row lg:p-5 justify-center gap-[30px] lg:gap-40 items-center min-h-[600px]"
        dir={direction}
      >
        <div
          className="flex gap-8"
          data-aos={aosEnabled ? "fade-left" : undefined}
          data-aos-delay={aosEnabled ? "200" : undefined}
        >
          {/* المحتوى الأول */}
          <div style={{ fontFamily: "TajawalBold" }} className="m-5">
            <h1 className="text-4xl md:text-5xl text-[#b33939] m-5">
              {t("Hey ! I am")}
            </h1>
            <h1 className="text-4xl md:text-5xl text-[#b33939] m-5">
              {t("Abdullah Al-Dosari")}
            </h1>
            <h1 className="text-lg md:text-2xl text-[#b33939] m-5 mt-10">
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

            <div className="buttons mt-10 flex  ">
              <a
                href={CV}
                download
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
              </a>
              <br />
            </div>

            {/* روابط الشبكات */}
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
                href="https://github.com/Aaldosri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl text-[#333] hover:text-[#6e5494] transition-colors duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        <div
          className="flex gap-8"
          data-aos={aosEnabled ? "fade-right" : undefined}
          data-aos-delay={aosEnabled ? "200" : undefined}
        >
          <div className="flex justify-center">
            <div
              className="
      w-[300px] h-[300px]  
      sm:w-[400px] sm:h-[400px]  
      md:w-[500px] md:h-[500px]  
      overflow-hidden rounded-xl shadow-md
      mx-auto
    "
            >
              <img
                src={img2}
                alt="صورة"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
