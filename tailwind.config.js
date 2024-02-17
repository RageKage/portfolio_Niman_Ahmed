module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        danube: {
          50: "#f3f8fb",
          100: "#e3eff6",
          200: "#cde5f0",
          300: "#abd3e5",
          400: "#82bcd8",
          500: "#65a2cc",
          600: "#5d93c3",
          700: "#4778ae",
          800: "#3e638f",
          900: "#365372",
          950: "#253346",
        },
        copperfield: {
          50: "#fcf6f0",
          100: "#f8eadc",
          200: "#efd2b9",
          300: "#e5b28c",
          400: "#d9895a",
          500: "#d16e3e",
          600: "#c35833",
          700: "#a2452c",
          800: "#82392a",
          900: "#6a3024",
          950: "#391711",
        },
        shark: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#1e1e1e",
        },
        iron: {
          50: "#f7f7f7",
          100: "#ededed",
          200: "#dfdfdf",
          300: "#cccccc",
          400: "#adadad",
          500: "#999999",
          600: "#888888",
          700: "#7b7b7b",
          800: "#676767",
          900: "#545454",
          950: "#363636",
        },
      },
      fontFamily: {
        melodrama: ['"Melodrama"', "serif"],
        zodiak: ['"Zodiak"', "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
