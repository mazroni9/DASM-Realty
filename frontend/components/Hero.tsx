import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Building2, Network } from 'lucide-react';

export function Hero() {
	return (
		<section className="relative bg-hero-radial">
			<div className="container container-padding grid grid-cols-1 lg:grid-cols-2 gap-10 py-14 lg:py-20">
				<div className="order-2 lg:order-1">
					<div className="mb-2">
						<h1 className="text-2xl sm:text-3xl font-bold text-dasm-blue">
							داسم للعقار | DASM Realty
						</h1>
						<p className="text-sm text-slate-500 mt-1">Where Real Estate Meets Digital Auctions</p>
					</div>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dasm-blue leading-tight mt-4">
						حيث يلتقي العرض العقاري
						<br className="hidden sm:block" /> بالمزادات الرقمية
					</h2>
					<p className="mt-4 text-slate-600 leading-8 text-lg">
						منصة عقارية احترافية لعرض وتسويق وبيع وتأجير الأصول العقارية، مع إمكانية التحويل الذكي إلى مزاد رقمي عبر محرك DASM‑e عند الحاجة — شفافية أعلى، وصول أوسع، ونتائج عادلة.
					</p>
					<p className="mt-3 text-slate-500 leading-7 italic">
						A professional real estate platform for listing, marketing, selling, and leasing properties, with smart conversion to digital auctions powered by DASM‑e when needed — higher transparency, wider reach, and fair market outcomes.
					</p>
					<div className="mt-6 flex flex-wrap gap-3">
						<Link href="#cta" className="btn btn-primary">
							ابدأ عرض عقارك الآن
						</Link>
						<Link href="#browse" className="btn btn-outline">
							تصفح العقارات والمزادات
						</Link>
					</div>
					<div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
						<div className="badge">
							<ShieldCheck className="h-4 w-4 text-dasm-green" />
							ثقة وشفافية
						</div>
						<div className="badge">
							<Building2 className="h-4 w-4 text-dasm-blue" />
							عقارات متنوعة
						</div>
						<div className="badge">
							<Network className="h-4 w-4 text-dasm-green" />
							تكامل مع محرك المزادات
						</div>
					</div>
				</div>
				<div className="order-1 lg:order-2 relative">
					<div className="relative mx-auto max-w-lg">
						<Image
							src="/illustration-hero.svg"
							alt="Illustration"
							width={720}
							height={620}
							className="w-full h-auto drop-shadow-2xl"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
}


