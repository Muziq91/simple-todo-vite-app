/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arima: ['arima', ...defaultTheme.fontFamily.sans],
        cherry: ['cherry', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        customLight: {
          ...require('daisyui/src/theming/themes')['cupcake'],
          primary: '#ffcbcb',
          secondary: '#ffa7a7',
          accent: '#c9fdff',
          neutral: '#dffeff',
          'base-100': '#fff4f4',
        },
      },
      {
        customDark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#2d3641',
          secondary: '#455364',
          accent: '#657a92',
          neutral: '#d8dde4',
        },
      },
    ],
  },
};
