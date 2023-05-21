/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
    },
    backgroundImage: {
      wave1: "url('./src/assets/wave_1.svg')",
    },
    extend: {},
  },
  plugins: [],
};
