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
      " خبرة قوية في إنشاء هياكل صفحات الويب بطريقة منظمة وسهلة القراءة، مع القدرة على ترتيب العناصر بشكل منطقي لتسهيل التصفح وتجربة المستخدم",
  },
  {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description:
      " أجيد تصميم وتنسيق صفحات الويب بشكل متقن، مع خبرة في جعل الواجهات متجاوبة ومرنة باستخدام تقنيات مثل الشبكة وتقنيات الصناديق المرنة، والتحكم بالألوان والخطوط والمسافات لتقديم تصميم متناسق وجذاب",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: jsIcon,
    description:
      "خبرة قوية في بناء وظائف ديناميكية وتفاعلية على صفحات الويب وفهم المفاهيم الأساسية والمتقدمة",
  },
  {
    id: "react",
    title: "React",
    icon: reactIcon,
    description:
      "إجادة تطوير واجهات مستخدم ديناميكية، بما في ذلك إدارة الحالة، المكونات القابلة لإعادة الاستخدام، وربط المكتبات الخارجية.",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    icon: tailwindIcon,
    description:
      "تصميم واجهات مخصصة وسريعة، مع التحكم الكامل بالألوان والمسافات والأحجام دون تكرار الكود، مما يجعل التصميم نظيفًا ومرنًا وقابلًا للتعديل بسهولة",
  },
  {
    id: "bootstrab",
    title: "Bootstrap",
    icon: bootstrapIcon,
    description:
      "أجيد استخدامها لبناء واجهات جاهزة وسريعة، مع القدرة على تعديل المكونات وإعادة ترتيبها بما يناسب تصميم المشروع ومتطلبات المستخدم",
  },

  {
    id: "git",
    title: "Git",
    icon: gitIcon,
    description:
      "التعامل بكفاءة مع إدارة نسخ المشاريع وتتبع التغييرات وحل التعارضات بين الفروع.",
  },
  {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description:
      "أستخدمها لمشاركة المشاريع والعمل الجماعي، وإدارة الفروع والتحديثات بشكل منظم، مع القدرة على مراجعة التغييرات ورفع النسخ الجديدة بسهولة.",
  },

  {
    id: "framer",
    title: "Framer",
    icon: framerIcon,
    description:
      "اضافة حركات وتفاعلات ديناميكية وجذابة للواجهات، مع الاهتمام بسلاسة الأداء وتجربة المستخدم، لإضفاء طابع حديث وتفاعلي على المواقع",
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

export { introduction, skills, globeData, icons, markerSvg };
