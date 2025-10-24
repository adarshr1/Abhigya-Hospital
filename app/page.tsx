import { MedicalHero } from "@/components/medical-hero"
import { DepartmentsSection } from "@/components/departments-section"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { Footer } from "@/components/footer"
import { CallToAction } from "@/components/call-to-action"

export default function Home() {
  return (
    <main>
      <section id="home">
        <MedicalHero />
      </section>
      <section id="find-doctors" className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-center"
            style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontWeight: 600,
              color: "#0d3b66",
              fontFamily: "Poppins, var(--font-inter), system-ui, sans-serif",
            }}
          >
            Find the Right Doctor
          </h2>
          <p className="text-center mt-2 mb-6 md:mb-8" style={{ color: "#495057" }}>
            Browse specialties and connect with experienced doctors in Gorakhpur.
          </p>

          {/* Actions */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-8">
            <a
              href="/#departments"
              className="inline-block text-center px-5 py-2.5 rounded-lg font-medium border-2"
              style={{ borderColor: "#06D6A0", color: "#06D6A0", fontFamily: "Poppins, var(--font-inter), system-ui, sans-serif" }}
            >
              Find by Department
            </a>
            <a
              href="/appointment"
              className="inline-block text-center px-5 py-2.5 rounded-lg font-medium text-white"
              style={{ background: "linear-gradient(135deg, #06D6A0, #04a884)", fontFamily: "Poppins, var(--font-inter), system-ui, sans-serif" }}
            >
              Book with a Doctor
            </a>
          </div>

          {/* Responsive doctor cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl border border-gray-100 bg-white p-4 md:p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    alt="Doctor avatar"
                    className="w-14 h-14 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <p className="font-semibold" style={{ color: "#0d3b66", fontFamily: "Poppins, var(--font-inter), system-ui, sans-serif" }}>
                      Dr. {i === 1 ? 'Aarav Singh' : i === 2 ? 'Ananya Verma' : 'Rohan Gupta'}
                    </p>
                    <p className="text-sm" style={{ color: "#6c757d" }}>
                      {i === 1 ? 'Cardiology' : i === 2 ? 'Pediatrics' : 'Orthopedics'}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm" style={{ color: "#495057" }}>
                  {i === 1
                    ? 'Specialist in heart care with 10+ years of experience.'
                    : i === 2
                    ? 'Child health expert focused on compassionate care.'
                    : 'Bone and joint specialist with modern surgical expertise.'}
                </p>
                <div className="mt-4 flex gap-3">
                  <a
                    href="/appointment"
                    className="px-4 py-2 rounded-md text-sm font-medium text-white"
                    style={{ background: "linear-gradient(135deg, #06D6A0, #04a884)" }}
                  >
                    Book Now
                  </a>
                  <a
                    href="/#departments"
                    className="px-4 py-2 rounded-md text-sm font-medium border"
                    style={{ borderColor: "#06D6A0", color: "#06D6A0" }}
                  >
                    View Dept
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="location" className="py-4 md:py-6">
        <div className="container mx-auto px-2">
          <h2
            className="text-center mb-3"
            style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontWeight: 600,
              color: "#0d3b66",
              fontFamily: "Poppins, var(--font-inter), system-ui, sans-serif",
            }}
          >
            Find Us Easily
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 items-start">
            {/* Address & Directions (top on mobile) */}
            <div>
              <h3
                style={{ color: "#0d3b66", fontWeight: 600, fontSize: "1.4rem", marginBottom: "0.5rem", fontFamily: "Poppins, var(--font-inter), system-ui, sans-serif" }}
              >
                Gorakhpur Hospital
              </h3>
              <p className="flex items-start gap-2" style={{ fontSize: "1rem", color: "#333333", marginBottom: "0.25rem" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#0d3b66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mt-1">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Gorakhpur, Uttar Pradesh, India
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Gorakhpur+Hospital,+Gorakhpur,+Uttar+Pradesh,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center px-4 py-2 rounded-lg font-medium bg-[#0d3b66] text-white transition-colors duration-300 hover:bg-[#06D6A0] mt-1"
                style={{ fontFamily: "Poppins, var(--font-inter), system-ui, sans-serif" }}
              >
                Get Directions on Google Maps
              </a>
            </div>

            {/* Map Embed (bottom on mobile) */}
            <div className="w-full overflow-hidden mx-auto max-w-[240px] sm:max-w-[280px] md:max-w-[320px]">
              <div className="w-full aspect-square">
                <iframe
                  title="Gorakhpur Hospital Location"
                  src="https://www.google.com/maps?q=Gorakhpur%20Hospital%20Gorakhpur%20Uttar%20Pradesh&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="departments">
        <DepartmentsSection />
      </section>
      <section id="cta">
        <CallToAction />
      </section>
      <section id="testimonials">
        <TestimonialsCarousel />
      </section>
      <Footer />
    </main>
  )
}
