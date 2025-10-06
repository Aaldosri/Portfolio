import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

// إنشاء السياق
const DarkModeContext = createContext();

// المزوّد (Provider)
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    // التحقق من الثيم المحفوظ أو النظام
    return (
      localStorage.getItem("theme") === "dark" ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches &&
        !localStorage.getItem("theme"))
    );
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// هوك مخصص لاستخدام السياق بسهولة
export function useDarkMode() {
  return useContext(DarkModeContext);
}
