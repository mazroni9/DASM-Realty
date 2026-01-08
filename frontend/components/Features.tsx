'use client';

import { Building, Users2, ShieldCheck, Sparkles, Wallet, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const officeFeatures = [
	{ ar: 'لوحة تحكم لإدارة العقارات والعملاء', en: 'Property & client management dashboard' },
	{ ar: 'استقبال وإدارة الطلبات (Leads)', en: 'Lead capture and tracking' },
	{ ar: 'باقات اشتراك وتسويق مرنة', en: 'Flexible subscriptions and promotion' },
	{ ar: 'إدخال عقارات للمزاد عند الحاجة', en: 'Auction enablement' },
	{ ar: 'تقارير أداء وشفافية في العمولات', en: 'Performance reports & commission transparency' }
];

const buyerFeatures = [
	{ ar: 'تصفح عقارات موثوقة ومراجعة', en: 'Verified listings' },
	{ ar: 'مقارنة الأسعار والخيارات بسهولة', en: 'Easy comparison' },
	{ ar: 'دخول مزادات رقمية حقيقية', en: 'Real digital auctions' },
	{ ar: 'تجربة شراء شفافة بلا تلاعب', en: 'Transparent purchase journey' }
];

export function Features() {
	const [tab, setTab] = useState<'office' | 'buyer'>('office');
	return (
		<section id="features" className="py-14 lg:py-20 bg-[var(--bg-muted)]">
			<div className="container container-padding">
				<div className="flex flex-wrap items-center justify-between gap-4 mb-8">
					<div className="flex items-center gap-3">
						<Building className="h-6 w-6 text-dasm-blue" />
						<h2 className="text-2xl sm:text-3xl font-extrabold text-dasm-blue">
							{tab === 'office' ? 'مزايا للمكاتب العقارية | For Real Estate Offices' : 'مزايا للمشترين والمستثمرين | For Buyers & Investors'}
						</h2>
					</div>
					<div className="inline-flex rounded-lg border p-1 bg-white shadow-sm">
						<button
							onClick={() => setTab('office')}
							className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
								tab === 'office'
									? 'bg-dasm-blue text-white'
									: 'text-dasm-blue hover:bg-slate-50'
							}`}
						>
							للمكاتب العقارية
						</button>
						<button
							onClick={() => setTab('buyer')}
							className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
								tab === 'buyer'
									? 'bg-dasm-blue text-white'
									: 'text-dasm-blue hover:bg-slate-50'
							}`}
						>
							للمشترين والمستثمرين
						</button>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className={`rounded-2xl p-6 shadow-card transition-all ${
						tab === 'office' ? 'bg-white' : 'bg-slate-50'
					}`}>
						<div className="flex items-center gap-3">
							{tab === 'office' ? (
								<Building className="h-6 w-6 text-dasm-blue" />
							) : (
								<Users2 className="h-6 w-6 text-dasm-blue" />
							)}
							<h3 className="text-lg font-bold text-dasm-blue">
								{tab === 'office' ? 'مميزات للمكاتب العقارية' : 'مميزات للمشترين والمستثمرين'}
							</h3>
						</div>
						<ul className="mt-4 space-y-3 text-slate-700">
							{(tab === 'office' ? officeFeatures : buyerFeatures).map((f, idx) => (
								<li key={idx} className="flex items-start gap-2">
									<CheckCircle2 className="h-4 w-4 text-dasm-green flex-shrink-0 mt-0.5" />
									<div>
										<span className="block">{f.ar}</span>
										<span className="text-xs text-slate-500 italic">{f.en}</span>
									</div>
								</li>
							))}
						</ul>
					</div>
					<div className={`rounded-2xl p-6 shadow-card transition-all ${
						tab === 'buyer' ? 'bg-white' : 'bg-slate-50'
					}`}>
						<div className="flex items-center gap-3">
							{tab === 'buyer' ? (
								<Users2 className="h-6 w-6 text-dasm-blue" />
							) : (
								<Building className="h-6 w-6 text-dasm-blue" />
							)}
							<h3 className="text-lg font-bold text-dasm-blue">
								{tab === 'buyer' ? 'مميزات للمشترين والمستثمرين' : 'مميزات للمكاتب العقارية'}
							</h3>
						</div>
						<ul className="mt-4 space-y-3 text-slate-700">
							{(tab === 'buyer' ? buyerFeatures : officeFeatures).map((f, idx) => (
								<li key={idx} className="flex items-start gap-2">
									<CheckCircle2 className="h-4 w-4 text-dasm-green flex-shrink-0 mt-0.5" />
									<div>
										<span className="block">{f.ar}</span>
										<span className="text-xs text-slate-500 italic">{f.en}</span>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}


