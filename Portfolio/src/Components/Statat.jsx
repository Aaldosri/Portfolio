import { useEffect, useRef } from "react";
import React from "react";

export default function StarfieldCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // نفترض أن Starfield متوفرة بعد استيراد السكريبت
    if (!window.Starfield) return;

    // إنشاء الكانفس إذا احتاج
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // إعداد Starfield
    window.Starfield.setup({
      canvas: canvas,
      starColor: "rgb(255, 255, 255)",
      hueJitter: 0,
      trailLength: 0.8,
      baseSpeed: 3,
      maxAcceleration: 2,
      accelerationRate: 0.05,
      decelerationRate: 0.05,
      minSpawnRadius: 80,
      maxSpawnRadius: 500,
    });

    // تنظيف عند إزالة المكون
    return () => {
      if (window.Starfield.destroy) window.Starfield.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
