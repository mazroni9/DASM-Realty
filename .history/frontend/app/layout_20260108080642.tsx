import './globals.css';
import type { Metadata } from 'next';
import { IBM_Plex_Sans_Arabic, Inter } from 'next/font/google';
import { clsx } from 'clsx';
import { LanguageProvider } from '@/contexts/LanguageContext';

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
	subsets: ['arabic'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-ibm-plex-arabic',
	display: 'swap'
});

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-inter',
	display: 'swap'
});

export const metadata: Metadata = {
	title: 'داسم للعقار | DASM Realty — Where Real Estate Meets Digital Auctions',
	description:
		'منصة عقارية احترافية لعرض وتسويق وبيع وتأجير الأصول العقارية، مع إمكانية التحويل الذكي إلى مزاد رقمي عبر محرك DASM‑e عند الحاجة. A professional real estate platform for listing, marketing, selling, and leasing properties, with smart conversion to digital auctions powered by DASM‑e when needed.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ar" dir="rtl" suppressHydrationWarning>
			<body className={clsx(cairo.variable, 'min-h-dvh bg-white')}>
				<LanguageProvider>
					{children}
				</LanguageProvider>
			</body>
		</html>
	);
}


