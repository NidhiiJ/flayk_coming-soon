/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat"],
        "Noto-Sans": ['"Noto Sans"'],
        "Comforter-Brush": ['"Comforter Brush"'],
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
