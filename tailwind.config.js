/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "800px",
    },
    extend: {
      colors: {
        // primary
        brightOrange: "hsl(31, 77%, 52%)",
        darkCyan: "hsl(184, 100%, 22%)",
        veryDarkCyan: "hsl(179, 100%, 13%)",
        //  neutral
        transparentWhite: "hsla(0, 0%, 100%, 0.75)", // paragraphs
        veryLightGray: "hsl(0, 0%, 95%)", //background, headings, buttons
      },
      fontFamily: {
        bigShouldersDisplay: ["Big Shoulders Display", "sans-serif"],
        lexendDeca: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};
