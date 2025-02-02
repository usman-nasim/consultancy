"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Building2, Scale, Laptop, ClipboardList, BadgeCheck } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const services = [
  {
    title: "Youth Development Programs",
    description: "Career training, leadership workshops, and personal growth programs.",
    icon: Users,
    href: "/services/youth-development",
  },
  {
    title: "Professional Development",
    description: "Management training, technical skills improvement, and certification courses.",
    icon: BadgeCheck,
    href: "/services/professional-development",
  },
  {
    title: "Corporate Solutions",
    description: "Organizational development, custom training modules, and team building.",
    icon: Building2,
    href: "/services/corporate-solutions",
  },
  {
    title: "Auditing Services",
    description: "Financial audits, tax consulting, and risk assessment services.",
    icon: Scale,
    href: "/services/auditing",
  },
  {
    title: "Digital Media Services",
    description: "Social media management, digital marketing, and website development.",
    icon: Laptop,
    href: "/services/digital-media",
  },
  {
    title: "Research & Survey",
    description: "Market research, data analysis, and consumer insights.",
    icon: ClipboardList,
    href: "/services/research",
  },
]

const MotionDiv = motion.div

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/20 dark:to-background" />
      <div className="container px-4 md:px-6 relative">
        <MotionDiv
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">Our Services</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Comprehensive solutions for your business needs
            </p>
          </div>
        </MotionDiv>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link key={service.title} href={service.href}>
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
                    <div className="absolute inset-0 gradient-bg animate-gradient opacity-0 transition-opacity group-hover:opacity-5" />
                    <CardHeader>
                      <Icon className="h-10 w-10 mb-2 text-primary" />
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <span className="text-sm font-medium text-primary">Learn more →</span>
                    </CardContent>
                  </Card>
                </MotionDiv>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

