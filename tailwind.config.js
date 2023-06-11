/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
      'yellow':'#ffedce',
      'yellow-dark': '#fce36c',
      'green': '#e9f1de',
      'blue': '#ecebff',
      'red': '#fbe6e8',
      'egg-shell': {
        DEFAULT: '#f8f3ef',
        dark: '#efeae6',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
