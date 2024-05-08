/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#303b72",
        secondary: "#e28327",
      },
      backgroundImage: {
        "hero-image": "url('/src/assets/images/hero-image.jpg')",
      },
    },
  },
  plugins: [],
};
