import { Users, Building2, Scale, Laptop, ClipboardList, BadgeCheck } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Youth Development Programs",
    description: "Career readiness training, leadership workshops, and personal growth programs.",
    icon: Users,
    href: "/services/youth-development",
    features: ["Career Readiness", "Leadership Training", "Personal Growth", "Communication Skills"],
  },
  {
    title: "Professional Development",
    description: "Management training, technical skills improvement, and certification courses.",
    icon: BadgeCheck,
    href: "/services/professional-development",
    features: ["Management Training", "Technical Skills", "Certification Programs", "Career Advancement"],
  },
  {
    title: "Corporate Solutions",
    description: "Organizational development, custom training modules, and team building.",
    icon: Building2,
    href: "/services/corporate-solutions",
    features: ["Organizational Development", "Custom Training", "Team Building", "Performance Optimization"],
  },
  {
    title: "Auditing Services",
    description: "Financial audits, tax consulting, and risk assessment services.",
    icon: Scale,
    href: "/services/auditing",
    features: ["Financial Audits", "Tax Consulting", "Risk Assessment", "Compliance Review"],
  },
  {
    title: "Digital Media Services",
    description: "Social media management, digital marketing, and website development.",
    icon: Laptop,
    href: "/services/digital-media",
    features: ["Social Media Management", "Digital Marketing", "Web Development", "Content Creation"],
  },
  {
    title: "Research & Survey",
    description: "Market research, data analysis, and consumer insights.",
    icon: ClipboardList,
    href: "/services/research",
    features: ["Market Research", "Data Analysis", "Consumer Insights", "Trend Analysis"],
  },
]

export const metadata = {
  title: "Our Services",
  description: "Comprehensive business solutions and professional services.",
}

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Comprehensive Business Solutions</h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            Explore our range of professional services designed to help your business grow and succeed.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="group relative">
                <div className="absolute -inset-y-2 -inset-x-4 z-0 scale-95 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
                <Link href={service.href} className="relative z-10">
                  <div className="space-y-6 sm:flex sm:space-y-0 sm:space-x-8">
                    <div className="flex-shrink-0">
                      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold">{service.title}</h2>
                      <p className="text-muted-foreground">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center">
          <Button asChild size="lg">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

