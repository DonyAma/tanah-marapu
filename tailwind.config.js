/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./data/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        pasir: "#f5efe4",
        indigo2: "#1d2440",
        indigodeep: "#141a30",
        kombu: "#9a3b2e",
        lumut: "#5c6b4a",
        emas: "#e0a93e",
        nila: "#2d3b4f",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        serif2: ["var(--font-serif2)", "serif"],
      },
      keyframes: {
        geser: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        shimmer: { "0%": { backgroundPosition: "-400px 0" }, "100%": { backgroundPosition: "400px 0" } },
      },
      animation: {
        shimmer: "shimmer 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};