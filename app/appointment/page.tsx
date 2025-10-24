import type { Metadata } from "next"
import { AppointmentForm } from "@/components/appointment-form"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft, Calendar, Clock, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Book Appointment - Gorakhpur Hospital",
  description: "Schedule your appointment with our expert medical professionals. Easy online booking system for all departments.",
}

export default function AppointmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Header with Navigation */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="font-medium">Back to Home</span>
              </Link>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Secure Booking</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              Appointment Booking
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Schedule Your
              <span className="text-primary"> Appointment</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Book your consultation with our expert medical professionals. Our easy-to-use system guides you through the process step by step.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-primary/10">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Quick & Easy</h3>
                <p className="text-sm text-muted-foreground text-center">Complete your booking in just a few minutes</p>
              </div>

              <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-primary/10">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Instant Confirmation</h3>
                <p className="text-sm text-muted-foreground text-center">Get immediate confirmation via email and SMS</p>
              </div>

              <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-primary/10">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Secure & Private</h3>
                <p className="text-sm text-muted-foreground text-center">Your information is protected with bank-level security</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl border border-primary/10">
                <h3 className="text-2xl font-bold text-foreground mb-4">Need Help?</h3>
                <p className="text-muted-foreground mb-4">
                  Our patient care team is here to assist you with any questions about your appointment or our services.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium">Phone:</span>
                    <a href="tel:+919876543210" className="text-primary hover:underline">
                      +91 98765 43210
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium">Email:</span>
                    <a href="mailto:appointments@gorakhpurhospital.com" className="text-primary hover:underline">
                      appointments@gorakhpurhospital.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl border border-primary/10">
                <h3 className="text-2xl font-bold text-foreground mb-4">Emergency Care</h3>
                <p className="text-muted-foreground mb-4">
                  For medical emergencies, please call our 24/7 emergency hotline or visit our emergency department immediately.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium">Emergency:</span>
                    <a href="tel:+911026543210" className="text-red-600 hover:underline font-semibold">
                      +91 102 654 3210
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium">Address:</span>
                    <span className="text-muted-foreground">
                      123 Medical Center, Gorakhpur, UP 273001
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
