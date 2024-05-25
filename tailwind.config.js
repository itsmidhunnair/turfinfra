/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#303b72",
        secondary: "#e28327",
      },
      keyframes: {
        header: {
          "0%": { transform: "translate(-50%, -100%)" },
          "100%": { transform: "translate(-50%, -50%)" },
        },
      },
      backgroundImage: {
        "hero-image": "url('/src/assets/images/hero-image.jpg')",
      },
      animation: {
        header: "header 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
