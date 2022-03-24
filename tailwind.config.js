// eslint-disable-next-line no-undef
module.exports = {
  purge: {
    content: ['./src/**/*.js', './src/**/*.tsx', './components/**/*.tsx'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '7xl': '7.5rem',
      },
      colors: {
        lightGreen: '#6BFB95',
        secondaryLightGreen: '#73FF9B',
        primaryLightGreen: '#6BFB954d',
        caribbeanGreen: '#00D091',
        caribbean03Green: '#00D0914d',
        mediumSpringGreen: '#00EEA7',
        mediumSpring02Green: '#08F3AD',
        jungleGreen: '#27A37E',
        emerald: '#4CE46E',
        easternBlue: '#068D9D',
        cornflowerBlue: '#588EF7',
        turquoiseBlue: '#43DDFF',
        dodgerBlue: '#108CFF',
        babyBlue: '#6FF6FF',
        summerSky: '#36C5F0',
        aqua: '#00F0FF',
        mintTulip: '#C4F8DE',
        aquamarine: '#87F1D1',
        white: '#ffffff',
        black: '#000000',
        tuna: '#454851',
        titleBlack: '#212121',
        primaryBlack: '#121212',
      },
      spacing: {
        82: '21.563rem',
        100: '30rem',
        116: '34rem',
      },
      lineHeight: {
        7.5: '30px',
      },
      margin: {
        128: '-512px',
        47: '183px',
      },
      keyframes: {
        heroBanneAnimation: {
          '0%': { margin: '50px' },
          '100%': { margin: '0px' },
        },
      },
      animation: {
        heroBanneAnimation: 'heroBanneAnimation 2s',
      },
    },
    minHeight: {
      460: '460px',
      500: '500px',
      550: '550px',
      650: '650px',
    },
    maxHeight: {
      400: '400px',
      430: '430px',
      460: '460px',
      480: '480px',
      500: '500px',
      650: '650px',
    },
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
      '1/2': '50%',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
      10: '10px',
    },
  },
  variants: {
    extend: {
      borderWidth: ['first', 'last', 'odd', 'even', 'hover', 'focus'],
      display: ['group-hover'],
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [],
};
