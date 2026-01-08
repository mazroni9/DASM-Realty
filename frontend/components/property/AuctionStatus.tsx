'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Hammer, Clock, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';

type AuctionStatus = 'upcoming' | 'live' | 'ended';

interface AuctionStatusProps {
	status: AuctionStatus;
	currentBid?: number;
	biddersCount?: number;
	endsAt?: Date;
}

const statusLabels = {
	ar: {
		upcoming: 'قادم',
		live: 'مباشر',
		ended: 'منتهي',
		currentBid: 'آخر سعر',
		bidders: 'عدد المزايدين',
		endsAt: 'ينتهي في',
		enterAuction: 'الدخول في المزاد'
	},
	en: {
		upcoming: 'Upcoming',
		live: 'Live',
		ended: 'Ended',
		currentBid: 'Current Bid',
		bidders: 'Bidders',
		endsAt: 'Ends At',
		enterAuction: 'Enter Auction'
	}
};

export function AuctionStatus({ status, currentBid, biddersCount, endsAt }: AuctionStatusProps) {
	const { language } = useLanguage();
	const labels = statusLabels[language];

	const statusColors = {
		upcoming: 'bg-light-status-warning/10 text-light-status-warning dark:bg-dark-status-warning/10 dark:text-dark-status-warning',
		live: 'bg-dasm-green/10 text-dasm-green',
		ended: 'bg-light-status-error/10 text-light-status-error dark:bg-dark-status-error/10 dark:text-dark-status-error'
	};

	return (
		<section id="auction" className="py-8 bg-light-bg-section dark:bg-dark-bg-section">
			<div className="container container-padding">
				<div className="max-w-3xl mx-auto">
					<div className="p-6 rounded-lg bg-light-bg-card dark:bg-dark-bg-card border-2 border-dasm-green/20">
						<div className="flex items-center justify-between mb-6">
							<div className="flex items-center gap-3">
								<Hammer className="h-6 w-6 text-dasm-green" />
								<h2 className="text-2xl font-bold text-dasm-navy dark:text-dark-text-primary">
									{language === 'ar' ? 'حالة المزاد' : 'Auction Status'}
								</h2>
							</div>
							<span className={`px-3 py-1 rounded-md text-sm font-semibold ${statusColors[status]}`}>
								{labels[status]}
							</span>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
							{currentBid && (
								<div className="p-4 rounded-lg bg-light-bg-section dark:bg-dark-bg-section">
									<div className="flex items-center gap-2 mb-2">
										<TrendingUp className="h-5 w-5 text-dasm-green" />
										<span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
											{labels.currentBid}
										</span>
									</div>
									<div className="text-xl font-bold text-dasm-navy dark:text-dark-text-primary">
										{new Intl.NumberFormat(language === 'ar' ? 'ar-SA' : 'en-US').format(currentBid)} {language === 'ar' ? 'ريال' : 'SAR'}
									</div>
								</div>
							)}
							{biddersCount !== undefined && (
								<div className="p-4 rounded-lg bg-light-bg-section dark:bg-dark-bg-section">
									<div className="flex items-center gap-2 mb-2">
										<Users className="h-5 w-5 text-dasm-green" />
										<span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
											{labels.bidders}
										</span>
									</div>
									<div className="text-xl font-bold text-dasm-navy dark:text-dark-text-primary">
										{biddersCount}
									</div>
								</div>
							)}
							{endsAt && (
								<div className="p-4 rounded-lg bg-light-bg-section dark:bg-dark-bg-section">
									<div className="flex items-center gap-2 mb-2">
										<Clock className="h-5 w-5 text-dasm-green" />
										<span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
											{labels.endsAt}
										</span>
									</div>
									<div className="text-lg font-semibold text-dasm-navy dark:text-dark-text-primary">
										{endsAt.toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US')}
									</div>
								</div>
							)}
						</div>

						{status === 'live' && (
							<Link href="#auction" className="btn btn-green w-full justify-center">
								<Hammer className="h-5 w-5" />
								{labels.enterAuction}
							</Link>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
