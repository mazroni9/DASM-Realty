'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Edit, Eye, Hammer, MoreVertical } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

type PropertyStatus = 'active' | 'rented' | 'sold' | 'auction';

interface Property {
	id: string;
	name: string;
	type: string;
	status: PropertyStatus;
	price: number;
	auctionEnabled: boolean;
}

interface PropertiesTableProps {
	properties: Property[];
}

const statusLabels = {
	ar: {
		active: 'نشط',
		rented: 'مؤجر',
		sold: 'مباع',
		auction: 'مزاد'
	},
	en: {
		active: 'Active',
		rented: 'Rented',
		sold: 'Sold',
		auction: 'Auction'
	}
};

const statusColors = {
	active: 'bg-dasm-green/10 text-dasm-green',
	rented: 'bg-light-status-warning/10 text-light-status-warning dark:bg-dark-status-warning/10 dark:text-dark-status-warning',
	sold: 'bg-light-text-muted/10 text-light-text-muted dark:text-dark-text-muted/10',
	auction: 'bg-dasm-green/10 text-dasm-green'
};

export function PropertiesTable({ properties }: PropertiesTableProps) {
	const { language } = useLanguage();
	const labels = statusLabels[language];
	const [actionMenu, setActionMenu] = useState<string | null>(null);

	const formatPrice = (amount: number) => {
		return new Intl.NumberFormat(language === 'ar' ? 'ar-SA' : 'en-US').format(amount);
	};

	return (
		<div className="rounded-lg border border-light-border-default dark:border-dark-border-default bg-light-bg-card dark:bg-dark-bg-card overflow-hidden">
			<div className="overflow-x-auto">
				<table className="w-full">
					<thead className="bg-light-bg-section dark:bg-dark-bg-section border-b border-light-border-default dark:border-dark-border-default">
						<tr>
							<th className="px-6 py-3 text-right text-sm font-semibold text-light-text-secondary dark:text-dark-text-secondary">
								{language === 'ar' ? 'اسم العقار' : 'Property Name'}
							</th>
							<th className="px-6 py-3 text-right text-sm font-semibold text-light-text-secondary dark:text-dark-text-secondary">
								{language === 'ar' ? 'النوع' : 'Type'}
							</th>
							<th className="px-6 py-3 text-right text-sm font-semibold text-light-text-secondary dark:text-dark-text-secondary">
								{language === 'ar' ? 'الحالة' : 'Status'}
							</th>
							<th className="px-6 py-3 text-right text-sm font-semibold text-light-text-secondary dark:text-dark-text-secondary">
								{language === 'ar' ? 'السعر' : 'Price'}
							</th>
							<th className="px-6 py-3 text-right text-sm font-semibold text-light-text-secondary dark:text-dark-text-secondary">
								{language === 'ar' ? 'إجراءات' : 'Actions'}
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-light-border-default dark:divide-dark-border-default">
						{properties.map((property) => (
							<tr key={property.id} className="hover:bg-light-bg-section dark:hover:bg-dark-bg-section transition-colors">
								<td className="px-6 py-4">
									<div className="font-medium text-dasm-navy dark:text-dark-text-primary">
										{property.name}
									</div>
								</td>
								<td className="px-6 py-4 text-light-text-secondary dark:text-dark-text-secondary">
									{property.type}
								</td>
								<td className="px-6 py-4">
									<span className={`inline-flex px-2 py-1 rounded-md text-xs font-semibold ${statusColors[property.status]}`}>
										{labels[property.status]}
									</span>
								</td>
								<td className="px-6 py-4 font-semibold text-dasm-navy dark:text-dark-text-primary">
									{formatPrice(property.price)} {language === 'ar' ? 'ريال' : 'SAR'}
								</td>
								<td className="px-6 py-4">
									<div className="flex items-center gap-2">
										<Link
											href={`/dashboard/properties/${property.id}/edit`}
											className="p-2 rounded-md text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-bg-section dark:hover:bg-dark-bg-section transition-colors"
											title={language === 'ar' ? 'تعديل' : 'Edit'}
										>
											<Edit className="h-4 w-4" />
										</Link>
										<Link
											href={`/property/${property.id}`}
											className="p-2 rounded-md text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-bg-section dark:hover:bg-dark-bg-section transition-colors"
											title={language === 'ar' ? 'عرض' : 'View'}
										>
											<Eye className="h-4 w-4" />
										</Link>
										{!property.auctionEnabled && (
											<button
												className="p-2 rounded-md text-dasm-green hover:bg-dasm-green/10 transition-colors"
												title={language === 'ar' ? 'تفعيل مزاد' : 'Enable Auction'}
											>
												<Hammer className="h-4 w-4" />
											</button>
										)}
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
