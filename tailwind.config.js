/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}", // order also simplified
  ],
  theme: {
    extend: {
       fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    },
  },
  plugins: [],
}


