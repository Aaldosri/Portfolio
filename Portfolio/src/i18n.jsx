import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          welcome: "Welcome",
          language: "Language",
          // أضف باقي الترجمات هنا
        },
      },
      ar: {
        translation: {
          welcome: "مرحباً",
          language: "اللغة",
          // أضف باقي الترجمات هنا
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
