import React from "react";
import SectionTitle from "../Components/SectionTitle";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { motion } from "framer-motion";

import Features from "../Components/Features";

export default function About() {
  const introduction = {
    text: [
      "اهلا",

      " عبدالله، مطور واجهات أمامية شغوف بالتعلم وتجربة تقنيات جديدة في تطوير الويب. ",

      "أحب دمج الإبداع مع الكود، وأسعى دائمًا لتحسين تجربة المستخدم وجعل التطبيقات أكثر تفاعلية.",

      "أركز على بناء مواقع متجاوبة مع مختلف الأجهزة، بتصاميم عصرية وأداء عالي يضيف قيمة حقيقية للمستخدم.",
    ],
  };

  return (
    <div dir="rtl">
      <SectionTitle title="نبذة عني" subtitle="مقدمة" />

      <div className="flex justify-around  p-6 noselect max-w-[1400px] mx-auto ">
        <motion.div
          className="w-full md:w-[130%] md:h-full flex items-center mt-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <LazyMotion features={domAnimation} strict>
            <m.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className="text-grayscale-50 text-2xl p-6 text-center text-white flex flex-col gap-6"
            >
              <span className="text-primary-400 ">{introduction.text[0]}</span>
              <span>{introduction.text[1]}</span>
              <span>{introduction.text[2]}</span>
              <span>{introduction.text[3]}</span>
            </m.p>
          </LazyMotion>
        </motion.div>
        <Features />
      </div>
    </div>
  );
}
