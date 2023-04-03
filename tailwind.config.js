/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0239E1',
        secondary: '#00D5A1',
        tertiary: '#00C9FF',
        body: '#808080',
        background: '#FFFFFF',
      },
      fontFamily: {
        heading: ['var(--font-italiana)', 'serif'],
        body: ['var(--font-ubuntu)', 'sans-serif'],
      },
    },
    screens: {
      xxs: '360px',
      xs: '480px',
      ss: '650px',
      sm: '768px',
      md: '992px',
      lg: '1140px',
      xl: '1440px',
    },
  },
  plugins: [],
};
