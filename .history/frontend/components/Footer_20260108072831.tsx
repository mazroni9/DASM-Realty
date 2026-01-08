import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
	return (
		<footer id="cta" className="bg-dasm-blue text-white">
			<div className="container container-padding py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
					<div className="space-y-4">
						<div className="flex items-center gap-3">
							<Image src="/logo-dasm-inv.svg" alt="DASM" width={36} height={36} />
							<div>
								<div className="font-extrabold text-lg">داسم للعقار</div>
								<div className="text-sm text-white/70">DASM Realty</div>
							</div>
						</div>
						<p className="text-white/80 leading-7 text-sm">
							جزء من منظومة DASM‑e الرقمية
						</p>
						<p className="text-white/70 text-xs italic">
							Part of the DASM‑e digital ecosystem
						</p>
						<p className="text-white/60 text-xs mt-4">
							© {new Date().getFullYear()} DASM Realty. جميع الحقوق محفوظة.
						</p>
					</div>
					<div>
						<h4 className="font-bold mb-4">روابط سريعة</h4>
						<ul className="space-y-2 text-white/80 text-sm">
							<li>
								<Link href="#browse" className="hover:text-white transition-colors">
									تصفح العقارات
								</Link>
							</li>
							<li>
								<Link href="#features" className="hover:text-white transition-colors">
									المميزات
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-white transition-colors">
									عن داسم
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-white transition-colors">
									اتصل بنا
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-bold mb-4">مميزات للمكاتب العقارية</h4>
						<ul className="space-y-2 text-white/80 text-sm">
							<li>
								<Link href="#" className="hover:text-white transition-colors">
									عرض عقاري احترافي
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-white transition-colors">
									قوالب تسويق جاهزة
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-white transition-colors">
									لوحة تحكم
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-bold mb-4">تواصل</h4>
						<ul className="space-y-2 text-white/80 text-sm mb-4">
							<li>البريد: contact@dasm.example</li>
							<li>الهاتف: 000000000</li>
						</ul>
						<div className="flex items-center gap-3 mt-4">
							<Link href="#" className="text-white/80 hover:text-white transition-colors">
								<Facebook className="h-5 w-5" />
							</Link>
							<Link href="#" className="text-white/80 hover:text-white transition-colors">
								<Twitter className="h-5 w-5" />
							</Link>
							<Link href="#" className="text-white/80 hover:text-white transition-colors">
								<Linkedin className="h-5 w-5" />
							</Link>
							<Link href="#" className="text-white/80 hover:text-white transition-colors">
								<Instagram className="h-5 w-5" />
							</Link>
						</div>
					</div>
				</div>
				<div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/70 flex flex-wrap items-center justify-between gap-3">
					<div className="flex items-center gap-3">
						<Link href="#" className="hover:text-white transition-colors">
							الشروط والأحكام
						</Link>
						<span className="opacity-30">|</span>
						<Link href="#" className="hover:text-white transition-colors">
							سياسة الخصوصية
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}


