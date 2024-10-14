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
          '25%': { background: 'linear-gradient(to top , #121212 25%, #1E3A8A 75%)' }, // darkBlue
          '0%, 50%': { background: 'linear-gradient(to top , #121212 25%, #474747 75%)' }, // darkGray
          '100%': { background: 'linear-gradient(to top , #121212 25%, #420C0C 75%)' }, // darkRed
        },
      },
      animation: {
        "color-cycle": "gradientShift 320s linear infinite",
      }
    },
  },
  plugins: [],
}
