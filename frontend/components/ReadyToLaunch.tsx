import Link from 'next/link';

export function ReadyToLaunch() {
	return (
		<section className="py-14 lg:py-20 bg-[var(--bg-muted)]">
			<div className="container container-padding text-center">
				<h2 className="text-2xl sm:text-3xl font-extrabold text-dasm-blue mb-6">
					جاهز للانطلاق؟
				</h2>
				<div className="flex flex-wrap justify-center gap-4">
					<Link href="#cta" className="btn btn-primary text-lg px-8 py-4">
						ابدأ الآن
					</Link>
				</div>
			</div>
		</section>
	);
}
