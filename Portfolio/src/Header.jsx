import React, { use } from "react";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

// External Libraries
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import emailjs from "emailjs-com";
import { useRef } from "react";

// Translate
import { useTranslation } from "react-i18next";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Header({
  darkMode,
  setDarkMode,
  local,
  setLocal,
  onScrollToSection,
}) {
  const formRef = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4z9ymac",
        "template_ir6z0xe",
        formRef.current,
        "3Doe_o0i-bohCcBFy"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("تم إرسال الرسالة بنجاح!");
        },
        (error) => {
          console.log(error.text);
          alert("حدث خطأ أثناء الإرسال.");
        }
      );

    e.target.reset(); // لمسح الحقول بعد الإرسال
  }

  const { t, i18n } = useTranslation();

  // States

  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [open, setOpen] = useState(false);

  // HANDLERS

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };
  const handleMenuClick = (section) => {
    setMenuOpen(false);
    onScrollToSection(section);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleLanguageClick() {
    if (local == "en") {
      setLocal("ar");
      i18n.changeLanguage("ar");
    } else {
      setLocal("en");
      i18n.changeLanguage("en");
    }
  }
  function handleDarkMode(e) {
    setDarkMode(e.target.checked);
  }

  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // لما ينزل أكثر من 20px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const direction = local == "ar" ? "ltr" : "rtl";

  return (
    <>
      <header
        dir={direction}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-md px-4 sm:px-6 ${
          scrolled
            ? darkMode
              ? "bg-white/90"
              : "bg-[#1a1a1a]/90"
            : "bg-transparent"
        }`}
      >
        {" "}
        {/* القائمة الكاملة لأجهزة الديسكتوب */}
        <div className="hidden lg:flex items-center justify-between px-4 py-6">
          {/* اليسار */}
          <div className="w-3/12 flex justify-end items-center gap-4">
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
              <Button onClick={handleLanguageClick} variant="outlined">
                {local === "ar" ? "AR" : "EN"}
              </Button>
            </div>
          </div>

          {/* المنتصف */}
          <nav
            className={`nav font-semibold text-lg ${
              darkMode ? "text-[#1a1a1a]" : "text-white"
            }`}
          >
            <ul className="flex items-center">
              <li className="relative group p-4 cursor-pointer">
                <button
                  className={`text-3xl cursor-pointer group-hover:text-[#b33939] transition-colors duration-200 ${
                    darkMode ? "text-[#1a1a1a]" : "text-white"
                  }`}
                  onClick={handleClickOpen}
                >
                  {t("Contact")}
                </button>
                <Dialog
                  open={open}
                  slots={{ transition: Transition }}
                  keepMounted
                  onClose={handleClose}
                  aria-describedby="alert-dialog-slide-description"
                  dir={local === "ar" ? "rtl" : "ltr"}
                  PaperProps={{
                    style: {
                      backgroundColor: darkMode ? "white" : "#1a1a1a",
                    },
                    className: "w-[700px] max-w-full",
                  }}
                >
                  <h1
                    className="text-center mt-5 text-4xl font-extrabold tracking-wide"
                    style={{ color: darkMode ? "black" : "white" }}
                  >
                    {local === "ar" ? "للتواصل" : "Contact Us"}
                  </h1>

                  <DialogContent>
                    <form
                      ref={formRef}
                      onSubmit={sendEmail}
                      className="w-full mt-4"
                    >
                      <input
                        name="name"
                        type="text"
                        placeholder={local === "ar" ? "الاسم" : "Name"}
                        required
                        minLength={3}
                        className={`block w-full mb-4 px-4 py-3 text-lg font-medium border-2 rounded-md outline-none transition ${
                          darkMode
                            ? "text-black placeholder-black"
                            : "text-white placeholder-white"
                        }`}
                        style={{
                          borderColor: "#b33939",
                          backgroundColor: "transparent",
                        }}
                      />

                      <input
                        name="email"
                        type="email" // هنا غيرت النوع ليصير بريد إلكتروني صحيح
                        placeholder={
                          local === "ar" ? "البريد الإلكتروني" : "Email"
                        }
                        required
                        className={`block w-full mb-4 px-4 py-3 text-lg font-medium border-2 rounded-md outline-none transition ${
                          darkMode
                            ? "text-black placeholder-black"
                            : "text-white placeholder-white"
                        }`}
                        style={{
                          borderColor: "#b33939",
                          backgroundColor: "transparent",
                        }}
                      />

                      <textarea
                        name="message"
                        placeholder={local === "ar" ? "الرسالة" : "Message"}
                        rows={6}
                        required
                        className={`block w-full mb-4 px-4 py-3 text-lg font-medium border-2 rounded-md outline-none resize-y transition ${
                          darkMode
                            ? "text-black placeholder-black"
                            : "text-white placeholder-white"
                        }`}
                        style={{
                          borderColor: "#b33939",
                          backgroundColor: "transparent",
                        }}
                      />

                      <input
                        type="submit"
                        value={local === "ar" ? "إرسال" : "Submit"}
                        className="w-full"
                        style={{
                          backgroundColor: "#b33939",
                          color: "white",
                          fontWeight: "bold",
                          fontSize: "24px",
                          paddingTop: "12px",
                          paddingBottom: "12px",
                          borderRadius: "0.375rem",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.backgroundColor = "#992d2d")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.backgroundColor = "#b33939")
                        }
                      />
                    </form>
                  </DialogContent>
                </Dialog>

                <span
                  className={`absolute bottom-0 ${
                    local === "ar"
                      ? "right-0 origin-right"
                      : "left-0 origin-left"
                  } w-0 h-0.5 bg-[#b33939] transition-all duration-500 group-hover:w-full`}
                ></span>
              </li>
              <li
                onClick={() => onScrollToSection("skills")}
                className="relative group p-4 cursor-pointer"
              >
                <span
                  className={`text-3xl group-hover:text-[#b33939] transition-colors duration-200 ${
                    darkMode ? "text-[#1a1a1a]" : "text-white"
                  }`}
                >
                  {t("Skills")}
                </span>
                <span
                  className={`absolute bottom-0 ${
                    direction === "rtl"
                      ? "left-0 origin-left"
                      : "right-0 origin-right"
                  } w-0 h-0.5 bg-[#b33939] transition-all duration-500 group-hover:w-full`}
                ></span>
              </li>

              <li
                onClick={() => onScrollToSection("projects")}
                className="relative group p-4 cursor-pointer"
              >
                <span
                  className={`text-3xl group-hover:text-[#b33939] transition-colors duration-200 ${
                    darkMode ? "text-[#1a1a1a]" : "text-white"
                  }`}
                >
                  {t("Projects")}
                </span>
                <span
                  className={`absolute bottom-0 ${
                    direction === "rtl"
                      ? "left-0 origin-left"
                      : "right-0 origin-right"
                  } w-0 h-0.5 bg-[#b33939] transition-all duration-500 group-hover:w-full`}
                ></span>
              </li>

              <li
                onClick={() => onScrollToSection("me")}
                className="relative group p-4 cursor-pointer"
              >
                <span
                  className={`text-3xl group-hover:text-[#b33939] transition-colors duration-200 ${
                    darkMode ? "text-[#1a1a1a]" : "text-white"
                  }`}
                >
                  {t("Me")}
                </span>
                <span
                  className={`absolute bottom-0 ${
                    direction === "rtl"
                      ? "left-0 origin-left"
                      : "right-0 origin-right"
                  } w-0 h-0.5 bg-[#b33939] transition-all duration-500 group-hover:w-full`}
                ></span>
              </li>
            </ul>
          </nav>

          {/* الاسم */}
          <div className="relative group p-4 cursor-pointer">
            <h1
              className={`
    text-5xl 
    mr-8 
    transition-colors duration-200 
-   text-white
+   text-white max-[500px]:text-white
    ${darkMode ? "md:text-[#1a1a1a]" : ""}
    group-hover:text-[#b33939]
  `}
            >
              {t("Abdullah")}
              <span className="absolute top-[-15px] left-0 w-0 h-0.5 bg-[#b33939] group-hover:w-full transition-all duration-500"></span>
              <span className="absolute bottom-[-10px] left-0 w-0 h-0.5 bg-[#b33939] group-hover:w-full transition-all duration-500"></span>
              <span className="absolute top-0 left-[-10px] h-0 w-0.5 bg-[#b33939] group-hover:h-full transition-all duration-500"></span>
              <span className="absolute top-0 right-[-10px] h-0 w-0.5 bg-[#b33939] group-hover:h-full transition-all duration-500"></span>
            </h1>
          </div>
        </div>
        {/* قائمة الجوال */}
        <div className="flex md:hidden items-center justify-between p-4 relative">
          {/* يسار: زر الهامبرجر */}
          <button
            onClick={handleMenuToggle}
            className="flex flex-col justify-between w-12 h-8 z-50"
          >
            <span
              className={`h-2 w-full bg-[#0e2431] rounded transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-3 origin-center" : ""
              }`}
            ></span>
            <span
              className={`h-2 w-full bg-[#0e2431] rounded transition-all duration-300 ${
                menuOpen ? "scale-0" : ""
              }`}
            ></span>
            <span
              className={`h-2 w-full bg-[#0e2431] rounded transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-3 origin-center" : ""
              }`}
            ></span>
          </button>
          {/* الوسط: اللغة والوضع الليلي */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="checkbox"
              className="switch scale-75 sm:scale-90"
              onChange={handleDarkMode}
              checked={darkMode}
            />
            <Button
              onClick={handleLanguageClick}
              variant="outlined"
              size="small"
            >
              {local === "ar" ? "AR" : "EN"}
            </Button>
          </div>

          {/* اليمين: الاسم */}
          <h1 className="text-lg font-bold text-[#0e2431]">{t("Abdullah")}</h1>

          {/* قائمة التنقل */}
          <div
            className={`fixed top-0 left-0 h-screen w-full bg-white text-[#0e2431] flex flex-col items-center justify-center gap-8 text-2xl font-medium transform transition-transform duration-300 z-40 ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button onClick={() => handleMenuClick("me")}>{t("Me")}</button>
            <button onClick={() => handleMenuClick("projects")}>
              {t("Projects")}
            </button>
            <button onClick={() => handleMenuClick("skills")}>
              {t("Skills")}
            </button>
            <button onClick={handleClickOpen}>{t("Contact")}</button>
          </div>
        </div>
      </header>
    </>
  );
}
