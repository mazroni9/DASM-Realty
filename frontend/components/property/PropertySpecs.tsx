'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Home, Ruler, Bed, Bath, Calendar, FileText, Hash } from 'lucide-react';

interface PropertySpecsProps {
	area: number; // in square meters
	rooms: number;
	bathrooms: number;
	age: number; // years
	propertyType: 'freehold' | 'leasehold' | 'other';
	licenseNumber?: string;
}

const specLabels = {
	ar: {
		area: 'المساحة',
		rooms: 'الغرف',
		bathrooms: 'دورات المياه',
		age: 'عمر العقار',
		propertyType: 'نوع الملكية',
		licenseNumber: 'رقم الترخيص',
		unit: 'م²',
		years: 'سنة',
		freehold: 'ملكية كاملة',
		leasehold: 'إيجار',
		other: 'أخرى'
	},
	en: {
		area: 'Area',
		rooms: 'Rooms',
		bathrooms: 'Bathrooms',
		age: 'Property Age',
		propertyType: 'Property Type',
		licenseNumber: 'License Number',
		unit: 'm²',
		years: 'years',
		freehold: 'Freehold',
		leasehold: 'Leasehold',
		other: 'Other'
	}
};

export function PropertySpecs({
	area,
	rooms,
	bathrooms,
	age,
	propertyType,
	licenseNumber
}: PropertySpecsProps) {
	const { language } = useLanguage();
	const labels = specLabels[language];

	const specs = [
		{
			icon: Ruler,
			label: labels.area,
			value: `${area} ${labels.unit}`
		},
		{
			icon: Bed,
			label: labels.rooms,
			value: rooms.toString()
		},
		{
			icon: Bath,
			label: labels.bathrooms,
			value: bathrooms.toString()
		},
		{
			icon: Calendar,
			label: labels.age,
			value: `${age} ${labels.years}`
		},
		{
			icon: FileText,
			label: labels.propertyType,
			value: labels[propertyType]
		},
		...(licenseNumber ? [{
			icon: Hash,
			label: labels.licenseNumber,
			value: licenseNumber
		}] : [])
	];

	return (
		<section className="py-8 bg-light-bg-section dark:bg-dark-bg-section">
			<div className="container container-padding">
				<h2 className="text-2xl font-bold text-dasm-navy dark:text-dark-text-primary mb-6">
					{language === 'ar' ? 'المواصفات الأساسية' : 'Key Specifications'}
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
					{specs.map((spec, idx) => {
						const Icon = spec.icon;
						return (
							<div
								key={idx}
								className="p-4 rounded-lg bg-light-bg-card dark:bg-dark-bg-card border border-light-border-default dark:border-dark-border-default"
							>
								<div className="flex items-center gap-3 mb-2">
									<Icon className="h-5 w-5 text-dasm-green" />
									<span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
										{spec.label}
									</span>
								</div>
								<div className="text-lg font-semibold text-dasm-navy dark:text-dark-text-primary">
									{spec.value}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
