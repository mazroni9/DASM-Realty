'use client';

import { Heart, Phone, Hammer, MapPin, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import Link from 'next/link';

type PropertyType = 'apartment' | 'villa' | 'land' | 'building';
type ListingType = 'sale' | 'rent' | 'auction';

interface PropertyHeroProps {
	name: string;
	type: PropertyType;
	location: string;
	city: string;
	price: number;
	listingType: ListingType;
	auctionEnabled?: boolean;
	officeId?: string;
	officeName?: string;
}

const propertyTypeLabels = {
	ar: {
		apartment: 'شقة',
		villa: 'فيلا',
		land: 'أرض',
		building: 'عمارة'
	},
	en: {
		apartment: 'Apartment',
		villa: 'Villa',
		land: 'Land',
		building: 'Building'
	}
};

export function PropertyHero({
	name,
	type,
	location,
	city,
	price,
	listingType,
	auctionEnabled = false,
	officeId,
	officeName
}: PropertyHeroProps) {
	const { language, t } = useLanguage();
	const [isFavorite, setIsFavorite] = useState(false);
	
	const formatPrice = (amount: number) => {
		return new Intl.NumberFormat(language === 'ar' ? 'ar-SA' : 'en-US').format(amount);
	};

	return (
		<section className="bg-light-bg-section dark:bg-dark-bg-section border-b border-light-border-default dark:border-dark-border-default">
			<div className="container container-padding py-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Right side - Main info */}
					<div className="space-y-6">
						<div>
							<h1 className="text-3xl sm:text-4xl font-bold text-dasm-navy dark:text-dark-text-primary mb-3">
								{name}
							</h1>
							<div className="flex flex-wrap items-center gap-4 text-light-text-secondary dark:text-dark-text-secondary">
								<div className="flex items-center gap-2">
									<Home className="h-5 w-5 text-dasm-green" />
									<span className="font-medium">
										{propertyTypeLabels[language][type]}
									</span>
								</div>
								<div className="flex items-center gap-2">
									<MapPin className="h-5 w-5 text-dasm-navy dark:text-dasm-green" />
									<span>{city} – {location}</span>
								</div>
							</div>
						</div>

						{/* Price */}
						<div className="p-6 rounded-lg bg-light-bg-card dark:bg-dark-bg-card border border-light-border-default dark:border-dark-border-default">
							<div className="flex items-baseline gap-3">
								<span className="text-3xl font-bold text-dasm-navy dark:text-dark-text-primary">
									{formatPrice(price)} {language === 'ar' ? 'ريال' : 'SAR'}
								</span>
								<span className="text-lg text-light-text-secondary dark:text-dark-text-secondary">
									{listingType === 'sale' 
										? (language === 'ar' ? 'للبيع' : 'For Sale')
										: listingType === 'rent'
										? (language === 'ar' ? 'للإيجار' : 'For Rent')
										: (language === 'ar' ? 'متاح للمزاد' : 'Available for Auction')
									}
								</span>
							</div>
							{auctionEnabled && (
								<div className="mt-3 pt-3 border-t border-light-border-default dark:border-dark-border-default">
									<span className="inline-flex items-center gap-2 text-sm text-dasm-green font-medium">
										<Hammer className="h-4 w-4" />
										{language === 'ar' ? 'مفعّل للمزاد الرقمي' : 'Digital Auction Enabled'}
									</span>
								</div>
							)}
						</div>
					</div>

					{/* Left side - Actions */}
					<div className="flex flex-col gap-3">
						<Link
							href={`#contact-${officeId}`}
							className="btn btn-primary w-full justify-center"
						>
							<Phone className="h-5 w-5" />
							{language === 'ar' ? 'تواصل مع المكتب' : 'Contact Office'}
						</Link>
						
						<button
							onClick={() => setIsFavorite(!isFavorite)}
							className={`btn btn-outline w-full justify-center ${
								isFavorite ? 'text-dasm-green border-dasm-green' : ''
							}`}
						>
							<Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
							{language === 'ar' ? 'أضف للمفضلة' : 'Add to Favorites'}
						</button>

						{auctionEnabled && (
							<Link
								href="#auction"
								className="btn btn-green w-full justify-center"
							>
								<Hammer className="h-5 w-5" />
								{language === 'ar' ? 'الدخول في المزاد' : 'Enter Auction'}
							</Link>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
