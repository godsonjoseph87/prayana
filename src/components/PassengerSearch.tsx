import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CAPACITY_RANGES, FLEET_DATA, Vehicle } from '../data/fleetData'
import { VehicleCard } from './VehicleCard'
import { Users, ArrowRight } from 'lucide-react'

export function PassengerSearch() {
  const [selectedRange, setSelectedRange] = useState<string>('5-7')

  const activeRangeObj = CAPACITY_RANGES.find((r) => r.id === selectedRange) || CAPACITY_RANGES[1]

  const matchedVehicles: Vehicle[] = FLEET_DATA.filter(
    (v) => v.capacity >= activeRangeObj.min && v.capacity <= activeRangeObj.max
  )

  return (
    <section className="py-16 md:py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green">
              Quick Vehicle Finder
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-brand-dark tracking-tight mt-1 font-helvetica-neue">
              Find the Right Vehicle for Your Group
            </h2>
            <p className="text-sm text-brand-dark/70 mt-2 max-w-xl">
              Select your passenger count below to instantly view tailor-made vehicles engineered for your specific group size.
            </p>
          </div>
          <Link
            to="/fleet"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-dark hover:text-brand-green transition-colors shrink-0"
          >
            <span>View Complete Fleet (14)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Passenger Filter Pills */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-10">
          {CAPACITY_RANGES.filter((r) => r.id !== 'all').map((range) => {
            const isSelected = selectedRange === range.id
            return (
              <button
                key={range.id}
                type="button"
                onClick={() => setSelectedRange(range.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-brand-dark text-white shadow-md scale-105'
                    : 'bg-white text-brand-dark/80 hover:bg-white/90 border border-brand-dark/15 hover:border-brand-dark/30'
                }`}
              >
                <Users className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-300' : 'text-brand-green'}`} />
                <span>{range.label}</span>
              </button>
            )
          })}
        </div>

        {/* Results Info Bar */}
        <div className="flex items-center justify-between bg-white/70 backdrop-blur-sm border border-brand-dark/10 rounded-xl px-5 py-3 mb-8 text-xs text-brand-dark/80">
          <span>
            Showing <strong className="text-brand-dark">{matchedVehicles.length} vehicles</strong> tailored for{' '}
            <strong className="text-brand-green">{activeRangeObj.label}</strong>
          </span>
          <Link to="/booking" className="text-brand-dark font-bold hover:text-brand-green underline">
            Need a custom combination? Contact us →
          </Link>
        </div>

        {/* Matched Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {matchedVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  )
}
