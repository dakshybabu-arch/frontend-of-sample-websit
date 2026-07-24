import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        'primary-light': '#1a1a1a',
        surface: '#F8F9FB',
        'surface-secondary': '#F4F5F8',
        'surface-tertiary': '#E9EDF3',
        text: '#111827',
        'text-secondary': '#6B7280',
        'text-tertiary': '#9CA3AF',
        border: '#E5E7EB',
        accent: '#3B82F6',
        purple: '#8B5CF6',
        pink: '#EC4899',
        orange: '#F97316',
        cyan: '#06B6D4',
        'cyan-light': '#67E8F9',
        green: '#10B981',
        'green-light': '#34D399',
        'yellow': '#FBBF24',
        'rose': '#F43F5E',
        'indigo': '#6366F1',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        glass: '0 20px 60px rgba(0, 0, 0, 0.14)',
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top left, rgba(236,72,153,0.15), transparent 28%), radial-gradient(circle at top right, rgba(59,130,246,0.12), transparent 30%), radial-gradient(circle at bottom left, rgba(139,92,246,0.10), transparent 32%), radial-gradient(circle at bottom right, rgba(6,182,212,0.08), transparent 35%)',
        'gradient-rainbow': 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 25%, #3B82F6 50%, #06B6D4 75%, #10B981 100%)',
        'gradient-warm': 'linear-gradient(135deg, #F97316 0%, #FBBF24 50%, #F43F5E 100%)',
        'gradient-cool': 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 50%, #10B981 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
