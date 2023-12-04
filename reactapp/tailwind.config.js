/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/*.js', 
    './src/html/*.html', 
    './src/pages/*.js',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
