/** @type {import('tailwindcss').Config} */
const sharedColors = {
  hover: '#a22c1a',
  transparent: 'transparent',
  white: 'white'

}
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ...sharedColors
      }
    },
    colors: {
      primary: '#f9bc8d', /* #e46d43, */
      secondary: '#ffffff',
      ...sharedColors
    },
    gridTemplateColumns: {
      link: 'minmax(10px, 40px) auto minmax(10px, 40px)'
    }
  },
  plugins: []
}
