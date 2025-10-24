"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya S.",
    condition: "Cardiac Care",
    review:
      "The staff was incredibly caring and professional. Dr. Sharma explained everything clearly and made me feel at ease throughout my treatment.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqrH6WQZWlwf-ieboFAEbWt7oatX4htEDu3fECYYR5Jq_RC-wb_u4wT80b43xP32UBkqmL_Cwwwi00buTpsJ5U7ANt6FX5xsrgyuTZPn40Od2nRhm-__jvn9q1yOErNAc9cIBU01iXmQXMh=s1360-w1360-h1020-rw",
  },
  {
    id: 2,
    name: "Rajesh K.",
    condition: "Orthopedic Surgery",
    review:
      "Excellent facilities and expert doctors. My knee surgery was successful and the recovery process was smooth thanks to their dedicated physiotherapy team.",
    rating: 5,
    image: "/indian-man-smiling.png",
  },
  {
    id: 3,
    name: "Anita M.",
    condition: "Pediatrics",
    review:
      "My daughter received wonderful care here. The pediatric team was patient, gentle, and made her feel comfortable during her treatment.",
    rating: 5,
    image: "/indian-woman-with-child.jpg",
  },
  {
    id: 4,
    name: "Vikram P.",
    condition: "Neurology",
    review:
      "Outstanding neurological care. The doctors are highly skilled and the diagnostic equipment is state-of-the-art. I am grateful for their expertise.",
    rating: 5,
    image: "/indian-professional-man.png",
  },
  {
    id: 5,
    name: "Meera D.",
    condition: "Gynecology",
    review:
      "Compassionate and respectful care throughout my pregnancy. The maternity ward is excellent and the staff went above and beyond to ensure my comfort.",
    rating: 5,
    image: "/pregnant-indian-woman.jpg",
  },
  {
    id: 6,
    name: "Arjun T.",
    condition: "Emergency Care",
    review:
      "Quick response and life-saving treatment. The emergency team acted swiftly and professionally. I cannot thank them enough for their dedication.",
    rating: 5,
    image: "/indian-man-grateful.jpg",
  },
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [imageTilt, setImageTilt] = useState<Record<number, { x: number; y: number }>>({})

  // Calculate how many cards to show based on screen size
  const getCardsPerView = () => {
    if (typeof window === "undefined") return 1
    if (window.innerWidth >= 1024) return 3 // desktop
    if (window.innerWidth >= 768) return 2 // tablet
    return 1 // mobile
  }

  const [cardsPerView, setCardsPerView] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView())
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - cardsPerView)

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, maxIndex])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  const handleAvatarMove = useCallback((id: number, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const maxShift = 6 // px
    const dx = Math.max(-maxShift, Math.min(maxShift, ((e.clientX - cx) / (rect.width / 2)) * maxShift))
    const dy = Math.max(-maxShift, Math.min(maxShift, ((e.clientY - cy) / (rect.height / 2)) * maxShift))
    setImageTilt((prev) => ({ ...prev, [id]: { x: dx, y: dy } }))
  }, [])

  const handleAvatarLeave = useCallback((id: number) => {
    setImageTilt((prev) => ({ ...prev, [id]: { x: 0, y: 0 } }))
  }, [])

  return (
    <section className="w-full bg-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-balance">
          Trusted by Thousands of Patients
        </h2>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden md:flex bg-white border-primary/20 text-primary shadow-sm hover:bg-primary hover:text-white"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden md:flex bg-white border-primary/20 text-primary shadow-sm hover:bg-primary hover:text-white"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                  <Card className="h-full bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-shadow duration-300 touch-manipulation">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      {/* Avatar */}
                      <div
                        className="w-[64px] h-[64px] rounded-full border-2 border-primary/15 overflow-hidden"
                        onMouseMove={(e) => handleAvatarMove(testimonial.id, e)}
                        onMouseLeave={() => handleAvatarLeave(testimonial.id)}
                        aria-hidden="true"
                      >
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          style={{
                            transform: `translate3d(${imageTilt[testimonial.id]?.x || 0}px, ${imageTilt[testimonial.id]?.y || 0}px, 0)`,
                            transition: "transform 150ms ease-out",
                            willChange: "transform",
                          }}
                        />
                      </div>

                      {/* Star Rating */}
                      <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5" style={{ color: "#FFD700", fill: "#FFD700" }} />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p
                        className="text-[1rem] leading-relaxed italic"
                        style={{ color: "#333", fontWeight: 400 }}
                      >
                        “{testimonial.review}”
                      </p>

                      {/* Patient Name & Condition */}
                      <div className="pt-2">
                        <p className="text-[0.95rem] font-medium" style={{ color: "#0d3b66" }}>— {testimonial.name}</p>
                        <p className="text-[0.85rem]" style={{ color: "#6c757d" }}>{testimonial.condition}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-white border border-primary/40 w-2.5 hover:bg-primary/20"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="bg-white border-primary/20 text-primary hover:bg-primary hover:text-white"
              onClick={goToPrevious}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white border-primary/20 text-primary hover:bg-primary hover:text-white"
              onClick={goToNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
