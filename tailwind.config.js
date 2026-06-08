/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f5f7fa',
          100: '#e9edf3',
          200: '#d5dde8',
          300: '#aebdce',
          400: '#8196ad',
          500: '#60758f',
          600: '#485b73',
          700: '#344357',
          800: '#223044',
          900: '#121c2e',
          950: '#0a1020',
        },

        navy: {
          50: '#f3f7fb',
          100: '#e4edf6',
          200: '#cddfed',
          300: '#a9cadf',
          400: '#7baecb',
          500: '#5794b5',
          600: '#3f7898',
          700: '#335f7a',
          800: '#2c4f65',
          900: '#284455',
          950: '#142838',
        },

        sea: {
          50: '#effbf9',
          100: '#d8f5f1',
          200: '#b8ece7',
          300: '#86ddd6',
          400: '#4fc7bf',
          500: '#2caea8',
          600: '#218c89',
          700: '#1f706f',
          800: '#1f5959',
          900: '#1e4949',
        },

        turquoise: {
          50: '#effbf9',
          100: '#d8f5f1',
          200: '#b8ece7',
          300: '#86ddd6',
          400: '#4fc7bf',
          500: '#2caea8',
          600: '#218c89',
          700: '#1f706f',
          800: '#1f5959',
          900: '#1e4949',
        },

        coral: {
          50: '#fff5f1',
          100: '#ffe6dd',
          200: '#ffcfc0',
          300: '#ffad96',
          400: '#f57f62',
          500: '#e7603f',
          600: '#cd4528',
          700: '#aa3520',
          800: '#8d3020',
          900: '#762d20',
        },

        sand: {
          50: '#fbf7ef',
          100: '#f5ecd9',
          200: '#ead8b8',
          300: '#dec192',
          400: '#d1a56b',
          500: '#c38b4b',
          600: '#ad713c',
          700: '#905735',
          800: '#764733',
          900: '#633c2d',
        },

        palm: {
          50: '#f1f8f1',
          100: '#dbefdc',
          200: '#b9dfbc',
          300: '#8bc892',
          400: '#5cab67',
          500: '#3f914c',
          600: '#2f743a',
          700: '#285d31',
          800: '#234b2a',
          900: '#1f3f25',
        },

        cream: {
          50: '#fbf7ef',
          100: '#f6eddc',
          200: '#ecd8b9',
          300: '#dfbd8f',
          400: '#d19c62',
          500: '#c78346',
          600: '#b86b38',
          700: '#995230',
          800: '#7c432d',
          900: '#663928',
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        display: ['Newsreader', 'Georgia', 'serif'],
      },

      boxShadow: {
        soft: '0 18px 50px rgba(18, 28, 46, 0.08)',
        lift: '0 24px 70px rgba(18, 28, 46, 0.14)',
        glow: '0 0 0 1px rgba(184, 236, 231, 0.55), 0 20px 60px rgba(44, 174, 168, 0.18)',
      },

      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      backgroundImage: {
        'caribbean-gradient':
          'linear-gradient(135deg, #142838 0%, #1f5959 48%, #2caea8 100%)',
        'sunset-gradient':
          'linear-gradient(135deg, #cd4528 0%, #d19c62 52%, #2caea8 100%)',
        'sea-gradient':
          'linear-gradient(180deg, #1f5959 0%, #2caea8 100%)',
        'paper-gradient':
          'radial-gradient(circle at top left, rgba(184, 236, 231, 0.42), transparent 34%), linear-gradient(180deg, #fbf7ef 0%, #ffffff 100%)',
      },
    },
  },

  plugins: [],
};