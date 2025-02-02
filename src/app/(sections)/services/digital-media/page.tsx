import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Share2, BarChart, Globe, Smartphone, PenTool } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Digital Media Services",
  description: "Social media management, digital marketing, and website development services.",
}

export default function DigitalMediaPage() {
  return (
    <>
      {/* Interactive Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-b from-background to-primary/5">
        <div className="container flex min-h-screen flex-col items-center justify-center py-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Transform Your
                  <span className="block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    Digital Presence
                  </span>
                </h1>
                <p className="max-w-[600px] text-lg text-muted-foreground">
                  Comprehensive digital media solutions to help your business thrive in the digital age.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="#services">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-600/20 blur-3xl" />
              <div className="relative aspect-square overflow-hidden rounded-xl border bg-background/50 backdrop-blur">
                <div className="grid h-full grid-cols-2 grid-rows-2 gap-2 p-2">
                  {[
                    { icon: Share2, label: "Social Media" },
                    { icon: Globe, label: "Web Development" },
                    { icon: BarChart, label: "Analytics" },
                    { icon: PenTool, label: "Content Creation" },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 text-center transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <item.icon className="mb-2 h-8 w-8" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container py-12">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Social Media Management */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Share2 className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Social Media Management</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                "Content Strategy Development",
                "Community Management",
                "Campaign Planning & Execution",
                "Analytics & Reporting",
                "Influencer Collaboration",
                "Crisis Management",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border bg-gradient-to-br from-background to-primary/5 p-4 transition-shadow hover:shadow-lg"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Digital Marketing */}
          <div className="relative overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground">
            <div className="relative z-10 grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Digital Marketing Excellence</h2>
                <p>Strategic digital marketing solutions to boost your online presence and drive results.</p>
                <ul className="space-y-2">
                  {[
                    "Search Engine Optimization (SEO)",
                    "Pay-Per-Click Advertising (PPC)",
                    "Email Marketing Campaigns",
                    "Content Marketing Strategy",
                    "Conversion Rate Optimization",
                  ].map((item) => (
                    <li key={item} className="flex items-center">
                      <BarChart className="mr-2 h-4 w-4" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-square">
                <Image src="/placeholder.svg" alt="Digital Marketing" fill className="rounded-lg object-cover" />
              </div>
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,primary)] backdrop-blur-3xl" />
          </div>

          {/* Website Development */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Website Development</h2>
              <p className="text-muted-foreground">
                Custom website solutions that combine stunning design with powerful functionality.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Globe,
                  title: "Custom Development",
                  desc: "Tailored solutions for your unique needs",
                },
                {
                  icon: Smartphone,
                  title: "Responsive Design",
                  desc: "Perfect display on all devices",
                },
                {
                  icon: BarChart,
                  title: "SEO Optimization",
                  desc: "Built for search engine success",
                },
                {
                  icon: PenTool,
                  title: "Content Management",
                  desc: "Easy-to-use content updates",
                },
              ].map((item) => (
                <div key={item.title} className="group relative overflow-hidden rounded-lg border p-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-600/10 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative space-y-2">
                    <item.icon className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container py-12">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-purple-600 p-8 text-center text-white">
          <div className="mx-auto max-w-2xl space-y-4">
            <h2 className="text-2xl font-bold">Ready to Go Digital?</h2>
            <p>Transform your business with our comprehensive digital media services.</p>
            <Button asChild size="lg" variant="secondary" className="mt-4">
              <Link href="/contact">Start Your Digital Journey</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

