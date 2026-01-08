'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun, User, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface DashboardTopBarProps {
	userName: string;
	accountStatus: 'active' | 'pending' | 'suspended';
}

export function DashboardTopBar({ userName, accountStatus }: DashboardTopBarProps) {
	const { language, setLanguage } = useLanguage();
	const { theme, toggleTheme } = useTheme();
	const [showUserMenu, setShowUserMenu] = useState(false);

	const statusLabels = {
		ar: {
			active: 'نشط',
			pending: 'قيد المراجعة',
			suspended: 'معلق'
		},
		en: {
			active: 'Active',
			pending: 'Pending',
			suspended: 'Suspended'
		}
	};

	const statusColors = {
		active: 'bg-dasm-green/10 text-dasm-green',
		pending: 'bg-light-status-warning/10 text-light-status-warning dark:bg-dark-status-warning/10 dark:text-dark-status-warning',
		suspended: 'bg-light-status-error/10 text-light-status-error dark:bg-dark-status-error/10 dark:text-dark-status-error'
	};

	return (
		<header className="sticky top-0 z-30 bg-light-bg-card dark:bg-dark-bg-card border-b border-light-border-default dark:border-dark-border-default">
			<div className="flex items-center justify-between px-6 py-4">
				{/* Right side - Empty for now, can add breadcrumbs */}
				<div></div>

				{/* Left side - User info and controls */}
				<div className="flex items-center gap-4">
					{/* Language Toggle */}
					<button
						onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
						className="px-3 py-1.5 rounded-md text-sm font-medium text-dasm-navy dark:text-dark-text-primary hover:bg-light-bg-section dark:hover:bg-dark-bg-section transition-colors border border-light-border-default dark:border-dark-border-default"
					>
						{language === 'ar' ? 'EN' : 'AR'}
					</button>

					{/* Theme Toggle */}
					<button
						onClick={toggleTheme}
						className="p-2 rounded-md text-dasm-navy dark:text-dark-text-primary hover:bg-light-bg-section dark:hover:bg-dark-bg-section transition-colors"
						aria-label="Toggle theme"
					>
						{theme === 'light' ? (
							<Moon className="h-5 w-5" />
						) : (
							<Sun className="h-5 w-5" />
						)}
					</button>

					{/* Account Status */}
					<span className={`px-3 py-1 rounded-md text-xs font-semibold ${statusColors[accountStatus]}`}>
						{statusLabels[language][accountStatus]}
					</span>

					{/* User Menu */}
					<div className="relative">
						<button
							onClick={() => setShowUserMenu(!showUserMenu)}
							className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-light-bg-section dark:hover:bg-dark-bg-section transition-colors"
						>
							<User className="h-5 w-5 text-dasm-navy dark:text-dark-text-primary" />
							<span className="text-sm font-medium text-dasm-navy dark:text-dark-text-primary">
								{userName}
							</span>
							<ChevronDown className="h-4 w-4 text-light-text-secondary dark:text-dark-text-secondary" />
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}
