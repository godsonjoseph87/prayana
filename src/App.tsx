import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { MobileQuickBar } from './components/MobileQuickBar'

import { HomePage } from './pages/HomePage'
import { FleetPage } from './pages/FleetPage'
import { VehicleDetailPage } from './pages/VehicleDetailPage'
import { ServicesPage } from './pages/ServicesPage'
import { GalleryPage } from './pages/GalleryPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { BookingPage } from './pages/BookingPage'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-cream text-brand-dark font-helvetica-neue flex flex-col selection:bg-brand-green selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/fleet/:slug" element={<VehicleDetailPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Quick Action Widgets */}
        <FloatingWhatsApp />
        <MobileQuickBar />
      </div>
    </Router>
  )
}
