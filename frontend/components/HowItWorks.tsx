import { ClipboardList, FileCheck2, Hammer, BadgeCheck } from 'lucide-react';

const steps = [
	{
		title: 'تقديم عرض عقارك',
		desc: 'أرسل بيانات العقار والمستندات للعرض في المزادات الرقمية.',
		icon: ClipboardList
	},
	{
		title: 'تصفح المزادات',
		desc: 'تصفح منصة المزادات والعمل على المزايدة.',
		icon: FileCheck2
	},
	{
		title: 'توثيق المزاد',
		desc: 'توافق عدلي ونماري للمزاد عند الحاجة.',
		icon: Hammer
	},
	{
		title: 'أعلى مزايدة',
		desc: 'أعلى المزايدة للفوز بعقارات الأصول العقارية.',
		icon: BadgeCheck
	}
];

export function HowItWorks() {
	return (
		<section className="py-14 lg:py-20 bg-[var(--bg-muted)]">
			<div className="container container-padding">
				<h2 className="text-2xl sm:text-3xl font-extrabold text-dasm-blue">
					كيف تعمل المنصة؟
				</h2>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
					{steps.map((s, i) => {
						const Icon = s.icon;
						return (
							<div
								key={s.title}
								className="relative rounded-2xl bg-white p-6 shadow-card"
							>
								<div className="flex items-center justify-between">
									<div className="h-9 w-9 rounded-full bg-dasm-green text-white flex items-center justify-center font-bold">
										{i + 1}
									</div>
									<Icon className="h-6 w-6 text-dasm-blue" />
								</div>
								<h3 className="mt-4 font-bold text-dasm-blue">{s.title}</h3>
								<p className="mt-2 text-sm text-slate-600 leading-7">{s.desc}</p>
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


