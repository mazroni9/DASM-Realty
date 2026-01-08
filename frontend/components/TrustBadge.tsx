'use client';

import { Hammer, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function TrustBadge() {
	const { language, t } = useLanguage();
	const isRTL = language === 'ar';
	
	return (
		<section className="py-10 bg-[var(--bg-muted)]">
			<div className="container container-padding">
				<h2 className="text-2xl sm:text-3xl font-extrabold text-dasm-blue mb-8 text-center">
					{t('technology')}
				</h2>
				<div className="rounded-2xl border bg-white p-6 sm:p-8 shadow-card">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
						<div className={isRTL ? 'text-right' : 'text-left'}>
							<div className={`flex items-center gap-3 mb-2 ${isRTL ? 'justify-end' : 'justify-start'}`}>
								<ShieldCheck className="h-6 w-6 text-dasm-green" />
								<h3 className="text-xl font-bold text-dasm-blue">Enterprise‑Grade Architecture</h3>
							</div>
							<p className="mt-3 text-slate-600 leading-7 text-sm">{t('technologyDesc')}</p>
						</div>
						<div className={`${isRTL ? 'text-left border-r md:border-l' : 'text-right border-l md:border-r'} border-slate-200 md:pr-6 md:pl-6`}>
							<div className={`inline-flex items-center gap-2 text-dasm-blue font-semibold mb-4 ${isRTL ? '' : 'ml-auto'}`}>
								<Hammer className="h-5 w-5 text-dasm-green" />
								<span>{t('poweredBy')}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


