import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, LineChart, Puzzle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Corporate Solutions",
  description: "Organizational development, custom training modules, and team building solutions.",
}

export default function CorporateSolutionsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Corporate Solutions</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions for organizational excellence and business growth.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardContent className="p-6 space-y-2">
                <Building2 className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">Organizational Development</h3>
                <p className="text-sm text-muted-foreground">Strategic consulting for organizational growth.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">Custom Training</h3>
                <p className="text-sm text-muted-foreground">Tailored training programs for your team.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <LineChart className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">Performance Optimization</h3>
                <p className="text-sm text-muted-foreground">Strategies to enhance team performance.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Puzzle className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">Team Building</h3>
                <p className="text-sm text-muted-foreground">Activities to strengthen team cohesion.</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Solution Benefits</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Improved organizational efficiency</li>
              <li>Enhanced team performance</li>
              <li>Better employee engagement</li>
              <li>Streamlined processes</li>
              <li>Measurable business outcomes</li>
            </ul>
          </div>

          <Button asChild size="lg" className="gradient-bg animate-gradient">
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>

        <div className="space-y-6">
          <Image
            src="/youth-development.jpg"
            alt="Corporate Solutions"
            width={400}
            height={600}
            className="rounded-lg object-cover"
          />
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold">Service Details</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Approach: Customized</p>
                <p>Duration: As needed</p>
                <p>Delivery: On-site & Remote</p>
                <p>Support: Ongoing</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

