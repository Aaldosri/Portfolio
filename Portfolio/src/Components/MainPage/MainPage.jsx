import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Particle from "./../Particles/ParticlesStar";
export default function MainPage() {
  const ELEMENTS = [
    { id: 1, emoji: "🌐", top: "10%", left: "5%", dx: 10, dy: 10 },
    { id: 2, emoji: "💻", top: "30%", right: "10%", dx: 15, dy: 5 },
    { id: 3, emoji: "⭐", bottom: "15%", left: "20%", dx: 5, dy: 15 },
    { id: 4, emoji: "⚛️", bottom: "25%", right: "15%", dx: 10, dy: 10 },
  ];

  const [stars, setStars] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const id = Date.now() + Math.random();

      setStars((prev) => [...prev, { id, x, y }]);

      setTimeout(() => {
        setStars((prev) => prev.filter((star) => star.id !== id));
      }, 1500);
    };

    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <>
      <div className="fullscreen-bg">
        {ELEMENTS.map((el) => (
          <motion.div
            key={el.id}
            initial={{ x: 0, y: 0 }}
            animate={{ x: [0, el.dx, 0], y: [0, el.dy, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="emoji"
            style={{
              top: el.top,
              bottom: el.bottom,
              left: el.left,
              right: el.right,
            }}
          >
            {el.emoji}
          </motion.div>
        ))}

        <div className="content-center">
          <h1>عبدالله الدوسري</h1>
          <h3>تحويل أفكارك إلى تجربة رقمية استثنائية</h3>
          <div>
            <button>شاهد مشاريعي</button>
            <button>للتواصل</button>
          </div>
        </div>
        <div className="fixed inset-0 bg-black">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              style={{ left: star.x, top: star.y }}
            />
          ))}
        </div>
        <Particle />
      </div>
    </>
  );
}
