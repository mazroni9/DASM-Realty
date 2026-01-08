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
					DEFAULT: '#0F2B46', // deep navy from design
					light: '#173a5f',
					soft: '#1c426b'
				},
				'dasm-green': {
					DEFAULT: '#1DBA6A', // vibrant green
					dark: '#129158'
				},
				'dasm-gold': '#F2C14E',
				'dasm-ink': '#0b1b2d'
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


