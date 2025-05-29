import React from "react";
import Button from "@mui/material/Button";
import { useState, useEffect, useContext } from "react";

// External Libraries
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

// Translate
import { useTranslation } from "react-i18next";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Header({ darkMode, setDarkMode, local, setLocal }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { t, i18n } = useTranslation();

  // const toggleLanguage = () => {
  //   const newLang = language === "ar" ? "en" : "ar";
  //   setLanguage(newLang);
  //   i18n.changeLanguage(newLang);
  //   document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  //   console.log("تغيير اللغة إلى:", newLang);
  // };

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

  const direction = local == "ar" ? "ltr" : "rtl";
  return (
    <>
      <header
        dir={direction}
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
            <Button onClick={handleLanguageClick} variant="outlined">
              {local === "ar" ? "AR" : "EN"}
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
              <button
                href=""
                className={`text-3xl cursor-pointer group-hover:text-[#b33939] transition-colors duration-200 ${
                  darkMode ? "text-[#1a1a1a]" : "text-white"
                }`}
                onClick={handleClickOpen}
              >
                {t("Contact")}
              </button>
              <span
                className={`absolute bottom-0 ${
                  local === "ar" ? "right-0 origin-right" : "left-0 origin-left"
                } w-0 h-0.5 bg-[#b33939] transition-all duration-500 group-hover:w-full`}
              ></span>
              <Dialog
                open={open}
                slots={{
                  transition: Transition,
                }}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
              >
                <form
                  className={`max-w-[620px] mx-auto p-5 rounded-md transition-all duration-300 ${
                    darkMode ? "bg-white text-black" : "bg-[#1e1e28] text-white"
                  }`}
                  dir={local === "ar" ? "rtl" : "ltr"}
                >
                  <input
                    name="name"
                    type="text"
                    placeholder={local == "ar" ? "الاسم" : "Name"}
                    className={`font-medium text-lg rounded-md leading-[22px] ${
                      darkMode
                        ? "text-white placeholder-gray-400"
                        : "text-black placeholder-gray-400"
                    } bg-transparent border-2 border-[#CC6666] transition-all duration-300 p-3 mb-4 w-full outline-none focus:border-[#CC4949]`}
                  />{" "}
                  <input
                    name="email"
                    type="text"
                    placeholder={local === "ar" ? "الايميل" : "Email"}
                    className={`font-medium text-lg rounded-md leading-[22px] ${
                      darkMode
                        ? "text-white placeholder-gray-400"
                        : "text-black placeholder-gray-400"
                    } bg-transparent border-2 border-[#CC6666] transition-all duration-300 p-3 mb-4 w-full outline-none focus:border-[#CC4949]`}
                  />
                  <textarea
                    name="text"
                    placeholder={local === "ar" ? "الرسالة" : "Message"}
                    className={`font-medium text-lg rounded-md bg-transparent border-2 border-[#CC6666] transition-all duration-300 p-3 mb-4 w-full outline-none focus:border-[#CC4949] h-[150px] resize-y ${
                      darkMode
                        ? "text-white placeholder-gray-400"
                        : "text-black placeholder-gray-400"
                    }`}
                  ></textarea>
                  <input
                    type="submit"
                    value={local === "ar" ? "إرسال" : "SUBMIT"}
                    className={`font-medium text-lg cursor-pointer rounded-md leading-[22px] ${
                      darkMode ? "text-black" : "text-white"
                    } bg-transparent border-2 border-[#CC6666] transition-all duration-300 p-3 mb-4 w-full outline-none focus:border-[#CC4949]`}
                  />
                </form>
              </Dialog>
            </li>

            <li className="relative group p-4 cursor-pointer">
              <a
                href=""
                className={`text-3xl group-hover:text-[#b33939] transition-colors duration-200 ${
                  darkMode ? "text-[#1a1a1a]" : "text-white"
                }`}
              >
                {t("Skills")}
              </a>
              <span
                className={`absolute bottom-0 ${
                  local === "ar" ? "right-0 origin-right" : "left-0 origin-left"
                } w-0 h-0.5 bg-[#b33939] transition-all duration-500 group-hover:w-full`}
              ></span>
            </li>

            <li className="relative group p-4 cursor-pointer">
              <a
                href=""
                className={` text-3xl group-hover:text-[#b33939] transition-colors duration-200 ${
                  darkMode ? "text-[#1a1a1a]" : "text-white"
                }`}
              >
                {t("Projects")}
              </a>
              <span
                className={`absolute bottom-0 ${
                  local === "ar" ? "right-0 origin-right" : "left-0 origin-left"
                } w-0 h-0.5 bg-[#b33939] transition-all duration-500 group-hover:w-full`}
              ></span>
            </li>

            <li className="relative group p-4 cursor-pointer">
              <a
                href=""
                className={` text-3xl group-hover:text-[#b33939] transition-colors duration-200 ${
                  darkMode ? "text-[#1a1a1a]" : "text-white"
                }`}
              >
                {t("Me")}
              </a>
              <span
                className={`absolute bottom-0 ${
                  local === "ar" ? "right-0 origin-right" : "left-0 origin-left"
                } w-0 h-0.5 bg-[#b33939] transition-all duration-500 group-hover:w-full`}
              ></span>
            </li>
          </ul>
        </nav>

        <div className="relative group p-4 cursor-pointer">
          <h1
            className={`text-5xl relative transition-colors duration-200 text-right mr-8 group-hover:text-[#b33939] ${
              darkMode ? "text-[#1a1a1a]" : "text-white"
            }`}
          >
            {t("Abdullah")}
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
