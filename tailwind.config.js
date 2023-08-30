/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: 'Roboto, sans-serif',
    },
    colors: {
      light: '#fafaf9',
      lighter: '#fafafa',
      lighter_blue: '#eff6ff',
      light_blue: '#dbeafe',
      grayish: '#B0A8B9',
      myViolet: '#7C3AED',
      myVioletDark: '#1F1926',
      pinkish: '#9D89B3',
      darker: '#00008D',
      promo: '#1e3a8a',
      blue: '#2563eb',
      red: '#991b1b',
      lightRed: '#dc2626',
      dark: '#1c1917',
      green: '#65a30d',
      darkGreen: '#166534',
      stone_300: '#d6d3d1',
      stone_500: '#78716c',
      stone_600: '#57534e',
      stone_700: '#44403c',
      black: '#0c0a09',
    },
  },
  plugins: [],
};
