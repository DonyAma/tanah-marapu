/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./data/**/*.js"],
  theme: {
    extend: {
      colors: {
        pasir: "#f5efe4",
        indigo2: "#1d2440",
        indigodeep: "#141a30",
        kombu: "#9a3b2e",
        lumut: "#5c6b4a",
        emas: "#e0a93e",
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", "sans-serif"],
        body: ["'Plus Jakarta Sans'", "sans-serif"],
        serif2: ["'Source Serif 4'", "serif"],
      },
      keyframes: {
        geser: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
    },
  },
  plugins: [],
};
