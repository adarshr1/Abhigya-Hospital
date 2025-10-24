"use client"
import { Activity, Calendar, Users, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

export function MedicalHero() {
  const router = useRouter()

  const handleBookAppointment = () => {
    router.push("/appointment")
  }

  const handleMeetDoctors = () => {
    // Since there's no doctors section, scroll to departments section instead
    const departmentsSection = document.getElementById("departments")
    if (departmentsSection) {
      departmentsSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background image with subtle medical motifs (blurred) */}
      {(() => {
        const svg = `
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'>
  <defs>
    <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
      <stop offset='0%' stop-color='%2306D6A0'/><stop offset='100%' stop-color='%230d3b66'/>
    </linearGradient>
    <filter id='blur'><feGaussianBlur stdDeviation='12'/></filter>
  </defs>
  <rect width='1600' height='900' fill='url(%23g)'/>
  <g opacity='0.09' stroke='%23ffffff' stroke-width='2' fill='none' filter='url(%23blur)'>
    <path d='M0,600 C200,550 250,450 320,460 L380,620 L470,280 L560,780 L640,450 L760,520 L900,500 L1100,560 L1300,520 L1600,540'/>
    <path d='M0,680 C220,640 300,520 360,520 L420,660 L500,320 L600,820 L700,500 L820,560 L960,540 L1140,600 L1340,560 L1600,590' opacity='0.7'/>
  </g>
  <g opacity='0.06'>
    <circle cx='250' cy='180' r='140' fill='%23ffffff'/>
    <circle cx='1280' cy='220' r='180' fill='%23ffffff'/>
    <circle cx='980' cy='720' r='120' fill='%23ffffff'/>
  </g>
</svg>`
        const bg = `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`
        return (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: bg,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(2px)',
              transform: 'scale(1.02)',
            }}
          />
        )
      })()}
      {/* Dark blue overlay to ensure readability */}
      <div className="absolute inset-0" style={{ background: "rgba(13, 59, 102, 0.5)" }} />

      <div className="absolute top-0 left-0 right-0 h-24 md:h-32 overflow-hidden opacity-30">
        <svg
          className="w-full h-full drop-shadow-[0_0_8px_rgba(6,214,160,0.3)]"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,50 L280,50 L300,20 L320,80 L340,30 L360,50 L1200,50"
            fill="none"
            stroke="#e63946"
            strokeWidth="3"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            style={{
              animation: "pulse-line 3s ease-in-out infinite",
            }}
          />
        </svg>
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#e63946]/20 to-[#e63946]/5 mb-6 md:mb-8 shadow-[0_0_30px_rgba(230,57,70,0.2)]">
              <Activity
                className="w-8 h-8 md:w-10 md:h-10 text-[#e63946] drop-shadow-[0_0_8px_rgba(230,57,70,0.5)]"
                style={{
                  animation: "heartbeat 2s ease-in-out infinite",
                }}
              />
            </div>

            {/* Headline */}
            <h1
              className="text-[2rem] md:text-[3rem] font-semibold text-[#0d3b66] mb-4 md:mb-6 text-balance leading-tight"
              style={{ fontFamily: "Poppins, var(--font-inter), system-ui, sans-serif", fontWeight: 600 }}
            >
              Your Health, Our Priority
            </h1>

            {/* Subheading */}
            <p
              className="text-[1.2rem] md:text-[1.4rem] mb-8 md:mb-10 text-pretty leading-relaxed tracking-wide"
              style={{ color: "#e9ecef" }}
            >
              Advanced Care. Compassionate Service.
            </p>

            <div className="flex flex-col items-center lg:items-start gap-6 pt-4">
              <div className="flex flex-col sm:flex-row gap-4 w-full items-center justify-center lg:justify-start">
                <button
                  onClick={handleBookAppointment}
                  role="button"
                  aria-label="Book an appointment at Abhigya Hospital"
                  className="group relative w-full sm:w-auto min-w-[280px] max-w-[300px] sm:max-w-none
                    bg-gradient-to-br from-[#06D6A0] to-[#04a884]
                    text-white font-semibold
                    text-base md:text-[1.1rem]
                    px-6 md:px-7 py-3 md:py-[0.85rem]
                    rounded-xl
                    shadow-[0_4px_16px_rgba(6,214,160,0.25)]
                    hover:shadow-[0_8px_24px_rgba(6,214,160,0.4)]
                    hover:-translate-y-[3px]
                    active:translate-y-0
                    focus:outline-none focus:ring-2 focus:ring-[#06D6A0] focus:ring-offset-2
                    transition-all duration-300 ease-out
                    flex items-center justify-center gap-3
                    touch-manipulation
                    before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, WebkitTapHighlightColor: "transparent" }}
                >
                  <Calendar
                    className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"
                    aria-hidden="true"
                  />
                  <span>Book an Appointment</span>
                  <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-white/80 animate-pulse" />
                </button>

                <button
                  onClick={handleMeetDoctors}
                  className="group w-full sm:w-auto min-w-[280px] max-w-[300px] sm:max-w-none
                    bg-white border-2 border-[#0d3b66]
                    text-[#0d3b66] font-semibold
                    text-base md:text-lg
                    px-6 md:px-8 py-3 md:py-[0.85rem]
                    rounded-xl
                    hover:bg-[#0d3b66] hover:text-white
                    hover:shadow-[0_4px_16px_rgba(13,59,102,0.2)]
                    focus:outline-none focus:ring-2 focus:ring-[#0d3b66] focus:ring-offset-2
                    transition-all duration-300
                    flex items-center justify-center gap-3
                    touch-manipulation"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, WebkitTapHighlightColor: "transparent" }}
                >
                  <Users className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110 duration-300" />
                  <span>Explore Departments</span>
                </button>
              </div>

              {/* Secondary Text */}
              <div className="text-center lg:text-left max-w-[320px] mx-auto lg:mx-0">
                <p
                  className="text-[0.9rem] flex items-center justify-center lg:justify-start gap-2 font-medium animate-pulse"
                  style={{ fontFamily: "Poppins, var(--font-inter), system-ui, sans-serif", color: "#06D6A0" }}
                >
                  <span className="inline-block w-2 h-2 bg-[#06D6A0] rounded-full" />
                  24/7 Online Booking • Instant Confirmation
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-1 items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Pulsing circles with glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-64 h-64 rounded-full bg-[#e63946]/10 animate-ping shadow-[0_0_60px_rgba(230,57,70,0.2)]"
                  style={{ animationDuration: "3s" }}
                />
                <div
                  className="absolute w-48 h-48 rounded-full bg-[#e63946]/15 animate-ping shadow-[0_0_40px_rgba(230,57,70,0.18)]"
                  style={{ animationDuration: "2s" }}
                />
                <div className="absolute w-32 h-32 rounded-full bg-[#e63946]/20 animate-pulse shadow-[0_0_30px_rgba(230,57,70,0.28)]" />
              </div>

              {/* Center medical cross with glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-24 h-24 drop-shadow-[0_0_20px_rgba(230,57,70,0.4)]">
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-6 bg-gradient-to-r from-[#e63946] to-[#c82333] rounded-full" />
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-6 bg-gradient-to-b from-[#e63946] to-[#c82333] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 C300,100 600,20 900,60 C1050,80 1150,60 1200,50 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-background opacity-50"
          />
        </svg>
      </div>
    </section>
  )
}
