import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

// إنشاء السياق
const DarkModeContext = createContext();

// المزوّد (Provider)
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    () =>
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  // حفظ الثيم وتغيير الخلفية على body
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.body.style.backgroundColor = darkMode ? "#000000" : "#e9ecef";
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// هوك للوصول للسياق
export function useDarkModeContext() {
  return useContext(DarkModeContext);
}
