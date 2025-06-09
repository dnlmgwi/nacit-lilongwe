import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [tailwindcssAnimate, typography],
  prefix: '',
  safelist: [
    'lg:col-span-4',
    'lg:col-span-6',
    'lg:col-span-8',
    'lg:col-span-12',
    'border-border',
    'bg-card',
    'border-error',
    'bg-error/30',
    'border-success',
    'bg-success/30',
    'border-warning',
    'bg-warning/30',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        '2xl': '2rem',
        DEFAULT: '1rem',
        lg: '2rem',
        md: '2rem',
        sm: '1rem',
        xl: '2rem',
      },
      screens: {
        '2xl': '86rem',
        lg: '64rem',
        md: '48rem',
        sm: '40rem',
        xl: '80rem',
      },
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        ticker: 'ticker 15s linear infinite',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        'brand-white': '#FFFFFA',
        'brand-lime': '#D2A741',
        'brand-dark-green': '#032367',
        'brand-green': '#67C723',
        'brand-teal': '#269F44',
        'brand-black': '#000000',
        'brand-mimosa': '#F0FCCE',
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        background: 'hsl(var(--background))',
        border: 'hsla(var(--border))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        foreground: 'hsl(var(--foreground))',
        input: 'hsl(var(--input))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        ring: 'hsl(var(--ring))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        success: 'hsl(var(--success))',
        error: 'hsl(var(--error))',
        warning: 'hsl(var(--warning))',
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)'],
        sans: ['Instrument Sans', 'var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      typography: () => ({
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--text)',
              '--tw-prose-headings': 'var(--text)',
              '--tw-prose-bold': '#002C15',
              'h2, h3, h4': {
                marginBottom: '0.15em',
              },

              h1: {
                fontWeight: 'normal',
                marginBottom: '0.25em',
              },
              p: {
                fontSize: '1rem',
                lineHeight: '1.75',
                marginBottom: '0.15em',
              },
              strong: {
                color: '#002C15',
              },
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: '3.815rem',
                lineHeight: '1.2',
              },
              h2: {
                fontSize: '3.052rem',
                fontWeight: 600,
                lineHeight: '1.3',
              },
              h3: {
                fontSize: '2.441rem',
                fontWeight: 600,
                lineHeight: '1.4',
              },
              h4: {
                fontSize: '1.953rem',
                fontWeight: 600,
                lineHeight: '1.5',
              },
              h5: {
                fontSize: '1.563rem',
                fontWeight: 600,
                lineHeight: '1.5',
              },
              h6: {
                fontSize: '1.25rem',
                fontWeight: 600,
                lineHeight: '1.5',
              },
              p: {
                fontSize: '1rem',
              },
              small: {
                fontSize: '0.8rem',
              },
            },
          ],
        },
        md: {
          css: [
            {
              h1: {
                fontSize: '3.815rem',
                lineHeight: '1.1',
              },
              h2: {
                fontSize: '3.052rem',
                lineHeight: '1.2',
              },
              h3: {
                fontSize: '2.441rem',
                lineHeight: '1.3',
              },
              h4: {
                fontSize: '1.953rem',
                lineHeight: '1.4',
              },
              h5: {
                fontSize: '1.563rem',
                lineHeight: '1.5',
              },
              h6: {
                fontSize: '1.25rem',
                lineHeight: '1.5',
              },
              p: {
                fontSize: '1rem',
              },
              small: {
                fontSize: '0.8rem',
              },
            },
          ],
        },
        lg: {
          css: [
            {
              h1: {
                fontSize: '3.815rem',
                lineHeight: '1',
              },
              h2: {
                fontSize: '3.052rem',
                lineHeight: '1.1',
              },
              h3: {
                fontSize: '2.441rem',
                lineHeight: '1.2',
              },
              h4: {
                fontSize: '1.953rem',
                lineHeight: '1.3',
              },
              h5: {
                fontSize: '1.563rem',
                lineHeight: '1.4',
              },
              h6: {
                fontSize: '1.25rem',
                lineHeight: '1.5',
              },
              p: {
                fontSize: '1rem',
                lineHeight: '1.8',
              },
              small: {
                fontSize: '0.8rem',
                lineHeight: '1.5',
              },
            },
          ],
        },
      }),
    },
  },
}
