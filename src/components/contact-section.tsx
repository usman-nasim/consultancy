"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { submitContactForm, type ContactFormState } from "@/app/actions"
import { useFormState } from "react-dom"
import { motion } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ContactFormSchema, type ContactFormType } from "@/lib/email"

const services = [
  "Youth Development Programs",
  "Professional Development",
  "Corporate Solutions",
  "Auditing Services",
  "Digital Media Services",
  "Research & Survey",
]

const initialState: ContactFormState = {
  message: "",
  error: "",
}

const MotionDiv = motion.div

export default function ContactSection() {
  const [state, formAction] = useFormState(submitContactForm, initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ContactFormType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      service: undefined,
    },
  })

  async function onSubmit(data: ContactFormType) {
    setIsSubmitting(true)
    try {
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value)
      })
      await formAction(formData)
      if (!state?.error) {
        form.reset()
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="book-consultation" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-50 to-white dark:from-purple-950/20 dark:to-background" />
      <div className="container px-4 md:px-6 relative">
        <MotionDiv
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">
              Book Your Free Consultation
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Take the first step towards transforming your business
            </p>
          </div>
        </MotionDiv>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 mt-8">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Get in touch with us</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>DHA Phase 2 House # W38</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>0315-2218347</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>info.burhanmasterminds@gmail.com</span>
                </div>
              </CardContent>
            </Card>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>We'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input type="email" placeholder="Your Email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input type="tel" placeholder="Phone Number (Optional)" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service (Optional)" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea placeholder="Your Message" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full gradient-bg animate-gradient" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    {state?.message && <p className="text-sm text-green-600 dark:text-green-400">{state.message}</p>}
                    {state?.error && <p className="text-sm text-red-600 dark:text-red-400">{state.error}</p>}
                  </form>
                </Form>
              </CardContent>
            </Card>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}

