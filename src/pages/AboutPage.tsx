import { Link } from 'react-router-dom'
import { TRUST_METRICS } from '../data/reviewsData'
import {
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'

export function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-cream py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green">
            Our Story & Heritage
          </span>
          <h1 className="text-4xl sm:text-5xl font-light text-brand-dark tracking-tight mt-2 font-helvetica-neue">
            About Prayana Fleet & Travel
          </h1>
          <p className="text-base text-brand-dark/75 mt-3 leading-relaxed">
            Building Kerala's most trusted, dependable, and comfortable transportation network for families, corporate teams, and international travellers.
          </p>
        </div>

        {/* Story Section: Who We Are & What We Do */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark font-helvetica-neue mt-1 mb-4">
                Redefining Road Travel Across South India
              </h2>
              <p className="text-sm sm:text-base text-brand-dark/80 font-light leading-relaxed mb-4">
                Founded with a straightforward mission—to deliver immaculate vehicles, punctual service, and genuinely courteous chauffeurs—Prayana has grown from a humble family-run taxi operation into one of Kerala’s premier passenger transport networks.
              </p>
              <p className="text-sm sm:text-base text-brand-dark/80 font-light leading-relaxed">
                Whether an international traveller arriving at Cochin Airport for a serene backwater retreat or a multinational company transporting 300 delegates to an annual summit, we deliver tailored logistics with uncompromising reliability.
              </p>
            </div>

            <div className="pt-4 border-t border-brand-dark/10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
                What We Do
              </span>
              <h3 className="text-xl font-bold text-brand-dark font-helvetica-neue mt-1 mb-3">
                End-to-End Fleet Logistics & Personalized Touring
              </h3>
              <p className="text-sm text-brand-dark/75 leading-relaxed">
                We manage a versatile in-house fleet spanning 3-passenger sedans, luxury Innova Crystas, executive Force Urbanias, 12–19 seat Tempo Travellers, and 45–49 seat BharatBenz and Volvo touring coaches.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-brand-dark/10">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80"
                alt="Prayana Fleet Operations"
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs font-semibold uppercase text-emerald-300">
                  Headquartered in Kochi, Kerala
                </span>
                <h4 className="text-xl font-bold mt-1">
                  10+ Years of Hospitality & Highway Excellence
                </h4>
                <p className="text-xs text-white/80 mt-1">
                  Serving Cochin, Trivandrum, Kozhikode, Munnar, Alleppey, and interstate routes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-dark/10 shadow-sm mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
              Proven Track Record
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark font-helvetica-neue mt-1">
              Numbers We Stand Behind
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TRUST_METRICS.map((metric, idx) => (
              <div key={idx} className="text-center p-4">
                <span className="text-4xl sm:text-5xl font-bold text-brand-dark font-helvetica-neue tracking-tight">
                  {metric.value}
                </span>
                <h4 className="text-sm font-semibold text-brand-dark mt-2">
                  {metric.label}
                </h4>
                <p className="text-xs text-brand-dark/60 mt-1 max-w-[170px] mx-auto">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us: 7 Core Pillars */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green">
              The Prayana Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-brand-dark tracking-tight mt-1 font-helvetica-neue">
              Why Travellers Trust Us With Their Journeys
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Wide Range of Seating Capacities',
                desc: '3, 6, 12, 16, 17, 19, 23, 34, 45, and 49-passenger vehicles perfectly sized for your group.',
              },
              {
                title: 'Well-Maintained & Sanitized Fleet',
                desc: 'Every vehicle undergoes multi-point safety checks and deep cabin detailing before departure.',
              },
              {
                title: 'Experienced & Courteous Drivers',
                desc: 'Verified professionals certified for South Indian mountain terrain and interstate expressways.',
              },
              {
                title: 'Full Air-Conditioned Comfort',
                desc: 'Chilled, ducted multi-vent climate control designed for tropical and hill weather.',
              },
              {
                title: 'Punctual & Reliable Service',
                desc: 'Guaranteed on-time arrivals backed by live GPS tracking and dedicated support dispatchers.',
              },
              {
                title: 'Transparent Communication & Pricing',
                desc: 'Clear, upfront quotes with zero hidden surcharges or unexpected driver fees.',
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-brand-dark/10 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-brand-light flex items-center justify-center text-brand-green mb-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark font-helvetica-neue mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-brand-dark/75 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chauffeur Safety & Training Standards */}
        <div className="bg-brand-dark text-white rounded-3xl p-8 sm:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Driver Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-helvetica-neue mt-1 mb-4">
                Your Safety Is In Verified Hands
              </h2>
              <p className="text-sm text-white/80 font-light leading-relaxed mb-6">
                A great journey depends entirely on the person behind the wheel. All our chauffeurs undergo rigorous background checks, defensive driving assessments, and tourist etiquette training.
              </p>
              <div className="space-y-3 text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Police verified and commercial badge certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Specialized hill driving experience (Munnar, Wayanad, Ooty, Kodaikanal)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bilingual support (Malayalam, English, Hindi, Tamil)</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-end">
              <Link
                to="/fleet"
                className="w-full sm:w-auto px-7 py-3.5 bg-white text-brand-dark font-bold text-xs uppercase tracking-wider rounded-full hover:bg-brand-cream transition-colors text-center"
              >
                View Our Fleet
              </Link>
              <Link
                to="/booking"
                className="w-full sm:w-auto px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-full transition-colors text-center"
              >
                Book Your Trip
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
