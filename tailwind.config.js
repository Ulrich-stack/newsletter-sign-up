/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#FF5F6D',
        'gradient-end': '#FFC371',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, #FF5F6D, #FFC371)',
      },
    },
  },
  plugins: [],
}