import { Link } from 'react-router-dom'
import { Phone, MessageSquare, Calendar } from 'lucide-react'

export function MobileQuickBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-brand-cream/95 backdrop-blur-lg border-t border-brand-dark/15 px-3 py-2.5 flex items-center justify-around gap-2 md:hidden shadow-2xl">
      <a
        href="tel:+919061951128"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-white border border-brand-dark/15 text-brand-dark text-xs font-bold uppercase tracking-wider active:scale-95 transition-transform"
      >
        <Phone className="w-4 h-4 text-brand-green" />
        <span>Call</span>
      </a>

      <a
        href="https://wa.me/919061951128?text=Hi%20Prayana%2C%20I%20would%20like%20to%20inquire%20about%20a%20vehicle%20booking."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider active:scale-95 transition-transform shadow-sm"
      >
        <MessageSquare className="w-4 h-4 fill-white" />
        <span>WhatsApp</span>
      </a>

      <Link
        to="/booking"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-brand-dark text-white text-xs font-bold uppercase tracking-wider active:scale-95 transition-transform shadow-sm"
      >
        <Calendar className="w-4 h-4 text-emerald-400" />
        <span>Book</span>
      </Link>
    </div>
  )
}
