import { GALLERY_ITEMS } from '../data/galleryData'
import { MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function FeaturedDestinations() {
  // Filter for journeys and events to get the destinations the user requested, excluding specific events
  const destinations = GALLERY_ITEMS.filter(
    (item) => (item.category === 'journeys' || item.category === 'events') && item.id !== 'g-11' && item.id !== 'g-12'
  )

  return (
    <section className="py-16 md:py-24 bg-white border-b border-brand-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green">
              Popular Routes
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-brand-dark tracking-tight mt-1 font-helvetica-neue">
              Discover Our Destinations
            </h2>
            <p className="text-sm text-brand-dark/70 mt-2 max-w-xl">
              From misty hills to heritage temples, experience the best of South India with our premium fleet and experienced chauffeurs.
            </p>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark hover:bg-brand-green text-white text-xs font-bold uppercase tracking-wider rounded-full transition-colors shrink-0"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* CSS grid for the destination cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.map((item) => (
            <div
              key={item.id}
              className="group relative h-72 rounded-3xl overflow-hidden bg-brand-light border border-brand-dark/10 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Bottom Details */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                {item.location && (
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-300 mb-1">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                )}
                <h3 className="text-base font-bold text-white leading-tight font-helvetica-neue mb-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-white/80 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-dark hover:text-brand-green transition-colors"
          >
            <span>Book Your Next Journey With Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
