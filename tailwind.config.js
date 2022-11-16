/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  variants: {
    extend: {
      borderRadius: ["hover"],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#5865f2",
        gray: colors.trueGray,
      },
      fontFamily: {
        "press-start": [`"Press Start 2P"`, "cursive"],
      },
    },
  },
  plugins: [],
};
