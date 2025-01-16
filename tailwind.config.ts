import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00AAFF',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    function ({
      addComponents,
    }: {
      addComponents: (components: Record<string, unknown>) => void;
    }) {
      addComponents({
        '.border-gradient': {
          'border': '1px solid transparent',
          'background-image':
            'linear-gradient(#fff, #fff), linear-gradient(to bottom, rgba(0, 170, 255, 0.4), rgba(227, 146, 220, 0.4))',
          'background-origin': 'border-box',
          'background-clip': 'content-box, border-box',
        },
        '.border-gradient-project': {
          'border': '1.5px solid transparent',
          'background-image':
            'linear-gradient(#F8F7F7, #F8F7F7), linear-gradient(to bottom, rgba(0, 170, 255, 0.5), rgba(227, 146, 220, 0.5));',
          'background-origin': 'border-box',
          'background-clip': 'content-box, border-box',
        },
        '.border-gradient-project-active': {
          'border': '3px solid transparent',
          'background-image':
            'radial-gradient(circle at 0% 80%, rgba(0, 170, 255, 0.5), transparent 100%), linear-gradient(#00AAFF, #A29EEE 50%)',
          'background-origin': 'border-box',
          'background-clip': 'content-box, border-box',
        },
        '.border-gradient-step-active': {
          'border': '1px solid transparent',
          'background-image':
            'linear-gradient(#fff, #fff), linear-gradient(to bottom, rgba(0, 170, 255, 0.6), rgba(227, 146, 220, 0.6))',
          'background-origin': 'border-box',
          'background-clip': 'content-box, border-box',
        },
      });
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('tailwindcss-animate'),
  ],
} satisfies Config;
