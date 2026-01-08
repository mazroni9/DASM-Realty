import { Hammer } from 'lucide-react';

export function TrustBadge() {
	return (
		<section className="py-10">
			<div className="container container-padding">
				<div className="rounded-2xl border bg-white p-6 text-center shadow-card">
					<div className="inline-flex items-center gap-2 text-dasm-blue font-semibold">
						<Hammer className="h-5 w-5 text-dasm-green" />
						<span>Powered by DASM‑e Auction Engine</span>
					</div>
				</div>
			</div>
		</section>
	);
}


