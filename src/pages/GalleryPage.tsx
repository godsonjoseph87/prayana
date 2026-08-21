import { useState } from 'react'
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData'
import { MapPin, X, ZoomIn, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function GalleryPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'vehicles' | 'journeys' | 'events'>('all')
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null)

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeTab === 'all') return true
    return item.category === activeTab
  })

  return (
    <div className="min-h-screen bg-brand-cream py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green">
            Visual Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-light text-brand-dark tracking-tight mt-2 font-helvetica-neue">
            Fleet & Journey Gallery
          </h1>
          <p className="text-base text-brand-dark/75 mt-3 leading-relaxed">
            Explore authentic photographs of our vehicle fleet, picturesque Kerala touring routes, and successful corporate & wedding events.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1.5 rounded-full border border-brand-dark/10 shadow-xs flex flex-wrap gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-brand-dark text-white shadow-xs'
                  : 'text-brand-dark/70 hover:text-brand-dark hover:bg-brand-light'
              }`}
            >
              All Photos ({GALLERY_ITEMS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('vehicles')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'vehicles'
                  ? 'bg-brand-dark text-white shadow-xs'
                  : 'text-brand-dark/70 hover:text-brand-dark hover:bg-brand-light'
              }`}
            >
              Vehicles & Coaches
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('journeys')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'journeys'
                  ? 'bg-brand-dark text-white shadow-xs'
                  : 'text-brand-dark/70 hover:text-brand-dark hover:bg-brand-light'
              }`}
            >
              Journeys & Destinations
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('events')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'events'
                  ? 'bg-brand-dark text-white shadow-xs'
                  : 'text-brand-dark/70 hover:text-brand-dark hover:bg-brand-light'
              }`}
            >
              Weddings & Events
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative h-80 rounded-3xl overflow-hidden bg-brand-light border border-brand-dark/10 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Top Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                {item.location && (
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-300 mb-1">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                )}
                <h3 className="text-lg font-bold text-white leading-tight font-helvetica-neue">
                  {item.title}
                </h3>
                <p className="text-xs text-white/80 mt-1.5 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-brand-dark rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
                aria-label="Close photo"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="max-h-[65vh] w-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  {selectedPhoto.location && (
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                      {selectedPhoto.location}
                    </span>
                  )}
                  <h3 className="text-xl font-bold font-helvetica-neue">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-xs text-white/80 mt-1 max-w-xl">
                    {selectedPhoto.caption}
                  </p>
                </div>
                <Link
                  to="/booking"
                  className="px-6 py-3 bg-white text-brand-dark font-bold text-xs uppercase tracking-wider rounded-full hover:bg-brand-cream transition-colors shrink-0"
                >
                  Book for this Route
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/fleet"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-dark hover:bg-brand-green text-white font-semibold text-xs uppercase tracking-wider rounded-full transition-colors shadow-md"
          >
            <span>Explore All Fleet Vehicles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
