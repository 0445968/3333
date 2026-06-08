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
          900: '#0B1220',
          950: '#050A14',
        },

        travel: {
          50: '#EAF5FF',
          100: '#D3EAFE',
          200: '#A8D6FD',
          300: '#72BDF9',
          400: '#399FF2',
          500: '#0F7CD8',
          600: '#005FAE',
          700: '#004B8D',
          800: '#003B73',
          900: '#082F5F',
        },

        sun: {
          50: '#FFF8E1',
          100: '#FFEFB3',
          200: '#FFE180',
          300: '#FFD166',
          400: '#FBBF24',
          500: '#D97706',
          600: '#B45309',
          700: '#92400E',
          800: '#78350F',
          900: '#451A03',
        },

        aqua: {
          50: '#ECFEFF',
          100: '#CFFAFE',
          200: '#A5F3FC',
          300: '#67E8F9',
          400: '#2DD4BF',
          500: '#0891B2',
          600: '#00758F',
          700: '#005A70',
          800: '#004E64',
          900: '#083344',
        },

        emerald: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#059669',
          600: '#047857',
          700: '#065F46',
          800: '#064E3B',
          900: '#022C22',
        },

        coral: {
          50: '#FFF1F2',
          100: '#FFE4E6',
          200: '#FECDD3',
          300: '#FDA4AF',
          400: '#FB7185',
          500: '#E11D48',
          600: '#BE123C',
          700: '#991B1B',
          800: '#7F1D1D',
          900: '#450A0A',
        },

        surface: {
          page: '#F6F8FB',
          card: '#FFFFFF',
          raised: '#FFFFFF',
          subtle: '#EEF4FA',
          border: '#D7E2EE',
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },

      boxShadow: {
        card: '0 10px 30px rgba(11, 18, 32, 0.08)',
        lift: '0 20px 55px rgba(11, 18, 32, 0.14)',
        panel: '0 24px 80px rgba(11, 18, 32, 0.12)',
      },

      backgroundImage: {
        'page-modern':
          'linear-gradient(180deg, #F6F8FB 0%, #FFFFFF 42%, #F6F8FB 100%)',

        'hero-modern':
          'radial-gradient(circle at 16% 18%, rgba(45, 212, 191, 0.18), transparent 30%), radial-gradient(circle at 84% 12%, rgba(255, 209, 102, 0.28), transparent 28%), linear-gradient(180deg, #FFFFFF 0%, #EAF5FF 100%)',

        'blue-panel':
          'linear-gradient(135deg, #003B73 0%, #004B8D 58%, #005A70 100%)',

        'breaking-panel':
          'linear-gradient(135deg, #991B1B 0%, #7F1D1D 100%)',

        'sun-panel':
          'linear-gradient(135deg, #FFD166 0%, #FFE180 100%)',
      },

      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },

  plugins: [],
};