/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        violet: "#8A2BE2",
        amethyst: "#9966CC"
      }
    },
  },
  plugins: [],
}