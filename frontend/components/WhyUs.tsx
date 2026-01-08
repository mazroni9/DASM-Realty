import { Hammer, Presentation, CheckCircle2 } from 'lucide-react';

export function WhyUs() {
	return (
		<section className="py-14 lg:py-20 bg-[var(--bg-muted)]">
			<div className="container container-padding">
				<h2 className="text-2xl sm:text-3xl font-extrabold text-dasm-blue mb-8">
					لماذا داسم للعقار؟
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="rounded-2xl bg-dasm-blue text-white p-6 sm:p-8 shadow-card">
						<div className="flex items-center gap-3">
							<Presentation className="h-6 w-6 text-dasm-gold" />
							<h3 className="text-xl font-bold">عرض عقاري احترافي</h3>
						</div>
						<p className="mt-3 text-white/80 leading-8">
							أدرج عقارك بعرض بصري جذاب، مع بيانات دقيقة، صور عالية الجودة،
							وتقارير واضحة. فريق داسم يدعمك في إعداد العرض المثالي.
						</p>
						<ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-white/90">
							<li className="flex items-center gap-2">
								<CheckCircle2 className="h-4 w-4 text-dasm-gold" /> قوالب
								عرض جاهزة
							</li>
							<li className="flex items-center gap-2">
								<CheckCircle2 className="h-4 w-4 text-dasm-gold" /> مراجعة
								تفاصيل العقار
							</li>
						</ul>
					</div>
					<div className="rounded-2xl bg-dasm-green text-white p-6 sm:p-8 shadow-card">
						<div className="flex items-center gap-3">
							<Hammer className="h-6 w-6 text-white" />
							<h3 className="text-xl font-bold text-white">
								قوة المزاد عند الحاجة
							</h3>
						</div>
						<p className="mt-3 text-white/90 leading-8">
							فعّل المزاد الرقمي عند الطلب لتحقيق أفضل سعر خلال مدة زمنية
							محددة، مع سياسات شفافة للمزايدة والتوثيق.
						</p>
						<ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-white/90">
							<li className="flex items-center gap-2">
								<CheckCircle2 className="h-4 w-4 text-white" /> محرك
								مزادات DASM‑e
							</li>
							<li className="flex items-center gap-2">
								<CheckCircle2 className="h-4 w-4 text-white" /> تقارير
								شفافية فورية
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}


