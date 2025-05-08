import React, { useEffect } from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Introduce from "./Introduce";
import Header from "./Header";
import Me from "./Me";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#ffffff";
    } else {
      document.body.style.backgroundColor = "#1a1a1a";
    }
  });

  return (
    <>
      <div>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      {/* <div className="mx-4 "> */}
      <Introduce />

      {/* <Me darkMode={darkMode} /> */}
      {/* </div> */}

      <div>
        <Projects darkMode={darkMode} />
      </div>

      <div>
        <Skills />
      </div>
    </>
  );
}

export default App;
