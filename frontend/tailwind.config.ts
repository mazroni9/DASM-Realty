import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./app/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./lib/**/*.{ts,tsx}'
	],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				'2xl': '1280px'
			}
		},
		extend: {
			colors: {
				// Primary Colors (DASM Brand)
				'dasm-navy': '#0B3A63',
				'dasm-green': '#1FA971',
				// Legacy support (will map to new colors)
				'dasm-blue': '#0B3A63',
				'dasm-gold': '#F2C14E',
				'dasm-ink': '#0F172A',
				// Light Theme Colors
				'light-bg-main': '#FFFFFF',
				'light-bg-section': '#F7F9FC',
				'light-bg-card': '#FFFFFF',
				'light-text-primary': '#0F172A',
				'light-text-secondary': '#475569',
				'light-text-muted': '#64748B',
				'light-text-inverse': '#FFFFFF',
				'light-border-default': '#E5E7EB',
				'light-border-subtle': '#F1F5F9',
				'light-status-success': '#1FA971',
				'light-status-warning': '#F59E0B',
				'light-status-error': '#DC2626',
				// Dark Theme Colors
				'dark-bg-main': '#0B1220',
				'dark-bg-section': '#111827',
				'dark-bg-card': '#0F172A',
				'dark-text-primary': '#E5E7EB',
				'dark-text-secondary': '#CBD5E1',
				'dark-text-muted': '#9CA3AF',
				'dark-text-inverse': '#0B1220',
				'dark-border-default': '#1F2937',
				'dark-border-subtle': '#273449',
				'dark-status-success': '#22C55E',
				'dark-status-warning': '#FBBF24',
				'dark-status-error': '#EF4444'
			},
			fontFamily: {
				sans: ['var(--font-inter)', 'var(--font-ibm-plex-arabic)', 'sans-serif'],
				arabic: ['var(--font-ibm-plex-arabic)', 'sans-serif'],
				latin: ['var(--font-inter)', 'sans-serif']
			},
			fontSize: {
				xs: '12px',
				sm: '14px',
				base: '16px',
				lg: '18px',
				xl: '24px',
				'2xl': '32px',
				'3xl': '40px'
			},
			fontWeight: {
				regular: '400',
				medium: '500',
				semibold: '600',
				bold: '700'
			},
			lineHeight: {
				tight: '1.2',
				normal: '1.6',
				relaxed: '1.8'
			},
			borderRadius: {
				sm: '6px',
				md: '10px',
				lg: '14px'
			},
			spacing: {
				xs: '4px',
				sm: '8px',
				md: '16px',
				lg: '24px',
				xl: '32px',
				'2xl': '48px'
			},
			boxShadow: {
				card: '0 4px 12px rgba(0,0,0,0.08)',
				'sm-light': '0 1px 2px rgba(0,0,0,0.05)',
				'md-light': '0 4px 12px rgba(0,0,0,0.08)'
			},
			backgroundImage: {
				'hero-radial':
					'radial-gradient(1200px 600px at 80% 20%, rgba(31,169,113,0.08), transparent 60%)'
			},
			transitionDuration: {
				fast: '150ms',
				normal: '250ms'
			}
		}
	},
	plugins: []
};

export default config;
