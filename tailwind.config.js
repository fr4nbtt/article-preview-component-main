/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./css/**/*.css", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        "very-dark-grayish-blue": "hsl(217, 19%, 35%)",
        "desaturated-dark-blue": "hsl(214, 17%, 51%)",
        "grayish-blue": "hsl(212, 23%, 69%)",
        "light-grayish-blue": "hsl(210, 46%, 95%)",
      },
      fontSize: {
        body: "13px",
      },
      fontWeight: {
        medium: 500,
        bold: 700,
      },
      fontFamily: {
        manrope: ["Manrope", "serif"],
      },
    },
  },
  plugins: [],
};
