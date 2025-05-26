import React, { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    if (language === "ar") {
      setDirection("rtl");
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
    } else {
      setDirection("ltr");
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, direction }}>
      {children}
    </LanguageContext.Provider>
  );
}
