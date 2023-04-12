const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  theme: {
    extend: {},
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

