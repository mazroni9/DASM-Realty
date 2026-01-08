'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Building2, Network } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Hero() {
	const { language, t } = useLanguage();
	
	return (
		<section className="relative bg-hero-radial dark:bg-dark-bg-main">
			<div className="container container-padding grid grid-cols-1 lg:grid-cols-2 gap-10 py-14 lg:py-20">
				<div className="order-2 lg:order-1">
					<div className="mb-2">
						<h1 className="text-2xl sm:text-3xl font-bold text-dasm-navy dark:text-dark-text-primary">
							{t('brand')} {language === 'ar' && `| ${t('brandEn')}`}
						</h1>
						{language === 'ar' && (
							<p className="text-sm text-light-text-muted dark:text-dark-text-muted mt-1">{t('taglineEn')}</p>
						)}
					</div>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dasm-navy dark:text-dark-text-primary leading-tight mt-4">
						{t('tagline')}
					</h2>
					<p className="mt-4 text-light-text-secondary dark:text-dark-text-secondary leading-8 text-lg">
						{t('description')}
					</p>
					<div className="mt-6 flex flex-wrap gap-3">
						<Link href="#cta" className="btn btn-primary">
							{t('ctaPrimary')}
						</Link>
						<Link href="#browse" className="btn btn-outline">
							{t('ctaSecondary')}
						</Link>
					</div>
					<div className="mt-6 flex flex-wrap gap-4 text-sm text-light-text-secondary dark:text-dark-text-secondary">
						<div className="badge">
							<ShieldCheck className="h-4 w-4 text-dasm-green" />
							{language === 'ar' ? 'ثقة وشفافية' : 'Trust & Transparency'}
						</div>
						<div className="badge">
							<Building2 className="h-4 w-4 text-dasm-navy dark:text-dasm-green" />
							{language === 'ar' ? 'عقارات متنوعة' : 'Diverse Properties'}
						</div>
						<div className="badge">
							<Network className="h-4 w-4 text-dasm-green" />
							{language === 'ar' ? 'تكامل مع محرك المزادات' : 'Auction Engine Integration'}
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


