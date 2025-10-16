import React from "react";

// External Libraries
import { motion } from "framer-motion";

// Icons
import { ChevronsLeftRight } from "lucide-react";
import { Globe } from "lucide-react";
import { Star } from "lucide-react";
import { Rocket } from "lucide-react";
import { Zap } from "lucide-react";
import { MoonStar } from "lucide-react";

export default function Particles() {
  const ELEMENTS = [
    {
      id: 1,
      emoji: (
        <ChevronsLeftRight size={60} color="gray" style={{ opacity: 0.2 }} />
      ),
      top: "40%",
      left: "22%",
      dx: 5,
      dy: 5,
      rotate: [0, 5, -5, 0],
    },
    {
      id: 2,
      emoji: <Globe size={60} color="gray" style={{ opacity: 0.2 }} />,
      top: "30%",
      right: "10%",
      dx: 15,
      dy: 5,
      rotate: [0, 1, -6, 0],
    },
    {
      id: 3,
      emoji: <Star size={60} color="gray" style={{ opacity: 0.2 }} />,
      bottom: "20%",
      left: "20%",
      dx: 5,
      dy: 15,
      rotate: [0, 2, -2, 0],
    },
    {
      id: 4,
      emoji: <Rocket size={60} color="gray" style={{ opacity: 0.2 }} />,
      bottom: "30%",
      right: "15%",
      dx: 10,
      dy: 10,
      rotate: [0, 11, -9, 0],
    },
    {
      id: 5,
      emoji: <Zap size={60} color="gray" style={{ opacity: 0.2 }} />,
      bottom: "75%",
      right: "35%",
      dx: 10,
      dy: 10,
      rotate: [0, 11, -11, 0],
    },
    {
      id: 6,
      emoji: <MoonStar size={60} color="gray" style={{ opacity: 0.2 }} />,
      bottom: "75%",
      right: " 85%",
      dx: 10,
      dy: 10,
      rotate: [0, 11, -11, 0],
    },
  ];

  return (
    <div>
      {ELEMENTS.map((el) => (
        <motion.div
          key={el.id}
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, el.dx, 0],
            y: [0, el.dy, 0],
            rotate: el.rotate,
          }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
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
    </div>
  );
}
