import { Heart, Facebook, Instagram, Phone, Mail, MapPin, Ambulance } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#0d3b66] text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Logo + Tagline + Social */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#0d3b66] fill-[#0d3b66]" />
              </div>
              <span
                className="px-3 py-1 rounded-md bg-white"
                style={{
                  color: "#0d3b66",
                  fontFamily: "Poppins, var(--font-inter), system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: "1.25rem",
                }}
              >
                Abhigya Hospital
              </span>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p
                className="leading-relaxed"
                style={{
                  color: "#495057",
                  fontFamily: "Poppins, var(--font-inter), system-ui, sans-serif",
                  fontWeight: 400,
                  fontSize: "0.85rem",
                }}
              >
                Your Health, Our Priority
              </p>
            </div>
            <div className="flex gap-3 pt-1">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0d3b66] text-white inline-flex items-center justify-center transition-transform hover:scale-110 ring-1 ring-white/30"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0d3b66] text-white inline-flex items-center justify-center transition-transform hover:scale-110 ring-1 ring-white/30"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-white/80 hover:text-white transition-colors text-sm py-1">
                Home
              </Link>
              <Link href="/departments" className="text-white/80 hover:text-white transition-colors text-sm py-1">
                Departments
              </Link>
              <Link href="/doctors" className="text-white/80 hover:text-white transition-colors text-sm py-1">
                Our Doctors
              </Link>
              <Link href="/appointments" className="text-white/80 hover:text-white transition-colors text-sm py-1">
                Book Appointment
              </Link>
              <Link href="/about" className="text-white/80 hover:text-white transition-colors text-sm py-1">
                About Us
              </Link>
              <Link href="/contact" className="text-white/80 hover:text-white transition-colors text-sm py-1">
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-white/80 leading-relaxed">
                  <p>Sports College</p>
                  <p>Gorakhpur, Uttar Pradesh</p>
                  <p>India</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-white/80 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-sm text-white/80 hover:text-white transition-colors">
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-white/80 flex-shrink-0" />
                <a
                  href="mailto:info@healthcare.com"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  info@healthcare.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Emergency & Hours */}
          <div className="space-y-3">
            <h3
              className="text-base"
              style={{ color: "#e63946", fontWeight: 600, marginBottom: "0.5rem" }}
            >
              Emergency? Call Now
            </h3>
            <div className="bg-red-600 rounded-lg p-5">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Ambulance className="w-6 h-6 text-white" />
                <a
                  href="tel:108"
                  className="hover:text-red-100 transition-colors"
                  style={{ color: "#ffffff", fontSize: "1.2rem", fontWeight: 600 }}
                >
                  108
                </a>
              </div>
              <p className="text-center text-sm text-white/80">Open 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-white/60">
            © {new Date().getFullYear()} HealthCare+. All rights reserved. | Designed with care for your health.
          </p>
        </div>
      </div>
    </footer>
  )
}
