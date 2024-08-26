/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#423F71",
        header: "#292841",
        body: "#1C1B29",
      },
      screens: {
        mobile: {
          max: "768px",
        },
      },
      transitionProperty: {
        margin: "margin",
        opacity: "opacity",
        transform: "transform",
      },
    },
  },
  plugins: ["@tailwindcss/line-clamp", "tailwind-scrollbar"],
};
