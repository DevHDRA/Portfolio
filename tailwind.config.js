/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: '#6a994e',
        lightGreen: '#a7c957',
        beige: '#f2e8cf',
        gray: '#e5e7eb'
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

