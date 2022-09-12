/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue-facebook' : '#3246b8',
        'gray-instagram' : '#f0f2f5',
        'button-create': '#36a420',
        'blue-instagram': '#2987d9',
      },
      spacing: {
        '580': '580px',
        '380': '380px',
      },
    },
  },
  plugins: [],
}
