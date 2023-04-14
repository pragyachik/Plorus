const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  // theme: {
  //   extend: {},
  // },
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      backgroundImage: {
        'my_bg_image' : "url('../public/cells-bg.svg')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ]
  // plugins: [
  //   plugin(function({ addUtilities }) {
  //     addUtilities({
  //       '.content-auto': {
  //         'content-visibility': 'auto',
  //       },
  //       '.content-hidden': {
  //         'content-visibility': 'hidden',
  //       },
  //       '.content-visible': {
  //         'content-visibility': 'visible',
  //       },
  //     })
  //   })
  // ]
}

