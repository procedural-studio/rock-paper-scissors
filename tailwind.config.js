module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkText: 'hsl(229, 25%, 31%)',
        scoreText: 'hsl(229, 64%, 46%)',
        headerOutline: 'hsl(217, 16%, 45%)',
      },
    },
  },
  variants: {
    extend: {
      height: ['disabled'],
      width: ['disabled'],
    },
  },
  plugins: [],
};
