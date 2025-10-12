// import React, { useMemo } from "react";
// import { motion } from "framer-motion";

// export default function Stars() {
//   // نولد النجوم مرة وحدة فقط باستخدام useMemo
//   const stars = useMemo(() => {
//     return Array.from({ length: 200 }, (_, i) => ({
//       id: i,
//       top: `${Math.random() * 100}%`,
//       left: `${Math.random() * 100}%`,
//       delay: Math.random() * 3,
//     }));
//   }, []);

//   return (
//     <div className="stars">
//       {stars.map((star) => (
//         <motion.div
//           key={star.id}
//           className="star"
//           style={{ top: star.top, left: star.left }}
//           animate={{
//             opacity: [0, 1, 0],
//             scale: [1, 1.5, 1],
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             delay: star.delay,
//           }}
//         />
//       ))}
//     </div>
//   );
// }

import React, { useEffect } from "react";

import { useDarkModeContext } from "../Contexts/DarkModeContext";

export default function Stars(props) {
  const { darkMode, toggleDarkMode } = useDarkModeContext();

  const {
    speedFactor = 0.05,
    backgroundColor = "black",
    starColor = darkMode ? [255, 255, 255] : [0, 0, 0],
    starCount = 3000,
  } = props;

  useEffect(() => {
    const canvas = document.getElementById("starfield");
    if (!canvas) return;
    const c = canvas.getContext("2d");
    if (!c) return;

    let w = window.innerWidth;
    let h = window.innerHeight;

    const setCanvasExtents = () => {
      canvas.width = w;
      canvas.height = h;
    };

    setCanvasExtents();

    window.addEventListener("resize", () => {
      w = window.innerWidth;
      h = window.innerHeight;
      setCanvasExtents();
    });

    const makeStars = (count) => {
      const out = [];
      for (let i = 0; i < count; i++) {
        const s = {
          x: Math.random() * 1600 - 800,
          y: Math.random() * 900 - 450,
          z: Math.random() * 1000,
        };
        out.push(s);
      }
      return out;
    };

    let stars = makeStars(starCount);

    const clear = () => {
      c.clearRect(0, 0, canvas.width, canvas.height);
    };

    const putPixel = (x, y, brightness) => {
      const rgb =
        "rgba(" +
        starColor[0] +
        "," +
        starColor[1] +
        "," +
        starColor[2] +
        "," +
        brightness +
        ")";
      c.fillStyle = rgb;
      c.fillRect(x, y, 1, 1);
    };

    const moveStars = (distance) => {
      const count = stars.length;
      for (let i = 0; i < count; i++) {
        const s = stars[i];
        s.z -= distance;
        while (s.z <= 1) {
          s.z += 1000;
        }
      }
    };

    let prevTime;
    const init = (time) => {
      prevTime = time;
      requestAnimationFrame(tick);
    };

    const tick = (time) => {
      const elapsed = time - prevTime;
      prevTime = time;

      moveStars(elapsed * speedFactor);

      clear();

      const cx = w / 2;
      const cy = h / 2;

      const count = stars.length;
      for (let i = 0; i < count; i++) {
        const star = stars[i];

        const x = cx + star.x / (star.z * 0.001);
        const y = cy + star.y / (star.z * 0.001);

        if (x < 0 || x >= w || y < 0 || y >= h) {
          continue;
        }

        const d = star.z / 1000.0;
        const b = 1 - d * d;

        putPixel(x, y, b);
      }

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(init);

    return () => {
      window.removeEventListener("resize", setCanvasExtents);
    };
  }, [speedFactor, backgroundColor, starColor, starCount]);

  return (
    <canvas
      id="starfield"
      style={{
        padding: 0,
        margin: 0,
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 10,
        opacity: 1,
        pointerEvents: "none",
        mixBlendMode: darkMode ? "screen" : "normal", // 👈 التغيير الذكي هنا
      }}
    />
  );
}
