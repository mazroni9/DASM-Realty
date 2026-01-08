import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WhyUs } from '@/components/WhyUs';
import { HowItWorks } from '@/components/HowItWorks';
import { Features } from '@/components/Features';
import { TrustBadge } from '@/components/TrustBadge';
import { Footer } from '@/components/Footer';

export default function Page() {
	return (
		<div className="min-h-dvh">
			<Navbar />
			<main>
				<Hero />
				<WhyUs />
				<HowItWorks />
				<Features />
				<TrustBadge />
			</main>
			<Footer />
		</div>
	);
}


