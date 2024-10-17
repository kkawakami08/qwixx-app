/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "die-red": "#BC4B51",
        "die-yellow": "#FFBF61",
        "die-green": "#8ABFA3",
        "die-blue": "#00A7E1",
      },
    },
  },
  plugins: [],
};
