import { Link } from 'react-router-dom'
import { SERVICES_DATA } from '../data/servicesData'
import { FLEET_DATA } from '../data/fleetData'
import {
  Car,
  Plane,
  MapPin,
  Users,
  Briefcase,
  Heart,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  Calendar,
} from 'lucide-react'

const iconMap: Record<string, typeof Car> = {
  Car,
  Plane,
  MapPin,
  Users,
  Briefcase,
  Heart,
}

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-brand-cream py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green">
            Tailored Transport Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-light text-brand-dark tracking-tight mt-2 font-helvetica-neue">
            Our Transportation Services
          </h1>
          <p className="text-base text-brand-dark/75 mt-3 leading-relaxed">
            From punctual airport pickups and corporate delegations to grand destination wedding logistics and Kerala holiday tours.
          </p>
        </div>

        {/* Services In-Depth List */}
        <div className="space-y-12">
          {SERVICES_DATA.map((service, index) => {
            const IconComp = iconMap[service.iconName] || Car
            const isReversed = index % 2 !== 0

            // Get vehicles recommended for this service
            const recommendedFleet = FLEET_DATA.filter((v) =>
              service.suitableVehicles.includes(v.slug) || service.suitableVehicles.includes(v.id)
            )

            const whatsappMessage = `Hi Prayana, I would like to inquire about your ${service.title} service. Please provide details.`
            const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`

            return (
              <div
                key={service.id}
                id={service.slug}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-dark/10 shadow-sm"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Image (5 cols) */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden h-[280px] sm:h-[360px] bg-brand-light shadow-md border border-brand-dark/10">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 p-3 bg-brand-dark text-white rounded-xl shadow-md">
                        <IconComp className="w-6 h-6 text-emerald-300" />
                      </div>
                    </div>
                  </div>

                  {/* Text Details (7 cols) */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-1' : ''}`}>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                      {service.subtitle}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark font-helvetica-neue tracking-tight mt-1 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-sm sm:text-base text-brand-dark/80 font-light leading-relaxed mb-6">
                      {service.fullDescription}
                    </p>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-brand-dark/85">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Recommended Fleet Tags */}
                    {recommendedFleet.length > 0 && (
                      <div className="mb-6 pt-4 border-t border-brand-dark/10">
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-dark/60 block mb-2">
                          Recommended Vehicles for this service:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {recommendedFleet.map((v) => (
                            <Link
                              key={v.id}
                              to={`/fleet/${v.slug}`}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-light hover:bg-brand-cream border border-brand-dark/15 text-brand-dark text-xs rounded-lg font-medium transition-colors"
                            >
                              <span>{v.name}</span>
                              <span className="text-[10px] text-brand-dark/50 font-bold">
                                ({v.capacity} Seats)
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <Link
                        to={`/booking?service=${service.slug}`}
                        className="px-6 py-3 bg-brand-dark hover:bg-brand-green text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-sm flex items-center gap-2"
                      >
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Book This Service</span>
                      </Link>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-sm flex items-center gap-1.5"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Inquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Service Standards Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-brand-dark/10 text-center">
          <ShieldCheck className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-brand-dark font-helvetica-neue">
            All Services Include Our 100% Punctuality & Safety Guarantee
          </h3>
          <p className="text-sm text-brand-dark/75 max-w-2xl mx-auto mt-2 leading-relaxed">
            All vehicles undergo routine multi-point mechanical inspections, sanitization prior to every pickup, and are operated by certified, courteous chauffeurs.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-brand-light hover:bg-brand-cream border border-brand-dark/15 text-brand-dark font-semibold text-xs uppercase tracking-wider rounded-full transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
