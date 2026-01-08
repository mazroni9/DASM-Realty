'use client';

import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { KPICard } from '@/components/dashboard/KPICard';
import { PropertiesTable } from '@/components/dashboard/PropertiesTable';
import { AuctionStatusSection } from '@/components/dashboard/AuctionStatusSection';
import { Home, Activity, Inbox, Hammer } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Mock data
const mockKPIs = {
	totalProperties: 24,
	activeProperties: 18,
	leads: 12,
	activeAuctions: 3
};

const mockProperties = [
	{
		id: '1',
		name: 'فيلا فاخرة في حي النرجس',
		type: 'فيلا',
		status: 'active' as const,
		price: 2500000,
		auctionEnabled: false
	},
	{
		id: '2',
		name: 'شقة في حي العليا',
		type: 'شقة',
		status: 'rented' as const,
		price: 120000,
		auctionEnabled: false
	},
	{
		id: '3',
		name: 'أرض سكنية في حي الياسمين',
		type: 'أرض',
		status: 'active' as const,
		price: 800000,
		auctionEnabled: true
	}
];

const mockAuctions = [
	{
		id: '1',
		propertyName: 'فيلا فاخرة في حي النرجس',
		status: 'live' as const,
		currentBid: 2750000,
		biddersCount: 12,
		endsAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
	},
	{
		id: '2',
		propertyName: 'شقة في حي العليا',
		status: 'upcoming' as const,
		currentBid: 0,
		biddersCount: 0,
		endsAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
	},
	{
		id: '3',
		propertyName: 'أرض سكنية في حي الياسمين',
		status: 'ended' as const,
		currentBid: 850000,
		biddersCount: 8
	}
];

export default function DashboardPage() {
	const { language } = useLanguage();

	return (
		<DashboardLayout userName={language === 'ar' ? 'أحمد محمد' : 'Ahmed Mohammed'}>
			<div className="space-y-8">
				{/* Page Title */}
				<div>
					<h1 className="text-3xl font-bold text-dasm-navy dark:text-dark-text-primary mb-2">
						{language === 'ar' ? 'لوحة التحكم' : 'Dashboard'}
					</h1>
					<p className="text-light-text-secondary dark:text-dark-text-secondary">
						{language === 'ar' ? 'نظرة عامة على عقاراتك وأدائك' : 'Overview of your properties and performance'}
					</p>
				</div>

				{/* KPIs */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					<KPICard
						title={language === 'ar' ? 'إجمالي العقارات' : 'Total Properties'}
						value={mockKPIs.totalProperties}
						icon={Home}
						trend={{ value: 12, isPositive: true }}
					/>
					<KPICard
						title={language === 'ar' ? 'العقارات النشطة' : 'Active Properties'}
						value={mockKPIs.activeProperties}
						icon={Activity}
					/>
					<KPICard
						title={language === 'ar' ? 'طلبات التواصل' : 'Leads'}
						value={mockKPIs.leads}
						icon={Inbox}
						trend={{ value: 5, isPositive: true }}
					/>
					<KPICard
						title={language === 'ar' ? 'مزادات مفعّلة' : 'Active Auctions'}
						value={mockKPIs.activeAuctions}
						icon={Hammer}
					/>
				</div>

				{/* Properties Table */}
				<div>
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-2xl font-bold text-dasm-navy dark:text-dark-text-primary">
							{language === 'ar' ? 'جدول العقارات' : 'Properties Table'}
						</h2>
					</div>
					<PropertiesTable properties={mockProperties} />
				</div>

				{/* Auction Status */}
				<div>
					<h2 className="text-2xl font-bold text-dasm-navy dark:text-dark-text-primary mb-4">
						{language === 'ar' ? 'حالة المزادات' : 'Auction Status'}
					</h2>
					<AuctionStatusSection auctions={mockAuctions} />
				</div>
			</div>
		</DashboardLayout>
	);
}
