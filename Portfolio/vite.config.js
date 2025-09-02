import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // يشمل كل الملفات داخل src مهما كان عمقها
  ],

  plugins: [tailwindcss()],
});
