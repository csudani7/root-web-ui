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
        tnter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '7xl': '7.5rem',
      },
      colors: {
        gray: {
          100: '#F5F6F7',
          250: '#fbfdff',
          850: '#939393',
        },
        lightGreen: '#6BFB95',
        light03Green: '#6BFB954d',
        caribbeanGreen: '#00D091',
        caribbean03Green: '#00D0914d',
        mediumSpringGreen: '#00EEA7',
        easternBlue: '#068D9D',
        mintTulip: '#C4F8DE',
        aquamarine: '#87F1D1',
        white: '#ffffff',
        black: '#000000',
        tuna: '#454851',
        titleBlack: '#212121',
      },
      spacing: {
        82: '21.563rem',
        116: '34rem',
      },
      boxShadow: {
        // easternBlueShadow: '756px 0px 160px 4px rgba(6,141,157, 0.5)',
      },
      backgroundImage: {
        heroPattern: "url('/png/hero-gradient.png')",
        easternBlueShadow: "url('/png/eastern-blue-shadow.png')",
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
