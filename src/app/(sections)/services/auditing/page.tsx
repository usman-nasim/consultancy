import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Scale, ShieldCheck, FileCheck, AlertCircle } from 'lucide-react'
import Link from "next/link"

export const metadata = {
  title: "Auditing Services",
  description: "Financial audits, tax consulting, and risk assessment services.",
}

export default function AuditingPage() {
  return (
    <div className="relative">
      {/* Hero Section with Gradient Overlay */}
      <div className="relative h-[40vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />
        <Image
          src="/placeholder.svg"
          alt="Auditing Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
                Auditing Services
              </h1>
              <p className="text-lg text-white/90">
                Comprehensive financial audits, tax consulting, and risk assessment services to ensure your business compliance and success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        {/* Services Grid with Alternating Layout */}
        <div className="space-y-16">
          {/* Financial Audits Section */}
          <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1">
                <Scale className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Financial Audits</span>
              </div>
              <h2 className="text-3xl font-bold">Comprehensive Financial Analysis</h2>
              <p className="text-muted-foreground">
                Our thorough financial audit process ensures accuracy, compliance, and transparency in your financial reporting.
              </p>
              <ul className="grid gap-2">
                {[
                  "Balance Sheet Review",
                  "Income Statement Analysis",
                  "Cash Flow Assessment",
                  "Internal Controls Evaluation"
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <FileCheck className="mr-2 h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <Image
                src="/placeholder.svg"
                alt="Financial Audits"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Tax Consulting Section */}
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex-1">
              <Image
                src="/placeholder.svg"
                alt="Tax Consulting"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1">
                <ShieldCheck className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Tax Consulting</span>
              </div>
              <h2 className="text-3xl font-bold">Strategic Tax Planning</h2>
              <p className="text-muted-foreground">
                Expert tax consulting services to optimize your tax position and ensure compliance with regulations.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Tax Planning", desc: "Strategic approach to minimize tax liability" },
                  { title: "Compliance", desc: "Stay updated with latest tax regulations" },
                  { title: "Returns", desc: "Accurate and timely tax return filing" },
                  { title: "Advisory", desc: "Expert guidance on tax-related decisions" }
                ].map((item) => (
                  <div key={item.title} className="rounded-lg border p-4">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Risk Assessment Section */}
          <div className="rounded-xl bg-muted p-8">
            <div className="mx-auto max-w-3xl space-y-8 text-center">
              <div className="inline-flex items-center rounded-lg bg-background px-3 py-1">
                <AlertCircle className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Risk Assessment</span>
              </div>
              <h2 className="text-3xl font-bold">Proactive Risk Management</h2>
              <p className="text-muted-foreground">
                Identify and mitigate potential risks before they impact your business operations.
              </p>
              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  "Operational Risk Analysis",
                  "Financial Risk Assessment",
                  "Compliance Risk Evaluation",
                  "Market Risk Assessment",
                  "Strategic Risk Analysis",
                  "Reputation Risk Management"
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg bg-background p-4 text-center shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-xl bg-primary p-8 text-center text-primary-foreground">
          <div className="mx-auto max-w-2xl space-y-4">
            <h2 className="text-2xl font-bold">Ready to Ensure Your Financial Success?</h2>
            <p>
              Get expert auditing services tailored to your business needs.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="mt-4"
            >
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
