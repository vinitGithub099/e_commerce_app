/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      extraDarkPurple: "#581c87",
      darkPurple: "#7e22ce",
      purple: "#9333ea",
      lightPurple: "#c084fc",
      dimPurple: "#f3e8ff",
      white: "#FFFFFF",
      black: "#000000",
      error: "#dc2626",
      gray: "#9ca3af",
      lightGray: "#d1d5db",
      dimGray: "#f3f4f6",
    },
    backgroundImage: {
      wave1: "url('./src/assets/wave_1.svg')",
    },
    extend: {},
  },
  plugins: [],
};
