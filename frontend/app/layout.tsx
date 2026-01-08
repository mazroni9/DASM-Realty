import './globals.css';
import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import { clsx } from 'clsx';

const cairo = Cairo({
	subsets: ['arabic'],
	weight: ['400', '600', '700', '800'],
	variable: '--font-cairo',
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
				{children}
			</body>
		</html>
	);
}


