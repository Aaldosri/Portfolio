import React from "react";
import { Users, Code2, Smartphone } from "lucide-react"; // أيقونات
import { Monitor, Layers } from "lucide-react";
import { Lightbulb, Zap, ShieldCheck, Shield } from "lucide-react";
import { LazyMotion, domAnimation, m } from "framer-motion";

import { FeatuesData } from "../Constants/Constants";

import { useDarkModeContext } from "../Components/Contexts/DarkModeContext";

export default function Fatures() {
  const { darkMode } = useDarkModeContext();

  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-around gap-6 p-6">
      <LazyMotion features={domAnimation}>
        {FeatuesData.map((feature, index) => (
          <m.div
            key={feature.id}
            className={` w-full border-[2px] border-gray-500 md:w-80 p-6 rounded-2xl shadow-md text-white backdrop-blur-sm transform hover:scale-105 transition-all ${feature.color}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1 + index * 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              {feature.icon}
              <h2
                className={`text-xl font-semibold ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                {feature.name}
              </h2>
            </div>
            <p
              className={`"text-sm leading-relaxed" ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {feature.description}
            </p>
          </m.div>
        ))}
      </LazyMotion>
    </div>
  );
}
