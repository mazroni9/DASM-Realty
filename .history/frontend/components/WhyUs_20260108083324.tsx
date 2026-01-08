'use client';

import { Hammer, Presentation, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function WhyUs() {
	const { language, t } = useLanguage();
	
	return (
		<section className="py-14 lg:py-20 bg-light-bg-section dark:bg-dark-bg-section">
			<div className="container container-padding">
				<h2 className="text-2xl sm:text-3xl font-extrabold text-dasm-navy dark:text-dark-text-primary mb-2">
					{t('whyUs')}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
					<div className="rounded-lg bg-dasm-navy text-light-text-inverse p-6 sm:p-8 shadow-card dark:shadow-none">
						<div className="flex items-center gap-3 mb-2">
							<Presentation className="h-6 w-6 text-dasm-green" />
							<h3 className="text-xl font-bold">{t('professionalListings')}</h3>
						</div>
						<p className="mt-3 text-light-text-inverse/80 leading-7">{t('professionalListingsSub')}</p>
					</div>
					<div className="rounded-lg bg-dasm-green text-light-text-inverse p-6 sm:p-8 shadow-card dark:shadow-none">
						<div className="flex items-center gap-3 mb-2">
							<Hammer className="h-6 w-6 text-light-text-inverse" />
							<h3 className="text-xl font-bold text-light-text-inverse">
								{t('auctionPower')}
							</h3>
						</div>
						<p className="mt-3 text-light-text-inverse/80 leading-7">{t('auctionPowerSub')}</p>
					</div>
				</div>
				<div className="mt-6 rounded-lg bg-light-bg-card dark:bg-dark-bg-card border-2 border-dasm-navy/20 dark:border-dasm-navy/30 p-6 text-center">
					<h3 className="text-lg font-bold text-dasm-navy dark:text-dark-text-primary mb-2">
						{t('twoPaths')}
					</h3>
					<p className="text-light-text-secondary dark:text-dark-text-secondary">{t('twoPathsSub')}</p>
				</div>
			</div>
		</section>
	);
}


