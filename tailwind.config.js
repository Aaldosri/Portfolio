/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // عدّل حسب مسارات ملفاتك
  ],
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
  darkMode: "class", // إذا كنت تستخدم الوضع الداكن
  plugins: [],
};
