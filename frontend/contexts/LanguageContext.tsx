'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, type Language } from '@/lib/translations';

type LanguageContextType = {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: keyof typeof translations.ar) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguageState] = useState<Language>('ar');

	useEffect(() => {
		// Load from localStorage on mount
		const saved = localStorage.getItem('language') as Language;
		if (saved === 'ar' || saved === 'en') {
			setLanguageState(saved);
		}
	}, []);

	const setLanguage = (lang: Language) => {
		setLanguageState(lang);
		localStorage.setItem('language', lang);
		// Update HTML dir attribute
		document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
		document.documentElement.lang = lang;
	};

	useEffect(() => {
		// Update HTML dir on language change
		document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
		document.documentElement.lang = language;
	}, [language]);

	const t = (key: keyof typeof translations.ar): string => {
		const trans = translations[language];
		return (trans[key] as string) || '';
	};

	return (
		<LanguageContext.Provider value={{ language, setLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (!context) {
		// Fallback for SSG/SSR - return default Arabic
		return {
			language: 'ar' as Language,
			setLanguage: () => {},
			t: (key: keyof typeof translations.ar) => translations.ar[key] || ''
		};
	}
	return context;
}
