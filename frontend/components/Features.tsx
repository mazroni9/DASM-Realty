'use client';

import { Building, Users2, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const officeFeatures = {
	ar: [
		'لوحة تحكم لإدارة العقارات والعملاء',
		'استقبال وإدارة الطلبات (Leads)',
		'باقات اشتراك وتسويق مرنة',
		'إدخال عقارات للمزاد عند الحاجة',
		'تقارير أداء وشفافية في العمولات'
	],
	en: [
		'Dashboard for properties & clients',
		'Lead capture and management',
		'Flexible subscriptions & promotion',
		'Auction enablement',
		'Performance reporting & commission transparency'
	]
};

const buyerFeatures = {
	ar: [
		'تصفح عقارات موثوقة ومراجعة',
		'مقارنة الأسعار والخيارات بسهولة',
		'دخول مزادات رقمية حقيقية',
		'تجربة شراء شفافة بلا تلاعب'
	],
	en: [
		'Verified listings',
		'Easy comparison',
		'Real digital auctions',
		'Transparent purchase journey'
	]
};

export function Features() {
	const { language, t } = useLanguage();
	const [tab, setTab] = useState<'office' | 'buyer'>('office');
	
	const currentFeatures = tab === 'office' ? officeFeatures : buyerFeatures;
	
	return (
		<section id="features" className="py-14 lg:py-20 bg-light-bg-section dark:bg-dark-bg-section">
			<div className="container container-padding">
				<div className="flex flex-wrap items-center justify-between gap-4 mb-8">
					<div className="flex items-center gap-3">
						<Building className="h-6 w-6 text-dasm-navy dark:text-dasm-green" />
						<h2 className="text-2xl sm:text-3xl font-extrabold text-dasm-navy dark:text-dark-text-primary">
							{tab === 'office' ? t('forOffices') : t('forBuyers')}
						</h2>
					</div>
					<div className="inline-flex rounded-lg border border-light-border-default dark:border-dark-border-default p-1 bg-light-bg-card dark:bg-dark-bg-card">
						<button
							onClick={() => setTab('office')}
							className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
								tab === 'office'
									? 'bg-dasm-navy text-light-text-inverse'
									: 'text-dasm-navy dark:text-dark-text-primary hover:bg-light-bg-section dark:hover:bg-dark-bg-section'
							}`}
						>
							{t('officeTab')}
						</button>
						<button
							onClick={() => setTab('buyer')}
							className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
								tab === 'buyer'
									? 'bg-dasm-navy text-light-text-inverse'
									: 'text-dasm-navy dark:text-dark-text-primary hover:bg-light-bg-section dark:hover:bg-dark-bg-section'
							}`}
						>
							{t('buyerTab')}
						</button>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className={`rounded-lg p-6 transition-all border border-light-border-subtle dark:border-dark-border-subtle ${
						tab === 'office' ? 'bg-light-bg-card dark:bg-dark-bg-card shadow-card dark:shadow-none' : 'bg-light-bg-section dark:bg-dark-bg-section'
					}`}>
						<div className="flex items-center gap-3">
							{tab === 'office' ? (
								<Building className="h-6 w-6 text-dasm-navy dark:text-dasm-green" />
							) : (
								<Users2 className="h-6 w-6 text-dasm-navy dark:text-dasm-green" />
							)}
							<h3 className="text-lg font-bold text-dasm-navy dark:text-dark-text-primary">
								{tab === 'office' ? t('forOffices') : t('forBuyers')}
							</h3>
						</div>
						<ul className="mt-4 space-y-3 text-light-text-secondary dark:text-dark-text-secondary">
							{currentFeatures[language].map((feature, idx) => (
								<li key={idx} className="flex items-start gap-2">
									<CheckCircle2 className="h-4 w-4 text-dasm-green flex-shrink-0 mt-0.5" />
									<span>{feature}</span>
								</li>
							))}
						</ul>
					</div>
					<div className={`rounded-lg p-6 transition-all border border-light-border-subtle dark:border-dark-border-subtle ${
						tab === 'buyer' ? 'bg-light-bg-card dark:bg-dark-bg-card shadow-card dark:shadow-none' : 'bg-light-bg-section dark:bg-dark-bg-section'
					}`}>
						<div className="flex items-center gap-3">
							{tab === 'buyer' ? (
								<Users2 className="h-6 w-6 text-dasm-navy dark:text-dasm-green" />
							) : (
								<Building className="h-6 w-6 text-dasm-navy dark:text-dasm-green" />
							)}
							<h3 className="text-lg font-bold text-dasm-navy dark:text-dark-text-primary">
								{tab === 'buyer' ? t('forBuyers') : t('forOffices')}
							</h3>
						</div>
						<ul className="mt-4 space-y-3 text-light-text-secondary dark:text-dark-text-secondary">
							{(tab === 'buyer' ? buyerFeatures : officeFeatures)[language].map((feature, idx) => (
								<li key={idx} className="flex items-start gap-2">
									<CheckCircle2 className="h-4 w-4 text-dasm-green flex-shrink-0 mt-0.5" />
									<span>{feature}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}


