"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Phone } from 'lucide-react'
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down")
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showEmergencyBanner, setShowEmergencyBanner] = useState(true)
  const [activeLink, setActiveLink] = useState("#home")
  const isMobile = useIsMobile()
  const router = useRouter()

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }, [isMobile, isMobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down")
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up")
      }

      setIsScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#departments", label: "Departments" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#cta", label: "Contact" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setActiveLink(href)
    setIsMobileMenuOpen(false)

    // Special handling for appointment link - redirect to appointment page
    if (href === "#appointment") {
      window.location.href = "/appointment"
      return
    }

    // Smooth scroll to section
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const navbarHeight = showEmergencyBanner ? 112 : 80
      const targetPosition = targetElement.offsetTop - navbarHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {showEmergencyBanner && (
        <div
          className="relative overflow-hidden text-white py-2.5 px-4 text-center transition-all duration-300"
          style={{
            background: "linear-gradient(to right, #e63946, #d90429)",
          }}
        >
          <div className="flex items-center justify-center gap-2 relative z-10">
            <Phone className="h-4 w-4 animate-pulse-phone" />
            <span className="font-medium text-[0.875rem]" style={{ fontWeight: 500 }}>
              Emergency? Call Now:{" "}
              <a href="tel:+919876543210" className="underline hover:text-white/90 transition-colors font-semibold">
                +91 98765 43210
              </a>
            </span>
          </div>
          <button
            onClick={() => setShowEmergencyBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-white/80 transition-all hover:rotate-90 duration-300"
            aria-label="Close emergency banner"
            style={{ fontSize: "1.2rem" }}
          >
            ×
          </button>
        </div>
      )}

      <nav
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]" : "bg-white/95 backdrop-blur-md",
          scrollDirection === "up" && isScrolled ? "py-1" : "",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group relative z-[60]">
              <div className="flex items-center gap-3 px-3 py-2 rounded-md shadow-[0_2px_6px_rgba(13,59,102,0.08)] hover:shadow-[0_4px_10px_rgba(13,59,102,0.12)] transition-all bg-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:animate-pulse-ecg"
                >
                  <path
                    d="M3 12h4l3-9 4 18 3-9h4"
                    stroke="#06D6A0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="text-[1.35rem] md:text-[1.65rem] font-semibold leading-tight text-[#0d3b66]"
                  style={{
                    letterSpacing: "0.5px",
                    textShadow: "0 1px 2px rgba(0,0,0,0.05)",
                    fontWeight: 600,
                  }}
                >
                  Abhigya Hospital
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "relative group px-[1.1rem] py-[0.8rem] text-[1.05rem] transition-all",
                    activeLink === link.href ? "text-[#06D6A0] font-semibold" : "text-[#3a3a3a] hover:text-[#06D6A0]",
                  )}
                  style={{
                    fontWeight: activeLink === link.href ? 600 : 500,
                    textShadow: activeLink === link.href ? "0 0 6px rgba(6, 214, 160, 0.2)" : "none",
                  }}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-2 left-[1.1rem] right-[1.1rem] h-0.5 bg-[#06D6A0] transition-transform origin-left duration-300",
                      activeLink === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Button
                className="relative overflow-hidden text-white font-semibold px-[1.4rem] py-[0.7rem] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-[#06D6A0] focus-visible:outline-2 focus-visible:outline-offset-4 group"
                style={{
                  background: "linear-gradient(135deg, #06D6A0, #04a884)",
                  borderRadius: "10px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  boxShadow: "0 4px 12px rgba(6, 214, 160, 0.25)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 6px 16px rgba(6, 214, 160, 0.35)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(6, 214, 160, 0.25)"
                }}
                onClick={() => router.push('/appointment')}
                aria-label="Book Appointment"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 transition-transform group-hover:scale-110 duration-300 ease-in-out" />
                  <span>Book Appointment</span>
                </div>
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            {isMobile && (
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden relative p-3 text-[#0d3b66] hover:text-[#06D6A0] transition-colors w-12 h-12 flex items-center justify-center z-[60] touch-manipulation bg-white rounded-lg shadow-md hover:shadow-lg active:scale-95 active:bg-gray-50"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
                type="button"
                style={{
                  pointerEvents: 'auto',
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'rgba(6, 214, 160, 0.1)',
                  minWidth: '48px',
                  minHeight: '48px'
                }}
              >
                <div className="relative w-6 h-5 flex flex-col justify-between">
                  <span
                    className={cn(
                      "block h-[2.5px] w-full bg-current transition-all duration-300 origin-center rounded-full",
                      isMobileMenuOpen ? "rotate-45 translate-y-[9px]" : "",
                    )}
                  />
                  <span
                    className={cn(
                      "block h-[2.5px] w-full bg-current transition-all duration-300 rounded-full",
                      isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100",
                    )}
                  />
                  <span
                    className={cn(
                      "block h-[2.5px] w-full bg-current transition-all duration-300 origin-center rounded-full",
                      isMobileMenuOpen ? "-rotate-45 -translate-y-[9px]" : "",
                    )}
                  />
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[51] transition-opacity duration-300"
              onClick={closeMobileMenu}
              onTouchEnd={closeMobileMenu}
              aria-hidden="true"
              style={{
                top: showEmergencyBanner ? "112px" : "80px",
                pointerEvents: 'auto',
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
              }}
            />

            {/* Mobile menu content */}
            <div
              className="fixed inset-y-0 right-0 w-full max-w-sm sm:max-w-md bg-white z-[52] overflow-y-auto shadow-2xl"
              style={{
                top: showEmergencyBanner ? "112px" : "80px",
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 50h20l10-30 10 60 10-30h20' stroke='%2306D6A0' strokeWidth='0.5' fill='none' opacity='0.05'/%3E%3C/svg%3E")`,
                backgroundSize: "200px 200px",
                animation: "slideInRight 0.3s ease-out",
                pointerEvents: 'auto',
                touchAction: 'manipulation'
              }}
            >
              <div className="p-6 space-y-1">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "block py-4 px-4 text-lg font-semibold text-[#0d3b66] rounded-lg transition-all border-l-[3px] border-transparent hover:border-[#06D6A0] hover:bg-[#06D6A0]/5 touch-manipulation active:scale-98 active:bg-[#06D6A0]/10",
                      activeLink === link.href ? "border-[#06D6A0] bg-[#06D6A0]/5" : "",
                    )}
                    style={{
                      fontWeight: 600,
                      animation: `fadeInUp 0.2s ease-out ${index * 0.05}s both`,
                      touchAction: 'manipulation',
                      WebkitTapHighlightColor: 'rgba(6, 214, 160, 0.1)',
                      minHeight: '48px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="pt-6 mt-6 border-t border-gray-100" style={{ animation: "fadeInUp 0.2s ease-out 0.3s both" }}>
                  <Button
                    asChild
                    className="w-full text-white font-semibold py-4 text-lg touch-manipulation active:scale-98"
                    style={{
                      background: "linear-gradient(135deg, #06D6A0, #04a884)",
                      borderRadius: "12px",
                      fontWeight: 600,
                      boxShadow: "0 4px 12px rgba(6, 214, 160, 0.25)",
                      touchAction: 'manipulation'
                    }}
                  >
                    <Link
                      href="/appointment"
                      prefetch={false}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center gap-3 w-full"
                    >
                      <Calendar className="h-5 w-5" />
                      Book Appointment
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  )
}
