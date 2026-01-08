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
				'dasm-blue': {
					DEFAULT: '#1A365D', // dark blue from design
					light: '#2D4A6B',
					soft: '#1c426b'
				},
				'dasm-green': {
					DEFAULT: '#38A169', // vibrant green from design
					dark: '#2F855A'
				},
				'dasm-gold': '#F2C14E',
				'dasm-ink': '#4A5568'
			},
			fontFamily: {
				sans: ['var(--font-cairo)']
			},
			boxShadow: {
				card: '0 10px 30px rgba(15, 43, 70, 0.08)'
			},
			backgroundImage: {
				'hero-radial':
					'radial-gradient(1200px 600px at 80% 20%, rgba(29,186,106,0.08), transparent 60%)'
			}
		}
	},
	plugins: []
};

export default config;


