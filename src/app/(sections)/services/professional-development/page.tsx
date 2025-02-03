import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BadgeCheck, Briefcase, GraduationCap, Trophy } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Professional Development",
  description: "Management training, technical skills improvement, and certification courses.",
}

export default function ProfessionalDevelopmentPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Professional Development</h1>
            <p className="text-lg text-muted-foreground">
              Enhance your professional skills and advance your career with our comprehensive training programs.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardContent className="p-6 space-y-2">
                <Briefcase className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">Management Training</h3>
                <p className="text-sm text-muted-foreground">Develop essential management and leadership skills.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">Technical Skills</h3>
                <p className="text-sm text-muted-foreground">Stay current with industry-specific technical training.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <BadgeCheck className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">Certification Courses</h3>
                <p className="text-sm text-muted-foreground">Gain recognized certifications in your field.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Trophy className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">Career Advancement</h3>
                <p className="text-sm text-muted-foreground">Strategic guidance for career progression.</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Program Benefits</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Enhanced management and leadership capabilities</li>
              <li>Up-to-date technical knowledge and skills</li>
              <li>Industry-recognized certifications</li>
              <li>Career advancement opportunities</li>
              <li>Professional networking connections</li>
            </ul>
          </div>

          <Button asChild size="lg" className="gradient-bg animate-gradient">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        <div className="space-y-6">
          <Image
            src="/youth-development.jpg"
            alt="Professional Development"
            width={400}
            height={600}
            className="rounded-lg object-cover"
          />
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold">Program Details</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Duration: Flexible</p>
                <p>Format: Hybrid Learning</p>
                <p>Certifications: Industry-specific</p>
                <p>Customization: Available</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

