'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export function ReadyToLaunch() {
	const { t } = useLanguage();
	
	return (
		<section className="py-14 lg:py-20 bg-[var(--bg-muted)]">
			<div className="container container-padding text-center">
				<h2 className="text-2xl sm:text-3xl font-extrabold text-dasm-blue mb-4">
					{t('getStarted')}
				</h2>
				<p className="text-slate-700 text-lg max-w-3xl mx-auto mb-8">
					{t('getStartedDesc')}
				</p>
				<div className="flex flex-wrap justify-center gap-4">
					<Link href="#cta" className="btn btn-primary text-lg px-8 py-4">
						{t('ctaPrimary')}
					</Link>
				</div>
				<div className="mt-8 pt-6 border-t border-slate-200">
					<p className="text-sm text-slate-600 inline-flex items-center gap-2">
						{t('poweredBy')}
					</p>
				</div>
			</div>
		</section>
	);
}
