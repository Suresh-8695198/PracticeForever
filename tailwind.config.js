/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Black & Yellow Theme
        primary: {
          yellow: '#FFC107',
          'yellow-light': '#FFD54F',
          'yellow-dark': '#FFA000',
          'yellow-glow': '#FFEB3B',
        },
        dark: {
          bg: '#000000',
          card: '#0A0A0A',
          'card-hover': '#141414',
          border: '#1F1F1F',
          text: '#FFFFFF',
          'text-secondary': '#A0A0A0',
        },
        light: {
          bg: '#F8F9FA',
          card: '#FFFFFF',
          'card-hover': '#F1F3F5',
          border: '#DEE2E6',
          text: '#000000',
          'text-secondary': '#495057',
        },
        accent: {
          success: '#4CAF50',
          error: '#F44336',
          warning: '#FF9800',
          info: '#2196F3',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card-dark': '0 1px 3px rgba(0, 0, 0, 0.3)',
        'card-light': '0 1px 3px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
