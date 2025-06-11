import React, { useEffect } from "react";
import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Introduce from "./Introduce";
import Header from "./Header";
import Me from "./Me";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";

// Context

function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.style.backgroundColor = darkMode ? "#1a1a1a" : "#ffffff";
  }, [darkMode]);

  const [local, setLocal] = useState(
    () => localStorage.getItem("lang") || "ar"
  );

  useEffect(() => {
    localStorage.setItem("lang", local);
  }, [local]);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const meRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#ffffff";
    } else {
      document.body.style.backgroundColor = "#1a1a1a";
    }
  });

  return (
    <>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        local={local}
        setLocal={setLocal}
        onScrollToSection={(section) => {
          let target = null;
          let yOffset = 0;

          if (section === "skills") target = skillsRef.current;
          if (section === "projects") {
            target = projectsRef.current;
            yOffset = -150; // تعويض بسيط للمشاريع فقط
          }
          if (section === "me") {
            target = projectsRef.current;
            if (window.innerWidth <= 1024) {
              // شاشة صغيرة
              yOffset = -1300; // تعويض أصغر للشاشات الصغيرة (اضبط القيمة حسب تجربتك)
            } else if (window.innerWidth <= 767) {
              yOffset = -1150; // تعويض أصغر للشاشات الصغيرة (اضبط القيمة حسب تجربتك)
            } else {
              yOffset = -780; // تعويض للشاشات الكبيرة
            }
          }

          if (target) {
            const y =
              target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }}
      />

      <div ref={meRef}>
        <Introduce darkMode={darkMode} local={local} />
      </div>

      <div ref={projectsRef}>
        <Projects darkMode={darkMode} local={local} />
      </div>

      <div ref={skillsRef}>
        <Skills />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
