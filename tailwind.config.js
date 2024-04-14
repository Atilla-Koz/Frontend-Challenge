// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customPurple: '#3730a3',
        customGray: '#6b7280',
        title: '#1f2937',
      },
      margin: {
        'left-25': '25%',
        'right-25': '25%',
        'left-33': '33%',
      },
    },
  },
  plugins: [],
};
