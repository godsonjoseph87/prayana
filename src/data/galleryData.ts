export interface GalleryItem {
  id: string
  title: string
  category: 'all' | 'vehicles' | 'journeys' | 'events'
  vehicleType?: string
  image: string
  caption: string
  location?: string
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // Vehicles
  {
    id: 'g-1',
    title: 'Force Urbania 16 Seater Luxury Van',
    category: 'vehicles',
    vehicleType: 'Tempo Travellers',
    image: 'https://images.openai.com/static-rsc-4/6v9w5vHNV0BO7Tk5WjH5ZyQYSdvu6Ohhuw-YtBn76kj2kXdfmhGBKC_XmhTZ3L38Wa-foNDu2DtApMu6aZbFZFxHxSxHocSd8aL8ST_lAGLkiKeLMmb5mADR6mnhh3ej18u1OSWSq9N1bceiaq7yhb8-NnnK843QD0c06H5D9_0?purpose=inline',
    caption: 'Executive Force Urbania with aircraft-style panoramic windows and plush pushback seating.',
    location: 'Kannur Hub',
  },
  {
    id: 'g-2',
    title: 'Toyota Innova Crysta Luxury Captain Seats',
    category: 'vehicles',
    vehicleType: 'SUVs & Premium',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Toyota_Innova_Crysta_2.4_Z_front_right.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
    caption: 'Pristine Innova Crysta ready for VIP corporate delegate transfer.',
    location: 'Cochin International Airport',
  },
  {
    id: 'g-3',
    title: 'BharatBenz 45 Seater Glider Luxury Coach',
    category: 'vehicles',
    vehicleType: 'Large Buses',
    image: 'https://images.openai.com/static-rsc-4/QHNPXSPg9DAOY4oMYW4R5Pushxuc2rbsoQ_ZSMbBunpUMf5JeH-HsTFWlut9JJtb-ePkQeWTs8XGwhEGOkcf0SdS2oyNKcut-Ie3Z7i_3KsiCGSiosvSKYubjMJGPYMAM72gB289SK3Sm3Ffbb3XF6o0YH4X8ehDEpfaVk3itWY?purpose=inline',
    caption: 'Daimler air-suspension high-deck coach chartered for an international medical conference.',
    location: 'Le Méridien Kannur',
  },
  {
    id: 'g-4',
    title: 'Maruti Suzuki Dzire Executive Taxi',
    category: 'vehicles',
    vehicleType: 'Cars',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Maruti_Suzuki_Dzire_VXi_VVT_-_Subcompact_Car_-_Kolkata_2018-01-17_7574.JPG?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
    caption: 'Sanitized and air-conditioned Dzire ready for point-to-point city transit.',
    location: 'Marine Drive, Kannur',
  },
  {
    id: 'g-5',
    title: 'Tata Marcopolo 23 Seater Air-Suspension Mini Bus',
    category: 'vehicles',
    vehicleType: 'Mini Buses',
    image: 'https://images.openai.com/static-rsc-4/a0aTYe2LmQuOzurYMD0MfYyM3XLNT4TYjWWfRWyVXJwQ7fIGWZ87ky1GXwjhEoKOi8bVMIUERELiRJvcnmmgMKscl_KziY-mAVHtSOncpZ-nqRIvWwY5tBn9DLiFjv9eNEzpiEybRSzyXI0chrGz0_lFzE2aPUwTxazTRhk3-70?purpose=inline',
    caption: 'Smooth highway cruiser with spacious underbody luggage bays.',
    location: 'Trivandrum City',
  },

  // Journeys
  {
    id: 'g-6',
    title: 'Munnar Tea Plantation Valley Drive',
    category: 'journeys',
    image: 'https://images.pexels.com/photos/29280008/pexels-photo-29280008.jpeg',
    caption: 'Scenic mountain roads navigated safely by our experienced hill chauffeurs.',
    location: 'Munnar Hill Station',
  },
  {
    id: 'g-7',
    title: 'Alleppey Backwaters & Houseboat Pickup',
    category: 'journeys',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    caption: 'Coordinated pickup for guests arriving from tranquil backwater cruises.',
    location: 'Punnamada Lake, Alappuzha',
  },
  {
    id: 'g-8',
    title: 'Wayanad Ghat Pass Sightseeing Tour',
    category: 'journeys',
    image: 'https://images.pexels.com/photos/16573093/pexels-photo-16573093.jpeg',
    caption: 'Smooth and steady ride across scenic hairpin turns with the 17-Seater Traveller.',
    location: 'Thamarassery Churam, Wayanad',
  },
  {
    id: 'g-9',
    title: 'Vagamon Pine Forest Road Trip',
    category: 'journeys',
    image: 'https://images.pexels.com/photos/18558163/pexels-photo-18558163.jpeg',
    caption: 'Weekend team getaway to misty pine valleys.',
    location: 'Vagamon Hills',
  },
  {
    id: 'g-13',
    title: 'Kovalam Beach',
    category: 'journeys',
    image: 'https://images.pexels.com/photos/30205132/pexels-photo-30205132.jpeg',
    caption: 'Enjoy the serene waves and golden sands at this iconic beach destination.',
    location: 'Thiruvananthapuram, Kerala',
  },
  {
    id: 'g-14',
    title: 'Ramakkalmedu',
    category: 'journeys',
    image: 'https://images.pexels.com/photos/13149196/pexels-photo-13149196.jpeg',
    caption: 'Experience breathtaking panoramic views from this pristine hill station.',
    location: 'Idukki, Kerala',
  },
  {
    id: 'g-15',
    title: 'Kannur – Fort Kannur',
    category: 'journeys',
    image: 'https://images.pexels.com/photos/34252177/pexels-photo-34252177.jpeg',
    caption: 'Explore rich heritage, cultural architecture, and iconic Chinese fishing nets.',
    location: 'Kannur, Kerala',
  },

  // Events
  {
    id: 'g-10',
    title: 'Destination Wedding Guest Fleet Convoy',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    caption: 'Seamless multi-vehicle coordination for grand wedding receptions.',
    location: 'Kumarakom Lake Resort',
  },
  {
    id: 'g-11',
    title: 'Global Tech Summit Delegate Transport',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    caption: 'Fleet of 8 coaches and luxury SUVs deployed for international technology symposium.',
    location: 'Lulu Bolgatty International Convention Centre',
  },
  {
    id: 'g-12',
    title: 'Heritage Temple Tour Group',
    category: 'events',
    image: 'https://images.pexels.com/photos/32654427/pexels-photo-32654427.jpeg',
    caption: 'Spiritual group pilgrimage across South India temples.',
    location: 'Trivandrum Padmanabhaswamy Temple',
  },
]
