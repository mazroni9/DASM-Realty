import { ClipboardList, FileCheck2, Hammer, BadgeCheck } from 'lucide-react';

const steps = [
	{
		title: 'اعرض عقارك',
		titleEn: 'List Your Property',
		desc: 'إدراج العقار عبر مكتبك أو مباشرةً من المنصة مع مراجعة وتوثيق لضمان الجدية.',
		descEn: 'Property listing through your office or directly from the platform with review and documentation to ensure seriousness.',
		icon: ClipboardList
	},
	{
		title: 'اجذب الطلب',
		titleEn: 'Attract Demand',
		desc: 'وصول منظم لمشترين ومستثمرين دون إعلانات عشوائية أو عروض وهمية.',
		descEn: 'Organized access to buyers and investors without random ads or fake offers.',
		icon: FileCheck2
	},
	{
		title: 'فعّل المزاد (اختياري)',
		titleEn: 'Activate Auction (Optional)',
		desc: 'عند توفر الطلب أو رغبة المالك، يتم ربط العقار بمحرك DASM‑e وتشغيل مزاد رقمي احترافي.',
		descEn: 'When demand exists or owner wishes, property is linked to DASM‑e engine and a professional digital auction is launched.',
		icon: Hammer
	},
	{
		title: 'بيع بثقة',
		titleEn: 'Close With Confidence',
		desc: 'نتيجة عادلة تعكس سعر السوق مع سجل شفاف لكل خطوة.',
		descEn: 'Fair outcome reflecting market price with transparent record of every step.',
		icon: BadgeCheck
	}
];

export function HowItWorks() {
	return (
		<section className="py-14 lg:py-20 bg-[var(--bg-muted)]">
			<div className="container container-padding">
				<h2 className="text-2xl sm:text-3xl font-extrabold text-dasm-blue">
					كيف تعمل المنصة؟ | How It Works
				</h2>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
					{steps.map((s, i) => {
						const Icon = s.icon;
						return (
							<div
								key={s.title}
								className="relative rounded-2xl bg-white p-6 shadow-card"
							>
								<div className="flex items-center justify-between mb-3">
									<div className="h-9 w-9 rounded-full bg-dasm-green text-white flex items-center justify-center font-bold text-lg">
										{i === 0 ? '1️⃣' : i === 1 ? '2️⃣' : i === 2 ? '3️⃣' : '4️⃣'}
									</div>
									<Icon className="h-6 w-6 text-dasm-blue" />
								</div>
								<h3 className="font-bold text-dasm-blue">{s.title}</h3>
								<p className="text-xs text-slate-500 mb-2 italic">{s.titleEn}</p>
								<p className="mt-2 text-sm text-slate-600 leading-7">{s.desc}</p>
								<p className="mt-2 text-xs text-slate-500 italic leading-6">{s.descEn}</p>
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


