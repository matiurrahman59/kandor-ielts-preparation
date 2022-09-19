/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        lightOrange: '#ee7734',
        darkOrange: ' #ef3616',
        dark: '#18012d',
        dark2: '#140237',
        green: '#18d1ae',
        text: '#6e5f7b',
        pink: '#bd587e',
        lightViolet: '#4d3274',
        violet: '#8236f9',
        darkViolet: '#3d0f65',
        bgText: '#e2d6ec',
        bgtransparent: '#FFFCFC',
        lightbg: '#FBF7FF',
      },
      fontFamily: {
        pacifico: "'Pacifico', cursive",
      },
    },
  },
  plugins: [],
};
