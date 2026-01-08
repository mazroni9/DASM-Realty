import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Building2, Network } from 'lucide-react';

export function Hero() {
	return (
		<section className="relative bg-hero-radial">
			<div className="container container-padding grid grid-cols-1 lg:grid-cols-2 gap-10 py-14 lg:py-20">
				<div className="order-2 lg:order-1">
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dasm-blue leading-tight">
						<span className="text-dasm-green">داسم</span> للعقار — حيث تلتقي
						<br className="hidden sm:block" /> العقارات بالمزادات الرقمية
					</h1>
					<p className="mt-4 text-slate-600 leading-8">
						منصة عرض وتسويق عقاري احترافي، مرتبطة بمحرك مزادات
						<span className="font-semibold"> DASM‑e</span> الرقمي. تمنح
						الملاك والوسطاء والمستثمرين تجربة ذكية لبيع وشراء الأصول
						العقارية بثقة وشفافية.
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


