/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['var(--font-sans)'], display: ['var(--font-display)'] },
      colors: {
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        panel: 'rgb(var(--color-panel) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        accentSoft: 'rgb(var(--color-accent-soft) / <alpha-value>)',
      },
      boxShadow: { glow: '0 0 0 1px rgb(var(--color-border) / 0.45), 0 18px 42px rgb(var(--color-shadow) / 0.25)' },
      backgroundImage: { hero: 'radial-gradient(circle at 12% 16%, rgb(var(--color-accent-soft) / 0.5), transparent 45%), radial-gradient(circle at 86% 22%, rgb(var(--color-accent) / 0.2), transparent 42%), linear-gradient(145deg, rgb(var(--color-panel) / 0.9), rgb(var(--color-surface) / 0.98))' },
    },
  },
  plugins: [],
}

