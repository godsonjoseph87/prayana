import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { FLEET_DATA, FLEET_CATEGORIES, CAPACITY_RANGES, Vehicle } from '../data/fleetData'
import { VehicleCard } from '../components/VehicleCard'
import { Search, Filter, MessageSquare, Phone } from 'lucide-react'

export function FleetPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') || 'all'

  const exactCapacityParam = searchParams.get('exactCapacity')

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam)
  const [selectedCapacity, setSelectedCapacity] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [exactCapacity, setExactCapacity] = useState<string | null>(exactCapacityParam)

  // Sync state if URL query param changes
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [categoryParam])

  useEffect(() => {
    setExactCapacity(exactCapacityParam)
    if (exactCapacityParam) {
      setTimeout(() => {
        const el = document.getElementById('fleet-grid')
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [exactCapacityParam])

  const clearExactCapacity = () => {
    if (searchParams.has('exactCapacity')) {
      const newParams = new URLSearchParams(searchParams)
      newParams.delete('exactCapacity')
      setSearchParams(newParams)
    }
  }

  const handleCategoryChange = (catId: string) => {
    clearExactCapacity()
    setSelectedCategory(catId)
    if (catId === 'all') {
      const newParams = new URLSearchParams(searchParams)
      newParams.delete('category')
      setSearchParams(newParams)
    } else {
      const newParams = new URLSearchParams(searchParams)
      newParams.set('category', catId)
      setSearchParams(newParams)
    }
  }

  const handleCapacityChange = (capId: string) => {
    clearExactCapacity()
    setSelectedCapacity(capId)
  }

  const handleSearchChange = (query: string) => {
    clearExactCapacity()
    setSearchQuery(query)
  }

  // Filter vehicles
  const filteredVehicles: Vehicle[] = FLEET_DATA.filter((v) => {
    // If exactCapacity is provided, it overrides other filters
    if (exactCapacity) {
      return v.capacity.toString() === exactCapacity
    }

    // Category filter
    const matchesCategory =
      selectedCategory === 'all' || v.category === selectedCategory

    // Capacity range filter
    const range = CAPACITY_RANGES.find((r) => r.id === selectedCapacity)
    const matchesCapacity = range
      ? v.capacity >= range.min && v.capacity <= range.max
      : true

    // Search query filter
    const matchesSearch =
      searchQuery.trim() === '' ||
      v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.idealFor.some((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      )

    return matchesCategory && matchesCapacity && matchesSearch
  })

  return (
    <div className="min-h-screen bg-brand-cream py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green">
            Complete Fleet Directory
          </span>
          <h1 className="text-4xl sm:text-5xl font-light text-brand-dark tracking-tight mt-2 font-helvetica-neue">
            Our Fleet of Vehicles
          </h1>
          <p className="text-base text-brand-dark/75 mt-3 leading-relaxed">
            Choose from our extensive selection of 14 meticulously maintained vehicles. 
            From compact sedans to 49-passenger luxury touring coaches, find the exact match for your journey.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-brand-dark/10 shadow-sm mb-10">
          <div className="flex flex-col lg:flex-row gap-5 items-stretch lg:items-center justify-between">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {FLEET_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-brand-dark text-white shadow-sm'
                        : 'bg-brand-light text-brand-dark/70 hover:bg-brand-cream hover:text-brand-dark'
                    }`}
                  >
                    {cat.name}
                  </button>
                )
              })}
            </div>

            {/* Capacity Dropdown & Search */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {/* Capacity Filter */}
              <div className="relative w-full sm:w-auto">
                <select
                  value={selectedCapacity}
                  onChange={(e) => setSelectedCapacity(e.target.value)}
                  className="w-full sm:w-48 appearance-none bg-brand-light border border-brand-dark/15 text-brand-dark text-xs font-semibold rounded-xl px-4 py-2.5 pr-8 focus:outline-none focus:ring-2 focus:ring-brand-green/50 cursor-pointer"
                >
                  {CAPACITY_RANGES.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.label}
                    </option>
                  ))}
                </select>
                <Filter className="w-3.5 h-3.5 text-brand-dark/50 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Search Box */}
              <div className="relative w-full sm:w-56">
                <input
                  type="text"
                  placeholder="Search vehicle or feature..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full bg-brand-light border border-brand-dark/15 text-brand-dark text-xs rounded-xl px-4 py-2.5 pl-9 focus:outline-none focus:ring-2 focus:ring-brand-green/50 placeholder:text-brand-dark/40"
                />
                <Search className="w-3.5 h-3.5 text-brand-dark/40 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Active Filter Summary Bar */}
          <div className="mt-4 pt-4 border-t border-brand-dark/10 flex flex-wrap items-center justify-between text-xs text-brand-dark/70 gap-2">
            <span>
              Showing <strong className="text-brand-dark">{filteredVehicles.length} of {FLEET_DATA.length} vehicles</strong>
            </span>
            {(selectedCategory !== 'all' || selectedCapacity !== 'all' || searchQuery || exactCapacity) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedCapacity('all')
                  setSearchQuery('')
                  setSearchParams({})
                }}
                className="text-xs font-semibold text-brand-green hover:underline cursor-pointer"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Vehicles Grid */}
        {filteredVehicles.length > 0 ? (
          <div id="fleet-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 scroll-mt-24">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        ) : (
          <div id="fleet-grid" className="bg-white rounded-2xl p-12 text-center border border-brand-dark/10 max-w-lg mx-auto scroll-mt-24">
            <h3 className="text-lg font-bold text-brand-dark mb-2">
              No vehicles match your selected filter
            </h3>
            <p className="text-xs text-brand-dark/70 mb-6">
              Try adjusting your capacity range or search keyword.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all')
                setSelectedCapacity('all')
                setSearchQuery('')
                setSearchParams({})
              }}
              className="px-5 py-2.5 bg-brand-dark text-white text-xs font-semibold uppercase rounded-full"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Custom Combination / Assistance Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-brand-dark/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-brand-dark font-helvetica-neue">
              Need Multiple Vehicles or Special Arrangements?
            </h3>
            <p className="text-sm text-brand-dark/75 mt-1 max-w-xl leading-relaxed">
              Organizing a destination wedding, conference convoy, or multi-city tour? Our dedicated fleet managers can coordinate multi-vehicle packages tailored to your schedule.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/booking"
              className="px-6 py-3 bg-brand-dark hover:bg-brand-green text-white text-xs font-bold uppercase tracking-wider rounded-full transition-colors"
            >
              Request Custom Package
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi%20Prayana%2C%20I%20need%20assistance%20with%20a%20multi-vehicle%20booking."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Manager</span>
            </a>
            <a
              href="tel:+919876543210"
              className="p-3 border border-brand-dark/20 text-brand-dark hover:bg-brand-dark/5 rounded-full transition-colors"
              title="Call us"
            >
              <Phone className="w-4 h-4 text-brand-green" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
