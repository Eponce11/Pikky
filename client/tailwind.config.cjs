/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#6D4AFF',
        'secondary-purple': '#4D34B3',
        'primary-white': '#F9F9F9',
        'border-grey': '#DBDBDB',
        'bg-grey': '#EDEDED',
        'text-dark': '#23242a',
        'text-error': 'red'
      }
    },
  },
  plugins: [],
}
