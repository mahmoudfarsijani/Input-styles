/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        thin:400,
        medium:500,
        bold:700
      }
    },
    fontFamily:{
      'roboto':['Roboto','sans-serif']
    }

  },
  plugins: [],
}

