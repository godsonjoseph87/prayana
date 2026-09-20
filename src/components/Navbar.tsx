import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Phone, MessageSquare, Menu, X, Calendar, ShieldCheck, Car, Bus } from 'lucide-react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isFleetDropdownOpen, setIsFleetDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsFleetDropdownOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <>
      {/* Top Notification / Quick Contact Bar */}
      <div className="bg-brand-dark text-white/90 text-xs py-1.5 px-4 hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white/80">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Verified & Sanitized Fleet • 24/7 Roadside Assistance
            </span>
            <span className="text-white/40">|</span>
            <span className="text-white/80">
              Operating across Kerala, Tamil Nadu & Karnataka
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:+919061951128"
              className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>+91 90619 51128</span>
            </a>
            <a
              href="https://wa.me/919061951128?text=Hi%20Prayana%2C%20I%20would%20like%20to%20inquire%20about%20a%20vehicle%20booking."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm border-b border-brand-dark/10'
            : 'bg-brand-cream/90 backdrop-blur-sm border-b border-brand-dark/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-18 md:h-20">
            {/* Brand Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 text-brand-dark no-underline group"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
                <img src="https://iili.io/nTPJ8Tg.png" alt="Prayana Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-brand-dark font-helvetica-neue leading-none">
                  PRAYANA
                </span>
                <span className="text-[10px] tracking-wide text-brand-dark/70 font-medium mt-0.5">
                  Every Journey, Made Better.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              <Link
                to="/"
                className={`text-sm tracking-wide uppercase transition-colors font-medium ${
                  isActive('/') && location.pathname === '/'
                    ? 'text-brand-green font-semibold'
                    : 'text-brand-dark hover:text-brand-green'
                }`}
              >
                Home
              </Link>

              {/* Fleet Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsFleetDropdownOpen(true)}
                onMouseLeave={() => setIsFleetDropdownOpen(false)}
              >
                <Link
                  to="/fleet"
                  className={`flex items-center gap-1 text-sm tracking-wide uppercase transition-colors font-medium py-2 ${
                    isActive('/fleet')
                      ? 'text-brand-green font-semibold'
                      : 'text-brand-dark hover:text-brand-green'
                  }`}
                >
                  <span>Our Fleet</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </Link>

                {/* Dropdown Menu */}
                {isFleetDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-brand-dark/10 py-3 z-50 animate-fade-down">
                    <Link
                      to="/fleet"
                      className="block px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-dark/50 hover:text-brand-green"
                    >
                      View All 14 Vehicles →
                    </Link>
                    <div className="h-px bg-brand-dark/10 my-1" />
                    <Link
                      to="/fleet?category=cars"
                      className="flex items-center justify-between px-4 py-2 text-sm text-brand-dark hover:bg-brand-cream/80 transition-colors"
                    >
                      <span className="flex items-center gap-2"><Car className="w-4 h-4 text-brand-green" /> Cars & Sedans</span>
                      <span className="text-xs text-brand-dark/50">3 Seats</span>
                    </Link>
                    <Link
                      to="/fleet?category=suvs"
                      className="flex items-center justify-between px-4 py-2 text-sm text-brand-dark hover:bg-brand-cream/80 transition-colors"
                    >
                      <span className="flex items-center gap-2"><Car className="w-4 h-4 text-brand-green" /> SUVs (Innova / Crysta)</span>
                      <span className="text-xs text-brand-dark/50">6 Seats</span>
                    </Link>
                    <Link
                      to="/fleet?category=travellers"
                      className="flex items-center justify-between px-4 py-2 text-sm text-brand-dark hover:bg-brand-cream/80 transition-colors"
                    >
                      <span className="flex items-center gap-2"><Bus className="w-4 h-4 text-brand-green" /> Tempo Travellers & Urbania</span>
                      <span className="text-xs text-brand-dark/50">12–19 Seats</span>
                    </Link>
                    <Link
                      to="/fleet?category=mini-buses"
                      className="flex items-center justify-between px-4 py-2 text-sm text-brand-dark hover:bg-brand-cream/80 transition-colors"
                    >
                      <span className="flex items-center gap-2"><Bus className="w-4 h-4 text-brand-green" /> Mini Buses</span>
                      <span className="text-xs text-brand-dark/50">23–34 Seats</span>
                    </Link>
                    <Link
                      to="/fleet?category=large-buses"
                      className="flex items-center justify-between px-4 py-2 text-sm text-brand-dark hover:bg-brand-cream/80 transition-colors"
                    >
                      <span className="flex items-center gap-2"><Bus className="w-4 h-4 text-brand-green" /> Luxury Coaches (Volvo/Benz)</span>
                      <span className="text-xs text-brand-dark/50">45–49 Seats</span>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/services"
                className={`text-sm tracking-wide uppercase transition-colors font-medium ${
                  isActive('/services')
                    ? 'text-brand-green font-semibold'
                    : 'text-brand-dark hover:text-brand-green'
                }`}
              >
                Services
              </Link>

              <Link
                to="/gallery"
                className={`text-sm tracking-wide uppercase transition-colors font-medium ${
                  isActive('/gallery')
                    ? 'text-brand-green font-semibold'
                    : 'text-brand-dark hover:text-brand-green'
                }`}
              >
                Gallery
              </Link>

              <Link
                to="/about"
                className={`text-sm tracking-wide uppercase transition-colors font-medium ${
                  isActive('/about')
                    ? 'text-brand-green font-semibold'
                    : 'text-brand-dark hover:text-brand-green'
                }`}
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className={`text-sm tracking-wide uppercase transition-colors font-medium ${
                  isActive('/contact')
                    ? 'text-brand-green font-semibold'
                    : 'text-brand-dark hover:text-brand-green'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Right CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/919061951128?text=Hi%20Prayana%2C%20I%20would%20like%20to%20inquire%20about%20a%20vehicle%20booking."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-brand-dark/20 text-brand-dark rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-brand-dark/5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                WhatsApp
              </a>
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-dark text-white text-sm font-semibold tracking-wide uppercase rounded-full hover:bg-brand-green transition-all shadow-sm hover:shadow"
              >
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                Book Now
              </Link>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/booking"
                className="px-3.5 py-1.5 bg-brand-dark text-white text-xs font-semibold uppercase rounded-full"
              >
                Book Now
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-brand-dark rounded-lg hover:bg-brand-dark/5 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-18 bg-brand-cream z-50 lg:hidden overflow-y-auto pb-24 border-t border-brand-dark/10">
          <div className="px-6 py-6 flex flex-col gap-6">
            <div className="flex flex-col gap-4 border-b border-brand-dark/10 pb-6">
              <Link
                to="/"
                className="text-2xl font-medium text-brand-dark hover:text-brand-green transition-colors"
              >
                Home
              </Link>
              <Link
                to="/fleet"
                className="text-2xl font-medium text-brand-dark hover:text-brand-green transition-colors flex items-center justify-between"
              >
                <span>Our Fleet</span>
                <span className="text-xs px-2.5 py-1 bg-brand-dark/10 rounded-full font-semibold">
                  14 Vehicles
                </span>
              </Link>
              <div className="pl-4 flex flex-col gap-2.5 border-l-2 border-brand-dark/10 text-sm text-brand-dark/80">
                <Link to="/fleet?category=cars" className="hover:text-brand-green flex items-center gap-2">
                  <Car className="w-4 h-4 text-brand-green" /> Cars & Sedans (3 Seats)
                </Link>
                <Link to="/fleet?category=suvs" className="hover:text-brand-green flex items-center gap-2">
                  <Car className="w-4 h-4 text-brand-green" /> SUVs & Crysta (6 Seats)
                </Link>
                <Link to="/fleet?category=travellers" className="hover:text-brand-green flex items-center gap-2">
                  <Bus className="w-4 h-4 text-brand-green" /> Tempo Travellers & Urbania (12–19 Seats)
                </Link>
                <Link to="/fleet?category=mini-buses" className="hover:text-brand-green flex items-center gap-2">
                  <Bus className="w-4 h-4 text-brand-green" /> Mini Buses (23–34 Seats)
                </Link>
                <Link to="/fleet?category=large-buses" className="hover:text-brand-green flex items-center gap-2">
                  <Bus className="w-4 h-4 text-brand-green" /> Luxury Coaches (45–49 Seats)
                </Link>
              </div>
              <Link
                to="/services"
                className="text-2xl font-medium text-brand-dark hover:text-brand-green transition-colors"
              >
                Services
              </Link>
              <Link
                to="/gallery"
                className="text-2xl font-medium text-brand-dark hover:text-brand-green transition-colors"
              >
                Gallery
              </Link>
              <Link
                to="/about"
                className="text-2xl font-medium text-brand-dark hover:text-brand-green transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-2xl font-medium text-brand-dark hover:text-brand-green transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col gap-3">
              <Link
                to="/booking"
                className="w-full py-3.5 bg-brand-dark text-white text-center font-semibold uppercase tracking-wider rounded-xl hover:bg-brand-green transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-emerald-400" />
                Book a Vehicle Online
              </Link>
              <a
                href="https://wa.me/919061951128?text=Hi%20Prayana%2C%20I%20would%20like%20to%20inquire%20about%20a%20vehicle%20booking."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-emerald-700 text-white text-center font-semibold uppercase tracking-wider rounded-xl hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+919061951128"
                className="w-full py-3.5 border border-brand-dark/20 text-brand-dark text-center font-semibold uppercase tracking-wider rounded-xl hover:bg-brand-dark/5 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-green" />
                Call +91 90619 51128
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
