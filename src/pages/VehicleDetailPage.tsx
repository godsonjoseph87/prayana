import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getVehicleBySlug, FLEET_DATA } from '../data/fleetData'
import { VehicleCard } from '../components/VehicleCard'
import {
  Users,
  Wind,
  Briefcase,
  CheckCircle2,
  Phone,
  MessageSquare,
  Calendar,
  ShieldCheck,
  Sparkles,
  ChevronRight,
} from 'lucide-react'

export function VehicleDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const vehicle = getVehicleBySlug(slug || '')

  // Active gallery image
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Quick inquiry form state
  const [formName, setFormName] = useState('')
  const [formPhone, setFormPhone] = useState('')
  const [formDate, setFormDate] = useState('')
  const [formPickup, setFormPickup] = useState('')
  const [formDrop, setFormDrop] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!vehicle) {
    return (
      <div className="min-h-[70vh] bg-brand-cream flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-md bg-white p-8 rounded-3xl border border-brand-dark/10 shadow-md">
          <h2 className="text-2xl font-bold text-brand-dark mb-2">
            Vehicle Not Found
          </h2>
          <p className="text-sm text-brand-dark/70 mb-6">
            The vehicle profile you are looking for does not exist or has been updated.
          </p>
          <Link
            to="/fleet"
            className="px-6 py-3 bg-brand-dark text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-brand-green transition-colors"
          >
            ← Back to Fleet Catalog
          </Link>
        </div>
      </div>
    )
  }

  const currentImage = selectedImage || vehicle.image

  const divider = '\u2501'.repeat(26);
  const whatsappMessage = `${divider}\n` +
    `       \u{1F690} *TRAVEL ENQUIRY* \u{1F334}\n` +
    `${divider}\n\n` +
    `\u{1F464} *Customer Details*\n\n` +
    `*Name*       : ${formName || 'Customer'}\n` +
    `*Phone*      : ${formPhone}\n\n` +
    `\u{1F6E3}\u{FE0F} *Journey Details*\n\n` +
    `*Vehicle*    : ${vehicle.name}\n` +
    `*Passengers* : ${vehicle.capacityDisplay}\n` +
    `*AC Type*    : ${vehicle.acType}\n` +
    (formDate ? `*Date*       : ${formDate}\n\n` : '\n') +
    `\u{1F4CD} *Pickup*     : ${formPickup || 'Not Specified'}\n` +
    `\u{1F3C1} *Destination*: ${formDrop || 'Not Specified'}\n\n` +
    `${divider}\n` +
    `Generated from:\n` +
    `*Prayana Travels* \u{2728}`;

  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    window.open(whatsappUrl, '_blank')
  }

  // Related vehicles from same category or capacity
  const relatedVehicles = FLEET_DATA.filter(
    (v) => v.id !== vehicle.id && (v.category === vehicle.category || Math.abs(v.capacity - vehicle.capacity) <= 6)
  ).slice(0, 3)

  return (
    <div className="min-h-screen bg-brand-cream py-8 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-brand-dark/60 mb-6">
          <Link to="/" className="hover:text-brand-dark">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/fleet" className="hover:text-brand-dark">Our Fleet</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/fleet?category=${vehicle.category}`} className="hover:text-brand-dark">
            {vehicle.categoryName}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="font-semibold text-brand-dark truncate">{vehicle.name}</span>
        </nav>

        {/* Vehicle Header & Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Visual Gallery & Detailed Specs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Main Featured Image */}
            <div className="relative rounded-3xl overflow-hidden bg-brand-light border border-brand-dark/10 shadow-md h-[340px] sm:h-[440px]">
              <img
                src={currentImage}
                alt={vehicle.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 bg-brand-dark text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm">
                  {vehicle.categoryName}
                </span>
                <span className="px-3 py-1.5 bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm">
                  {vehicle.acType}
                </span>
              </div>
            </div>

            {/* Thumbnail Gallery Strip */}
            {vehicle.galleryImages && vehicle.galleryImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {vehicle.galleryImages.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`relative w-24 h-18 rounded-xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                      currentImage === imgUrl
                        ? 'border-brand-green ring-2 ring-brand-green/30'
                        : 'border-brand-dark/15 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`${vehicle.name} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* About the Vehicle Block */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-dark/10 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-dark font-helvetica-neue mb-3">
                About the {vehicle.name}
              </h2>
              <p className="text-sm sm:text-base text-brand-dark/80 font-light leading-relaxed mb-6">
                {vehicle.fullDescription}
              </p>

              {/* Key Features Checklist */}
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-dark/70 mb-3">
                Included Amenities & Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {vehicle.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-dark/85">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Technical Specifications Table */}
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-dark/70 mb-3 pt-4 border-t border-brand-dark/10">
                Technical Specifications
              </h3>
              <div className="bg-brand-light/60 rounded-2xl p-4 sm:p-5 border border-brand-dark/10 divide-y divide-brand-dark/10 text-xs sm:text-sm">
                <div className="py-2.5 flex justify-between">
                  <span className="text-brand-dark/60">Seating Layout:</span>
                  <span className="font-semibold text-brand-dark text-right">{vehicle.specs.seatingConfiguration}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-brand-dark/60">Air Conditioning:</span>
                  <span className="font-semibold text-brand-dark text-right">{vehicle.acType} with dedicated vents</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-brand-dark/60">Luggage Room:</span>
                  <span className="font-semibold text-brand-dark text-right">{vehicle.luggageCapacity}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-brand-dark/60">Audio / Video:</span>
                  <span className="font-semibold text-brand-dark text-right">{vehicle.specs.audioVideo}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-brand-dark/60">Charging Facilities:</span>
                  <span className="font-semibold text-brand-dark text-right">{vehicle.specs.chargingPorts}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-brand-dark/60">Legroom & Comfort:</span>
                  <span className="font-semibold text-brand-dark text-right">{vehicle.specs.legroom}</span>
                </div>
                {vehicle.specs.suspension && (
                  <div className="py-2.5 flex justify-between">
                    <span className="text-brand-dark/60">Suspension Type:</span>
                    <span className="font-semibold text-brand-dark text-right">{vehicle.specs.suspension}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Key Overview & Quick Booking Action Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Header Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-dark/10 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-green mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{vehicle.vehicleType}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-brand-dark font-helvetica-neue tracking-tight">
                {vehicle.name}
              </h1>
              <p className="text-xs sm:text-sm text-brand-dark/60 mt-1 mb-6">
                {vehicle.subtitle}
              </p>

              {/* 4 Core Quick Spec Badges */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-brand-light p-3.5 rounded-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-dark text-white flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-emerald-300" />
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-dark/60 uppercase font-bold block">Capacity</span>
                    <span className="text-xs font-bold text-brand-dark">{vehicle.capacity} Passengers</span>
                  </div>
                </div>

                <div className="bg-brand-light p-3.5 rounded-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-dark text-white flex items-center justify-center shrink-0">
                    <Wind className="w-4 h-4 text-emerald-300" />
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-dark/60 uppercase font-bold block">Climate</span>
                    <span className="text-xs font-bold text-brand-dark">{vehicle.acType}</span>
                  </div>
                </div>

                <div className="bg-brand-light p-3.5 rounded-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-dark text-white flex items-center justify-center shrink-0">
                    <Briefcase className="w-4 h-4 text-emerald-300" />
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-dark/60 uppercase font-bold block">Luggage</span>
                    <span className="text-xs font-bold text-brand-dark truncate">{vehicle.luggageCapacity.split('+')[0]}</span>
                  </div>
                </div>

                <div className="bg-brand-light p-3.5 rounded-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-dark text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-dark/60 uppercase font-bold block">Driver</span>
                    <span className="text-xs font-bold text-brand-dark">Included & Verified</span>
                  </div>
                </div>
              </div>

              {/* Ideal For Pill Tags */}
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-dark/60 block mb-2">
                  Recommended For:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {vehicle.idealFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-brand-cream border border-brand-dark/15 text-brand-dark text-xs rounded-lg font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Instant Call & WhatsApp Buttons */}
              <div className="flex flex-col gap-2.5 pt-4 border-t border-brand-dark/10">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-dark/70">
                  Interested in this vehicle?
                </span>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp About This Vehicle</span>
                </a>

                <div className="flex gap-2">
                  <a
                    href="tel:+919876543210"
                    className="flex-1 py-3 px-4 bg-brand-light hover:bg-brand-cream border border-brand-dark/15 text-brand-dark font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-green" />
                    <span>Call Us</span>
                  </a>

                  <Link
                    to={`/booking?vehicle=${vehicle.slug}`}
                    className="flex-1 py-3 px-4 bg-brand-dark hover:bg-brand-green text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Full Booking</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick 30-Second Quote Request Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-dark/10 shadow-sm">
              <h3 className="text-lg font-bold text-brand-dark font-helvetica-neue mb-1">
                Quick Quote for {vehicle.name}
              </h3>
              <p className="text-xs text-brand-dark/70 mb-4">
                Fill this fast inquiry and our fleet dispatcher will call / WhatsApp you within 15 minutes.
              </p>

              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900 font-helvetica-neue mb-1">
                    Taking you to WhatsApp...
                  </h4>
                  <p className="text-sm text-emerald-700 leading-relaxed mb-5">
                    Thank you, <strong>{formName}</strong>! You are being redirected to WhatsApp to send your enquiry. Once sent, our team will review your details and get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormName('')
                      setFormPhone('')
                      setFormDate('')
                      setFormPickup('')
                      setFormDrop('')
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 transition-colors text-white text-xs font-bold uppercase tracking-wider rounded-lg"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickInquiry} className="flex flex-col gap-3">
                  <div>
                    <label className="text-[11px] font-bold uppercase text-brand-dark/60 block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Nair"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full bg-brand-light border border-brand-dark/15 text-brand-dark text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold uppercase text-brand-dark/60 block mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        className="w-full bg-brand-light border border-brand-dark/15 text-brand-dark text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold uppercase text-brand-dark/60 block mb-1">
                        Travel Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formDate}
                        onChange={(e) => setFormDate(e.target.value)}
                        className="w-full bg-brand-light border border-brand-dark/15 text-brand-dark text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold uppercase text-brand-dark/60 block mb-1">
                        Pickup Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Cochin Airport (COK)"
                        value={formPickup}
                        onChange={(e) => setFormPickup(e.target.value)}
                        className="w-full bg-brand-light border border-brand-dark/15 text-brand-dark text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold uppercase text-brand-dark/60 block mb-1">
                        Destination
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Munnar / Alleppey"
                        value={formDrop}
                        onChange={(e) => setFormDrop(e.target.value)}
                        className="w-full bg-brand-light border border-brand-dark/15 text-brand-dark text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full py-3 bg-brand-dark hover:bg-brand-green text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                  >
                    Submit Quick Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Similar Vehicles Section */}
        {relatedVehicles.length > 0 && (
          <div className="mt-16 pt-12 border-t border-brand-dark/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                  Alternative Options
                </span>
                <h3 className="text-2xl font-bold text-brand-dark font-helvetica-neue mt-1">
                  Similar Vehicles You May Consider
                </h3>
              </div>
              <Link
                to="/fleet"
                className="text-xs font-bold uppercase tracking-wider text-brand-dark hover:text-brand-green"
              >
                View Full Fleet →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedVehicles.map((relVehicle) => (
                <VehicleCard key={relVehicle.id} vehicle={relVehicle} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
