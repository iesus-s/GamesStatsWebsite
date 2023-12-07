/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/*.js', 
    './src/html/*.html', 
    './src/pages/*.js',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'claret': '#7B0828',
        'snow': '#FBF5F3',
        'beaver': '#A18276',
        'night': '#0A0F0D',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
