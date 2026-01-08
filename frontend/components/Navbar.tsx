import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
	return (
		<header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-100">
			<div className="container container-padding flex items-center justify-between py-3">
				<div className="flex items-center gap-3">
					<Image
						src="/logo-dasm.svg"
						alt="DASM Realty"
						width={36}
						height={36}
						className="h-9 w-9"
						priority
					/>
					<div className="text-dasm-blue font-extrabold text-lg leading-none">
						DASM
						<span className="text-dasm-green"> Realty</span>
					</div>
				</div>
				<nav className="flex items-center gap-3">
					<Link href="#browse" className="btn btn-outline hidden sm:inline-flex">
						تصفح العقارات
					</Link>
					<Link href="#cta" className="btn btn-primary">
						ابدأ عرض عقارك
					</Link>
				</nav>
			</div>
		</header>
	);
}


