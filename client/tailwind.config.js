/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         primary: "#6B3F69",   
         secondary: "#DDC3C3", 
         accent: "#A376A2",    
      },
    },
  },
  plugins: [],
}


