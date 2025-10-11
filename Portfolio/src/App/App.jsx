import React from "react";

import "./App.css";
import Header from "../Pages/Header";
import MainPage from "../Pages/MainPage";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import { DarkModeProvider } from "../Components/Contexts/DarkModeContext";

import { useRef } from "react";

export default function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref, offset = 0) => {
    if (ref.current) {
      const top = ref.current.offsetTop + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
  return (
    <DarkModeProvider>
      <Header
        scrollToSection={scrollToSection}
        refs={{ aboutRef, projectsRef, skillsRef, contactRef }}
      />
      <MainPage />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Skills ref={skillsRef} />
      <Contact ref={contactRef} />
    </DarkModeProvider>
  );
}
