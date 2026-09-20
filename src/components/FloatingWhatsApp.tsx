import { MessageSquare } from 'lucide-react'

interface FloatingWhatsAppProps {
  customMessage?: string
}

export function FloatingWhatsApp({ customMessage }: FloatingWhatsAppProps) {
  const defaultMessage = 'Hi Prayana, I would like to inquire about vehicle availability and pricing.'
  const text = encodeURIComponent(customMessage || defaultMessage)
  const whatsappUrl = `https://wa.me/919061951128?text=${text}`

  return (
    <aside aria-label="WhatsApp Quick Support" className="fixed bottom-20 md:bottom-8 right-5 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block mr-3 px-3.5 py-2 bg-brand-dark text-white text-xs font-semibold rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-white/10">
        Chat on WhatsApp (Instant Quote)
      </span>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Prayana Fleet on WhatsApp"
        className="relative w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105"
      >
        {/* Subtle Pulse Animation Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
        <MessageSquare className="w-7 h-7 relative z-10 fill-white" />
      </a>
    </aside>
  )
}
