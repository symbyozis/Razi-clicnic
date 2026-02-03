/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/entities/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(33, 205, 170, 1)',
        secondary: '#585858',
        heading: '#09657b',
      },
      fontFamily: {
        main: ['Montserrat', 'sans-serif'],
        heading: ['Raleway', 'sans-serif'],
      },
      borderRadius: {
        'custom': '20px',
      },
    },
  },
  plugins: [],
}
