import React from "react";
import { useState, useEffect } from "react";
import Stars from "../Components/Animations/Stars";
import Particles from "../Components/Animations/Particles";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

import { useDarkModeContext } from "../Components/Contexts/DarkModeContext";

export default function MainPage({ scrollToSection, refs }) {
  const { darkMode } = useDarkModeContext();

  return (
    <>
      <div className="fullscreen-bg">
        <div className="content-center">
          {/* العنوان الرئيسي يدخل من الأسفل */}
          <motion.h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${
              darkMode ? "text-white" : "text-black"
            }`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            عبدالله الدوسري
          </motion.h1>

          <motion.h3
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl m-10 text-center ${
              darkMode ? "text-white" : "text-black"
            }`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            تحويل أفكارك إلى تجربة رقمية استثنائية
          </motion.h3>

          <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
            {/* الزر الأيسر يدخل من اليسار */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Button
                onClick={() => scrollToSection(refs.contactRef)}
                style={{
                  fontFamily: "TajawalRegular",
                  color: "white",
                  backgroundColor: darkMode ? "rgba(89, 89, 89, 0.2)" : "gray", // رمادي شفاف جدًا
                }}
                variant="contained"
                size="large"
              >
                للتواصل
              </Button>
            </motion.div>

            {/* الزر الأيمن يدخل من اليمين */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <Button
                onClick={() => scrollToSection(refs.projectsRef, 60)}
                style={{
                  fontFamily: "TajawalRegular",
                  color: darkMode ? "black" : "white",
                  background: darkMode ? "white" : "black",
                }}
                variant="contained"
                size="large"
              >
                شاهد مشاريعي
              </Button>
            </motion.div>
          </div>
        </div>
        <Particles />
      </div>
      {/* Waves */}
      {/* <div class="blob"></div> */}
      {/* <div class="wave"></div> */}
      {/* ==== Waves ==== */}
      {/* COMPONENT IN THE MAIN PAGE */}
      <Stars />
    </>
  );
}
