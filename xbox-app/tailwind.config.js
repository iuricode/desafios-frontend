/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}",],
  theme: {
    extend: {
      colors: {
        dark10: '#0c0c0c',
        dark15: '#3c3c3c',
        dark20: '#777777',
        dark30: '#c0c0c0',
        dark40: '#ffffff',
        brand: '#9BF00B',

      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to bottom top, rgba('#7ed56f',0.8), rgba('#28b485',0.8))",
     },
    },
  },
  plugins: [],
}

