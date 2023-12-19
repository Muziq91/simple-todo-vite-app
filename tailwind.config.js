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
          ...require('daisyui/src/theming/themes')['dracula'],
          primary: '#ffa7a7',
          secondary: '#ffcbcb',
          accent: '#c9fdff',
          neutral: '#dffeff',
          'base-content': 'black',
        },
      },
    ],
  },
};
