/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030303",
        primary: "#00F0FF",
        secondary: "#0A0A0B",
        accent: "#25D366",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        display: ["Bebas Neue", "cursive"],
      },
    },
  },
  plugins: [],
}
