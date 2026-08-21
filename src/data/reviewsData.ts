export interface Review {
  id: string
  name: string
  roleOrLocation: string
  rating: number
  tripType: string
  vehicleUsed: string
  comment: string
  date: string
  avatar?: string
}

export const CUSTOMER_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Dr. Anand Varma',
    roleOrLocation: 'Cochin, Kerala',
    rating: 5,
    tripType: '7-Day Kerala Family Tour (Munnar - Thekkady - Alleppey)',
    vehicleUsed: '16 Seater Force Urbania',
    comment: 'The Force Urbania was immaculate and extremely comfortable. Traveling with elderly parents and kids, the smooth suspension made winding Munnar roads completely fatigue-free. Chauffeur Rajesh was exceptionally polite, punctual, and knowledgeable about local dining spots.',
    date: 'February 2026',
  },
  {
    id: 'rev-2',
    name: 'Meera & Kevin Thomas',
    roleOrLocation: 'Dubai, UAE / Kochi',
    rating: 5,
    tripType: 'Destination Wedding Guest Logistics',
    vehicleUsed: 'Innova Crysta & 2x 23-Seater Marcopolo Buses',
    comment: 'We booked Prayana for our 3-day wedding in Kumarakom. Handling 120 guests arriving from various flights was daunting, but their ground team coordinated every airport pickup seamlessly. Vehicles were spotless, chilled AC, and always on time.',
    date: 'January 2026',
  },
  {
    id: 'rev-3',
    name: 'Siddharth Menon',
    roleOrLocation: 'Infosys BPM, Trivandrum',
    rating: 5,
    tripType: 'Corporate Leadership Offsite',
    vehicleUsed: '45 Seater BharatBenz Glider',
    comment: 'Top-tier professionalism. The BharatBenz Glider is hands down the smoothest bus we have ever chartered. USB chargers for every seat, crystal clear mic for our presentations, and transparent billing with zero surprise add-ons.',
    date: 'December 2025',
  },
  {
    id: 'rev-4',
    name: 'Suresh Kumar G.',
    roleOrLocation: 'Chennai, Tamil Nadu',
    rating: 5,
    tripType: 'Sabarimala Pilgrimage Yatra',
    vehicleUsed: '17 Seater Force Traveller',
    comment: 'Our annual temple trip with 15 devotees was handled with great devotion and care. The driver was experienced on ghat routes, drove safely at night, and accommodated all our early morning puja schedules without any hesitation.',
    date: 'November 2025',
  },
  {
    id: 'rev-5',
    name: 'Rachel & James Foster',
    roleOrLocation: 'London, UK',
    rating: 5,
    tripType: 'Kerala Cultural & Wildlife Tour',
    vehicleUsed: 'Toyota Innova Crysta',
    comment: 'As foreign travelers visiting India for the first time, safety and punctuality were our top priorities. Our driver Sunil made us feel secure and welcomed throughout our 10-day trip. The Innova Crysta was spacious, cool, and spotless.',
    date: 'October 2025',
  },
  {
    id: 'rev-6',
    name: 'Kavitha Radhakrishnan',
    roleOrLocation: 'Kottayam, Kerala',
    rating: 5,
    tripType: 'Airport Pickup & Drop',
    vehicleUsed: 'Toyota Etios',
    comment: 'Super fast booking via WhatsApp! Our midnight flight to Cochin was delayed by 40 minutes, but the driver tracked our flight and was waiting right outside. Clean car, fair price, and hassle-free payment.',
    date: 'January 2026',
  },
]

export const TRUST_METRICS = [
  { value: '10+', label: 'Years of Excellence', description: 'Serving travelers across South India' },
  { value: '25+', label: 'Fleet Vehicles', description: 'From 3-seat sedans to 49-seat luxury coaches' },
  { value: '15,000+', label: 'Happy Travellers', description: 'Families, tourists & corporate delegates' },
  { value: '50,000+', label: 'Trips Completed', description: 'With 99.8% on-time departure track record' },
]
