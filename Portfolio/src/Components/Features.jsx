import React from "react";
import { Users, Code2, Smartphone } from "lucide-react"; // أيقونات
import { Monitor, Layers } from "lucide-react";
import { Lightbulb, Zap, ShieldCheck, Shield } from "lucide-react";
import { LazyMotion, domAnimation, m } from "framer-motion";

const FeatuesData = [
  {
    id: 1,
    name: "تجربة المستخدم",
    description: "أصنع واجهات سلسة وتفاعلية تعزز تجربة المستخدم.",
    color: "bg-gray-700/10",
    icon: <Monitor className="w-8 h-8 text-blue-400" />,
  },
  {
    id: 2,
    name: "تطوير مرن",
    description: "أبني بنية برمجية قابلة للتوسع وسهلة الصيانة.",
    color: "bg-gray-700/10",
    icon: <Layers className="w-8 h-8 text-gray-400" />,
  },
  {
    id: 3,
    name: "تصميم متجاوب",
    description: "أصمم مواقع تعمل بانسيابية على جميع الأجهزة والشاشات.",
    color: "bg-gray-700/10",
    icon: <Smartphone className="w-8 h-8 text-purple-400" />,
  },
  {
    id: 4,
    name: "حل المشكلات",
    description: "أتعامل مع التحديات التقنية بإبداع لإيجاد حلول عملية وفعّالة.",
    color: "bg-gray-700/10",
    icon: <Lightbulb className="w-8 h-8 text-red-400" />,
  },
  {
    id: 5,
    name: "أداء عالي",
    description: "أحرص على أن تكون المواقع سريعة التحميل وخفيفة الاستخدام.",
    color: "bg-gray-700/10",
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
  },
  {
    id: 6,
    name: "أمان عالي",
    description:
      "أطبق أفضل ممارسات الأمان لحماية البيانات وضمان موثوقية التطبيقات.",
    color: "bg-gray-700/10",
    icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
  },
];

export default function Fatures() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-around gap-6 p-6">
      <LazyMotion features={domAnimation}>
        {FeatuesData.map((feature, index) => (
          <m.div
            key={feature.id}
            className={`w-80 p-6 rounded-2xl shadow-md text-white backdrop-blur-sm transform hover:scale-105 transition-all ${feature.color}`}
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
              <h2 className="text-xl font-semibold">{feature.name}</h2>
            </div>
            <p className="text-sm leading-relaxed">{feature.description}</p>
          </m.div>
        ))}
      </LazyMotion>
    </div>
  );
}
