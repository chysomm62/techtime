/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      translate: {
        screen: "-100vh",
      },
      screens: {
        phone: "500px",
      },
      fontFamily: {
        airbnbcereal: ["AirbnbCereal", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        book: "350",
        medium: "500",
        bold: "700",
        xtrabold: "800",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#FFFFFF",
        danger: "#CD190C",
        blue: {
          1: "#003087",
          2: "#E8F2FF",
          3: "#0B5FC1",
          4: "#5222D0",
          5: "#00B8D9",
          6: "#F3F8FE",
          7: "#3772FF",
          8: "#0B5FC1",
          9: "#23262F",
          10: "#01142D",
          11: "#156ACE",
        },
        green: {
          1: "#01C087",
          2: "#008753",
        },
        black: {
          1: "#1B1B1B",
          2: "#0f000080",
          3: "#2E2C34",
          4: "#000000",
        },
        grey: {
          1: "#C4C4C4",
          2: "#BBBBBB",
          3: "rgba(255, 255, 255, 0.7)",
          4: "rgba(27, 27, 27, 0.5)",
          5: "#8D8D8D",
          6: "#F5F5F5",
          7: "#E8E8E8",
          8: "#E7E8F2",
          9: "#EEEEEE",
          10: "#E0E0E0",
          11: "#84818A",
        },
        orange: {
          1: "#FF8000",
        },
        red: {
          1: "#F0544C",
          2: "#EC615B",
          3: "#F20B07",
          4: "#F20B07",
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
