/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		optimizeCss: true
	},
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'res.cloudinary.com' }
		]
	},
	i18n: {
		locales: ['ar'],
		defaultLocale: 'ar',
		localeDetection: false
	}
};

export default nextConfig;


