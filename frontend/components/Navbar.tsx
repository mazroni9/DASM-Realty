'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export function Navbar() {
	const { language, setLanguage, t } = useLanguage();
	
	return (
		<header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-100">
			<div className="container container-padding flex items-center justify-between py-3">
				<div className="flex items-center gap-3">
					<Image
						src="/logo-dasm.svg"
						alt="DASM Realty"
						width={36}
						height={36}
						className="h-9 w-9"
						priority
					/>
					<div className="flex flex-col">
						<div className="text-dasm-blue font-extrabold text-lg leading-none">
							{language === 'ar' ? 'DASM' : 'DASM Realty'}
						</div>
						<div className="text-xs text-slate-600 mt-0.5">
							{language === 'ar' ? 'داسم للعقار' : 'DASM Realty'}
						</div>
					</div>
				</div>
				<nav className="flex items-center gap-3">
					<button
						onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
						className="px-3 py-1.5 rounded-md text-sm font-semibold text-dasm-blue hover:bg-slate-100 transition-colors border border-slate-200"
					>
						{language === 'ar' ? 'EN' : 'AR'}
					</button>
					<Link href="#browse" className="btn btn-outline hidden sm:inline-flex">
						{t('ctaSecondary')}
					</Link>
					<Link href="#cta" className="btn btn-primary">
						{t('ctaPrimary')}
					</Link>
				</nav>
			</div>
		</header>
	);
}


