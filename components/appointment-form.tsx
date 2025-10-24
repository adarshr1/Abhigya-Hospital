"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ChevronLeft, ChevronRight, Lock, CheckCircle2, CreditCard, Smartphone, Building2, CalendarCheck } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Mock data for departments and doctors
const departmentDoctors = {
  Cardiology: ["Dr. Sarah Johnson", "Dr. Michael Chen", "Dr. Emily Rodriguez"],
  Neurology: ["Dr. James Wilson", "Dr. Lisa Anderson", "Dr. Robert Taylor"],
  Pediatrics: ["Dr. Maria Garcia", "Dr. David Kim", "Dr. Jennifer Lee"],
  Orthopedics: ["Dr. Thomas Brown", "Dr. Amanda White", "Dr. Christopher Davis"],
  Gynecology: ["Dr. Patricia Martinez", "Dr. Susan Thompson", "Dr. Rachel Green"],
  Emergency: ["Dr. John Smith", "Dr. Karen Miller", "Dr. Daniel Moore"],
}

const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"]

type FormData = {
  department: string
  doctor: string
  date: Date | undefined
  time: string
  name: string
  phone: string
  email: string
  age: string
  paymentMethod: string
  cardNumber: string
  cardExpiry: string
  cardCvv: string
  upiId: string
}

type AppointmentFormProps = {
  embedded?: boolean
}

export function AppointmentForm({ embedded = false }: AppointmentFormProps) {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const [formData, setFormData] = useState<FormData>({
    department: "",
    doctor: "",
    date: undefined,
    time: "",
    name: "",
    phone: "",
    email: "",
    age: "",
    paymentMethod: "card",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
    upiId: "",
  })

  const updateFormData = (field: keyof FormData, value: string | Date | undefined) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (currentStep === 1) {
      if (!formData.department) newErrors.department = "Please select a department"
      if (!formData.doctor) newErrors.doctor = "Please select a doctor"
    }

    if (currentStep === 2) {
      if (!formData.date) newErrors.date = "Please select a date"
      if (!formData.time) newErrors.time = "Please select a time"
    }

    if (currentStep === 3) {
      if (!formData.name.trim()) newErrors.name = "Name is required"
      if (!formData.phone.trim()) newErrors.phone = "Phone is required"
      else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
        newErrors.phone = "Please enter a valid 10-digit phone number"
      }
      if (!formData.email.trim()) newErrors.email = "Email is required"
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email"
      }
      if (!formData.age.trim()) newErrors.age = "Age is required"
      else if (isNaN(Number(formData.age)) || Number(formData.age) < 1 || Number(formData.age) > 120) {
        newErrors.age = "Please enter a valid age"
      }
    }

    if (currentStep === 4) {
      if (formData.paymentMethod === "card") {
        if (!formData.cardNumber.trim()) newErrors.cardNumber = "Card number is required"
        else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ""))) {
          newErrors.cardNumber = "Please enter a valid 16-digit card number"
        }
        if (!formData.cardExpiry.trim()) newErrors.cardExpiry = "Expiry date is required"
        else if (!/^\d{2}\/\d{2}$/.test(formData.cardExpiry)) {
          newErrors.cardExpiry = "Format: MM/YY"
        }
        if (!formData.cardCvv.trim()) newErrors.cardCvv = "CVV is required"
        else if (!/^\d{3}$/.test(formData.cardCvv)) {
          newErrors.cardCvv = "CVV must be 3 digits"
        }
      } else if (formData.paymentMethod === "upi") {
        if (!formData.upiId.trim()) newErrors.upiId = "UPI ID is required"
        else if (!/@/.test(formData.upiId)) {
          newErrors.upiId = "Please enter a valid UPI ID"
        }
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 4))
    }
  }

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    if (!validateStep(4)) return

    setIsLoading(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setShowConfirmation(true)
  }

  const handleCloseConfirmation = () => {
    setShowConfirmation(false)
    // Reset form
    setFormData({
      department: "",
      doctor: "",
      date: undefined,
      time: "",
      name: "",
      phone: "",
      email: "",
      age: "",
      paymentMethod: "card",
      cardNumber: "",
      cardExpiry: "",
      cardCvv: "",
      upiId: "",
    })
    setStep(1)
  }

  const availableDoctors = formData.department
    ? departmentDoctors[formData.department as keyof typeof departmentDoctors] || []
    : []

  return (
    <>
      <section className="w-full py-16 md:py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8 md:mb-12">
            {embedded ? (
              <>
                <h2
                  className="text-[1.75rem] font-semibold text-[#0d3b66]"
                  style={{ fontFamily: "Poppins, var(--font-inter), system-ui, sans-serif", fontWeight: 600 }}
                >
                  Book Your Appointment Today
                </h2>
                <p className="mt-2 text-base" style={{ color: "#495057" }}>
                  Complete the form below to schedule your visit
                </p>
              </>
            ) : (
              <>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => document.getElementById("department")?.focus()}
                    className="group relative inline-flex items-center justify-center gap-3 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 min-w-[240px]"
                    style={{
                      background: "linear-gradient(135deg, #06D6A0, #04a884)",
                      borderRadius: "12px",
                      boxShadow: "0 6px 20px rgba(6, 214, 160, 0.3)",
                      fontFamily: "Poppins, var(--font-inter), system-ui, sans-serif",
                      fontWeight: 600,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 8px 25px rgba(6, 214, 160, 0.4)")}
                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 6px 20px rgba(6, 214, 160, 0.3)")}
                  >
                    <CalendarCheck className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    Book an Appointment Now
                  </button>

                  <Link
                    href="/#departments"
                    prefetch={false}
                    className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all duration-300 min-w-[200px] border-2"
                    style={{
                      borderColor: "#06D6A0",
                      color: "#06D6A0",
                      fontFamily: "Poppins, var(--font-inter), system-ui, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Find a Doctor
                  </Link>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">Complete the form below to schedule your visit</p>
              </>
            )}
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex items-center flex-1">
                    <div
                      className={cn(
                        "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-semibold text-sm md:text-base transition-colors",
                        step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                      )}
                    >
                      {s}
                    </div>
                    {s < 4 && (
                      <div className={cn("flex-1 h-1 mx-2 transition-colors", step > s ? "bg-primary" : "bg-muted")} />
                    )}
                  </div>
                ))}
              </div>
              <CardTitle className="text-xl md:text-2xl">
                {step === 1 && "Select Department & Doctor"}
                {step === 2 && "Choose Date & Time"}
                {step === 3 && "Patient Details"}
                {step === 4 && "Payment Information"}
              </CardTitle>
              <CardDescription>
                {step === 1 && "Choose your medical department and preferred doctor"}
                {step === 2 && "Pick a convenient date and time for your appointment"}
                {step === 3 && "Provide your contact and personal information"}
                {step === 4 && "Complete your booking with secure payment"}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Step 1: Department & Doctor */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="department">Department *</Label>
                    <Select
                      value={formData.department}
                      onValueChange={(value) => {
                        updateFormData("department", value)
                        updateFormData("doctor", "") // Reset doctor when department changes
                      }}
                    >
                      <SelectTrigger id="department" className={cn("h-12 focus:border-[#06D6A0] focus:ring-[#06D6A0]/20", errors.department && "border-destructive") }>
                        <SelectValue placeholder="Select a department" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(departmentDoctors).map((dept) => (
                          <SelectItem key={dept} value={dept}>
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.department && <p className="text-sm text-destructive">{errors.department}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="doctor">Doctor *</Label>
                    <Select
                      value={formData.doctor}
                      onValueChange={(value) => updateFormData("doctor", value)}
                      disabled={!formData.department}
                    >
                      <SelectTrigger id="doctor" className={cn("h-12 focus:border-[#06D6A0] focus:ring-[#06D6A0]/20", errors.doctor && "border-destructive") }>
                        <SelectValue placeholder="Select a doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableDoctors.map((doctor) => (
                          <SelectItem key={doctor} value={doctor}>
                            {doctor}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.doctor && <p className="text-sm text-destructive">{errors.doctor}</p>}
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Select Date *</Label>
                    <div className="flex justify-center">
                      <Calendar
                        mode="single"
                        selected={formData.date}
                        onSelect={(date) => updateFormData("date", date)}
                        disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                        className="rounded-md border"
                      />
                    </div>
                    {errors.date && <p className="text-sm text-destructive">{errors.date}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label>Select Time *</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          type="button"
                          variant={formData.time === time ? "default" : "outline"}
                          className="h-12"
                          onClick={() => updateFormData("time", time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                    {errors.time && <p className="text-sm text-destructive">{errors.time}</p>}
                  </div>
                </div>
              )}

              {/* Step 3: Patient Details */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => updateFormData("name", e.target.value)}
                      className={cn("h-12 focus:border-[#06D6A0] focus:ring-[#06D6A0]/20", errors.name && "border-destructive")}
                    />
                    {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter 10-digit phone number"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      className={cn("h-12 focus:border-[#06D6A0] focus:ring-[#06D6A0]/20", errors.phone && "border-destructive")}
                    />
                    {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      className={cn("h-12 focus:border-[#06D6A0] focus:ring-[#06D6A0]/20", errors.email && "border-destructive")}
                    />
                    {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age">Age *</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="Enter your age"
                      value={formData.age}
                      onChange={(e) => updateFormData("age", e.target.value)}
                      className={cn("h-12 focus:border-[#06D6A0] focus:ring-[#06D6A0]/20", errors.age && "border-destructive")}
                    />
                    {errors.age && <p className="text-sm text-destructive">{errors.age}</p>}
                  </div>
                </div>
              )}

              {/* Step 4: Payment */}
              {step === 4 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 p-3 rounded-lg">
                    <Lock className="w-4 h-4" />
                    <span>Your payment information is secure and encrypted</span>
                  </div>

                  <div className="space-y-4">
                    <Label>Payment Method *</Label>
                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={(value) => updateFormData("paymentMethod", value)}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-secondary/50 transition-colors">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                          <CreditCard className="w-5 h-5 text-primary" />
                          <span className="font-medium">Credit / Debit Card</span>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-secondary/50 transition-colors">
                        <RadioGroupItem value="upi" id="upi" />
                        <Label htmlFor="upi" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Smartphone className="w-5 h-5 text-primary" />
                          <span className="font-medium">UPI</span>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-secondary/50 transition-colors">
                        <RadioGroupItem value="netbanking" id="netbanking" />
                        <Label htmlFor="netbanking" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Building2 className="w-5 h-5 text-primary" />
                          <span className="font-medium">Net Banking</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Card Payment Fields */}
                  {formData.paymentMethod === "card" && (
                    <div className="space-y-4 pt-4 border-t">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber" className="flex items-center gap-2">
                          Card Number *
                          <Lock className="w-3 h-3 text-muted-foreground" />
                        </Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={(e) => updateFormData("cardNumber", e.target.value)}
                          className={cn("h-12", errors.cardNumber && "border-destructive")}
                          maxLength={19}
                        />
                        {errors.cardNumber && <p className="text-sm text-destructive">{errors.cardNumber}</p>}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardExpiry" className="flex items-center gap-2">
                            Expiry Date *
                            <Lock className="w-3 h-3 text-muted-foreground" />
                          </Label>
                          <Input
                            id="cardExpiry"
                            placeholder="MM/YY"
                            value={formData.cardExpiry}
                            onChange={(e) => updateFormData("cardExpiry", e.target.value)}
                            className={cn("h-12", errors.cardExpiry && "border-destructive")}
                            maxLength={5}
                          />
                          {errors.cardExpiry && <p className="text-sm text-destructive">{errors.cardExpiry}</p>}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cardCvv" className="flex items-center gap-2">
                            CVV *
                            <Lock className="w-3 h-3 text-muted-foreground" />
                          </Label>
                          <Input
                            id="cardCvv"
                            type="password"
                            placeholder="123"
                            value={formData.cardCvv}
                            onChange={(e) => updateFormData("cardCvv", e.target.value)}
                            className={cn("h-12", errors.cardCvv && "border-destructive")}
                            maxLength={3}
                          />
                          {errors.cardCvv && <p className="text-sm text-destructive">{errors.cardCvv}</p>}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* UPI Payment Fields */}
                  {formData.paymentMethod === "upi" && (
                    <div className="space-y-4 pt-4 border-t">
                      <div className="space-y-2">
                        <Label htmlFor="upiId" className="flex items-center gap-2">
                          UPI ID *
                          <Lock className="w-3 h-3 text-muted-foreground" />
                        </Label>
                        <Input
                          id="upiId"
                          placeholder="yourname@upi"
                          value={formData.upiId}
                          onChange={(e) => updateFormData("upiId", e.target.value)}
                          className={cn("h-12", errors.upiId && "border-destructive")}
                        />
                        {errors.upiId && <p className="text-sm text-destructive">{errors.upiId}</p>}
                      </div>
                    </div>
                  )}

                  {/* Net Banking */}
                  {formData.paymentMethod === "netbanking" && (
                    <div className="space-y-4 pt-4 border-t">
                      <div className="space-y-2">
                        <Label htmlFor="bank">Select Bank *</Label>
                        <Select>
                          <SelectTrigger id="bank" className="h-12">
                            <SelectValue placeholder="Choose your bank" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hdfc">HDFC Bank</SelectItem>
                            <SelectItem value="icici">ICICI Bank</SelectItem>
                            <SelectItem value="sbi">State Bank of India</SelectItem>
                            <SelectItem value="axis">Axis Bank</SelectItem>
                            <SelectItem value="kotak">Kotak Mahindra Bank</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {!embedded && (
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <div className="flex justify-between items-center text-lg font-semibold">
                      <span>Consultation Fee:</span>
                      <span className="text-primary">₹500</span>
                    </div>
                  </div>
                  )}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    className="h-12 flex-1 bg-transparent"
                    disabled={isLoading}
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                )}

                {step < 4 ? (
                  <Button type="button" onClick={handleNext} className="h-12 flex-1">
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button type="button" onClick={handleSubmit} className="h-12 flex-1" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 mr-2" />
                        {embedded ? 'Confirm Appointment' : 'Confirm & Pay ₹500'}
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Confirmation Modal */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
            </div>
            <DialogTitle className="text-center text-2xl">Appointment Confirmed!</DialogTitle>
            <DialogDescription className="text-center">Your appointment has been successfully booked</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="bg-secondary/50 p-4 rounded-lg space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Department:</span>
                <span className="font-semibold">{formData.department}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Doctor:</span>
                <span className="font-semibold">{formData.doctor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date:</span>
                <span className="font-semibold">
                  {formData.date?.toLocaleDateString("en-US", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time:</span>
                <span className="font-semibold">{formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Patient:</span>
                <span className="font-semibold">{formData.name}</span>
              </div>
              <div className="flex justify-between border-t pt-3 mt-3">
                <span className="text-muted-foreground">Amount Paid:</span>
                <span className="font-bold text-primary">₹500</span>
              </div>
            </div>

            <p className="text-sm text-center text-muted-foreground">
              A confirmation email has been sent to {formData.email}
            </p>
          </div>

          <Button onClick={handleCloseConfirmation} className="w-full h-12">
            Done
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
