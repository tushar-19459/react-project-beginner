/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monoton: ['Monoton', 'sans-serif'],
        megrim:["Megrim", 'system-ui'],
        oxanium:["Oxanium", 'system-ui'],
      },
    },
  },
  plugins: [],
}