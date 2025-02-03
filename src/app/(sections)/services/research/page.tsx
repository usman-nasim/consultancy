import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ClipboardList, Search, LineChart, PieChart, BarChart3, Target } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Research & Survey Services",
  description: "Market research, data analysis, and consumer insights services.",
}

export default function ResearchPage() {
  return (
    <div className="relative">
      {/* Floating Navigation */}
      <div className="sticky top-20 z-10 border-b bg-background/80 backdrop-blur">
        <div className="container flex gap-4 overflow-x-auto py-4">
          {["Overview", "Market Research", "Data Analysis", "Consumer Insights"].map((item) => (
            <Button key={item} variant="ghost" size="sm" asChild>
              <Link href={`#${item.toLowerCase().replace(" ", "-")}`}>{item}</Link>
            </Button>
          ))}
        </div>
      </div>

      {/* Overview Section */}
      <section id="overview" className="border-b">
        <div className="container grid gap-8 py-12 lg:grid-cols-2 lg:py-24">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Research & Survey Services</h1>
            <p className="text-lg text-muted-foreground">
              Unlock valuable insights with our comprehensive research and survey solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Market Analysis", "Consumer Behavior", "Competitive Research", "Data-Driven Insights"].map((tag) => (
                <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-auto">
            <Image src="/youth-development.jpg" alt="Research Services" fill className="rounded-lg object-cover" />
          </div>
        </div>
      </section>

      {/* Market Research Section */}
      <section id="market-research" className="border-b bg-muted/50">
        <div className="container py-12 lg:py-24">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="text-center">
              <Search className="mx-auto h-12 w-12 text-primary" />
              <h2 className="mt-4 text-3xl font-bold">Market Research</h2>
              <p className="mt-2 text-muted-foreground">
                Comprehensive market analysis to inform your business decisions.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Industry Analysis",
                  desc: "Deep dive into market trends and industry dynamics",
                  icon: LineChart,
                },
                {
                  title: "Competitor Research",
                  desc: "Detailed analysis of competitive landscape",
                  icon: Target,
                },
                {
                  title: "Market Sizing",
                  desc: "Accurate assessment of market opportunities",
                  icon: PieChart,
                },
                {
                  title: "Trend Analysis",
                  desc: "Identification of emerging market trends",
                  icon: BarChart3,
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-lg border bg-background p-6">
                  <item.icon className="h-8 w-8 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Analysis Section */}
      <section id="data-analysis" className="border-b">
        <div className="container py-12 lg:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold">Data Analysis</h2>
                <p className="mt-2 text-muted-foreground">
                  Transform raw data into actionable insights with our advanced analytics capabilities.
                </p>
              </div>
              <div className="grid gap-4 text-sm">
                {["Statistical Analysis", "Predictive Modeling", "Data Visualization", "Report Generation"].map(
                  (item) => (
                    <div key={item} className="flex items-center rounded-lg border bg-muted/50 px-4 py-2">
                      <ClipboardList className="mr-2 h-4 w-4 text-primary" />
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="aspect-video overflow-hidden rounded-xl border bg-muted/50">
              <div className="grid h-full place-items-center">
                <p className="text-muted-foreground">Data Visualization Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consumer Insights Section */}
      <section id="consumer-insights" className="border-b bg-primary text-primary-foreground">
        <div className="container py-12 lg:py-24">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Consumer Insights</h2>
              <p className="mt-2 text-primary-foreground/80">
                Understanding your customers better through data-driven research.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                {
                  title: "Survey Design",
                  items: ["Questionnaire Development", "Sample Selection", "Distribution Strategy"],
                },
                {
                  title: "Data Collection",
                  items: ["Online Surveys", "Focus Groups", "In-depth Interviews"],
                },
                {
                  title: "Analysis & Reporting",
                  items: ["Statistical Analysis", "Insight Generation", "Recommendation Development"],
                },
              ].map((column) => (
                <div key={column.title} className="space-y-4">
                  <h3 className="text-lg font-semibold">{column.title}</h3>
                  <ul className="space-y-2">
                    {column.items.map((item) => (
                      <li key={item} className="text-primary-foreground/80">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12">
        <div className="mx-auto max-w-2xl rounded-xl bg-muted p-8 text-center">
          <h2 className="text-2xl font-bold">Ready to Gain Valuable Insights?</h2>
          <p className="mt-2 text-muted-foreground">Let us help you make data-driven decisions for your business.</p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/contact">Start Your Research Project</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

