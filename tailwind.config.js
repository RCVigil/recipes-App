/** @type {import('tailwindcss').Config} */
const tailForm = require('@tailwindcss/forms');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailForm,
  ],
};
