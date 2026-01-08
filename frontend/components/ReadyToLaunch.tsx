'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export function ReadyToLaunch() {
	const { t } = useLanguage();
	
	return (
		<section className="py-14 lg:py-20 bg-light-bg-section dark:bg-dark-bg-section">
			<div className="container container-padding text-center">
				<h2 className="text-2xl sm:text-3xl font-extrabold text-dasm-navy dark:text-dark-text-primary mb-4">
					{t('getStarted')}
				</h2>
				<p className="text-light-text-secondary dark:text-dark-text-secondary text-lg max-w-3xl mx-auto mb-8">
					{t('getStartedDesc')}
				</p>
				<div className="flex flex-wrap justify-center gap-4">
					<Link href="#cta" className="btn btn-primary text-lg px-8 py-4">
						{t('ctaPrimary')}
					</Link>
				</div>
				<div className="mt-8 pt-6 border-t border-light-border-default dark:border-dark-border-default">
					<p className="text-sm text-light-text-muted dark:text-dark-text-muted inline-flex items-center gap-2">
						{t('poweredBy')}
					</p>
				</div>
			</div>
		</section>
	);
}
