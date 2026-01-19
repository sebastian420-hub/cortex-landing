import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0b0d',
        bgSecondary: '#111216',
        text: '#e6edf3',
        textDim: '#8892a6',
        accent: '#3ea8ff',
        accentDim: '#2a78cc',
        accentGlow: 'rgba(62, 168, 255, 0.15)',
        border: '#1a1d24',
        codeBg: '#0f1117',
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(48px, 12vw, 96px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h1: ['36px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        h2: ['28px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        body: ['18px', { lineHeight: '1.7' }],
        code: ['15px', { lineHeight: '1.6' }],
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '12px',
        xl: '16px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
        'type-in': 'typeIn 0.3s ease forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typeIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}

export default config