import React from "react";
import { useState, useEffect } from "react";
import Stars from "../Animations/Stars";
import Particles from "../Animations/Particles";
import Button from "@mui/material/Button";

export default function MainPage() {
  return (
    <>
      <div className="fullscreen-bg">
        <div className="content-center">
          <h1>عبدالله الدوسري</h1>
          <h3>تحويل أفكارك إلى تجربة رقمية استثنائية</h3>
          <div>
            <Button
              style={{ color: "white", marginRight: "15px" }}
              variant="contained"
              size="large"
              color="white"
            >
              للتواصل
            </Button>

            <Button
              style={{ color: "white" }}
              color="white"
              variant="contained"
              size="large"
            >
              شاهد مشاريعي
            </Button>
          </div>
        </div>
      </div>
      {/* COMPONENT IN THE MAIN PAGE */}

      <Stars />

      <Particles />
    </>
  );
}
