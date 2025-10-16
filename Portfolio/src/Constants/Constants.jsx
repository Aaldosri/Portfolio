import React from "react";
import { Users, Code2, Smartphone } from "lucide-react"; // أيقونات
import { Monitor, Layers } from "lucide-react";
import { Lightbulb, Zap, ShieldCheck, Shield } from "lucide-react";

import {
  codecademy,
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  threeIcon,
  tailwindIcon,
  reduxIcon,
  gitIcon,
  githubIcon,
  gsapIcon,
  shopifyIcon,
  webflowIcon,
  framerIcon,
  figmaIcon,
  jammmingProject,
  teslaProject,
  venomsoulProject,
  memojiHand,
  memojiHello,
  memojiOk,
  htmlCertificate,
  cssCertificate,
  jsCertificate,
  reactCertificate,
  webflowCertificate,
  bootstrapIcon,
} from "../assets";

import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
} from "@fortawesome/free-solid-svg-icons";

import {
  faReact,
  faGithub,
  faYoutube,
  faTiktok,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const introduction = {
  text: [
    "  مطور واجهات أمامية شغوف بالتعلم وتجربة تقنيات جديدة في تطوير الويب. ",

    "اعمل على دمج الإبداع مع الكود، وأسعى دائمًا لتحسين تجربة المستخدم وجعل التطبيقات أكثر تفاعلية.",

    "أركز على بناء مواقع متجاوبة مع مختلف الأجهزة، بتصاميم عصرية وأداء عالي يضيف قيمة حقيقية للمستخدم.",
  ],
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faYoutube,
  faTiktok,
  faLinkedin,
};

const skills = [
  {
    id: "html",
    title: "HTML",
    icon: htmlIcon,
    description:
      "استخدمها لتنظيم هيكل صفحات الويب بطريقة مرتبة وواضحة وتحسين تجربة المستخدم أثناء التصفح",
  },
  {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description:
      "استخدمها لتنسيق الصفحات وجعل التصميم متناسق وجذاب والتحكم في الألوان والمسافات بشكل عملي",
  },
  {
    id: "Javascript",
    title: "Javascript",
    icon: jsIcon,
    description:
      "استخدمها لإضافة تفاعلات ديناميكية وتحسين تجربة المستخدم من خلال التفاعل السلس على الموقع",
  },
  {
    id: "react",
    title: "React",
    icon: reactIcon,
    description:
      "استخدمها لبناء واجهات ديناميكية قابلة لإعادة الاستخدام وربط المكونات بطريقة سلسة لتجربة مستخدم أفضل",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    icon: tailwindIcon,
    description:
      "استخدمها لتصميم واجهات سريعة ومرنة مع ترتيب وتنظيم المحتوى بشكل أنيق يناسب أحجام الشاشات المختلفة",
  },
  {
    id: "bootstrab",
    title: "Bootstrap",
    icon: bootstrapIcon,
    description:
      "استخدمها لبناء واجهات جاهزة بسرعة وتعديل المكونات لتناسب تصميم المشروع واحتياجات المستخدم",
  },
  {
    id: "git",
    title: "Git",
    icon: gitIcon,
    description:
      "استخدمها لإدارة نسخ المشاريع وتتبع التغييرات وحل التعارضات بين الفروع بطريقة مرتبة وفعالة",
  },
  {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description:
      "استخدمها لمشاركة المشاريع والعمل الجماعي ومراجعة التغييرات ورفع النسخ الجديدة بشكل منظم",
  },
  {
    id: "framer",
    title: "Framer",
    icon: framerIcon,
    description:
      "استخدمها لإضافة حركات وتفاعلات جذابة على الواجهات لتعزيز تجربة المستخدم وجعل الموقع أكثر حيوية",
  },
];

const FeatuesData = [
  {
    id: 1,
    name: "تجربة المستخدم",
    description: "أصنع واجهات سلسة وتفاعلية تعزز تجربة المستخدم.",
    color: "bg-gray-700/50",
    icon: <Monitor className="w-8 h-8 text-blue-400" />,
  },
  {
    id: 2,
    name: "تطوير مرن",
    description: "أبني بنية برمجية قابلة للتوسع وسهلة الصيانة.",
    color: "bg-gray-700/50",
    icon: <Layers className="w-8 h-8 text-gray-200" />,
  },
  {
    id: 3,
    name: "تصميم متجاوب",
    description: "أصمم مواقع تعمل بانسيابية على جميع الأجهزة والشاشات.",
    color: "bg-gray-700/50",
    icon: <Smartphone className="w-8 h-8 text-purple-400" />,
  },
  {
    id: 4,
    name: "حل المشكلات",
    description: "أتعامل مع التحديات التقنية بإبداع لإيجاد حلول عملية وفعّالة.",
    color: "bg-gray-700/50",
    icon: <Lightbulb className="w-8 h-8 text-red-400" />,
  },
  {
    id: 5,
    name: "أداء عالي",
    description: "أحرص على أن تكون المواقع سريعة التحميل وخفيفة الاستخدام.",
    color: "bg-gray-700/50",
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
  },
  {
    id: 6,
    name: "أمان عالي",
    description:
      "أطبق أفضل ممارسات الأمان لحماية البيانات وضمان موثوقية التطبيقات.",
    color: "bg-gray-700/50",
    icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="green" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

const N = 1;

const globeData = [...Array(N).keys()].map(() => ({
  lat: 24.774265,
  lng: 46.738586,
  size: 20,
  color: "red",
}));

export { introduction, skills, FeatuesData, globeData, icons, markerSvg };
