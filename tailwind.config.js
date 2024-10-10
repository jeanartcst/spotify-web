/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'background': '#121212',
        'darkBlue': '#201258',
        'confirmGreenColor':'#1ed760'

      }
      ,
      keyframes: {
        gradientShift: {
          '0%, 100%': { background: 'linear-gradient(to top , #121212 25%, #1E3A8A 75%)' }, // darkBlue
          '33.33%': { background: 'linear-gradient(to top , #121212 25%, #474747 75%)' }, // darkGray
          '73.33%': { background: 'linear-gradient(to top , #121212 25%, #448B44 75%)' }, // Green
        },
      },
      animation: {
        "color-cycle": "gradientShift 18s linear infinite",
      }
    },
  },
  plugins: [],
}
