import { Link } from 'react-router-dom'
import { Triangle, Phone, Mail, MapPin, MessageSquare, Clock, ShieldCheck } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-24 md:pb-12 border-t border-brand-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2.5 text-white no-underline">
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Triangle className="w-4 h-4 fill-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-helvetica-neue">
                PRAYANA
              </span>
            </Link>
            <p className="text-sm text-white/70 max-w-sm leading-relaxed mt-1">
              Kerala's premier fleet rental & tourist transportation service. Delivering comfortable, reliable, and air-conditioned travel for 3 to 49 passengers across South India.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-300 bg-white/5 border border-white/10 rounded-lg p-3 w-fit">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Government-authorized tourist permits • Verified Drivers</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-2">
              Navigation
            </h4>
            <Link to="/" className="text-sm text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/fleet" className="text-sm text-white/80 hover:text-white transition-colors">
              Our Fleet (14 Vehicles)
            </Link>
            <Link to="/services" className="text-sm text-white/80 hover:text-white transition-colors">
              Our Services
            </Link>
            <Link to="/gallery" className="text-sm text-white/80 hover:text-white transition-colors">
              Photo Gallery
            </Link>
            <Link to="/about" className="text-sm text-white/80 hover:text-white transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-sm text-white/80 hover:text-white transition-colors">
              Contact & Support
            </Link>
            <Link to="/booking" className="text-sm text-emerald-400 font-medium hover:underline">
              Book a Vehicle →
            </Link>
          </div>

          {/* Fleet Categories */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-2">
              Fleet Range
            </h4>
            <Link to="/fleet/16-seater-urbania" className="text-sm text-white/80 hover:text-white transition-colors">
              16 Seater Force Urbania
            </Link>
            <Link to="/fleet/innova-crysta" className="text-sm text-white/80 hover:text-white transition-colors">
              Toyota Innova Crysta
            </Link>
            <Link to="/fleet/12-seater-traveller" className="text-sm text-white/80 hover:text-white transition-colors">
              12–19 Seater Travellers
            </Link>
            <Link to="/fleet/23-seater-marcopolo" className="text-sm text-white/80 hover:text-white transition-colors">
              23–34 Seater Mini Buses
            </Link>
            <Link to="/fleet/45-seater-bharatbenz" className="text-sm text-white/80 hover:text-white transition-colors">
              45 Seater BharatBenz Glider
            </Link>
            <Link to="/fleet/45-seater-volvo" className="text-sm text-white/80 hover:text-white transition-colors">
              45 Seater Volvo Luxury Coach
            </Link>
            <Link to="/fleet/dzire" className="text-sm text-white/80 hover:text-white transition-colors">
              Dzire & Etios Sedans
            </Link>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-2">
              Contact & Hub
            </h4>
            <div className="flex items-start gap-2.5 text-sm text-white/80">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Prayana Hub, MG Road / Airport Bypass, Kannur, Kerala 682016</span>
            </div>
            <a
              href="tel:+919061951128"
              className="flex items-center gap-2.5 text-sm text-white/80 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>+91 90619 51128</span>
            </a>
            <a
              href="https://wa.me/919061951128?text=Hi%20Prayana%2C%20I%20would%20like%20to%20inquire%20about%20a%20vehicle%20booking."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm text-emerald-300 hover:text-emerald-200 transition-colors"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>WhatsApp Direct Chat</span>
            </a>
            <a
              href="mailto:prayanatravelplanners@gmail.com"
              className="flex items-center gap-2.5 text-sm text-white/80 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>prayanatravelplanners@gmail.com</span>
            </a>
            <div className="flex items-center gap-2.5 text-xs text-white/60 mt-1">
              <Clock className="w-3.5 h-3.5" />
              <span>24 Hours / 7 Days Operational Support</span>
            </div>
          </div>
        </div>

        {/* Operating Cities and Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex flex-wrap gap-2 items-center justify-center md:justify-start">
            <span className="text-white/40">Serving:</span>
            <span>Kannur (COK)</span> •
            <span>Trivandrum (TRV)</span> •
            <span>Kozhikode (CCJ)</span> •
            <span>Munnar</span> •
            <span>Alleppey</span> •
            <span>Wayanad</span> •
            <span>Kottayam</span> •
            <span>Bengaluru</span>
          </div>
          <div>
            © {new Date().getFullYear()} Prayana Fleet & Tourist Transportation. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
