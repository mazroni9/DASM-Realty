'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
	LayoutDashboard, 
	Home, 
	Plus, 
	Inbox, 
	Hammer, 
	User, 
	LogOut 
} from 'lucide-react';
import { clsx } from 'clsx';

const menuItems = {
	ar: [
		{ href: '/dashboard', icon: LayoutDashboard, label: 'لوحة التحكم' },
		{ href: '/dashboard/properties', icon: Home, label: 'عقاراتي' },
		{ href: '/dashboard/properties/add', icon: Plus, label: 'إضافة عقار' },
		{ href: '/dashboard/leads', icon: Inbox, label: 'الطلبات' },
		{ href: '/dashboard/auctions', icon: Hammer, label: 'المزادات' },
		{ href: '/dashboard/account', icon: User, label: 'الحساب' }
	],
	en: [
		{ href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
		{ href: '/dashboard/properties', icon: Home, label: 'My Properties' },
		{ href: '/dashboard/properties/add', icon: Plus, label: 'Add Property' },
		{ href: '/dashboard/leads', icon: Inbox, label: 'Leads' },
		{ href: '/dashboard/auctions', icon: Hammer, label: 'Auctions' },
		{ href: '/dashboard/account', icon: User, label: 'Account' }
	]
};

export function DashboardSidebar() {
	const { language } = useLanguage();
	const pathname = usePathname();
	const items = menuItems[language];
	const isRTL = language === 'ar';

	return (
		<aside className={`fixed ${isRTL ? 'right-0 border-l' : 'left-0 border-r'} top-0 h-screen w-64 bg-light-bg-card dark:bg-dark-bg-card border-light-border-default dark:border-dark-border-default z-40`}>
			<div className="flex flex-col h-full">
				{/* Logo */}
				<div className="p-6 border-b border-light-border-default dark:border-dark-border-default">
					<div className="text-xl font-bold text-dasm-navy dark:text-dark-text-primary">
						DASM
					</div>
					<div className="text-xs text-light-text-secondary dark:text-dark-text-secondary mt-1">
						{language === 'ar' ? 'لوحة التحكم' : 'Dashboard'}
					</div>
				</div>

				{/* Menu */}
				<nav className="flex-1 p-4 space-y-1 overflow-y-auto">
					{items.map((item) => {
						const Icon = item.icon;
						const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
						
						return (
							<Link
								key={item.href}
								href={item.href}
								className={clsx(
									'flex items-center gap-3 px-4 py-3 rounded-md transition-colors',
									isActive
										? 'bg-dasm-navy text-light-text-inverse dark:bg-dasm-navy'
										: 'text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-bg-section dark:hover:bg-dark-bg-section'
								)}
							>
								<Icon className="h-5 w-5" />
								<span className="font-medium">{item.label}</span>
							</Link>
						);
					})}
				</nav>

				{/* Logout */}
				<div className="p-4 border-t border-light-border-default dark:border-dark-border-default">
					<button className="flex items-center gap-3 px-4 py-3 rounded-md text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-bg-section dark:hover:bg-dark-bg-section transition-colors w-full">
						<LogOut className="h-5 w-5" />
						<span className="font-medium">
							{language === 'ar' ? 'تسجيل خروج' : 'Logout'}
						</span>
					</button>
				</div>
			</div>
		</aside>
	);
}
