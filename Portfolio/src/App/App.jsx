import React from "react";

import "./App.css";
import Header from "../Pages/Header";
import MainPage from "../Pages/MainPage";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import { DarkModeProvider } from "../Components/Contexts/DarkModeContext";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Header />

        <MainPage />

        <About />

        <Projects />

        <Skills />

        <Contact />
      </DarkModeProvider>
    </>
  );
}

export default App;
