import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { FLEET_DATA } from '../data/fleetData'
import {
  Calendar,
  Users,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react'

export function BookingPage() {
  const [searchParams] = useSearchParams()
  const preselectedVehicleSlug = searchParams.get('vehicle') || ''
  const preselectedService = searchParams.get('service') || ''

  // Form State
  const [journeyType, setJourneyType] = useState<string>(
    preselectedService === 'airport-transfer'
      ? 'Airport Transfer'
      : preselectedService === 'wedding-transportation'
      ? 'Event / Wedding'
      : 'Outstation'
  )
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [passengers, setPassengers] = useState('4')
  const [selectedVehicle, setSelectedVehicle] = useState(
    preselectedVehicleSlug
      ? FLEET_DATA.find((v) => v.slug === preselectedVehicleSlug)?.name || 'Toyota Innova Crysta'
      : 'Toyota Innova Crysta'
  )
  const [travelDate, setTravelDate] = useState('')
  const [travelTime, setTravelTime] = useState('')
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [tripDuration, setTripDuration] = useState('1 Day')
  const [specialNotes, setSpecialNotes] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [bookingRef, setBookingRef] = useState('')

  useEffect(() => {
    if (preselectedVehicleSlug) {
      const match = FLEET_DATA.find((v) => v.slug === preselectedVehicleSlug)
      if (match) {
        setSelectedVehicle(match.name)
        setPassengers(String(match.capacity))
      }
    }
  }, [preselectedVehicleSlug])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Generate a reference ID like PRY-2026-XXXX
    const ref = `PRY-${Math.floor(1000 + Math.random() * 9000)}`
    setBookingRef(ref)
    setIsSuccess(true)
    window.open(whatsappUrl, '_blank')
  }

  const selectedVehicleObj = FLEET_DATA.find((v) => v.name === selectedVehicle)

    const divider = '\u2501'.repeat(26);
  const whatsappMessage = `${divider}\n` +
    `       \u{1F690} *TRAVEL ENQUIRY* \u{1F334}\n` +
    `${divider}\n\n` +
    `\u{1F464} *Customer Details*\n\n` +
    `*Name*       : ${name || 'Customer'}\n` +
    `*Phone*      : ${phone}\n\n` +
    `\u{1F6E3}\u{FE0F} *Journey Details*\n\n` +
    `*Vehicle*    : ${selectedVehicle || 'Not Selected'}\n` +
    `*Passengers* : ${passengers || 'Not Specified'}\n` +
    `*Type*       : ${journeyType}\n` +
    `*Date*       : ${travelDate}${travelTime ? ` at ${travelTime}` : ''}\n` +
    `*Duration*   : ${tripDuration || 'N/A'}\n\n` +
    `\u{1F4CD} *Pickup*     : ${pickup || 'Not Specified'}\n` +
    `\u{1F3C1} *Destination*: ${destination || 'Not Specified'}\n\n` +
    `\u{1F4DD} *Additional Requirements:*\n` +
    `${specialNotes || 'None'}\n\n` +
    `${divider}\n` +
    `Generated from:\n` +
    `*Prayana Travels* \u{2728}`;

  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen bg-brand-cream py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green">
            Fast 30-Second Flow
          </span>
          <h1 className="text-4xl sm:text-5xl font-light text-brand-dark tracking-tight mt-2 font-helvetica-neue">
            Request / Book a Vehicle
          </h1>
          <p className="text-base text-brand-dark/75 mt-3 leading-relaxed">
            Reserve your preferred vehicle in under 30 seconds. No payment required upfront—our team will verify availability and send you a transparent quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Booking Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-dark/10 shadow-sm">
              {isSuccess ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
                    Taking you to WhatsApp...
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark font-helvetica-neue mt-1">
                    Thank You, {name}!
                  </h2>
                  <p className="text-xs font-bold text-brand-dark/60 mt-1">
                    Booking Reference: <span className="text-brand-dark">{bookingRef}</span>
                  </p>

                  <div className="bg-brand-light rounded-2xl p-5 my-6 text-left border border-brand-dark/10 space-y-2 text-xs text-brand-dark/80">
                    <div className="flex justify-between">
                      <span className="text-brand-dark/60">Selected Vehicle:</span>
                      <strong className="text-brand-dark">{selectedVehicle}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-dark/60">Journey Type:</span>
                      <strong className="text-brand-dark">{journeyType}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-dark/60">Travel Date:</span>
                      <strong className="text-brand-dark">{travelDate}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-dark/60">Route:</span>
                      <strong className="text-brand-dark">{pickup} → {destination}</strong>
                    </div>
                  </div>

                  <p className="text-sm text-brand-dark/80 max-w-md mx-auto mb-8 leading-relaxed">
                    You are being redirected to WhatsApp to send this booking request. Once sent, our fleet operations team will review your details and reply shortly with exact pickup timing and rates.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="w-full sm:w-auto px-6 py-3.5 border border-brand-dark/20 text-brand-dark font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-brand-light transition-colors"
                    >
                      Make Another Booking
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Journey Type */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-dark/70 block mb-2.5">
                      1. Select Journey Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'Local', label: 'Local Taxi' },
                        { id: 'Outstation', label: 'Outstation' },
                        { id: 'Airport Transfer', label: 'Airport' },
                        { id: 'Event / Wedding', label: 'Event / Tour' },
                      ].map((item) => {
                        const isSelected = journeyType === item.id
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setJourneyType(item.id)}
                            className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-brand-dark text-white shadow-sm'
                                : 'bg-brand-light text-brand-dark/70 hover:bg-brand-cream border border-brand-dark/10'
                            }`}
                          >
                            {item.label}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Step 2: Passenger Count & Vehicle Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-brand-dark/70 block mb-1.5">
                        2. Number of Passengers *
                      </label>
                      <select
                        value={passengers}
                        onChange={(e) => setPassengers(e.target.value)}
                        className="w-full bg-brand-light border border-brand-dark/15 text-brand-dark text-xs rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green/50 font-medium"
                      >
                        <option value="1-3">1–3 Passengers (Sedan / Dzire / Etios)</option>
                        <option value="4-6">4–6 Passengers (SUV / Innova Crysta)</option>
                        <option value="7-12">7–12 Passengers (12-Seater Traveller)</option>
                        <option value="13-16">13–16 Passengers (16-Seater Force Urbania)</option>
                        <option value="17-19">17–19 Passengers (17–19 Seater Traveller)</option>
                        <option value="20-23">20–23 Passengers (23-Seater Mini Bus)</option>
                        <option value="24-34">24–34 Passengers (34-Seater Mini Bus)</option>
                        <option value="35-49">35–49 Passengers (45–49 Seater Volvo/Benz)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-brand-dark/70 block mb-1.5">
                        Preferred Vehicle *
                      </label>
                      <select
                        value={selectedVehicle}
                        onChange={(e) => setSelectedVehicle(e.target.value)}
                        className="w-full bg-brand-light border border-brand-dark/15 text-brand-dark text-xs rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green/50 font-medium"
                      >
                        {FLEET_DATA.map((v) => (
                          <option key={v.id} value={v.name}>
                            {v.name} ({v.capacity} Seats - {v.acType})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Step 3: Date, Time & Duration */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-brand-dark/70 block mb-1.5">
                        Travel Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className="w-full bg-brand-light border border-brand-dark/15 text-brand-dark text-xs rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green/50 font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-brand-dark/70 block mb-1.5">
                        Pickup Time
                      </label>
                      <input
                        type="time"
                        value={travelTime}
                        onChange={(e) => setTravelTime(e.target.value)}
                        className="w-full bg-brand-light border border-brand-dark/15 text-brand-dark text-xs rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green/50 font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-brand-dark/70 block mb-1.5">
                        Duration
                      </label>
                      <select
                        value={tripDuration}
                        onChange={(e) => setTripDuration(e.target.value)}
                        className="w-full bg-brand-light border border-brand-dark/15 text-brand-dark text-xs rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green/50 font-medium"
                      >
                        <option value="One-Way Drop">One-Way Drop</option>
                        <option value="1 Day (Roundtrip)">1 Day (Roundtrip)</option>
                        <option value="2 Days">2 Days Tour</option>
                        <option value="3-5 Days">3–5 Days Kerala Tour</option>
                        <option value="6+ Days (Extended)">6+ Days Extended Package</option>
                      </select>
                    </div>
                  </div>

                  {/* Step 4: Locations */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-brand-dark/70 block mb-1.5">
                        Pickup Location / Airport *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Cochin Airport (COK) or Kochi City"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        className="w-full bg-brand-light border border-brand-dark/15 text-brand-dark text-xs rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-brand-dark/70 block mb-1.5">
                        Destination / Itinerary *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Munnar / Thekkady / Alleppey"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full bg-brand-light border border-brand-dark/15 text-brand-dark text-xs rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                      />
                    </div>
                  </div>

                  {/* Step 5: Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-brand-dark/10">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-brand-dark/70 block mb-1.5">
                        Your Full Name *
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
                      <label className="text-xs font-bold uppercase tracking-wider text-brand-dark/70 block mb-1.5">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-brand-light border border-brand-dark/15 text-brand-dark text-xs rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                      />
                    </div>
                  </div>

                  {/* Special Notes */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-dark/70 block mb-1.5">
                      Special Requests / Flight Number
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Flight 6E 402 arrival at 9:30 AM, need 2 child seats, heavy luggage, etc."
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      className="w-full bg-brand-light border border-brand-dark/15 text-brand-dark text-xs rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-dark hover:bg-brand-green text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    <span>Submit Booking Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Live Selection Summary & Trust Badges (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Live Vehicle Summary Card */}
            {selectedVehicleObj && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-brand-dark/10 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-green block mb-1">
                  Selected Vehicle
                </span>
                <h3 className="text-xl font-bold text-brand-dark font-helvetica-neue">
                  {selectedVehicleObj.name}
                </h3>
                <p className="text-xs text-brand-dark/60 mb-4">
                  {selectedVehicleObj.subtitle}
                </p>

                <div className="h-44 rounded-2xl overflow-hidden mb-4 bg-brand-light">
                  <img
                    src={selectedVehicleObj.image}
                    alt={selectedVehicleObj.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-brand-dark/80 mb-4">
                  <div className="bg-brand-light p-2.5 rounded-lg flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-brand-green" />
                    <span>{selectedVehicleObj.capacity} Passengers</span>
                  </div>
                  <div className="bg-brand-light p-2.5 rounded-lg flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                    <span>{selectedVehicleObj.acType}</span>
                  </div>
                </div>

                <ul className="space-y-1.5 text-xs text-brand-dark/75 mb-4">
                  {selectedVehicleObj.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="text-emerald-600">✓</span> {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/fleet/${selectedVehicleObj.slug}`}
                  className="text-xs font-bold uppercase text-brand-green hover:underline"
                >
                  View Full Vehicle Profile →
                </Link>
              </div>
            )}

            {/* Quick Contact & WhatsApp Preference Box */}
            <div className="bg-brand-dark text-white rounded-3xl p-6 sm:p-7">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                Prefer Booking on WhatsApp?
              </span>
              <h3 className="text-lg font-bold font-helvetica-neue mb-2">
                Get Instant Quotes on WhatsApp
              </h3>
              <p className="text-xs text-white/80 leading-relaxed mb-5">
                Our support team is active 24/7 on WhatsApp. Share your dates and destination for immediate quotes and live vehicle photos.
              </p>
              <a
                href="https://wa.me/919876543210?text=Hi%20Prayana%2C%20I%20would%20like%20to%20inquire%20about%20a%20vehicle%20booking."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

