/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f7fbff',
          100: '#edf5fb',
          200: '#d6e7f4',
          300: '#b8d3e9',
          400: '#8eb8d8',
          500: '#659cc6',
          600: '#477da7',
          700: '#356386',
          800: '#294f6b',
          900: '#16324f',
          950: '#0b1f33',
        },

        ocean: {
          50: '#eaffff',
          100: '#c9fbfb',
          200: '#9af4f5',
          300: '#5de8eb',
          400: '#23d3dc',
          500: '#08b8c7',
          600: '#0794a5',
          700: '#0b7585',
          800: '#105f6c',
          900: '#134f5a',
        },

        sky: {
          50: '#eefaff',
          100: '#d7f3ff',
          200: '#b9eaff',
          300: '#86dcff',
          400: '#4ac8ff',
          500: '#1cadf2',
          600: '#078bd0',
          700: '#096fab',
          800: '#0d5d8d',
          900: '#124d74',
        },

        mango: {
          50: '#fff9e8',
          100: '#fff0bd',
          200: '#ffe287',
          300: '#ffd04a',
          400: '#ffbd1f',
          500: '#f89f09',
          600: '#db7604',
          700: '#b65207',
          800: '#93400d',
          900: '#78360f',
        },

        coral: {
          50: '#fff1ed',
          100: '#ffe0d7',
          200: '#ffc6b6',
          300: '#ff9f87',
          400: '#ff7554',
          500: '#ff5533',
          600: '#ea3517',
          700: '#c6260f',
          800: '#a32311',
          900: '#872316',
        },

        hibiscus: {
          50: '#fff0f7',
          100: '#ffe3f0',
          200: '#ffc8e1',
          300: '#ff9dca',
          400: '#ff61a7',
          500: '#f73689',
          600: '#df1767',
          700: '#bd0f51',
          800: '#9c1045',
          900: '#82123d',
        },

        palm: {
          50: '#effff4',
          100: '#d9ffe6',
          200: '#b6ffce',
          300: '#7dffaa',
          400: '#3cef7f',
          500: '#15d45f',
          600: '#0bae48',
          700: '#0d883b',
          800: '#106b34',
          900: '#10582d',
        },

        sand: {
          50: '#fffaf0',
          100: '#fff2cf',
          200: '#ffe49f',
          300: '#ffd36a',
          400: '#ffc13a',
          500: '#f7a915',
          600: '#d88408',
          700: '#b3610b',
          800: '#914b10',
          900: '#783f12',
        },

        cream: {
          50: '#fffdf7',
          100: '#fff7df',
          200: '#ffedb2',
          300: '#ffdf7b',
          400: '#ffd14d',
          500: '#ffc229',
          600: '#e9a70f',
          700: '#bf7d0c',
          800: '#995f11',
          900: '#7d4e12',
        },

        turquoise: {
          50: '#eaffff',
          100: '#c9fbfb',
          200: '#9af4f5',
          300: '#5de8eb',
          400: '#23d3dc',
          500: '#08b8c7',
          600: '#0794a5',
          700: '#0b7585',
          800: '#105f6c',
          900: '#134f5a',
        },

        navy: {
          50: '#eef7ff',
          100: '#d8edff',
          200: '#b9ddff',
          300: '#89c8ff',
          400: '#52a7ff',
          500: '#2b84f6',
          600: '#1564d8',
          700: '#144faf',
          800: '#164688',
          900: '#16324f',
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },

      boxShadow: {
        sunny: '0 20px 60px rgba(8, 184, 199, 0.18)',
        card: '0 18px 45px rgba(22, 50, 79, 0.10)',
        lift: '0 26px 70px rgba(22, 50, 79, 0.16)',
        glow: '0 0 0 1px rgba(255, 193, 58, 0.35), 0 24px 70px rgba(8, 184, 199, 0.22)',
      },

      backgroundImage: {
        'island-bright':
          'linear-gradient(135deg, #08b8c7 0%, #1cadf2 48%, #ffc229 100%)',

        'hero-sunrise':
          'radial-gradient(circle at 15% 15%, rgba(255, 193, 58, 0.55), transparent 28%), radial-gradient(circle at 85% 10%, rgba(255, 85, 51, 0.28), transparent 26%), linear-gradient(135deg, #eaffff 0%, #d7f3ff 42%, #fff7df 100%)',

        'ocean-pop':
          'linear-gradient(135deg, #23d3dc 0%, #1cadf2 55%, #5de8eb 100%)',

        'mango-coral':
          'linear-gradient(135deg, #ffc229 0%, #ff7554 100%)',

        'page-bright':
          'radial-gradient(circle at top left, rgba(93, 232, 235, 0.38), transparent 30%), radial-gradient(circle at top right, rgba(255, 193, 58, 0.32), transparent 28%), linear-gradient(180deg, #fffdf7 0%, #eefaff 100%)',
      },

      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },

  plugins: [],
};