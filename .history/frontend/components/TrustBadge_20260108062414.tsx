import { Hammer, ShieldCheck } from 'lucide-react';

export function TrustBadge() {
	return (
		<section className="py-10 bg-[var(--bg-muted)]">
			<div className="container container-padding">
				<div className="rounded-2xl border bg-white p-6 sm:p-8 shadow-card">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
						<div className="text-right">
							<div className="flex items-center gap-3 justify-end">
								<ShieldCheck className="h-6 w-6 text-dasm-green" />
								<h3 className="text-xl font-bold text-dasm-blue">بنية تقنية موثوقة</h3>
							</div>
							<p className="mt-3 text-slate-600 leading-7">
								تعتمد المنصة على بنية سحابية آمنة وقابلة للتوسع، مع تكاملات
								محكمة وإجراءات نسخ احتياطي.
							</p>
						</div>
						<div className="text-left border-r md:border-r-0 md:border-l border-slate-200 md:pr-6 md:pl-6">
							<div className="inline-flex items-center gap-2 text-dasm-blue font-semibold">
								<Hammer className="h-5 w-5 text-dasm-green" />
								<span>Powered by DASM‑e Auction Engine</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


