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
import Footer from "./Footer";

// Context

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [local, setLocal] = useState("ar");

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
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          local={local}
          setLocal={setLocal}
        />
      </div>
      {/* <div className="mx-4 "> */}
      <Introduce darkMode={darkMode} local={local} />

      {/* <Me darkMode={darkMode} /> */}
      {/* </div> */}

      <div>
        <Projects darkMode={darkMode} local={local} />
      </div>

      <div>
        <Skills />
      </div>

      <Footer />
    </>
  );
}

export default App;
