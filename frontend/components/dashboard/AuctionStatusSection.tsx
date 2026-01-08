'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Hammer, Clock, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

type AuctionStatus = 'live' | 'upcoming' | 'ended';

interface Auction {
	id: string;
	propertyName: string;
	status: AuctionStatus;
	currentBid: number;
	biddersCount: number;
	endsAt?: Date;
}

interface AuctionStatusSectionProps {
	auctions: Auction[];
}

const statusLabels = {
	ar: {
		live: 'مزاد نشط',
		upcoming: 'مزاد قادم',
		ended: 'مزاد منتهي',
		viewAll: 'عرض الكل'
	},
	en: {
		live: 'Live Auction',
		upcoming: 'Upcoming Auction',
		ended: 'Ended Auction',
		viewAll: 'View All'
	}
};

const statusColors = {
	live: 'border-dasm-green bg-dasm-green/5',
	upcoming: 'border-light-status-warning bg-light-status-warning/5 dark:border-dark-status-warning dark:bg-dark-status-warning/5',
	ended: 'border-light-border-default bg-light-bg-section dark:bg-dark-bg-section'
};

const statusIcons = {
	live: Hammer,
	upcoming: Clock,
	ended: CheckCircle2
};

export function AuctionStatusSection({ auctions }: AuctionStatusSectionProps) {
	const { language } = useLanguage();
	const labels = statusLabels[language];

	const groupedAuctions = {
		live: auctions.filter(a => a.status === 'live'),
		upcoming: auctions.filter(a => a.status === 'upcoming'),
		ended: auctions.filter(a => a.status === 'ended')
	};

	const formatPrice = (amount: number) => {
		return new Intl.NumberFormat(language === 'ar' ? 'ar-SA' : 'en-US').format(amount);
	};

	return (
		<div className="space-y-6">
			{Object.entries(groupedAuctions).map(([status, statusAuctions]) => {
				if (statusAuctions.length === 0) return null;
				
				const StatusIcon = statusIcons[status as AuctionStatus];
				const statusLabel = labels[status as keyof typeof labels];
				
				return (
					<div key={status} className={`p-6 rounded-lg border-2 ${statusColors[status as AuctionStatus]}`}>
						<div className="flex items-center justify-between mb-4">
							<div className="flex items-center gap-3">
								<StatusIcon className="h-6 w-6 text-dasm-green" />
								<h3 className="text-lg font-bold text-dasm-navy dark:text-dark-text-primary">
									{statusLabel}
								</h3>
								<span className="px-2 py-1 rounded-md bg-light-bg-card dark:bg-dark-bg-card text-sm font-semibold text-light-text-secondary dark:text-dark-text-secondary">
									{statusAuctions.length}
								</span>
							</div>
							<Link
								href="/dashboard/auctions"
								className="text-sm text-dasm-navy dark:text-dasm-green hover:underline"
							>
								{labels.viewAll}
							</Link>
						</div>
						
						<div className="space-y-3">
							{statusAuctions.map((auction) => (
								<div
									key={auction.id}
									className="p-4 rounded-md bg-light-bg-card dark:bg-dark-bg-card border border-light-border-default dark:border-dark-border-default"
								>
									<div className="flex items-center justify-between">
										<div className="flex-1">
											<div className="font-medium text-dasm-navy dark:text-dark-text-primary mb-1">
												{auction.propertyName}
											</div>
											<div className="flex items-center gap-4 text-sm text-light-text-secondary dark:text-dark-text-secondary">
												<span>
													{language === 'ar' ? 'آخر سعر:' : 'Current Bid:'} {formatPrice(auction.currentBid)} {language === 'ar' ? 'ريال' : 'SAR'}
												</span>
												<span>
													{language === 'ar' ? 'مزايدون:' : 'Bidders:'} {auction.biddersCount}
												</span>
												{auction.endsAt && (
													<span>
														{language === 'ar' ? 'ينتهي:' : 'Ends:'} {auction.endsAt.toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US')}
													</span>
												)}
											</div>
										</div>
										{status === 'live' && (
											<Link
												href={`/dashboard/auctions/${auction.id}`}
												className="btn btn-green text-sm"
											>
												{language === 'ar' ? 'إدارة المزاد' : 'Manage Auction'}
											</Link>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
}
