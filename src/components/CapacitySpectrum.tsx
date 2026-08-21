import { Link } from 'react-router-dom'
import { FLEET_SPECTRUM } from '../data/fleetData'
import { ArrowRight, Users, Car, Bus } from 'lucide-react'

const iconMap: Record<string, typeof Car> = {
  Car,
  Bus,
}

export function CapacitySpectrum() {
  return (
    <section className="py-12 bg-white border-y border-brand-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green">
            Fleet Breadth & Capacity Spectrum
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-brand-dark tracking-tight mt-1 font-helvetica-neue">
            Transportation for Every Group Size
          </h2>
          <p className="text-sm text-brand-dark/70 mt-2">
            From individual airport transfers to 49-passenger luxury coach convoys, we have the exact vehicle for your group.
          </p>
        </div>

        {/* The Spectrum Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3">
          {FLEET_SPECTRUM.map((item) => {
            const Icon = iconMap[item.icon] || Car
            return (
              <Link
                key={item.capacity}
                to={`/fleet?exactCapacity=${item.capacity}`}
                className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-brand-light/70 hover:bg-brand-cream border border-brand-dark/10 hover:border-brand-green/40 transition-all hover:scale-105 group text-center no-underline"
              >
                <div className="mb-2 text-brand-green group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <div className="flex items-center gap-1 text-brand-dark font-bold text-sm">
                  <Users className="w-3 h-3 text-brand-green" />
                  <span>{item.capacity}</span>
                </div>
                <span className="text-[11px] font-semibold text-brand-dark/80 mt-0.5">
                  {item.label}
                </span>
                <span className="text-[9px] text-brand-dark/50 leading-tight mt-1 truncate max-w-full">
                  {item.category}
                </span>
              </Link>
            )
          })}
        </div>

        <div className="mt-8 flex items-center justify-center">
          <Link
            to="/fleet"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-dark hover:text-brand-green transition-colors"
          >
            <span>Explore All Capacities in Detail</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
