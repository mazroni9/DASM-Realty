'use client';

import { Hammer, Presentation, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function WhyUs() {
	const { language, t } = useLanguage();
	
	return (
		<section className="py-14 lg:py-20 bg-[var(--bg-muted)]">
			<div className="container container-padding">
				<h2 className="text-2xl sm:text-3xl font-extrabold text-dasm-blue mb-2">
					{t('whyUs')}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
					<div className="rounded-2xl bg-dasm-blue text-white p-6 sm:p-8 shadow-card">
						<div className="flex items-center gap-3 mb-2">
							<Presentation className="h-6 w-6 text-dasm-gold" />
							<h3 className="text-xl font-bold">{t('professionalListings')}</h3>
						</div>
						<p className="mt-3 text-white/80 leading-7">{t('professionalListingsSub')}</p>
					</div>
					<div className="rounded-2xl bg-dasm-green text-white p-6 sm:p-8 shadow-card">
						<div className="flex items-center gap-3 mb-2">
							<Hammer className="h-6 w-6 text-white" />
							<h3 className="text-xl font-bold text-white">
								{t('auctionPower')}
							</h3>
						</div>
						<p className="mt-3 text-white/80 leading-7">{t('auctionPowerSub')}</p>
					</div>
				</div>
				<div className="mt-6 rounded-2xl bg-white border-2 border-dasm-blue/20 p-6 text-center">
					<h3 className="text-lg font-bold text-dasm-blue mb-2">
						{t('twoPaths')}
					</h3>
					<p className="text-slate-700">{t('twoPathsSub')}</p>
				</div>
			</div>
		</section>
	);
}


