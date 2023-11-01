/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        "light-pattern": "url('/src/Img/light.webp')",
        "dark-pattern": "url('/src/Img/dark.webp')",
      },
      fontFamily: {
        Bree: "Bree Serif",
        burtons: "burtons",
      },
      screens: {
        xs: "200px",
        ...defaultTheme.screens,
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
      },
    },
  },
  plugins: [],
};
