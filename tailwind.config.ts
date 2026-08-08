import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['var(--font-instrument-sans)', 'system-ui', 'sans-serif'],
  			display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
  			mono: ['var(--font-space-mono)', 'ui-monospace', 'SF Mono', 'monospace'],
  		},
  		colors: {
  			/* AQ Studios palette — cool ink ramp + electric aqua signature */
  			ink: {
  				'50': '#EEF2F5',
  				'100': '#DDE4E9',
  				'200': '#B7C2CC',
  				'300': '#8493A1',
  				'400': '#566575',
  				'500': '#33414F',
  				'600': '#212B36',
  				'700': '#171E27',
  				'800': '#10151C',
  				'900': '#0A0E13',
  				'950': '#06090D'
  			},
  			paper: '#F5F8F9',
  			aqua: {
  				'100': '#D6FBF5',
  				'300': '#8CF4E7',
  				'400': '#48ECD8',
  				'500': '#00E0C6',
  				'600': '#00B39D',
  				'700': '#008A7A'
  			},
  			indigo: {
  				'100': '#E1E7FF',
  				'500': '#6E8BFF',
  				'600': '#4E6BEB'
  			},
  			coral: {
  				'100': '#FFE3DA',
  				'500': '#FF7A59',
  				'600': '#ED5C39'
  			},
  			violet: {
  				'100': '#EDE4FF',
  				'500': '#A87BFF',
  				'600': '#8A5CF0'
  			},
  			sun: '#FFC24B',

  			/* shadcn/ui bridge */
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			/* `--accent` is the design system's aqua hex, so the shadcn accent
  			   surface reads from `--accent-bg` to avoid the name collision. */
  			accent: {
  				DEFAULT: 'hsl(var(--accent-bg))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			/* Design system radii: medium-generous */
  			xs: 'var(--radius-xs)',
  			sm: 'var(--radius-sm)',
  			md: 'var(--radius-md)',
  			lg: 'var(--radius-lg)',
  			xl: 'var(--radius-xl)',
  			'2xl': 'var(--radius-2xl)',
  			pill: 'var(--radius-pill)'
  		},
  		transitionTimingFunction: {
  			out: 'var(--ease-out)',
  			'in-out': 'var(--ease-in-out)',
  			spring: 'var(--ease-spring)'
  		},
  		boxShadow: {
  			glow: 'var(--glow-aqua)',
  			'glow-soft': 'var(--glow-aqua-soft)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
