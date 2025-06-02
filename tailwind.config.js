/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // عدّل حسب مسارات ملفاتك
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "500px" }, // كسر شاشة مخصص لأقل من 500px
      },
    },
  },
  darkMode: "class", // إذا كنت تستخدم الوضع الداكن
  plugins: [],
};
