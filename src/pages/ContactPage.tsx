import { useState } from 'react'
import { FLEET_DATA } from '../data/fleetData'
import { Phone, MessageSquare, Mail, MapPin, CheckCircle2, Send } from 'lucide-react'

export function ContactPage() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [passengers, setPassengers] = useState('4')
  const [vehicle, setVehicle] = useState('any')
  const [travelDate, setTravelDate] = useState('')
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    window.open(whatsappInquiryUrl, '_blank')
  }

    const divider = '\u2501'.repeat(26);
  const whatsappInquiryUrl = `https://wa.me/919061951128?text=${encodeURIComponent(
    `${divider}\n` +
    `       \u{1F690} *TRAVEL ENQUIRY* \u{1F334}\n` +
    `${divider}\n\n` +
    `\u{1F464} *Customer Details*\n\n` +
    `*Name*       : ${name || 'Customer'}\n` +
    `*Phone*      : ${phone}\n\n` +
    `\u{1F6E3}\u{FE0F} *Journey Details*\n\n` +
    `*Vehicle*    : ${vehicle || 'Not Selected'}\n` +
    `*Passengers* : ${passengers || 'Not Specified'}\n` +
    `*Date*       : ${travelDate}\n\n` +
    `\u{1F4CD} *Pickup*     : ${pickup || 'Not Specified'}\n` +
    `\u{1F3C1} *Destination*: ${destination || 'Not Specified'}\n\n` +
    `\u{1F4DD} *Additional Requirements:*\n` +
    `${message || 'None'}\n\n` +
    `${divider}\n` +
    `Just Prayana\n` +
    `*Prayana Travels* \u{2728}`
  )}`

  return (
    <div className="min-h-screen bg-brand-cream py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-light text-brand-dark tracking-tight mt-2 font-helvetica-neue">
            Contact Prayana Fleet
          </h1>
          <p className="text-base text-brand-dark/75 mt-3 leading-relaxed">
            Have questions about vehicle availability, special tour packages, or custom corporate logistics? Our team is available 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-dark/10 shadow-sm">
              <h2 className="text-2xl font-bold text-brand-dark font-helvetica-neue mb-6">
                Direct Contact Information
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-brand-light flex items-center justify-center text-brand-dark shrink-0">
                    <Phone className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-dark/50 block">
                      Phone Call Support
                    </span>
                    <a
                      href="tel:+919061951128"
                      className="text-base font-bold text-brand-dark hover:text-brand-green transition-colors"
                    >
                      +91 90619 51128
                    </a>
                    <p className="text-xs text-brand-dark/60 mt-0.5">
                      Available 24 hours / 7 days for urgent bookings
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-dark/50 block">
                      WhatsApp Quick Chat
                    </span>
                    <a
                      href="https://wa.me/919061951128?text=Hi%20Prayana%2C%20I%20would%20like%20to%20inquire%20about%20a%20vehicle%20booking."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      +91 90619 51128
                    </a>
                    <p className="text-xs text-brand-dark/60 mt-0.5">
                      Fastest response for rates, vehicle photos & availability
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-brand-light flex items-center justify-center text-brand-dark shrink-0">
                    <Mail className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-dark/50 block">
                      Official Email
                    </span>
                    <a
                      href="mailto:prayanatravelplanners@gmail.com"
                      className="text-base font-bold text-brand-dark hover:text-brand-green transition-colors"
                    >
                      prayanatravelplanners@gmail.com
                    </a>
                    <p className="text-xs text-brand-dark/60 mt-0.5">
                      Corporate RFPs, GST invoicing & vendor coordination
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-brand-light flex items-center justify-center text-brand-dark shrink-0">
                    <MapPin className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-dark/50 block">
                      Central Hub Office
                    </span>
                    <p className="text-sm font-semibold text-brand-dark">
                      Prayana Fleet Hub, MG Road / Airport Bypass, Kannur, Kerala 682016
                    </p>
                    <p className="text-xs text-brand-dark/60 mt-0.5">
                      Branch depots in Trivandrum, Kozhikode & Munnar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Areas Badge */}
            <div className="bg-brand-dark text-white rounded-3xl p-6 sm:p-7">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
                Operational Coverage
              </span>
              <p className="text-xs text-white/80 leading-relaxed mb-4">
                We operate across all 14 districts of Kerala with inter-state permits for Tamil Nadu, Karnataka, and Andhra Pradesh.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] text-white/90">
                <span className="bg-white/10 px-2.5 py-1 rounded-md">Kannur Airport (COK)</span>
                <span className="bg-white/10 px-2.5 py-1 rounded-md">Trivandrum (TRV)</span>
                <span className="bg-white/10 px-2.5 py-1 rounded-md">Calicut (CCJ)</span>
                <span className="bg-white/10 px-2.5 py-1 rounded-md">Munnar</span>
                <span className="bg-white/10 px-2.5 py-1 rounded-md">Alleppey</span>
                <span className="bg-white/10 px-2.5 py-1 rounded-md">Wayanad</span>
                <span className="bg-white/10 px-2.5 py-1 rounded-md">Bengaluru</span>
              </div>
            </div>
          </div>

          {/* Right Column: Send an Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-dark/10 shadow-sm">
              <h2 className="text-2xl font-bold text-brand-dark font-helvetica-neue mb-1">
                Send an Enquiry
              </h2>
              <p className="text-xs text-brand-dark/70 mb-6">
                Tell us about your upcoming journey and our team will get back to you with a detailed quote.
              </p>

              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-emerald-900">
                    Taking you to WhatsApp...
                  </h3>
                  <p className="text-sm text-emerald-700 mt-2 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{name}</strong>! You are being redirected to WhatsApp to send your enquiry. Once sent, our team will review your details and get back to you shortly.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-3 border border-brand-dark/20 text-brand-dark text-xs font-bold uppercase rounded-xl hover:bg-brand-light"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase text-brand-dark/70 block mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Varma"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-brand-light border border-brand-dark/15 text-brand-dark text-xs rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-brand-dark/70 block mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 90619 51128"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-brand-light border border-brand-dark/15 text-brand-dark text-xs rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                      />
                    </div>
                  </div>

                  {/* Email & Travel Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase text-brand-dark/70 block mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-brand-light border border-brand-dark/15 text-brand-dark text-xs rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-brand-dark/70 block mb-1.5">
                        Travel Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className="w-full bg-brand-light border border-brand-dark/15 text-brand-dark text-xs rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                      />
                    </div>
                  </div>

                  {/* Passengers & Preferred Vehicle */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase text-brand-dark/70 block mb-1.5">
                        Number of Passengers *
                      </label>
                      <select
                        value={passengers}
                        onChange={(e) => setPassengers(e.target.value)}
                        className="w-full bg-brand-light border border-brand-dark/15 text-brand-dark text-xs rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                      >
                        <option value="1-3">1–3 Passengers (Car / Sedan)</option>
                        <option value="4-6">4–6 Passengers (Innova / SUV)</option>
                        <option value="7-12">7–12 Passengers (Force Traveller 12-Seater)</option>
                        <option value="13-16">13–16 Passengers (Force Urbania / Traveller)</option>
                        <option value="17-19">17–19 Passengers (Force Traveller 19-Seater)</option>
                        <option value="20-23">20–23 Passengers (Mini Bus 23-Seater)</option>
                        <option value="24-34">24–34 Passengers (Mini Bus 34-Seater)</option>
                        <option value="35-49">35–49 Passengers (BharatBenz / Volvo Coach)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase text-brand-dark/70 block mb-1.5">
                        Preferred Vehicle
                      </label>
                      <select
                        value={vehicle}
                        onChange={(e) => setVehicle(e.target.value)}
                        className="w-full bg-brand-light border border-brand-dark/15 text-brand-dark text-xs rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                      >
                        <option value="any">Any Best Matching Vehicle</option>
                        {FLEET_DATA.map((v) => (
                          <option key={v.id} value={v.name}>
                            {v.name} ({v.capacity} Seats)
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Pickup & Destination */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase text-brand-dark/70 block mb-1.5">
                        Pickup Location *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Cochin Airport (COK) or Hotel"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        className="w-full bg-brand-light border border-brand-dark/15 text-brand-dark text-xs rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-brand-dark/70 block mb-1.5">
                        Destination / Drop *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Munnar (3-Day Tour) / Local"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full bg-brand-light border border-brand-dark/15 text-brand-dark text-xs rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-bold uppercase text-brand-dark/70 block mb-1.5">
                      Additional Message / Itinerary Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Special requirements, flight number, number of luggage bags, multiple stops, etc."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-brand-light border border-brand-dark/15 text-brand-dark text-xs rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-dark hover:bg-brand-green text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-emerald-400" />
                    <span>Submit Enquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

