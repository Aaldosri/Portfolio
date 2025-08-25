import React from "react";
import { motion } from "framer-motion";

export default function () {
  const ELEMENTS = [
    { id: 1, emoji: "🌐", top: "10%", left: "5%", dx: 10, dy: 10 },
    { id: 2, emoji: "💻", top: "30%", right: "10%", dx: 15, dy: 5 },
    { id: 3, emoji: "⭐", bottom: "15%", left: "20%", dx: 5, dy: 15 },
    { id: 4, emoji: "⚛️", bottom: "25%", right: "15%", dx: 10, dy: 10 },
  ];

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
          <h1>تحويل أفكارك إلى تجربة رقمية استثنائية</h1>
          <div>
            <button>شاهد مشاريعي</button>
            <button>للتواصل</button>
          </div>
        </div>
      </div>
    </>
  );
}
