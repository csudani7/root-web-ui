// eslint-disable-next-line no-undef
module.exports = {
  purge: {
    content: ['./src/**/*.js', './src/**/*.tsx', './components/**/*.tsx'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
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
        white: '#ffffff',
        black: '#000000',
        titleBlack: '#212121',
        error: '#ee251e',
        successful: '#28A745',
        disable: '#D2D8E0',
        darkgray: '#81959E',
        aqua: '#c6e2e9',
        tarawera: '#2C3A47',
        jordyBlue: '#82A5FF',
        royalBlue: '#2A61F9',
        aliceBlue: '#EAF4FE',
        solitudeBlue: '#E4EBFD',
        whiteSmoke: '#f2f2f2',
      },
      spacing: {
        82: '21.563rem',
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
