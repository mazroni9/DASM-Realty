'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Star, Building2 } from 'lucide-react';
import Link from 'next/link';

interface OfficeInfoProps {
	id: string;
	name: string;
	rating: number;
	phone: string;
	propertiesCount?: number;
}

export function OfficeInfo({ id, name, rating, phone, propertiesCount }: OfficeInfoProps) {
	const { language } = useLanguage();
	
	return (
		<section id={`contact-${id}`} className="py-8 bg-light-bg-main dark:bg-dark-bg-main">
			<div className="container container-padding">
				<h2 className="text-2xl font-bold text-dasm-navy dark:text-dark-text-primary mb-6">
					{language === 'ar' ? 'معلومات المكتب العقاري' : 'Real Estate Office'}
				</h2>
				<div className="max-w-2xl">
					<div className="p-6 rounded-lg bg-light-bg-card dark:bg-dark-bg-card border border-light-border-default dark:border-dark-border-default">
						<div className="flex items-start gap-4 mb-4">
							<div className="h-12 w-12 rounded-lg bg-dasm-navy dark:bg-dasm-green flex items-center justify-center">
								<Building2 className="h-6 w-6 text-light-text-inverse" />
							</div>
							<div className="flex-1">
								<h3 className="text-xl font-bold text-dasm-navy dark:text-dark-text-primary mb-2">
									{name}
								</h3>
								<div className="flex items-center gap-2 mb-3">
									<div className="flex items-center gap-1">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className={`h-4 w-4 ${
													i < Math.floor(rating)
														? 'text-dasm-green fill-current'
														: 'text-light-border-default dark:text-dark-border-default'
												}`}
											/>
										))}
									</div>
									<span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
										{rating.toFixed(1)}
									</span>
								</div>
								<div className="flex items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary mb-4">
									<Phone className="h-5 w-5" />
									<a href={`tel:${phone}`} className="hover:text-dasm-navy dark:hover:text-dasm-green transition-colors">
										{phone}
									</a>
								</div>
								{propertiesCount && (
									<p className="text-sm text-light-text-muted dark:text-dark-text-muted mb-4">
										{language === 'ar' 
											? `${propertiesCount} عقار متاح`
											: `${propertiesCount} properties available`
										}
									</p>
								)}
								<Link
									href={`/office/${id}`}
									className="btn btn-outline"
								>
									{language === 'ar' ? 'عرض جميع عقارات المكتب' : 'View All Office Properties'}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
