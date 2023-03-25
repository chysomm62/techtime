/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // content: ["apps/site/pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      translate: {
        screen: "-100vh",
      },
      screens: {
        phone: "500px",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        clash_display: ["Clash Display", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        book: "400",
        medium: "500",
        bold: "700",
        xtrabold: "800",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "rgba(255, 255, 255, 1)",
        blue: {
          1: "rgba(0, 77, 179, 1)", //hero background
          2: "rgba(204, 219, 240, 1)", //company section background
          3: "rgba(0, 15, 36, 1)", //footer background
        },
        black: {
          1: "rgba(0, 0, 0, 1)", //black header texts
        },
        gray: {
          1: "rgba(231, 231, 231, 1)", //white sub texts
          2: "rgba(161, 161, 161, 1)", //black sub texts
          3: "rgba(42, 42, 43, 1)", //social icons
          4: "rgba(170, 196, 230, 1)", //nav links
          5: "rgba(66, 65, 65, 1)", //placeholder
          6: "rgba(217, 217, 217, 1)", //add/minus
        },
      },
      boxShadow: {
        default: "0px 64px 64px -48px rgba(15, 15, 15, 0.1)",
        1: "0px 0px 20px 5px rgba(0, 19, 119, 0.05)",
        2: "0px 30px 40px rgba(7, 109, 243, 0.05)",
        3: "2px 2px 3px rgba(144, 126, 126, 0.11)",
      },
    },
  },
  plugins: [],
};
