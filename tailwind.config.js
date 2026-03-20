/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F6F0D7',
          100: '#F1EAD0',
          200: '#E8DFB2',
          300: '#C5D89D',
          400: '#B8D391',
          500: '#9CAB84',
          600: '#8FA479',
          700: '#89986D',
          800: '#6F7D5A',
          900: '#5A6650',
        },
        resume: {
          50: '#EBF4DD',
          100: '#E8F2D8',
          400: '#90AB8B',
          500: '#7DA38A',
          600: '#5A7863',
          700: '#4D6A5A',
          800: '#3B4953',
          900: '#2E3A40'
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      animation: {
        'typewriter': 'typewriter 3s steps(40) infinite alternate',
        'blink': 'blink 0.75s infinite',
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0ch' },
          '50%': { width: '50ch' },
          '100%': { width: '0ch' },
        },
        blink: {
          '0%, 50%': { borderColor: 'transparent' },
          '100%': { borderColor: 'currentColor' },
        },
      },
    },
  },
  plugins: [],
}
