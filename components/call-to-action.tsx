import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Clock, Users, Award } from "lucide-react"
import Link from "next/link"

export function CallToAction() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Ready to Get Started?
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Book Your Appointment
              <span className="text-primary"> Today</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Don't wait for your health. Schedule your consultation with our expert medical professionals and take the first step towards better health.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-primary/10 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Quick Booking</h3>
              <p className="text-sm text-muted-foreground">
                Complete your appointment booking in just a few minutes with our streamlined process.
              </p>
            </div>

            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-primary/10 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Expert Doctors</h3>
              <p className="text-sm text-muted-foreground">
                Choose from our team of experienced medical professionals across all departments.
              </p>
            </div>

            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-primary/10 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Quality Care</h3>
              <p className="text-sm text-muted-foreground">
                Receive world-class medical care with state-of-the-art facilities and technology.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="text-white font-semibold px-8 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(6,214,160,0.4)] focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-4 group min-w-[200px]"
              style={{
                background: "linear-gradient(135deg, #06D6A0, #04a884)",
                borderRadius: "12px",
                fontSize: "1.1rem",
                fontWeight: 600,
                boxShadow: "0 6px 20px rgba(6, 214, 160, 0.3)",
              }}
            >
              <Link href="/appointment" className="flex items-center gap-3">
                <Calendar className="h-5 w-5 transition-transform group-hover:scale-110 duration-300" />
                Book Appointment Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-semibold px-8 py-4 border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 min-w-[200px]"
              style={{
                borderRadius: "12px",
                fontSize: "1.1rem",
              }}
            >
              <a href="tel:+919876543210" className="flex items-center gap-3">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Call for Emergency
              </a>
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Available 24/7 for emergencies • Same-day appointments available • All major insurance accepted
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
