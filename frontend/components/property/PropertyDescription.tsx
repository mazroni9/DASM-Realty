'use client';

import { useLanguage } from '@/contexts/LanguageContext';

interface PropertyDescriptionProps {
	description: string;
	descriptionEn?: string;
}

export function PropertyDescription({ description, descriptionEn }: PropertyDescriptionProps) {
	const { language } = useLanguage();
	
	return (
		<section className="py-8 bg-light-bg-main dark:bg-dark-bg-main">
			<div className="container container-padding">
				<h2 className="text-2xl font-bold text-dasm-navy dark:text-dark-text-primary mb-6">
					{language === 'ar' ? 'وصف العقار' : 'Property Description'}
				</h2>
				<div className="prose prose-lg max-w-none dark:prose-invert">
					<p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed text-base">
						{language === 'ar' ? description : (descriptionEn || description)}
					</p>
				</div>
			</div>
		</section>
	);
}
