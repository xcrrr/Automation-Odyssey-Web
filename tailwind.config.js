/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        dark: '#020202',
        primary: '#00d4ff',
        secondary: '#6366f1',
        accent: '#ff006e',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 4s linear infinite',
        'scan': 'scan 4s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'spin-slow-rev': 'spin 18s linear infinite reverse',
        'orbit': 'orbit 8s linear infinite',
        'glitch': 'glitch 4s steps(1) infinite',
        'border-flow': 'border-flow 3s linear infinite',
        'scan-v': 'scan-v 5s ease-in-out infinite',
        'typewriter': 'typewriter 2.5s steps(40) forwards',
        'blink': 'blink 0.8s step-end infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'count-up': 'count-up 1s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'hero-enter': 'hero-enter 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'hero-enter-right': 'hero-enter-right 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both',
        'hero-enter-delay': 'hero-enter 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both',
        'hero-enter-delay2': 'hero-enter 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both',
        'reveal-up': 'reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        scan: {
          '0%': { top: '0%', opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { top: '100%', opacity: '0' },
        },
        'pulse-neon': {
          '0%, 100%': { boxShadow: '0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 20px rgba(0,212,255,0.27)' },
          '50%': { boxShadow: '0 0 10px #00d4ff, 0 0 25px #00d4ff, 0 0 60px rgba(0,212,255,0.4)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(70px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(70px) rotate(-360deg)' },
        },
        glitch: {
          '0%,94%,100%': { textShadow: 'none', transform: 'none' },
          '95%': { textShadow: '-2px 0 #ff006e, 2px 0 #00d4ff', transform: 'translate(-1px,0)' },
          '97%': { textShadow: '2px 0 #ff006e, -2px 0 #00d4ff', transform: 'translate(1px,0)' },
          '99%': { textShadow: '-2px 0 #00d4ff', transform: 'translate(-1px,0) skewX(-2deg)' },
        },
        'border-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'scan-v': {
          '0%': { top: '-10%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { top: '110%', opacity: '0' },
        },
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'count-up': {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'slide-in-left': {
          'from': { opacity: '0', transform: 'translateX(-30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          'from': { opacity: '0', transform: 'translateX(30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          'from': { opacity: '0', transform: 'scale(0.9)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        'neon-pulse': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.7', filter: 'brightness(1.3)' },
        },
        'hero-enter': {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'hero-enter-right': {
          'from': { opacity: '0', transform: 'translateY(48px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'reveal-up': {
          'from': { opacity: '0', transform: 'translateY(32px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
