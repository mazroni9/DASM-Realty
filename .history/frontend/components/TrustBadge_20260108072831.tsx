import { Hammer, ShieldCheck } from 'lucide-react';

export function TrustBadge() {
	return (
		<section className="py-10 bg-[var(--bg-muted)]">
			<div className="container container-padding">
				<h2 className="text-2xl sm:text-3xl font-extrabold text-dasm-blue mb-8 text-center">
					البنية التقنية | Technology
				</h2>
				<div className="rounded-2xl border bg-white p-6 sm:p-8 shadow-card">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
						<div className="text-right">
							<div className="flex items-center gap-3 justify-end mb-2">
								<ShieldCheck className="h-6 w-6 text-dasm-green" />
								<h3 className="text-xl font-bold text-dasm-blue">Enterprise‑Grade Architecture</h3>
							</div>
							<ul className="mt-4 space-y-2 text-slate-700 text-sm">
								<li className="flex items-start gap-2">
									<span className="text-dasm-green">•</span>
									<span>قاعدة بيانات عقارية مستقلة</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-dasm-green">•</span>
									<span>محرك مزادات منفصل DASM‑e لضمان النزاهة</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-dasm-green">•</span>
									<span>ربط آمن عبر APIs وWebhooks</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-dasm-green">•</span>
									<span>جميع مدفوعات المزايدات تتم داخل DASM‑e</span>
								</li>
							</ul>
						</div>
						<div className="text-left border-r md:border-r-0 md:border-l border-slate-200 md:pr-6 md:pl-6">
							<div className="inline-flex items-center gap-2 text-dasm-blue font-semibold mb-4">
								<Hammer className="h-5 w-5 text-dasm-green" />
								<span>Powered by DASM‑e Auction Engine</span>
							</div>
							<p className="text-sm text-slate-600 italic">
								Independent realty database • Isolated auction engine (DASM‑e) • Secure API/Webhook integration • Auction payments handled centrally
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


