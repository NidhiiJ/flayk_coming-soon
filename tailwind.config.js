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
      keyframes: {
        animate: {
          '0%': {
            height: '0px',
          },
          '100%': {
            height: '60px',
          },
        },
      },
      animation: {
        animate: 'animate 0.5s linear backwards',
      },
    },
  },
  plugins: [],
};
