const daisyUI = require("daisyui");
const daisyUIThemes = require("daisyui/src/colors/themes");
const tailwindCSSTypography = require("@tailwindcss/typography");

module.exports = {
  content: ["src/**/*.{html,jsx}"],
  daisyui: {
    themes: [
      {
        company: {
          ...daisyUIThemes["[data-theme=light]"],
          primary: "#00ADEF",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        blue: "#00ADEF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [tailwindCSSTypography, daisyUI],
};
