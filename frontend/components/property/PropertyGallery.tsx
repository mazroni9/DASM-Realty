'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Play } from 'lucide-react';

interface PropertyGalleryProps {
	images: string[];
	videoUrl?: string;
}

export function PropertyGallery({ images, videoUrl }: PropertyGalleryProps) {
	const [selectedImage, setSelectedImage] = useState(0);
	const [isFullscreen, setIsFullscreen] = useState(false);

	if (images.length === 0) {
		return (
			<section className="py-8 bg-light-bg-main dark:bg-dark-bg-main">
				<div className="container container-padding">
					<div className="aspect-video bg-light-bg-section dark:bg-dark-bg-section rounded-lg flex items-center justify-center">
						<span className="text-light-text-muted dark:text-dark-text-muted">
							No images available
						</span>
					</div>
				</div>
			</section>
		);
	}

	return (
		<>
			<section className="py-8 bg-light-bg-main dark:bg-dark-bg-main">
				<div className="container container-padding">
					{/* Main Image */}
					<div className="mb-4">
						<div 
							className="relative aspect-video bg-light-bg-section dark:bg-dark-bg-section rounded-lg overflow-hidden cursor-pointer group"
							onClick={() => setIsFullscreen(true)}
						>
							<Image
								src={images[selectedImage]}
								alt={`Property image ${selectedImage + 1}`}
								fill
								className="object-cover transition-transform duration-normal group-hover:scale-105"
								priority
							/>
							{videoUrl && selectedImage === 0 && (
								<div className="absolute inset-0 flex items-center justify-center bg-black/20">
									<div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center">
										<Play className="h-8 w-8 text-dasm-navy" fill="currentColor" />
									</div>
								</div>
							)}
						</div>
					</div>

					{/* Thumbnails */}
					<div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
						{images.map((img, idx) => (
							<button
								key={idx}
								onClick={() => setSelectedImage(idx)}
								className={`relative aspect-square rounded-md overflow-hidden border-2 transition-all ${
									selectedImage === idx
										? 'border-dasm-green'
										: 'border-light-border-default dark:border-dark-border-default opacity-60 hover:opacity-100'
								}`}
							>
								<Image
									src={img}
									alt={`Thumbnail ${idx + 1}`}
									fill
									className="object-cover"
								/>
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Fullscreen Modal */}
			{isFullscreen && (
				<div
					className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
					onClick={() => setIsFullscreen(false)}
				>
					<button
						onClick={() => setIsFullscreen(false)}
						className="absolute top-4 right-4 text-white hover:text-dasm-green transition-colors"
						aria-label="Close"
					>
						<X className="h-8 w-8" />
					</button>
					<div className="relative max-w-7xl w-full h-full flex items-center justify-center">
						<Image
							src={images[selectedImage]}
							alt={`Property image ${selectedImage + 1}`}
							width={1920}
							height={1080}
							className="max-w-full max-h-full object-contain"
						/>
					</div>
					{images.length > 1 && (
						<>
							<button
								onClick={(e) => {
									e.stopPropagation();
									setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
								}}
								className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-dasm-green transition-colors"
								aria-label="Previous"
							>
								<svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
								</svg>
							</button>
							<button
								onClick={(e) => {
									e.stopPropagation();
									setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
								}}
								className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-dasm-green transition-colors"
								aria-label="Next"
							>
								<svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</button>
						</>
					)}
				</div>
			)}
		</>
	);
}
