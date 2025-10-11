import React from "react";

import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import { useEffect } from "react";

export default function DarkMode({ darkMode, toggleDarkMode }) {
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <div className="App">
      <Classic toggled={darkMode} onToggle={toggleDarkMode} />
    </div>
  );
}
