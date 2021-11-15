const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "ui-sans-serif"],
      },
      colors: {
        "navbar-active": "#181c2c",
        gray: colors.coolGray,
      },
      boxShadow: {
        "2xl": "0 12px 12px -12px rgba(255, 255, 255, 0.25)",
        "project": "0 3px 5px 2px rgba(80, 78, 78, 0.5)"
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [require("tailwindcss-container-sizes")()],
};
