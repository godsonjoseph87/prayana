import { useState } from 'react'
import { CUSTOMER_REVIEWS, TRUST_METRICS } from '../data/reviewsData'
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, ThumbsUp } from 'lucide-react'

export function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % CUSTOMER_REVIEWS.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + CUSTOMER_REVIEWS.length) % CUSTOMER_REVIEWS.length)
  }

  const current = CUSTOMER_REVIEWS[currentIndex]

  return (
    <section id="reviews-section" className="scroll-mt-24 py-16 md:py-24 bg-brand-light/60 border-t border-brand-dark/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-16 border-b border-brand-dark/10">
          {TRUST_METRICS.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4 bg-white/60 rounded-2xl border border-brand-dark/5 shadow-xs">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark font-helvetica-neue tracking-tight">
                {metric.value}
              </span>
              <span className="text-sm font-semibold text-brand-dark mt-1">
                {metric.label}
              </span>
              <span className="text-xs text-brand-dark/60 mt-0.5 max-w-[180px]">
                {metric.description}
              </span>
            </div>
          ))}
        </div>

        {/* Reviews Section Header */}
        <div className="mt-16 text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green">
            Verified Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-brand-dark tracking-tight mt-1 font-helvetica-neue">
            What Our Travellers Say
          </h2>
          <p className="text-sm text-brand-dark/70 mt-2">
            Real feedback from families, wedding organizers, and corporate delegations who trust us for their journeys.
          </p>
        </div>

        {/* Featured Review Spotlight */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-brand-dark/10 shadow-lg relative mb-12">
          <Quote className="w-16 h-16 text-brand-green/15 absolute top-6 right-8 pointer-events-none" />

          {/* Star Rating */}
          <div className="flex items-center gap-1 text-amber-500 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 text-xs font-bold text-brand-dark/70 bg-brand-light px-2 py-0.5 rounded-full">
              5.0 Verified Booking
            </span>
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-lg sm:text-xl text-brand-dark font-light leading-relaxed mb-8 italic">
            "{current.comment}"
          </blockquote>

          {/* Author Details & Route Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-brand-dark/10">
            <div>
              <h4 className="text-base font-bold text-brand-dark">
                {current.name}
              </h4>
              <p className="text-xs text-brand-dark/60">
                {current.roleOrLocation} • {current.date}
              </p>
            </div>
            <div className="flex flex-col sm:items-end">
              <span className="text-xs font-semibold text-brand-green bg-brand-green/10 px-3 py-1 rounded-full w-fit">
                {current.vehicleUsed}
              </span>
              <span className="text-[11px] text-brand-dark/60 mt-1">
                {current.tripType}
              </span>
            </div>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={prevReview}
              className="p-2 rounded-full border border-brand-dark/20 hover:bg-brand-dark hover:text-white transition-colors cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-brand-dark/60 font-medium px-2">
              {currentIndex + 1} / {CUSTOMER_REVIEWS.length}
            </span>
            <button
              type="button"
              onClick={nextReview}
              className="p-2 rounded-full border border-brand-dark/20 hover:bg-brand-dark hover:text-white transition-colors cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Review Cards Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CUSTOMER_REVIEWS.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-brand-dark/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-brand-dark/80 italic line-clamp-3 mb-4">
                  "{review.comment}"
                </p>
              </div>
              <div className="pt-3 border-t border-brand-dark/5 flex items-center justify-between text-xs">
                <span className="font-bold text-brand-dark">{review.name}</span>
                <span className="text-[11px] text-brand-dark/60">{review.vehicleUsed}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Trust Tag */}
        <div className="mt-10 flex items-center justify-center gap-3 text-xs text-brand-dark/70">
          <ThumbsUp className="w-4 h-4 text-emerald-600" />
          <span>4.9 / 5.0 Average Rating across 1,200+ Google Reviews & Direct Feedback</span>
          <ShieldCheck className="w-4 h-4 text-emerald-600 ml-2" />
        </div>
      </div>
    </section>
  )
}
