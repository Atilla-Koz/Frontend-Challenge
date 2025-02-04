// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '7rem': '7rem',
        '5rem': '5rem',
        '5p': '5%',
      },
      colors: {
        customPurple: '#3730a3',
        customPurple1: '#4338ca',
        customGray: '#6b7280',
        title: '#1f2937',
        line: '#bab2e7',
        footer: '#f9f9f9',
        dark: '#252128',
        titleDark: '#AEBCCF',
        darkFont: '#FFFFFF',
        darkSubTitle: '#B7AAFF',
      },
      margin: {
        'left-25': '25%',
        'right-25': '25%',
        'left-33': '33%',
        'left-5': '5%',
        'right-5': '5%',
      },
      width: {
        1039: '1039px',
        236: '236px',
        300: '300px',
      },
      height: {
        64: '64px',
        180: '180px',
      },
    },
  },
  plugins: [],
}
