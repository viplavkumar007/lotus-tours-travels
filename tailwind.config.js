/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#eef1fb',
          100: '#cdd5f3',
          200: '#aab8ea',
          300: '#7f96dc',
          400: '#5474cd',
          500: '#2f54be',
          600: '#1B2A7B',
          700: '#162268',
          800: '#0F1C55',
          900: '#0a1340',
          950: '#060c28',
        },
        gold: {
          50:  '#fefbf0',
          100: '#fdf3cc',
          200: '#fbe799',
          300: '#f8d355',
          400: '#f5be22',
          500: '#D4AF37',
          600: '#b8960a',
          700: '#9a7b08',
          800: '#7d6206',
          900: '#604b05',
        },
        ivory: '#FAF8F2',
        champagne: '#E6C768',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #E6C768 50%, #D4AF37 100%)',
        'navy-gradient': 'linear-gradient(135deg, #0F1C55 0%, #1B2A7B 100%)',
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(212, 175, 55, 0.25)',
        'navy': '0 4px 24px rgba(27, 42, 123, 0.2)',
        'card': '0 2px 20px rgba(27, 42, 123, 0.08)',
        'card-hover': '0 12px 40px rgba(27, 42, 123, 0.16)',
      },
      animation: {
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(212, 175, 55, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
