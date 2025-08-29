/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7e8491",
        secondary: "#ebd700",
        accent: "#cdbdb1",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)",
        softmd: "0 20px 40px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
