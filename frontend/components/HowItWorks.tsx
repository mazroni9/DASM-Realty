'use client';

import { ClipboardList, FileCheck2, Hammer, BadgeCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const icons = [ClipboardList, FileCheck2, Hammer, BadgeCheck];

export function HowItWorks() {
	const { language, t } = useLanguage();
	
	const steps = [
		{ key: 'step1' as const, icon: icons[0] },
		{ key: 'step2' as const, icon: icons[1] },
		{ key: 'step3' as const, icon: icons[2] },
		{ key: 'step4' as const, icon: icons[3] },
	];
	
	return (
		<section className="py-14 lg:py-20 bg-light-bg-section dark:bg-dark-bg-section">
			<div className="container container-padding">
				<h2 className="text-2xl sm:text-3xl font-extrabold text-dasm-navy dark:text-dark-text-primary">
					{t('howItWorks')}
				</h2>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
					{steps.map((s, i) => {
						const Icon = s.icon;
						const num = i + 1;
						const descKey = `${s.key}Desc` as 'step1Desc' | 'step2Desc' | 'step3Desc' | 'step4Desc';
						return (
							<div
								key={s.key}
								className="relative rounded-lg bg-light-bg-card dark:bg-dark-bg-card p-6 shadow-card dark:shadow-none border border-light-border-subtle dark:border-dark-border-subtle"
							>
								<div className="flex items-center justify-between mb-3">
									<div className="h-9 w-9 rounded-full bg-dasm-green text-light-text-inverse flex items-center justify-center font-bold text-lg">
										{num}
									</div>
									<Icon className="h-6 w-6 text-dasm-navy dark:text-dasm-green" />
								</div>
								<h3 className="font-bold text-dasm-navy dark:text-dark-text-primary">{t(s.key)}</h3>
								<p className="mt-2 text-sm text-light-text-secondary dark:text-dark-text-secondary leading-7">{t(descKey)}</p>
								{/** connector (hidden on last and on small screens) */}
								{i < steps.length - 1 && (
									<div className="hidden md:block absolute left-0 right-[calc(100%+1.5rem)] top-1/2 -translate-y-1/2">
										<div className="step-connector" />
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}


