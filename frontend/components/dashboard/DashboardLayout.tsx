'use client';

import { ReactNode } from 'react';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardTopBar } from './DashboardTopBar';

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
	return (
		<div className="min-h-screen bg-light-bg-main dark:bg-dark-bg-main">
			<DashboardSidebar />
			<div className="mr-64"> {/* Right margin for sidebar in RTL */}
				<DashboardTopBar userName={userName} accountStatus={accountStatus} />
				<main className="p-6">
					{children}
				</main>
			</div>
		</div>
	);
}
