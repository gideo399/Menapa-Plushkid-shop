/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blush: { 50: '#FFF1F4', 100: '#FDE2E9', 200: '#F9C9D6', 300: '#F4A8BC' },
        rose: { DEFAULT: '#D6336C', dark: '#B02455' },
        ivory: '#FFFAF6',
        lavender: '#EEE6F8',
        peach: '#FFE5D6',
        teal: { brand: '#1BA8A4' },
        ink: '#3B2A2F',
      },
      fontFamily: {
        display: ['Fredoka', 'ui-rounded', 'system-ui', 'sans-serif'],
        body: ['Nunito', 'system-ui', 'sans-serif'],
      },
      boxShadow: { soft: '0 10px 30px -12px rgba(214,51,108,.35)' },
    },
  },
  plugins: [],
};
