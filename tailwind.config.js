/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        workPattern: "url('./assets/patternBG.png')",
      },
      colors: {
        main: "#000000",
        textColor: "#02073E",
        mainColor: "#EA3A60",
        pColor: "#343D48",
      },
      fonts: {
        body: "DM Sans', sans-serif",
        heading: "DM Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
