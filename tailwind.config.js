/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "text-white",
    "bg-die-red",
    "bg-die-yellow",
    "bg-die-green",
    "bg-die-blue",
    // Add any other combinations you're using
  ],
  theme: {
    extend: {
      colors: {
        "die-red": "#BC4B51",
        "die-yellow": "#FFBF61",
        "die-green": "#8ABFA3",
        "die-blue": "#00A7E1",
        white: "#F9F6EE",
        black: "#111810",
      },
    },
  },
  plugins: [],
};
