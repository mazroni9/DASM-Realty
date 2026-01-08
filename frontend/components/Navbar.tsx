'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun, User, Menu } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
	const { language, setLanguage, t } = useLanguage();
	const { theme, toggleTheme } = useTheme();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	
	return (
		<header className="sticky top-0 z-30 bg-light-bg-main dark:bg-dark-bg-main border-b border-light-border-default dark:border-dark-border-default backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95">
			<div className="container container-padding flex items-center justify-between py-4">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-3">
					<Image
						src={theme === 'dark' ? '/logo-dasm-inv.svg' : '/logo-dasm.svg'}
						alt="DASM"
						width={40}
						height={40}
						className="h-10 w-10"
						priority
					/>
					<div className="flex flex-col">
						<div className="text-dasm-navy dark:text-light-text-inverse font-bold text-xl leading-none">
							DASM
						</div>
						<div className="text-xs text-light-text-secondary dark:text-dark-text-secondary mt-0.5">
							{language === 'ar' ? 'داسم للعقار' : 'DASM Realty'}
						</div>
					</div>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-4">
					<Link 
						href="#browse" 
						className="btn btn-outline text-sm"
					>
						{t('ctaSecondary')}
					</Link>
					<Link 
						href="#cta" 
						className="btn btn-primary text-sm"
					>
						{t('ctaPrimary')}
					</Link>
					
					{/* Language Toggle */}
					<button
						onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
						className="px-3 py-1.5 rounded-md text-sm font-medium text-dasm-navy dark:text-dark-text-primary hover:bg-light-bg-section dark:hover:bg-dark-bg-section transition-colors border border-light-border-default dark:border-dark-border-default"
						aria-label="Toggle language"
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

					{/* Login Icon */}
					<Link
						href="#login"
						className="p-2 rounded-md text-dasm-navy dark:text-dark-text-primary hover:bg-light-bg-section dark:hover:bg-dark-bg-section transition-colors"
						aria-label="Login"
					>
						<User className="h-5 w-5" />
					</Link>
				</nav>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					className="md:hidden p-2 rounded-md text-dasm-navy dark:text-dark-text-primary"
					aria-label="Menu"
				>
					<Menu className="h-6 w-6" />
				</button>
			</div>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className="md:hidden border-t border-light-border-default dark:border-dark-border-default bg-light-bg-main dark:bg-dark-bg-main">
					<div className="container container-padding py-4 space-y-3">
						<Link 
							href="#browse" 
							className="block btn btn-outline w-full text-center"
							onClick={() => setMobileMenuOpen(false)}
						>
							{t('ctaSecondary')}
						</Link>
						<Link 
							href="#cta" 
							className="block btn btn-primary w-full text-center"
							onClick={() => setMobileMenuOpen(false)}
						>
							{t('ctaPrimary')}
						</Link>
						<div className="flex items-center justify-between pt-2 border-t border-light-border-default dark:border-dark-border-default">
							<button
								onClick={() => {
									setLanguage(language === 'ar' ? 'en' : 'ar');
									setMobileMenuOpen(false);
								}}
								className="px-4 py-2 rounded-md text-sm font-medium text-dasm-navy dark:text-dark-text-primary"
							>
								{language === 'ar' ? 'EN' : 'AR'}
							</button>
							<button
								onClick={() => {
									toggleTheme();
									setMobileMenuOpen(false);
								}}
								className="p-2 rounded-md text-dasm-navy dark:text-dark-text-primary"
							>
								{theme === 'light' ? (
									<Moon className="h-5 w-5" />
								) : (
									<Sun className="h-5 w-5" />
								)}
							</button>
							<Link
								href="#login"
								className="p-2 rounded-md text-dasm-navy dark:text-dark-text-primary"
								onClick={() => setMobileMenuOpen(false)}
							>
								<User className="h-5 w-5" />
							</Link>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
