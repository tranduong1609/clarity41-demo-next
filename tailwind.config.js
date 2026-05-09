/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* V41 Blue Scale */
        v41: {
          blue: {
            50:  '#DBEAFE',
            100: '#BFDBFE',
            200: '#93C5FD',
            300: '#60A5FA',
            400: '#3B82F6',
            500: '#1D6FD4',
            600: '#003D9B',
            700: '#00327E',
            800: '#002660',
            900: '#08154E',
          },
          /* V41 Red Scale */
          red: {
            50:  '#FDE8E5',
            100: '#F9C9C2',
            200: '#F4A69B',
            300: '#EF8374',
            400: '#EA604D',
            500: '#D94535',
            600: '#C0392B',
            700: '#9E2E22',
            800: '#7C231A',
            900: '#5A1912',
          },
          /* V41 Gold Scale */
          gold: {
            50:  '#FFF8E1',
            100: '#FFECB3',
            200: '#FFE082',
            300: '#FFD54F',
            400: '#FFC928',
            500: '#F5A623',
            600: '#D4901E',
            700: '#B37A18',
            800: '#926413',
            900: '#714E0E',
          },
        },
        /* Semantic aliases */
        primary: {
          DEFAULT: '#003D9B',
          light: '#3B82F6',
          dark: '#08154E',
        },
        accent: {
          blue: '#1D6FD4',
          orange: '#F5A623',
          red: '#C0392B',
        },
        neutral: {
          body: '#434654',
          bg: '#FBF8FF',
          card: '#F4F2FF',
          section: '#D3D8FF',
        },
        /* Dark mode surface colors */
        dark: {
          bg: '#0B1120',
          surface: '#111827',
          card: '#1A2332',
          border: '#2A3444',
          text: '#E2E8F0',
          muted: '#94A3B8',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        /* V41 Typography Scale */
        'display': ['60px', { lineHeight: '1.25', fontWeight: '700' }],
        'h1': ['48px', { lineHeight: '1.25', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.25', fontWeight: '700' }],
        'h3': ['30px', { lineHeight: '1.25', fontWeight: '700' }],
        'h4': ['24px', { lineHeight: '1.25', fontWeight: '700' }],
        'h5': ['20px', { lineHeight: '1.25', fontWeight: '600' }],
        'h6': ['18px', { lineHeight: '1.5', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      maxWidth: {
        page: '1280px',
      },
      spacing: {
        /* V41 8-point grid */
        'sp-1': '4px',
        'sp-2': '8px',
        'sp-3': '12px',
        'sp-4': '16px',
        'sp-6': '24px',
        'sp-8': '32px',
        'sp-12': '48px',
        'sp-16': '64px',
      },
    },
  },
  plugins: [],
}
