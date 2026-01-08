'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PropertyHero } from '@/components/property/PropertyHero';
import { PropertyGallery } from '@/components/property/PropertyGallery';
import { PropertySpecs } from '@/components/property/PropertySpecs';
import { PropertyDescription } from '@/components/property/PropertyDescription';
import { PropertyMap } from '@/components/property/PropertyMap';
import { OfficeInfo } from '@/components/property/OfficeInfo';
import { AuctionStatus } from '@/components/property/AuctionStatus';

// Mock data - In production, fetch from API
const mockProperty = {
	id: '1',
	name: 'فيلا فاخرة في حي النرجس',
	nameEn: 'Luxury Villa in Al-Narjis District',
	type: 'villa' as const,
	location: 'حي النرجس',
	city: 'الرياض',
	price: 2500000,
	listingType: 'sale' as const,
	auctionEnabled: true,
	images: [
		'/api/placeholder/800/600',
		'/api/placeholder/800/600',
		'/api/placeholder/800/600',
		'/api/placeholder/800/600'
	],
	videoUrl: undefined,
	description: 'فيلا فاخرة على مساحة 500 متر مربع، تتكون من 5 غرف نوم و4 دورات مياه، مع صالة واسعة وحديقة خاصة. العقار في موقع ممتاز قريب من الخدمات والمرافق.',
	descriptionEn: 'Luxury villa on 500 square meters, consisting of 5 bedrooms and 4 bathrooms, with a spacious living room and private garden. The property is in an excellent location close to services and facilities.',
	area: 500,
	rooms: 5,
	bathrooms: 4,
	age: 3,
	propertyType: 'freehold' as const,
	licenseNumber: 'RE-2024-001234',
	latitude: 24.7136,
	longitude: 46.6753,
	address: 'حي النرجس، الرياض، المملكة العربية السعودية',
	office: {
		id: 'office-1',
		name: 'مكتب داسم للعقارات',
		nameEn: 'DASM Real Estate Office',
		rating: 4.5,
		phone: '+966501234567',
		propertiesCount: 45
	},
	auction: {
		status: 'live' as const,
		currentBid: 2750000,
		biddersCount: 12,
		endsAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) // 2 days from now
	}
};

export default function PropertyPage({ params }: { params: { id: string } }) {
	const property = mockProperty; // In production: fetch property by params.id
	
	return (
		<div className="min-h-dvh">
			<Navbar />
			<main>
				<PropertyHero
					name={property.name}
					type={property.type}
					location={property.location}
					city={property.city}
					price={property.price}
					listingType={property.listingType}
					auctionEnabled={property.auctionEnabled}
					officeId={property.office.id}
					officeName={property.office.name}
				/>
				<PropertyGallery images={property.images} videoUrl={property.videoUrl} />
				<PropertySpecs
					area={property.area}
					rooms={property.rooms}
					bathrooms={property.bathrooms}
					age={property.age}
					propertyType={property.propertyType}
					licenseNumber={property.licenseNumber}
				/>
				<PropertyDescription
					description={property.description}
					descriptionEn={property.descriptionEn}
				/>
				<PropertyMap
					latitude={property.latitude}
					longitude={property.longitude}
					address={property.address}
				/>
				{property.auctionEnabled && (
					<AuctionStatus
						status={property.auction.status}
						currentBid={property.auction.currentBid}
						biddersCount={property.auction.biddersCount}
						endsAt={property.auction.endsAt}
					/>
				)}
				<OfficeInfo
					id={property.office.id}
					name={property.office.name}
					rating={property.office.rating}
					phone={property.office.phone}
					propertiesCount={property.office.propertiesCount}
				/>
			</main>
			<Footer />
		</div>
	);
}
