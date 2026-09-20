import { Link } from 'react-router-dom'
import { SERVICES_DATA } from '../data/servicesData'
import { GALLERY_ITEMS } from '../data/galleryData'
import { FeaturedDestinations } from '../components/FeaturedDestinations'
import { CapacitySpectrum } from '../components/CapacitySpectrum'
import { PassengerSearch } from '../components/PassengerSearch'
import { CustomerReviews } from '../components/CustomerReviews'
import { HeroReviews } from '../components/HeroReviews'
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageSquare,
  Sparkles,
  Award,
  HeartHandshake,
  Clock,
  Car,
  Plane,
  MapPin,
  Users,
  Briefcase,
  Heart,
} from 'lucide-react'

const iconMap: Record<string, typeof Car> = {
  Car,
  Plane,
  MapPin,
  Users,
  Briefcase,
  Heart,
}

export function HomePage() {

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[620px] lg:min-h-[720px] bg-brand-cream flex items-center overflow-hidden border-b border-brand-dark/10">
        {/* Background Visual Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Desktop Image */}
          <img
            src="https://iili.io/nT6udrX.jpg"
            alt="Prayana Luxury Fleet Kerala"
            className="hidden md:block w-full h-full object-cover object-center opacity-100 animate-zoom-in-bg origin-center"
          />
          {/* Mobile Image (Munnar/Kerala scenic vertical) */}
          <img
            src="https://iili.io/nT6udrX.jpg"
            alt="Prayana Luxury Fleet Kerala Mobile"
            className="block md:hidden w-full h-full object-cover object-center opacity-100 animate-zoom-in-bg origin-center"
          />
          {/* Subtle dark overlay for premium high-contrast look */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 sm:py-24">
          <div className="w-full max-w-6xl flex flex-col items-start pt-2 pb-8 sm:py-10">
            {/* Announcement Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-dark/15 bg-white/80 shadow-xs mb-6 animate-fade-down">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-dark">
                Kerala's Premier Fleet & Tourist Transportation
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.08] font-helvetica-neue mb-5 animate-fade-up stagger-1">
              Comfortable Travel.<br />
              Reliable Vehicles.<br />
              <span className="font-semibold text-emerald-400">Every Journey.</span>
            </h1>



            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 animate-fade-up stagger-3">
              <Link
                to="/booking"
                className="px-7 py-3.5 bg-brand-dark hover:bg-brand-green text-white font-semibold text-sm tracking-wide uppercase rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <span>Book a Vehicle</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/919061951128?text=Hi%20Prayana%2C%20I%20would%20like%20to%20inquire%20about%20a%20vehicle%20booking."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm tracking-wide uppercase rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="tel:+919061951128"
                className="px-5 py-3.5 bg-white/90 hover:bg-white border border-brand-dark/20 text-brand-dark font-semibold text-sm tracking-wide uppercase rounded-full shadow-xs hover:shadow transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-green" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Reviews component replacing checklist */}
            <div className="w-full pt-6 border-t border-white/15 animate-fade-up stagger-4">
              <HeroReviews />
            </div>
          </div>
        </div>
      </section>

      {/* 2. FLEET CAPACITY SPECTRUM (3 to 49 seats visualizer) */}
      <CapacitySpectrum />

      {/* 3. QUICK VEHICLE SEARCH (By Passenger Count) */}
      <PassengerSearch />

      {/* 4. FEATURED DESTINATIONS SHOWCASE */}
      <FeaturedDestinations />


      {/* 5. OUR SERVICES GRID */}
      <section className="py-16 md:py-24 bg-brand-cream border-b border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green">
              Tailored Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-brand-dark tracking-tight mt-1 font-helvetica-neue">
              Transportation for Every Purpose
            </h2>
            <p className="text-sm text-brand-dark/70 mt-2">
              We don't just supply vehicles—we ensure your journey is safe, timely, and completely stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES_DATA.map((service) => {
              const IconComp = iconMap[service.iconName] || Car
              return (
                <div
                  key={service.id}
                  className="bg-white p-7 rounded-2xl border border-brand-dark/10 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors mb-5">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2 font-helvetica-neue">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-green mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-xs text-brand-dark/75 leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                    <ul className="space-y-2 mb-6 text-xs text-brand-dark/80">
                      {service.highlights.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-brand-dark/10 flex items-center justify-between">
                    <Link
                      to="/booking"
                      className="text-xs font-bold uppercase tracking-wider text-brand-dark hover:text-brand-green flex items-center gap-1"
                    >
                      <span>Book Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to="/services"
                      className="text-xs text-brand-dark/60 hover:text-brand-dark underline"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green">
                Why Choose Prayana
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-brand-dark tracking-tight mt-1 font-helvetica-neue leading-tight">
                Built on Trust, Punctuality & Impeccable Standards
              </h2>
              <p className="text-sm text-brand-dark/75 mt-4 leading-relaxed">
                Whether you're booking an airport transfer or coordinating a 45-passenger tourist convoy, our dedicated operations team ensures every detail is executed with precision.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="flex gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-cream border border-brand-dark/10 flex items-center justify-center text-brand-dark shrink-0">
                    <Award className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark">Pristine Fleet</h4>
                    <p className="text-xs text-brand-dark/70 mt-1 leading-normal">
                      Spotless, sanitized interiors with full climate control on every trip.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-cream border border-brand-dark/10 flex items-center justify-center text-brand-dark shrink-0">
                    <HeartHandshake className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark">Experienced Chauffeurs</h4>
                    <p className="text-xs text-brand-dark/70 mt-1 leading-normal">
                      Bilingual, background-verified drivers with mastery over South Indian hill routes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-cream border border-brand-dark/10 flex items-center justify-center text-brand-dark shrink-0">
                    <Clock className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark">99.8% On-Time Record</h4>
                    <p className="text-xs text-brand-dark/70 mt-1 leading-normal">
                      Punctual pickups backed by real-time GPS tracking and airport flight monitoring.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-cream border border-brand-dark/10 flex items-center justify-center text-brand-dark shrink-0">
                    <ShieldCheck className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark">Transparent Pricing</h4>
                    <p className="text-xs text-brand-dark/70 mt-1 leading-normal">
                      Clear estimates with zero hidden surge fees or unexpected charges.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-brand-dark/10">
              <img
                src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80"
                alt="Kerala Mountain Highway Travel"
                className="w-full h-full object-cover min-h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Reliable Highway & Hill Transit
                </span>
                <h3 className="text-2xl font-bold mt-1 mb-2">
                  Seamless Touring from Sea Level to Hilltops
                </h3>
                <p className="text-xs text-white/80 leading-relaxed mb-4 max-w-md">
                  From Cochin International Airport to the misty elevations of Munnar and the backwaters of Alleppey.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300 hover:text-white transition-colors"
                >
                  <span>Learn more about our company →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS (Requested in Homepage) */}
      <CustomerReviews />

      {/* 8. GALLERY PREVIEW */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green">
                Moments & Fleet
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-brand-dark tracking-tight mt-1 font-helvetica-neue">
                Vehicles & Journeys in Pictures
              </h2>
              <p className="text-sm text-brand-dark/70 mt-2 max-w-xl">
                Real photographs of our actual fleet, client excursions, and memorable Kerala landscapes.
              </p>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-dark hover:text-brand-green transition-colors shrink-0"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_ITEMS.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="group relative h-60 rounded-2xl overflow-hidden border border-brand-dark/10 shadow-xs"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                  <span className="text-[10px] uppercase font-semibold text-emerald-300">
                    {item.location || 'Kerala'}
                  </span>
                  <h4 className="text-sm font-bold leading-tight mt-0.5">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION BANNER */}
      <section className="py-16 md:py-20 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
            Start Your Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight mt-2 font-helvetica-neue">
            Ready to Plan Your Next Journey?
          </h2>
          <p className="text-sm sm:text-base text-white/75 mt-4 max-w-xl mx-auto leading-relaxed">
            Get an instant transparent quote or book your preferred vehicle in under 30 seconds.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              to="/booking"
              className="px-8 py-4 bg-white text-brand-dark font-bold text-sm uppercase tracking-wider rounded-full hover:bg-brand-cream transition-all shadow-lg"
            >
              Get a Quote / Book Online
            </Link>

            <a
              href="https://wa.me/919061951128?text=Hi%20Prayana%2C%20I%20would%20like%20to%20inquire%20about%20a%20vehicle%20booking."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-wider rounded-full transition-all shadow-lg flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Quick Quote</span>
            </a>

            <a
              href="tel:+919061951128"
              className="px-6 py-4 border border-white/20 text-white hover:bg-white/10 font-bold text-sm uppercase tracking-wider rounded-full transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>+91 90619 51128</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
