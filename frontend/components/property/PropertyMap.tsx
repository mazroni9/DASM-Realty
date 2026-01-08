'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin } from 'lucide-react';

interface PropertyMapProps {
	latitude: number;
	longitude: number;
	address: string;
}

export function PropertyMap({ latitude, longitude, address }: PropertyMapProps) {
	const { language } = useLanguage();
	
	return (
		<section className="py-8 bg-light-bg-section dark:bg-dark-bg-section">
			<div className="container container-padding">
				<h2 className="text-2xl font-bold text-dasm-navy dark:text-dark-text-primary mb-6">
					{language === 'ar' ? 'الموقع' : 'Location'}
				</h2>
				<div className="rounded-lg overflow-hidden border border-light-border-default dark:border-dark-border-default">
					{/* Placeholder Map */}
					<div className="relative aspect-video bg-light-bg-card dark:bg-dark-bg-card flex items-center justify-center">
						<div className="text-center">
							<MapPin className="h-12 w-12 text-dasm-green mx-auto mb-3" />
							<p className="text-light-text-secondary dark:text-dark-text-secondary">
								{address}
							</p>
							<p className="text-sm text-light-text-muted dark:text-dark-text-muted mt-2">
								{latitude}, {longitude}
							</p>
						</div>
					</div>
					{/* In production, integrate with Google Maps or Mapbox here */}
				</div>
			</div>
		</section>
	);
}
