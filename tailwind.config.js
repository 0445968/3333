/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        ink: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#08111F',
          950: '#030712',
        },

        brand: {
          blue: '#003EC4',
          sky: '#8BD8FF',
          green: '#0B8200',
          yellow: '#FFF419',
          red: '#C10023',
        },

        travel: {
          50: '#EEF8FF',
          100: '#D9F0FF',
          200: '#BCE5FF',
          300: '#8BD8FF',
          400: '#56BFFF',
          500: '#208EF2',
          600: '#0066DB',
          700: '#003EC4',
          800: '#0033A3',
          900: '#00266F',
          950: '#001847',
        },

        skybrand: {
          50: '#F2FAFF',
          100: '#E0F4FF',
          200: '#BCE8FF',
          300: '#8BD8FF',
          400: '#4CC1FF',
          500: '#19A4F2',
          600: '#087FC4',
          700: '#06659E',
          800: '#07557F',
          900: '#0B4668',
        },

        palm: {
          50: '#EFFFEA',
          100: '#D8FFD1',
          200: '#B3FFA7',
          300: '#7CF56B',
          400: '#3CDC2A',
          500: '#16B307',
          600: '#0B8200',
          700: '#096B00',
          800: '#085400',
          900: '#063D00',
        },

        sun: {
          50: '#FFFFE7',
          100: '#FFFDCA',
          200: '#FFF98D',
          300: '#FFF419',
          400: '#EBD900',
          500: '#C9B800',
          600: '#9F8F00',
          700: '#786B00',
          800: '#5E5400',
          900: '#3D3600',
        },

        coral: {
          50: '#FFF1F3',
          100: '#FFE0E5',
          200: '#FFC7D0',
          300: '#FF9AAD',
          400: '#FF5F7B',
          500: '#F5264D',
          600: '#C10023',
          700: '#A3001D',
          800: '#800017',
          900: '#590010',
        },

        surface: {
          page: '#F5FAFF',
          card: '#FFFFFF',
          raised: '#FFFFFF',
          subtle: '#EEF8FF',
          border: '#CFE4F3',
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },

      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },

      boxShadow: {
        card: '0 1px 4px 0 rgba(11,18,32,0.07), 0 2px 12px 0 rgba(11,18,32,0.05)',
        'card-md': '0 4px 16px 0 rgba(11,18,32,0.10), 0 1px 4px 0 rgba(11,18,32,0.06)',
        panel: '0 8px 32px 0 rgba(11,18,32,0.12)',
      },

      backgroundImage: {
        'page-modern':
          'linear-gradient(180deg, #F5FAFF 0%, #FFFFFF 45%, #EEF8FF 100%)',

        'hero-modern':
          'radial-gradient(circle at 16% 18%, rgba(139,216,255,0.62), transparent 30%), radial-gradient(circle at 86% 14%, rgba(255,244,25,0.26), transparent 26%), linear-gradient(180deg, #FFFFFF 0%, #EEF8FF 100%)',

        'blue-panel':
          'linear-gradient(135deg, #001847 0%, #003EC4 58%, #06659E 100%)',

        'sky-panel':
          'linear-gradient(135deg, #8BD8FF 0%, #E0F4FF 100%)',

        'green-panel':
          'linear-gradient(135deg, #063D00 0%, #0B8200 100%)',

        'sun-panel':
          'linear-gradient(135deg, #FFF419 0%, #FFFDCA 100%)',

        'breaking-panel':
          'linear-gradient(135deg, #C10023 0%, #800017 100%)',
      },
    },
  },

  plugins: [],
};