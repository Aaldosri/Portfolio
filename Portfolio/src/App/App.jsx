import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../Components/Header/Header";
import MainPage from "../Components/MainPage/MainPage";

function App() {
  return (
    <>
      <Header />

      <MainPage />
    </>
  );
}

export default App;
