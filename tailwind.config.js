/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      textAccent: "#E6E7E7",
      text: "#CECFCF",
      primary: "#d59655",
      secondary: "#a45040",
      tertiary: "#83699f",
      background: "#0b1113",
      background_darken: "#23282A",
      border: "#374151",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "6rem",
      },
    },
  },
  plugins: [],
};
