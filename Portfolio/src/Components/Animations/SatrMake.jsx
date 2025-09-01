import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StarMake() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newStar = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setStars((prev) => [...prev, newStar]);

      // حذف النجمة بعد 1.5 ثانية
      setTimeout(() => {
        setStars((prev) => prev.filter((star) => star.id !== newStar.id));
      }, 1500);
    };

    // ربط على document عشان أي مكان تضغط فيه
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none", // عشان ما يمنع التفاعل مع الصفحة
        zIndex: 0,
      }}
    >
      <AnimatePresence>
        {stars.map((star) => (
          <motion.span
            key={star.id}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: star.x,
              top: star.y,
              width: "2px",
              height: "2px",
              background: "white",
              borderRadius: "50%",
              boxShadow: "0 0 8px white",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
