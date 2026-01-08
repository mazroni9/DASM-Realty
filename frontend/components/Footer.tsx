import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
	return (
		<footer id="cta" className="bg-dasm-blue text-white">
			<div className="container container-padding py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
					<div className="space-y-4">
						<div className="flex items-center gap-3">
							<Image src="/logo-dasm-inv.svg" alt="DASM" width={36} height={36} />
							<div className="font-extrabold text-lg">DASM Realty</div>
						</div>
						<p className="text-white/80 leading-7">
							منصة عقارية حديثة تربط العروض بالمزادات الرقمية بشفافية وثقة.
						</p>
					</div>
					<div>
						<h4 className="font-bold">جاهز للانطلاق؟</h4>
						<div className="mt-4 flex flex-wrap gap-3">
							<Link href="#" className="btn bg-white text-dasm-blue hover:bg-slate-100">
								أنا مكتب عقاري
							</Link>
							<Link href="#" className="btn btn-outline border-white text-white hover:bg-white/10">
								أنا مشتري/مستثمر
							</Link>
						</div>
					</div>
					<div>
						<h4 className="font-bold">تواصل</h4>
						<ul className="mt-4 space-y-2 text-white/80">
							<li>البريد: contact@dasm.example</li>
							<li>الهاتف: 000000000</li>
						</ul>
					</div>
				</div>
				<div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/70 flex flex-wrap items-center justify-between gap-3">
					<p>© {new Date().getFullYear()} DASM Realty. جميع الحقوق محفوظة.</p>
					<div className="flex items-center gap-3">
						<Link href="#" className="hover:text-white">
							الشروط
						</Link>
						<span className="opacity-30">|</span>
						<Link href="#" className="hover:text-white">
							الخصوصية
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}


