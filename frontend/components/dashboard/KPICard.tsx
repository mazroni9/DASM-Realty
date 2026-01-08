'use client';

import { LucideIcon } from 'lucide-react';

interface KPICardProps {
	title: string;
	value: string | number;
	icon: LucideIcon;
	trend?: {
		value: number;
		isPositive: boolean;
	};
}

export function KPICard({ title, value, icon: Icon, trend }: KPICardProps) {
	return (
		<div className="p-6 rounded-lg bg-light-bg-card dark:bg-dark-bg-card border border-light-border-default dark:border-dark-border-default">
			<div className="flex items-center justify-between mb-4">
				<div className="h-12 w-12 rounded-lg bg-dasm-navy/10 dark:bg-dasm-green/10 flex items-center justify-center">
					<Icon className="h-6 w-6 text-dasm-navy dark:text-dasm-green" />
				</div>
				{trend && (
					<span className={`text-sm font-medium ${
						trend.isPositive ? 'text-dasm-green' : 'text-light-status-error dark:text-dark-status-error'
					}`}>
						{trend.isPositive ? '+' : ''}{trend.value}%
					</span>
				)}
			</div>
			<div className="text-2xl font-bold text-dasm-navy dark:text-dark-text-primary mb-1">
				{value}
			</div>
			<div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
				{title}
			</div>
		</div>
	);
}
