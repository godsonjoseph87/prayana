import { Link } from 'react-router-dom'
import { Users, Wind, Briefcase, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react'
import { Vehicle } from '../data/fleetData'

interface VehicleCardProps {
  vehicle: Vehicle
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const whatsappUrl = `https://wa.me/919061951128?text=${encodeURIComponent(
    `Hi Prayana, I am interested in booking the ${vehicle.name} (${vehicle.capacityDisplay}). Please provide availability and pricing.`
  )}`

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-brand-dark/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Vehicle Image with Badges */}
        <div className="relative h-56 sm:h-64 overflow-hidden bg-brand-light">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Top Badges */}
          <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-brand-dark/90 text-white text-xs font-semibold uppercase tracking-wider rounded-full backdrop-blur-sm">
              {vehicle.categoryName}
            </span>
            {vehicle.featured && (
              <span className="px-2.5 py-1 bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider rounded-full backdrop-blur-sm">
                ★ Popular
              </span>
            )}
          </div>

          {/* Bottom Floating Stats */}
          <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white text-xs">
            <span className="flex items-center gap-1.5 font-semibold bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
              <Users className="w-3.5 h-3.5 text-emerald-300" />
              {vehicle.capacity} Passengers
            </span>
            <span className="flex items-center gap-1.5 font-semibold bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
              <Wind className="w-3.5 h-3.5 text-emerald-300" />
              {vehicle.acType}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6">
          <div className="flex flex-col gap-1 mb-3">
            <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-green transition-colors font-helvetica-neue">
              <Link to={`/fleet/${vehicle.slug}`} className="no-underline text-inherit">
                {vehicle.name}
              </Link>
            </h3>
            <p className="text-xs text-brand-dark/60 line-clamp-1">
              {vehicle.subtitle}
            </p>
          </div>

          <p className="text-sm text-brand-dark/75 leading-relaxed mb-4 line-clamp-2">
            {vehicle.shortDescription}
          </p>

          {/* Quick Specs List */}
          <div className="flex flex-col gap-2 py-3 border-y border-brand-dark/10 text-xs text-brand-dark/70 mb-4">
            <div className="flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-brand-green shrink-0" />
              <span className="truncate">{vehicle.luggageCapacity}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="truncate font-medium text-brand-dark/85">
                Ideal for: {vehicle.idealFor.slice(0, 2).join(', ')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 flex items-center gap-2">
        <Link
          to={`/fleet/${vehicle.slug}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-brand-light hover:bg-brand-cream border border-brand-dark/15 text-brand-dark text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
        >
          <span>Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-brand-dark hover:bg-brand-green text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-sm"
          title="Direct quote on WhatsApp"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-300" />
          <span>Inquire</span>
        </a>
      </div>
    </div>
  )
}
