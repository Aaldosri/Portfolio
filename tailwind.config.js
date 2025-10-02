/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "500px" }, // شاشات صغيرة جداً
        sm: "640px", // شاشات صغيرة
        md: "768px", // شاشات متوسطة
        lg: "1024px", // شاشات كبيرة
        xl: "1280px", // شاشات أكبر
        "2xl": "1536px", // شاشات فائقة الحجم
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
