// Design tokens - auto-generated from Tailwind config
export const colors = {
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
} as const

export const spacing = {
  '0': '0px',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
  '40': '10rem',
  '48': '12rem',
  '64': '16rem',
  '96': '24rem',
  '144': '9rem', // 144px
  '192': '12rem', // 192px
} as const

export const borderRadius = {
  sm: '4px',
  DEFAULT: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
} as const

export const fontFamily = {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
} as const

export const fontSize = {
  hero: ['clamp(48px, 12vw, 96px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
  h1: ['36px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
  h2: ['28px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
  body: ['18px', { lineHeight: '1.7' }],
  code: ['15px', { lineHeight: '1.6' }],
} as const