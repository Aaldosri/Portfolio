import React from "react";
import { useState, useEffect } from "react";
import Stars from "../Components/Animations/Stars";
import Particles from "../Components/Animations/Particles";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

import { useDarkModeContext } from "../Components/Contexts/DarkModeContext";

export default function MainPage() {
  const { darkMode, toggleDarkMode } = useDarkModeContext();

  return (
    <>
      <div className="fullscreen-bg">
        <div className="content-center">
          {/* العنوان الرئيسي يدخل من الأسفل */}
          <motion.h1
            className={`text-7xl ${darkMode ? "text-white" : "text-black"}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            عبدالله الدوسري
          </motion.h1>

          <motion.h3
            className={`text-5xl m-10 ${
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
                style={{
                  fontFamily: "TajawalRegular",
                  color: "white",
                  backgroundColor: "rgba(128, 128, 128, 0.2)", // رمادي شفاف جدًا
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
                style={{
                  fontFamily: "TajawalRegular",
                  color: "black",
                  background: "white",
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
