import { useState, useEffect } from 'react'
import { CUSTOMER_REVIEWS } from '../data/reviewsData'
import { Star, StarHalf } from 'lucide-react'

export function HeroReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CUSTOMER_REVIEWS.length)
    }, 2000) // Change review every 2 seconds
    return () => clearInterval(timer)
  }, [])

  const review = CUSTOMER_REVIEWS[currentIndex]

  const scrollToReviews = () => {
    document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 lg:gap-12 overflow-hidden">
      {/* Single Review - Animated on change */}
      <div 
        key={currentIndex} 
        className="flex-1 w-full min-w-0 animate-fade-up cursor-pointer group"
        onClick={scrollToReviews}
      >
        <div className="flex items-center gap-1 mb-2">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="text-sm font-medium text-white leading-snug line-clamp-3 italic mb-3 pr-4">
          "{review.comment}"
        </p>
        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white">{review.name}</span>
            <span className="text-[10px] text-white/70">{review.roleOrLocation}</span>
          </div>
        </div>
      </div>

      {/* Google Rating - Placed on the right */}
      <div className="flex items-center gap-2 shrink-0 bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/20">
        <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full shadow-xs shrink-0">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-bold text-white">4.8</span>
          <div className="flex items-center">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <StarHalf className="w-3 h-3 fill-amber-400 text-amber-400" />
          </div>
        </div>
      </div>
    </div>
  )
}
