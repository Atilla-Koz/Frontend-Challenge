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
        dark: '#0f0c1a',
        titleDark: '#AEBCCF',
        darkFont: '#FFFFFF',
        darkSubTitle: '#B7AAFF',
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
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
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.6), 0 0 60px rgba(245, 158, 11, 0.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        float: 'float 3s ease-in-out infinite',
        'float-delayed': 'float-delayed 3s ease-in-out 1.5s infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        'purple-amber': 'linear-gradient(135deg, #7c3aed 0%, #f59e0b 100%)',
      },
    },
  },
  plugins: [],
};
