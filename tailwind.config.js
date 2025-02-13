/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: 'Poppins, sans-serif',
      },
      animation:{
        blob: 'blob 12s infinite'
      },
      keyframes:{
        blob:{
          "0%":{
            transform: "translate(0px,0px) scale(1)"
          },
          "33%":{
            transform: "translate(50px,-50px) scale(1.1)"
          },
          "0%":{
            transform: "translate(10px,-10px) scale(0.9)"
          },
          "100%":{
            transform: "translate(0px,0px) scale(1)"
          }
          
        }
      }
    },
  },
  plugins: [],
}