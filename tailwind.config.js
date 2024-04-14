// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customPurple: '#3730a3',
        customPurple1: '#4338ca',
        customGray: '#6b7280',
        title: '#1f2937',
        line: '#bab2e7',
      },
      margin: {
        'left-25': '25%',
        'right-25': '25%',
        'left-33': '33%',
        'left-5': '5%',
      },

      spacing: {
        '5p': '5%',
      },
      width: {
        1039: '1039px',
        236: '236px',
      },
      height: {
        64: '64px',
      },
    },
  },
  plugins: [],
};
