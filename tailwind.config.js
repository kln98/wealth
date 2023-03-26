/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "main-gradient":
          "linear-gradient(180deg, rgba(239, 194, 152, 0.95) 0%, rgba(239, 194, 152, 0.95) 0.01%, rgba(232, 202, 44, 0) 81.42%, rgba(254, 127, 87, 0) 89.01%), url('/noise.png')",
      },
    },
  },
  plugins: [],
};
