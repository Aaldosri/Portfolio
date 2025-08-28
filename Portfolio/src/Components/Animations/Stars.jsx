import React, { useMemo } from "react";
import { motion } from "framer-motion";

export default function Stars() {
  // نولد النجوم مرة وحدة فقط باستخدام useMemo
  const stars = useMemo(() => {
    return Array.from({ length: 200 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
    }));
  }, []);

  return (
    <div className="stars">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="star"
          style={{ top: star.top, left: star.left }}
          animate={{
            opacity: [0, 1, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
