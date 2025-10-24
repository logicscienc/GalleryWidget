/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
       fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
       plusJakarta: ['Plus Jakarta Sans'],
    },
    },
  },
  plugins: [],
}


