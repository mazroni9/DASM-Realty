'use client';

import { Building, Users2, ShieldCheck, Sparkles, Wallet, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const officeFeatures = [
	'عرض عقاري احترافي',
	'قوالب تسويق جاهزة',
	'تقارير أداء الحملة',
	'ربط المزاد عند الطلب',
	'لوحة تحكم للطلبات'
];

const buyerFeatures = [
	'معلومات دقيقة وشفافة',
	'توثيق المزادات وعروض الشراء',
	'إشعارات فورية',
	'إجراءات موحدة',
	'دعم فني سريع'
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
							المميزات
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
							{(tab === 'office' ? officeFeatures : buyerFeatures).map((f) => (
								<li key={f} className="flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-dasm-green flex-shrink-0" />
									<span>{f}</span>
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
							{(tab === 'buyer' ? buyerFeatures : officeFeatures).map((f) => (
								<li key={f} className="flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-dasm-green flex-shrink-0" />
									<span>{f}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}


