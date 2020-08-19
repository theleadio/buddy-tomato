/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend:{
      fontFamily : {
        'poppins' : ['Poppins']
      },
      colors:{
        'focus-yellow': '#ffc952',
        'focus-gray' : '#333333',
      },
      width: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
      }
    }
  },
  variants: {},
  plugins: [
    function({ addUtilities, theme, config }) {

      let newUtilities      = {};
      const boxShadowPrefix = '0 0 0 3px';
      const colors          = theme('colors');
      Object.keys( colors ).forEach(color => {

        const colorData = colors[color];
        if(typeof colorData === 'string') {
          newUtilities[`.outline-${color}`] = {
            boxShadow: `${boxShadowPrefix} ${colorData}`,
          }
        }
        else {
          Object.keys(colorData).forEach(colorVariation => {
            newUtilities[`.outline-${color}-${colorVariation}`] = {
              boxShadow: `${boxShadowPrefix} ${colorData[colorVariation]}`,
            }
          });
        }
      });
      addUtilities(newUtilities, {
        variants: ['focus', 'hover']
    });
    }
  ]
}
