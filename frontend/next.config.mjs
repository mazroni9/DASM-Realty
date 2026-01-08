/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'res.cloudinary.com' }
		]
	}
	// Note: optimizeCss removed - causes critters module error
	// Note: i18n removed - App Router handles RTL via layout.tsx (dir="rtl")
};

export default nextConfig;


