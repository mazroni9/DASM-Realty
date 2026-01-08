import { Hammer, Presentation, CheckCircle2 } from 'lucide-react';

export function WhyUs() {
	return (
		<section className="py-14 lg:py-20 bg-[var(--bg-muted)]">
			<div className="container container-padding">
				<h2 className="text-2xl sm:text-3xl font-extrabold text-dasm-blue mb-2">
					لماذا داسم للعقار؟ | Why DASM Realty
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
					<div className="rounded-2xl bg-dasm-blue text-white p-6 sm:p-8 shadow-card">
						<div className="flex items-center gap-3 mb-2">
							<Presentation className="h-6 w-6 text-dasm-gold" />
							<h3 className="text-xl font-bold">عرض احترافي للعقار</h3>
						</div>
						<p className="text-sm text-white/70 mb-3 italic">Professional Listings</p>
						<ul className="mt-4 space-y-2 text-sm text-white/90">
							<li className="flex items-start gap-2">
								<CheckCircle2 className="h-4 w-4 text-dasm-gold flex-shrink-0 mt-0.5" />
								<span>عرض الفلل، الشقق، الأراضي، والعمائر للبيع أو للإيجار</span>
							</li>
							<li className="flex items-start gap-2">
								<CheckCircle2 className="h-4 w-4 text-dasm-gold flex-shrink-0 mt-0.5" />
								<span>صفحات تفصيلية مدعومة بالصور والفيديو</span>
							</li>
							<li className="flex items-start gap-2">
								<CheckCircle2 className="h-4 w-4 text-dasm-gold flex-shrink-0 mt-0.5" />
								<span>وصول مباشر لمشترين ومستثمرين جادين</span>
							</li>
						</ul>
						<p className="mt-4 text-xs text-white/60 italic">
							Villas, apartments, land, and buildings for sale or lease • Rich property pages with photos & video • Direct access to serious buyers and investors
						</p>
					</div>
					<div className="rounded-2xl bg-dasm-green text-white p-6 sm:p-8 shadow-card">
						<div className="flex items-center gap-3 mb-2">
							<Hammer className="h-6 w-6 text-white" />
							<h3 className="text-xl font-bold text-white">
								قوة المزاد عند الحاجة
							</h3>
						</div>
						<p className="text-sm text-white/70 mb-3 italic">Guaranteed Auction Power</p>
						<ul className="mt-4 space-y-2 text-sm text-white/90">
							<li className="flex items-start gap-2">
								<CheckCircle2 className="h-4 w-4 text-white flex-shrink-0 mt-0.5" />
								<span>تحويل أي عقار مختار إلى مزاد رقمي بضغطة زر</span>
							</li>
							<li className="flex items-start gap-2">
								<CheckCircle2 className="h-4 w-4 text-white flex-shrink-0 mt-0.5" />
								<span>تشغيل المزادات عبر محرك DASM‑e الموثوق</span>
							</li>
							<li className="flex items-start gap-2">
								<CheckCircle2 className="h-4 w-4 text-white flex-shrink-0 mt-0.5" />
								<span>بث مباشر، سجل مزايدات، وشفافية كاملة</span>
							</li>
						</ul>
						<p className="mt-4 text-xs text-white/60 italic">
							One‑click conversion to digital auction • Auctions run on the trusted DASM‑e engine • Live streaming, bid history, and full transparency
						</p>
					</div>
				</div>
				<div className="mt-6 rounded-2xl bg-white border-2 border-dasm-blue/20 p-6 text-center">
					<h3 className="text-lg font-bold text-dasm-blue mb-2">
						خياران للبيع ضمن منصة واحدة | Two Paths, One Platform
					</h3>
					<p className="text-slate-700">
						بيع وتسويق تقليدي للعقار أو مزاد رقمي عندما يكون المزاد هو الخيار الأفضل
					</p>
					<p className="text-sm text-slate-500 mt-2 italic">
						Choose What Fits Your Asset • Traditional listing and brokerage • Or a digital auction when price discovery matters
					</p>
				</div>
			</div>
		</section>
	);
}


