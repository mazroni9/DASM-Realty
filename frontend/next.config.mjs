/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		optimizeCss: true
	},
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'res.cloudinary.com' }
		]
	}
	// Note: i18n removed - App Router handles RTL via layout.tsx (dir="rtl")
};

export default nextConfig;


