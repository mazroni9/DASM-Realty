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
	title: 'داسم للعقار — منصة المزادات الرقمية',
	description:
		'منصة داسم للعقار — حيث تلتقي العقارات بالمزادات الرقمية. واجهة عصرية للملاك، الوسطاء، والمستثمرين.'
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


