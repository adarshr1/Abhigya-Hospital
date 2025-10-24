"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Brain, Baby, Bone, Users, AlertCircle } from "lucide-react"

const departments = [
  {
    name: "Cardiology",
    icon: Heart,
    description: "Expert heart care with advanced diagnostics and treatment for cardiovascular conditions.",
  },
  {
    name: "Neurology",
    icon: Brain,
    description: "Specialized care for brain, spine, and nervous system disorders with cutting-edge technology.",
  },
  {
    name: "Pediatrics",
    icon: Baby,
    description: "Comprehensive healthcare for infants, children, and adolescents in a caring environment.",
  },
  {
    name: "Orthopedics",
    icon: Bone,
    description: "Advanced treatment for bone, joint, and muscle conditions with surgical and non-surgical options.",
  },
  {
    name: "Gynecology",
    icon: Users,
    description: "Complete women's health services including preventive care and specialized treatments.",
  },
  {
    name: "Emergency",
    icon: AlertCircle,
    description: "24/7 emergency care with rapid response teams and state-of-the-art trauma facilities.",
  },
]

export function DepartmentsSection() {
  return (
    <section className="w-full py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-14">
          <h2
            className="text-[2rem] font-semibold text-[#0d3b66]"
            style={{ fontFamily: "Poppins, var(--font-inter), system-ui, sans-serif", fontWeight: 600 }}
          >
            Our Specialized Departments
          </h2>
          <p
            className="mt-3 text-base md:text-lg"
            style={{ color: "#495057" }}
          >
            Comprehensive care across a wide range of specialties.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {departments.map((dept) => {
            const Icon = dept.icon
            return (
              <Card
                key={dept.name}
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border bg-card"
              >
                <CardContent className="p-6 md:p-8 flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary stroke-[1.5]" />
                  </div>

                  {/* Department Name */}
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-card-foreground">{dept.name}</h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{dept.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
