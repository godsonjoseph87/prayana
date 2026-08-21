export interface TransportService {
  id: string
  slug: string
  title: string
  subtitle: string
  iconName: string
  image: string
  shortDescription: string
  fullDescription: string
  highlights: string[]
  suitableVehicles: string[]
  recommendedFor: string[]
}

export const SERVICES_DATA: TransportService[] = [
  {
    id: 'local-taxi',
    slug: 'local-taxi',
    title: 'Local Taxi Service',
    subtitle: 'On-time point-to-point city transit & hourly rental packages',
    iconName: 'Car',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Clean, air-conditioned sedans and SUVs for city errands, business meetings, and local sightseeing.',
    fullDescription: 'Whether you have a day of meetings across Kochi, shopping errands in town, or a hospital visit, our local taxi service provides guaranteed punctuality, spotless vehicles, and courteous drivers who know the fastest routes.',
    highlights: [
      'Point-to-point direct transfers & flexible 4hr / 8hr / 12hr city packages',
      'Zero surge pricing during peak hours or weather changes',
      'Clean, air-conditioned sedans and SUVs',
      'Punctual door-to-door pickup',
    ],
    suitableVehicles: ['dzire', 'etios', 'innova', 'innova-crysta'],
    recommendedFor: [
      'Business meetings & corporate city visits',
      'Hospital & appointment trips',
      'City shopping & sightseeing',
      'Station & local hub transfers',
    ],
  },
  {
    id: 'airport-transfer',
    slug: 'airport-transfer',
    title: 'Airport Pickup & Drop',
    subtitle: 'Reliable Cochin (COK), Trivandrum (TRV) & Calicut (CCJ) transfers',
    iconName: 'Plane',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Flight-tracked airport pickups with complimentary waiting time, luggage assistance, and zero delays.',
    fullDescription: 'Never worry about missing a flight or finding a cab after landing. Our airport transfer service includes live flight tracking, a courteous chauffeur waiting with a name board at the arrival gate, and spacious boot capacity for all luggage.',
    highlights: [
      'Real-time flight tracking for early or delayed arrivals',
      'Meet & Greet service with personalized name board',
      'Generous boot space for international and domestic luggage',
      '24/7 round-the-clock availability across all airports',
    ],
    suitableVehicles: ['etios', 'innova', 'innova-crysta', '16-seater-urbania', '12-seater-traveller'],
    recommendedFor: [
      'International & NRI holiday arrivals',
      'Corporate executives & business travellers',
      'Large family arrivals with heavy baggage',
      'Late-night & early-morning departures',
    ],
  },
  {
    id: 'outstation-travel',
    slug: 'outstation-travel',
    title: 'Outstation & Intercity Travel',
    subtitle: 'Comfortable long-distance journeys across Kerala, Tamil Nadu & Karnataka',
    iconName: 'MapPin',
    image: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Experienced hill-certified chauffeurs, transparent per-km rates, and smooth highway cruisers.',
    fullDescription: 'Planning a multi-day trip to Munnar, Wayanad, Kodaikanal, Ooty, or Bengaluru? Our outstation fleet is maintained to the highest safety standards with experienced drivers certified for hill driving, winding ghat roads, and long expressway stretches.',
    highlights: [
      'Transparent billing: clear per-km rate, driver allowance, and toll estimates',
      'Specialized hill-driving drivers for Munnar, Vagamon, and Ooty',
      'Flexible itineraries with on-demand stops and sightseeing',
      'Single-day or multi-week touring packages',
    ],
    suitableVehicles: ['innova', 'innova-crysta', '16-seater-urbania', '12-seater-traveller', '17-seater-traveller'],
    recommendedFor: [
      'Hill station vacations (Munnar, Thekkady, Wayanad)',
      'Interstate travel to Bangalore, Coimbatore, Madurai',
      'Weekend family getaways & temple visits',
      'Roundtrip holiday road tours',
    ],
  },
  {
    id: 'family-group-tours',
    slug: 'family-group-tours',
    title: 'Family & Group Tours',
    subtitle: 'Tailored holiday transport with 12 to 49 seater luxury vehicles',
    iconName: 'Users',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Spacious Tempo Travellers, Urbania luxury vans, and buses keeping your entire group together in comfort.',
    fullDescription: 'Traveling together as one unified group makes holidays unforgettable. We provide modern Force Travellers, ultra-luxurious Urbanias, and air-conditioned coaches equipped with pushback seats, surround sound entertainment, and large luggage capacity.',
    highlights: [
      'Keep your entire family or friendship group together',
      'Full entertainment setup with LED screens and audio systems',
      'Spacious luggage compartments for multi-day itineraries',
      'Custom stops at waterfalls, viewpoints, and authentic eateries',
    ],
    suitableVehicles: ['12-seater-traveller', '16-seater-urbania', '17-seater-traveller', '19-seater-traveller', '23-seater-marcopolo'],
    recommendedFor: [
      'Extended family Kerala holiday packages',
      'Sabarimala & Guruvayur pilgrimage yatras',
      'College & school reunion trips',
      'Friend road-trips & beach holidays',
    ],
  },
  {
    id: 'corporate-transportation',
    slug: 'corporate-transportation',
    title: 'Corporate & Executive Transit',
    subtitle: 'VIP chauffeur services, conference shuttles & employee transport solutions',
    iconName: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Polite, uniformed chauffeurs, GST compliant invoicing, and punctual executive fleet.',
    fullDescription: 'From high-profile board delegations in luxury Innova Crystas to convention shuttle fleets in Force Urbanias and BharatBenz coaches, we provide reliable, corporate-grade transportation backed by professional account managers.',
    highlights: [
      'Punctuality guarantee with backup fleet support',
      'Uniformed, bilingual, executive chauffeurs',
      'GST billing, automated trip logs, and corporate credit terms',
      'Fleet branding and customized coordination available',
    ],
    suitableVehicles: ['innova-crysta', '16-seater-urbania', '23-seater-marcopolo', '45-seater-bharatbenz'],
    recommendedFor: [
      'Corporate conferences, summits & offsites',
      'Client & VIP executive airport transfers',
      'Factory visits & client inspections',
      'Daily/Monthly employee corporate shuttles',
    ],
  },
  {
    id: 'wedding-transportation',
    slug: 'wedding-transportation',
    title: 'Wedding & Event Transportation',
    subtitle: 'Coordinated guest transit, bridal luxury cars & grand bus convoys',
    iconName: 'Heart',
    image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Flawless guest logistics from airports and hotels to wedding venues with dedicated ground coordinators.',
    fullDescription: 'Make your special day effortless for every guest. We handle complete wedding transport logistics—from luxury bridal cars to continuous guest shuttle loops between hotels and marriage halls in air-conditioned Travellers and luxury coaches.',
    highlights: [
      'Complete end-to-end wedding logistics management',
      'Pristine, decorated vehicles matching wedding themes',
      'Coordinated arrival pickups for out-of-town guests',
      'Dedicated on-ground fleet coordinator for smooth flow',
    ],
    suitableVehicles: ['innova-crysta', '16-seater-urbania', '23-seater-marcopolo', '45-seater-volvo', '49-seater-ashok-leyland'],
    recommendedFor: [
      'Destination weddings in Kerala (Kochi, Kumarakom, Kovalam)',
      'Baraat processions & venue guest shuttles',
      'Bridal party luxury transport',
      'Post-wedding family sightseeing trips',
    ],
  },
]
