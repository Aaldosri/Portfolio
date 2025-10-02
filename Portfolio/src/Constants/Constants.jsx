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
};

const skills = [
  {
    id: "html",
    title: "HTML",
    icon: htmlIcon,
    description:
      "I am proficient using HTML to structure web pages and create semantic content that is accessible to all users.",
  },
  {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description:
      "I am skilled in using CSS to style web pages and create visually appealing designs that enhance user experience.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: jsIcon,
    description:
      "I am experienced in using JavaScript to add interactivity and functionality to web pages and create dynamic user interfaces.",
  },
  {
    id: "react",
    title: "React",
    icon: reactIcon,
    description:
      "I have a strong understanding of React and its core concepts, and I am able to create reusable components and manage application state using hooks and context.",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    icon: tailwindIcon,
    description:
      "I am familiar with using Tailwind CSS to quickly and efficiently style web pages, and am able to create custom designs by combining pre-defined classes.",
  },
  {
    id: "bootstrab",
    title: "Bootstrap",
    icon: bootstrapIcon,
    description:
      "I am familiar with using Tailwind CSS to quickly and efficiently style web pages, and am able to create custom designs by combining pre-defined classes.",
  },

  {
    id: "git",
    title: "Git",
    icon: gitIcon,
    description:
      "I am proficient in using Git to manage and track changes to my code over time, collaborate with others on a project, and manage conflicts between different changes.",
  },
  {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description:
      "I am skilled in using GitHub to collaborate on projects, share code, and track issues and bugs. With GitHub, I can create and manage repositories, contribute to open-source projects, and showcase my work to potential employers.",
  },

  {
    id: "framer",
    title: "Framer",
    icon: framerIcon,
    description:
      "I have experience using Framer to create interactive interfaces and animations for web and mobile applications.",
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

const N = 1;

const globeData = [...Array(N).keys()].map(() => ({
  lat: 48.0,
  lng: 11.0,
  size: 20,
  color: "red",
}));

export { introduction, skills, globeData, icons, markerSvg };
