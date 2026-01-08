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
		<section className="py-14 lg:py-20">
			<div className="container container-padding">
				<div className="flex flex-wrap items-center justify-between gap-4">
					<h2 className="text-2xl sm:text-3xl font-extrabold text-dasm-blue">
						المميزات
					</h2>
					<div className="inline-flex rounded-lg border p-1 bg-white">
						<button
							onClick={() => setTab('office')}
							className={`px-4 py-2 rounded-md text-sm font-semibold ${
								tab === 'office'
									? 'bg-dasm-blue text-white'
									: 'text-dasm-blue hover:bg-slate-50'
							}`}
						>
							للمكاتب العقارية
						</button>
						<button
							onClick={() => setTab('buyer')}
							className={`px-4 py-2 rounded-md text-sm font-semibold ${
								tab === 'buyer'
									? 'bg-dasm-blue text-white'
									: 'text-dasm-blue hover:bg-slate-50'
							}`}
						>
							للمشترين والمستثمرين
						</button>
					</div>
				</div>

				<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
					<div className="rounded-2xl bg-white p-6 shadow-card">
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
						<ul className="mt-4 space-y-2 text-slate-700">
							{(tab === 'office' ? officeFeatures : buyerFeatures).map((f) => (
								<li key={f} className="flex items-center gap-2">
									<CheckCircle2 className="h-4 w-4 text-dasm-green" />
									{f}
								</li>
							))}
						</ul>
					</div>
					<div className="rounded-2xl bg-white p-6 shadow-card">
						<div className="flex items-center gap-3">
							<ShieldCheck className="h-6 w-6 text-dasm-blue" />
							<h3 className="text-lg font-bold text-dasm-blue">
								بنية تقنية موثوقة
							</h3>
						</div>
						<p className="mt-3 text-slate-600 leading-7">
							تعتمد المنصة على بنية سحابية آمنة وقابلة للتوسع، مع تكاملات
							محكمة وإجراءات نسخ احتياطي.
						</p>
						<ul className="mt-3 space-y-2 text-slate-700">
							<li className="flex items-center gap-2">
								<Sparkles className="h-4 w-4 text-dasm-green" />
								أداء عالٍ وتجربة سلسة
							</li>
							<li className="flex items-center gap-2">
								<Wallet className="h-4 w-4 text-dasm-green" />
								بوابات دفع موثوقة
							</li>
						</ul>
					</div>
					<div id="browse" className="rounded-2xl bg-gradient-to-br from-dasm-green/15 to-transparent border border-dasm-green/30 p-6">
						<h3 className="text-lg font-bold text-dasm-blue">
							استكشف العروض والمزادات القادمة
						</h3>
						<p className="mt-3 text-slate-700 leading-7">
							النسخة الحالية استعراضية. سيتم ربطها قريباً بقائمة عقارات
							ديناميكية عبر Laravel API.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}


