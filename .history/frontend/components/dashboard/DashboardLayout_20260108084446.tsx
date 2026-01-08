'use client';

import { ReactNode } from 'react';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardTopBar } from './DashboardTopBar';
import { useLanguage } from '@/contexts/LanguageContext';

interface DashboardLayoutProps {
	children: ReactNode;
	userName: string;
	accountStatus?: 'active' | 'pending' | 'suspended';
}

export function DashboardLayout({ 
	children, 
	userName, 
	accountStatus = 'active' 
}: DashboardLayoutProps) {
	const { language } = useLanguage();
	const isRTL = language === 'ar';
	
	return (
		<div className="min-h-screen bg-light-bg-main dark:bg-dark-bg-main">
			<DashboardSidebar />
			<div className={isRTL ? 'mr-64' : 'ml-64'}> {/* Right margin for RTL, left for LTR */}
				<DashboardTopBar userName={userName} accountStatus={accountStatus} />
				<main className="p-6">
					{children}
				</main>
			</div>
		</div>
	);
}
