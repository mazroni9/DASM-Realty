import Link from 'next/link';

export function ReadyToLaunch() {
	return (
		<section className="py-14 lg:py-20 bg-[var(--bg-muted)]">
			<div className="container container-padding text-center">
				<h2 className="text-2xl sm:text-3xl font-extrabold text-dasm-blue mb-4">
					ابدأ الآن | Get Started
				</h2>
				<p className="text-slate-700 text-lg max-w-3xl mx-auto mb-2">
					سواء كنت مالكًا، مكتبًا عقاريًا، أو مستثمرًا — داسم للعقار تمنحك منصة حديثة وشفافة وقابلة للتوسع.
				</p>
				<p className="text-slate-500 text-sm italic max-w-3xl mx-auto mb-8">
					Whether you are an owner, brokerage, or investor — DASM Realty delivers a modern, transparent, and scalable platform.
				</p>
				<div className="flex flex-wrap justify-center gap-4">
					<Link href="#cta" className="btn btn-primary text-lg px-8 py-4">
						ابدأ عرض عقارك الآن | List Your Property Now
					</Link>
				</div>
				<div className="mt-8 pt-6 border-t border-slate-200">
					<p className="text-sm text-slate-600 inline-flex items-center gap-2">
						<span>Powered by</span>
						<span className="font-bold text-dasm-blue">DASM‑e Auction Engine</span>
					</p>
				</div>
			</div>
		</section>
	);
}
